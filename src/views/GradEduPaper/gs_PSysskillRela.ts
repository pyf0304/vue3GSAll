import $ from 'jquery';
import { Public_SysSkill } from '../GradEduPublicPage/Public_SysSkill';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { SysSkillCRUD } from '@/viewsBase/GradEduTopic/SysSkillCRUD';
import { clsgs_OriginalPaperLogEN } from '@/ts/L0Entity/GradEduPaper/clsgs_OriginalPaperLogEN';
import { clsgs_PSkillRelaEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PSkillRelaEN';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import {
  gs_OriginalPaperLog_AddNewRecordAsync,
  gs_OriginalPaperLog_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_OriginalPaperLogWApi';
import {
  gs_PSkillRela_AddNewRecordAsync,
  gs_PSkillRela_GetRecCountByCondAsync,
  gs_PSkillRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduPaper/clsgs_PSkillRelaWApi';
import { SysSkill_UpdateRecordAsync } from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import {
  vSysSkill_GetObjLstByPagerAsync,
  vSysSkill_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsvSysSkillWApi';
import { SysOperationType_BindDdl_OperationTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysOperationTypeWApi';
import { GetCurrPageIndex } from '@/ts/PubFun/clsOperateList';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { stuPagerPara } from '@/ts/PubFun/stuPagerPara';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { enumDivType } from '@/ts/PubFun/enumDivType';
import { GetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';
import { clsvPaperSubViewpointEN } from '@/ts/L0Entity/GradEduPaper/clsvPaperSubViewpointEN';
import { vPaperSubViewpoint_GetObjLstByPagerAsync } from '@/ts/L3ForWApi/GradEduPaper/clsvPaperSubViewpointWApi';

declare function HideDialogNine(): void; //技能选择
declare function RefreshWindow(): void;
declare let window: any;

/* SysSkillCRUDEx 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCSEx_TS4TypeScript:GeneCode)
*/
export class gs_PSysskillRela extends SysSkillCRUD {
  //public static mstrListDiv: string = "divDataLst";
  //public static mstrSortvSysSkillBy: string = "skillId";
  //技能列表
  public mstrListDivPaper = 'divSysSkillDataLst';

  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 10;
  }
  public recCount = 0;

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
*/
  public async PageLoad() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // 在此处放置用户代码以初始化页面
    try {
      if (userStore.getUserId != '') {
        //建立缓存

        // 为查询区绑定下拉框
        await this.BindDdl4QueryRegion();

        this.hidSortvSysSkillBy = 'skillName Asc';
        if (this.bolIsInitShow == false) {
          //
          this.objPager.InitShow(objLayOut, this.divName4Pager);
          this.bolIsInitShow = true; //
        }
        //2、显示无条件的表内容在GridView中
        await this.BindGv_vSysSkill();
        HideDivInDivObj(objLayOut, 'divLoading');
      } else {
        reLogin();
      }
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 函数功能:为查询区绑定下拉框
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Js_BindDdl4QueryRegion)
   */
  public async BindDdl4QueryRegion() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    // 在此处放置用户代码以初始化页面

    await SysOperationType_BindDdl_OperationTypeIdInDivCache(divName, 'ddlOperationTypeId_q'); //查询区域
  }
  /* 把所有的查询控件内容组合成一个条件串
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
<returns>条件串(strWhereCond)</returns>
*/
  public async CombinevSysSkillCondition(): Promise<string> {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return '';
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ` 1 = 1 and idCurrEduCls='${clsPubLocalStorage.idCurrEduCls}'`;

    const strPaperId = GetHidPaperId(divName);
    const strUserId = userStore.getUserId;
    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      //只能查询提交的技能数据
      strWhereCond += ` And ${clsvSysSkillEN.con_IsSubmit} = 'true'`;

      const strPageType = GetInputValueInDivObj(divName, 'hidPageType');
      if (strPageType == 'gs_TDR') {
        if (GetInputValueInDivObj(divName, 'txtViewpointName_q') != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_SkillName} like '%${$(
            '#txtViewpointName_q',
          ).val()}%'`;
        }
        if (GetInputValueInDivObj(divName, 'txtViewUpdName_q') != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${$(
            '#txtViewUpdName_q',
          ).val()}%'`;
        }

        //strWhereCond += ` And skillId not in (select skillId from RTSysSkillRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      } else {
        if (this.skillName_q != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_SkillName} like '%${this.skillName_q}%'`;
        }
        if (this.operationTypeId_q != '' && this.operationTypeId_q != '0') {
          strWhereCond += ` And ${clsvSysSkillEN.con_OperationTypeId} = '${this.operationTypeId_q}'`;
        }
        if (this.updUser_q != '') {
          strWhereCond += ` And ${clsvSysSkillEN.con_UpdUser} like '%${this.updUser_q}%'`;
        }
        //排除获取已存在的关系数据 根据当前用户；
        strWhereCond += ` And skillId not in (select skillId from gs_PSkillRela where paperId = '${strPaperId}' And updUser = '${strUserId}')`;
      }
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombineSysSkillCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }
  /* 根据条件获取相应的对象列表
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindGv)
*/
  public async BindGv_vSysSkill() {
    const objLayOut = this.getDivName(enumDivType.LayOut_01);
    if (objLayOut == null) return;
    // const strListDiv: string = this.mstrListDivPaper;
    const strWhereCond = await this.CombinevSysSkillCondition();
    const intCurrPageIndex = GetCurrPageIndex(this.objPager.currPageIndex); //获取当前页
    let arrvSysSkillObjLst: Array<clsvPaperSubViewpointEN> = [];
    try {
      this.recCount = await vSysSkill_GetRecCountByCondAsync(strWhereCond);
      const objPagerPara: stuPagerPara = {
        pageIndex: intCurrPageIndex,
        pageSize: this.pageSize,
        whereCond: strWhereCond,
        orderBy: this.hidSortvSysSkillBy,
        sortFun: (x, y) => {
          x = x;
          y = y;
          return 0;
        },
      };
      arrvSysSkillObjLst = await vPaperSubViewpoint_GetObjLstByPagerAsync(objPagerPara);
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定GridView不成功,${e}.`;
      alert(strMsg);
    }

    try {
      const strHtml = await Public_SysSkill.BindList_vSysSkill('02', arrvSysSkillObjLst);
      //拼接；
      $('#divSysSkillDataLst').html(strHtml);

      if (arrvSysSkillObjLst.length > 10) {
        //$("#divPager2").show();
        this.objPager.recCount = this.recCount;
        this.objPager.pageSize = this.pageSize;
        this.objPager.ShowPagerV2(objLayOut, this, this.divName4Pager);
      }

      console.log('完成BindGv_vSysSkill!');
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `绑定对象列表不成功.Error Massage:${e}.`;
      alert(strMsg);
    }
  }

  //添加技能
  public async btnAddSysskillInTab_Click() {
    // 为查询区绑定下拉框
    await this.BindDdl4QueryRegion();
    await this.BindGv_vSysSkill();
  }
  //确定选择的观点 并添加到关系表中
  public btnOkSysskillInTab_Click(strkeyId: string) {
    //存放Id
    $('#hidSkillId').val(strkeyId);
    //执行添加关系方法
    this.AddNewRecordSave();
  }
  //查询技能
  public async btnQuerySysskill_Click() {
    await this.BindGv_vSysSkill();
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjgs_PSkillRelaEN">数据传输的目的类对象</param>
*/
  public PutDataTogs_PSkillRelaClass(pobjgs_PSkillRelaEN: clsgs_PSkillRelaEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strPaperId = GetHidPaperId(divName);
    const strUserId = userStore.getUserId;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    pobjgs_PSkillRelaEN.SetPaperId(strPaperId); // 主题编号
    pobjgs_PSkillRelaEN.SetSectionId(GetSelectValueInDivObj(divName, 'ddlSectionId4')); // 论文章节id
    pobjgs_PSkillRelaEN.SetSkillId(strSkillId); // 技能Id
    pobjgs_PSkillRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjgs_PSkillRelaEN.SetUpdUser(strUserId);
    pobjgs_PSkillRelaEN.SetMemo(this.memo); // 备注
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSave() {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strThisFuncName = this.AddNewRecordSave.name;
    this.DivName = 'divAddNewRecordSave';
    const strPaperId = GetHidPaperId(divName);
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    // const strUserId = userStore.getUserId;
    const objgs_PSkillRelaEN: clsgs_PSkillRelaEN = new clsgs_PSkillRelaEN();
    this.PutDataTogs_PSkillRelaClass(objgs_PSkillRelaEN);
    try {
      //同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And skillId = '${strSkillId}'`;
      const bolIsExist = await gs_PSkillRela_IsExistRecordAsync(strWhere);

      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个技能！`;
        alert(strMsg);
        return bolIsExist; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await gs_PSkillRela_AddNewRecordAsync(objgs_PSkillRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //查询 论文、日志类型是否存在；
          const strWhere = ` 1 = 1 And paperId = '${strPaperId}' And logTypeId = '${strPaperLogTypeId}'`;
          const bolIsExist = await gs_OriginalPaperLog_IsExistRecordAsync(strWhere);

          if (bolIsExist == true) {
            return bolIsExist; //一定要有一个返回值，否则会出错！
          } else {
            //添加论文日志；
            await this.Addgs_OriginalPaperLogSave();
          }

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and skillId=${strSkillId}`;
          const intCitationCount = await gs_PSkillRela_GetRecCountByCondAsync(strWhereCond2);

          const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
          objSysSkillEN.SetSkillId(strSkillId);
          objSysSkillEN.SetCitationCount(intCitationCount);

          objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
          if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
            throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
          }

          await SysSkill_UpdateRecordAsync(objSysSkillEN).then((jsonData) => {
            const returnBool: boolean = jsonData;
            if (returnBool == false) {
              const strInfo = `操作不成功!`;
              alert(strInfo);
              console.log('操作不成功');
            }
          });

          //显示信息框
          alert(strInfo);
          HideDialogNine();
          RefreshWindow();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return bolIsExist; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }
  //添加论文流程日志
  public async Addgs_OriginalPaperLogSave() {
    const objgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN = new clsgs_OriginalPaperLogEN();
    this.PutDataTogs_OriginalPaperLog(objgs_OriginalPaperLogEN);

    try {
      const responseText2 = await gs_OriginalPaperLog_AddNewRecordAsync(objgs_OriginalPaperLogEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        console.log('添加新建论文日志成功');
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加日志记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }
  public async PutDataTogs_OriginalPaperLog(pobjgs_OriginalPaperLogEN: clsgs_OriginalPaperLogEN) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    const strPaperId = GetHidPaperId(divName);
    const strPaperLogTypeId = GetInputValueInDivObj(divName, 'hidPaperLogTypeId'); //流程日志参数
    //strIdCurrEduclsstrPaperLogTypeId = GetInputValueInDivObj(divName, 'PaperLogTypeId');
    //通过区分 是小组讨论还是同伴建议
    // const logTypeId = GetInputValueInDivObj(divName, 'hidCommentTypeId');
    pobjgs_OriginalPaperLogEN.SetPaperId(strPaperId);
    pobjgs_OriginalPaperLogEN.SetLogTypeId(strPaperLogTypeId);
    pobjgs_OriginalPaperLogEN.SetLogDescription('添加子观点');
    // $('#PaperLogTypeId').val("03");
    //switch (strPaperLogTypeId) {
    //    case "01":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "添加子观点";
    //        break;
    //    case "02":
    //        pobjgs_OriginalPaperLogEN.SetLogDescription( "同伴建议";
    //        break;

    //    default:
    //        const strMsg = `没有数据处理！`;
    //        alert(strMsg);
    //        break;
    //}
    //pobjgs_OriginalPaperLogEN.SetLogDescription( "新建论文";
    pobjgs_OriginalPaperLogEN.SetUpdUser(userStore.getUserId);
    pobjgs_OriginalPaperLogEN.SetUpdDate(clsPubFun4Web.getNowDate());
  }

  /*
   * 设置取消按钮的标题
   */
  public set btnCancel(value: string) {
    $('#btnCancel').html(value);
  }
  /*
   * 设置确定按钮的标题
   */
  public set btnOKUpd(value: string) {
    $('#btnOKUpd').html(value);
  }
  /*
   * 获取按钮的标题
   */
  public get btnOKUpd(): string {
    return $('#btnOKUpd').html();
  }
  /*
   * 引用Id
   */
  public set citationId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    if (divName == null) return;
    SetInputValueInDivObj(divName, 'txtCitationId', value);
  }
  /*
   * 引用Id
   */
  public get citationId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtCitationId');
  }
  /*
   * 设置当前页序号
   */
  public set CurrPageIndex(value: number) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidCurrPageIndex', value);
  }
  /*
   * 获取当前页序号
   */
  public get CurrPageIndex(): number {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObjN(divName, 'hidCurrPageIndex');
  }
  /*
   * 添加、修改用的层名
   */
  public set DivName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidDivName', value);
  }
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvSysSkillBy(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidSortvSysSkillBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvSysSkillBy(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidSortvSysSkillBy');
  }
  /*
   * 用户Id
   */
  public get hidUserId(): string {
    return userStore.getUserId;
  }
  /*
   * 是否提交
   */
  public set isSubmit(value: boolean) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'chkIsSubmit', value.toString());
  }
  /*
   * 是否提交
   */
  public get isSubmit(): boolean {
    return $('#chkIsSubmit').prop('checked');
  }
  /*
   * 设置关键字的值
   */
  public set keyId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidKeyId', value);
  }
  /*
   * 设置关键字的值
   */
  public get keyId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidKeyId');
  }
  /*
   * 级别Id
   */
  public set levelId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlLevelId', value);
  }
  /*
   * 级别Id
   */
  public get levelId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlLevelId');
  }
  /*
   * 备注
   */
  public set memo(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtMemo', value);
  }
  /*
   * 备注
   */
  public get memo(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtMemo');
  }
  /*
   * 操作类型ID
   */
  public set operationTypeId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetSelectValueByIdInDivObj(divName, 'ddlOperationTypeId', value);
  }
  /*
   * 操作类型ID
   */
  public get operationTypeId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlOperationTypeId');
  }
  /*
   * 操作类型ID
   */
  public get operationTypeId_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetSelectValueInDivObj(divName, 'ddlOperationTypeId_q');
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public set opType(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'hidOpType', value);
  }
  /*
   * 设置操作类型：Add||Update||Detail
   */
  public get opType(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'hidOpType');
  }
  /*
   * 实施过程
   */
  public set process(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtProcess', value);
  }
  /*
   * 实施过程
   */
  public get process(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtProcess');
  }
  /*
   * 技能Id
   */
  public set skillId(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtSkillId', value);
  }
  /*
   * 技能Id
   */
  public get skillId(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtSkillId');
  }
  /*
   * 技能名称
   */
  public set skillName(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtSkillName', value);
  }
  /*
   * 技能名称
   */
  public get skillName(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtSkillName');
  }
  /*
   * 技能名称
   */
  public get skillName_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtSkillName_q');
  }
  /*
   * 修改日期
   */
  public set updDate(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdDate', value);
  }
  /*
   * 修改日期
   */
  public get updDate(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdDate');
  }
  /*
   * 修改人
   */
  public set updUser(value: string) {
    const divName = this.getDivName(enumDivType.LayOut_01);
    SetInputValueInDivObj(divName, 'txtUpdUser', value);
  }
  /*
   * 修改人
   */
  public get updUser(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser');
  }
  /*
   * 修改人
   */
  public get updUser_q(): string {
    const divName = this.getDivName(enumDivType.LayOut_01);
    return GetInputValueInDivObj(divName, 'txtUpdUser_q');
  }
}
