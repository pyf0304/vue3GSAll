import $ from 'jquery';
import { Pub_PaperList } from './Pub_PaperList';
import { clsDropDownList } from '@/ts/FunClass/clsDropDownList';
import { clsPubFun4Web, reLogin } from '@/ts/FunClass/clsPubFun4Web';
import { gs_UserConfigEx_GetNewReturnShareIdEx } from '@/ts/L3ForWApiEx/ExamMan/clsgs_UserConfigExWApi';
import { gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis } from '@/ts/L3ForWApiExShare/GradEduTools/clsgs_TotalDataStatisticsExWApi';
import { SysSkill_Edit } from '@/viewsBase/GradEduTopic/SysSkill_Edit';
import { SysSkillCRUD } from '@/viewsBase/GradEduTopic/SysSkillCRUD';
import { clsSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillEN';

import { clsPaperEN } from '@/ts/L0Entity/GradEduPaper/clsPaperEN';
import { clsRTSysSkillRelaEN } from '@/ts/L0Entity/GradEduTopic/clsRTSysSkillRelaEN';
import { clsSysSkillVerEN } from '@/ts/L0Entity/GradEduTopic/clsSysSkillVerEN';
import { clsvSysSkillEN } from '@/ts/L0Entity/GradEduTopic/clsvSysSkillEN';
import { clsLiteratureTypeEN } from '@/ts/L0Entity/RT_Params/clsLiteratureTypeEN';
import { ResearchTopic_GetFirstObjAsync } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
import {
  RTSysSkillRela_AddNewRecordAsync,
  RTSysSkillRela_GetRecCountByCondAsync,
  RTSysSkillRela_IsExistRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsRTSysSkillRelaWApi';
import {
  SysSkillVer_AddNewRecordAsync,
  SysSkillVer_GetRecCountByCondAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillVerWApi';
import {
  SysSkill_AddNewRecordWithReturnKeyAsync,
  SysSkill_GetMaxStrIdAsync,
  SysSkill_GetObjBySkillIdAsync,
  SysSkill_UpdateRecordAsync,
} from '@/ts/L3ForWApi/GradEduTopic/clsSysSkillWApi';
import { gs_Share_BindDdl_ShareIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsgs_ShareWApi';
import { LiteratureType_GetObjLstAsync } from '@/ts/L3ForWApi/RT_Params/clsLiteratureTypeWApi';
import { SysOperationType_BindDdl_OperationTypeIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysOperationTypeWApi';
import { SysSecurityLevel_BindDdl_LevelIdInDivCache } from '@/ts/L3ForWApi/RT_Params/clsSysSecurityLevelWApi';
import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
import { BindDdl_ObjLst } from '@/ts/PubFun/clsCommFunc4Web';
import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
import { Format } from '@/ts/PubFun/clsString';
import { AccessSubmitClickDefault } from '@/ts/PubFun/clsErrMsgBLEx';
import {
  GetInputValueInDivObj,
  GetInputValueInDivObjN,
  GetSelectValueInDivObj,
  HideDivInDivObj,
  SetInputValueInDivObj,
  SetSelectValueByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { SetHidPaperId } from '@/ts/PubConfig/clsHiddenValueProp';
import { userStore } from '@/store/modulesShare/user';

declare function HideDialogThree(): void;
declare function CloseWindow(): void;
declare let window: any;
/* SysSkillCRUD 的摘要说明。其中Q代表查询,U代表修改
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:GeneCode)
*/
export class AddSysskillEx extends SysSkill_Edit {
  //论文列表
  public mstrListDivPaper = 'divPaperDataLst';
  public static stridCurrEduCls_Cache = '00000001';
  public mstrListDiv = 'divDataLst';
  public bolIsLoadEditRegion = false; //记录是否导入编辑区的变量
  public divName4Edit = 'divEdit'; //记录是否导入编辑区的变量
  //public objPager: clsPager = new clsPager();
  /*
   * 每页记录数，在扩展类可以修改
   */
  public get pageSize(): number {
    return 5;
  }
  public recCount = 0;

  /* 函数功能:页面导入,当页面开始运行时所发生的事件
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PageLoad)
   */
  public async PageLoad() {
    const strThisFuncName = this.PageLoad.name;
    // 在此处放置用户代码以初始化页面
    try {
      //通过主题Id获取教学班ID
      if (clsPubLocalStorage.idCurrEduCls == '') {
        const objResearchTopic = await ResearchTopic_GetFirstObjAsync(
          ` topicId=${clsPrivateSessionStorage.topicIdInTree}`,
        );
        if (objResearchTopic == null) {
          const strMsg = Format(
            '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
            this.constructor.name,
            strThisFuncName,
          );
          console.error(strMsg);
          alert(strMsg);
          return;
          ////const strThisFuncName = this.PageLoad.name;
        }
        clsPubLocalStorage.idCurrEduCls = objResearchTopic.idCurrEduCls;
      }

      //建立缓存
      const divName = this.getDivName();
      if (divName == null) return;
      await gs_Share_BindDdl_ShareIdInDivCache(divName, 'ddlShareId');

      const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
      if (strSkillId != '') {
        await this.BindDdl4EditRegion();
        await this.UpdateRecord(strSkillId);
        HideDivInDivObj(divName, 'divLoading');
      } else {
        ////2、显示无条件的表内容在GridView中
        //await this.BindGv_vSysSkill();
        HideDivInDivObj(divName, 'divLoading');
        this.btnAddNewRecord_Click();
        //获取分享Id
        const responseText = await gs_UserConfigEx_GetNewReturnShareIdEx('09', userStore.getUserId);
        const strShareId: string = responseText;
        //const returnBool: boolean = !!responseText2;
        if (strShareId != '') {
          this.shareId = strShareId;
        }
      }

      const strPaperId = GetInputValueInDivObj(divName, 'hidRequestPaperId');
      if (strPaperId != '') {
        $('#SelectPaper').hide();
        //存放Id
        $('#txtCitationId').val(strPaperId);
      } else {
        $('#SelectPaper').show();
      }

      //// 为查询区绑定下拉框
      //await this.BindDdl4QueryRegion();
      SysSkillCRUD.sortvSysSkillBy = 'skillName Asc';
    } catch (e: any) {
      const strMsg = `页面启动不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 添加新记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnAddNewRecord_Click)
*/
  public async btnAddNewRecord_Click() {
    this.opType = 'AddWithMaxId';
    try {
      // 为编辑区绑定下拉框
      await this.BindDdl4EditRegion();
      // ShowDialog('Add');
      this.bolIsLoadEditRegion = true; //
      this.AddNewRecord();
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加新记录初始化不成功,${e}.`;
      alert(strMsg);
    }
  }
  /* 修改记录
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnUpdateRecord_Click)
*/
  public async btnUpdateRecord_Click(strKeyId: string) {
    this.opType = 'Update';

    if (strKeyId == '') {
      alert('请选择需要修改的记录！');
      return;
    }

    // 为编辑区绑定下拉框
    await this.BindDdl4EditRegion();
    // ShowDialog('Update');
    this.bolIsLoadEditRegion = true; //
    this.UpdateRecord(strKeyId);
  }
  /* 函数功能:把类对象的属性内容显示到界面上
注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
 如果在设置数据库时,就应该一级字段在前,二级字段在后
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_GetDataFromClass)
 <param name = "pobjSysSkillEN">表实体类对象</param>
*/
  public async GetDataFromSysSkillClass(pobjSysSkillEN: clsSysSkillEN) {
    this.skillId = pobjSysSkillEN.skillId; // 技能Id
    this.skillName = pobjSysSkillEN.skillName; // 技能名称
    this.operationTypeId = pobjSysSkillEN.operationTypeId; // 操作类型
    this.levelId = pobjSysSkillEN.levelId; // 级别Id
    this.process = pobjSysSkillEN.process; // 实施过程
    //this.updUser = pobjSysSkillEN.updUser;// 修改人
    //this.updDate = pobjSysSkillEN.updDate;// 修改日期
    this.isSubmit = pobjSysSkillEN.isSubmit; // 是否提交
    this.citationId = pobjSysSkillEN.citationId; // 引用Id
    this.shareId = pobjSysSkillEN.shareId;
    this.memo = pobjSysSkillEN.memo; // 备注
  }

  /* 根据关键字获取相应的记录的对象
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecord)
     <param name = "sender">参数列表</param>
   */
  public async UpdateRecord(strSkillId: string): Promise<boolean> {
    this.btnSubmitSysSkill = '确认修改';
    this.btnCancelSysSkill = '取消修改';
    this.keyId = strSkillId;
    try {
      const responseText = await SysSkill_GetObjBySkillIdAsync(strSkillId);
      const objSysSkillEN: clsSysSkillEN = <clsSysSkillEN>responseText;
      this.GetDataFromSysSkillClass(objSysSkillEN);
      console.log('完成UpdateRecord!');
      return true;
    } catch (e: any) {
      console.error(e);
      const strMsg = `根据关键字获取相应的记录的对象不成功,${e}.`;
      alert(strMsg);
    }
    return true;
  }

  /* 修改记录
     (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_UpdateRecordSave)
   */
  public async UpdateRecordSave() {
    const strThisFuncName = this.UpdateRecordSave.name;

    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetSkillId(this.keyId);
    $('#hidSkillId').val(this.keyId);
    this.PutDataToSysSkillClass(objSysSkillEN);
    objSysSkillEN.sfUpdFldSetStr = objSysSkillEN.updFldString; //设置哪些字段被修改(脏字段)
    if (objSysSkillEN.skillId == '' || objSysSkillEN.skillId == undefined) {
      throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
    }
    try {
      const responseText = await SysSkill_UpdateRecordAsync(objSysSkillEN);
      const returnBool = !!responseText;

      return returnBool;
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `修改记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
  }

  /* 函数功能:为编辑区绑定下拉框
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_BindDdl4EditRegion)
*/
  public async BindDdl4EditRegion() {
    // 在此处放置用户代码以初始化页面
    const divName = this.getDivName();
    if (divName == null) return;
    await SysOperationType_BindDdl_OperationTypeIdInDivCache(divName, 'ddlOperationTypeId'); //编辑区域

    await SysSecurityLevel_BindDdl_LevelIdInDivCache(divName, 'ddlLevelId'); //编辑区域

    //论文

    await clsDropDownList.BindDdl_UsersInvPaper_Cache('ddlUserId_q'); //用户查询区域
    //文献类型；
    await this.BindDdl_LiteratureTypeId('ddlLiteratureTypeId_q');
  }
  /// <summary>
  /// 为下拉框获取数据,从表:[Paper]中获取
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_DdlBind)
  /// </summary>
  /// <returns>获取主键字段、名称字段两列的所有记录记录的dataTable</returns>
  public async BindDdl_LiteratureTypeId(ddlLiteratureTypeId: string, strWhereCond = '1 =1') {
    //strWhereCond = " 1 =1 ";
    const objDdl = document.getElementById(ddlLiteratureTypeId);
    if (objDdl == null) {
      const strMsg = `下拉框：${ddlLiteratureTypeId} 不存在！`;
      alert(strMsg);
      throw strMsg;
    }

    try {
      const arrPaperObjLst = await LiteratureType_GetObjLstAsync(strWhereCond);
      BindDdl_ObjLst(
        ddlLiteratureTypeId,
        arrPaperObjLst,
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
  /* 为插入记录做准备工作
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecord)
*/
  public async AddNewRecord() {
    this.SetKeyReadOnly(false);
    this.btnSubmitSysSkill = '确认添加';
    this.btnCancelSysSkill = '取消添加';
    this.Clear();
    //wucSysSkillB1.skillId = clsSysSkillBL.GetMaxStrId_S();
    try {
      const responseText = await SysSkill_GetMaxStrIdAsync();
      const returnString: string = responseText;
      if (returnString == '') {
        const strInfo = `获取表SysSkill的最大关键字为空，不成功，请检查!`;
        //显示信息框
        alert(strInfo);
      } else {
        $('#txtSkillId').val(returnString);
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `获取表关键字的最大值不成功,${e}.`;
      alert(strMsg);
    }
  }
  /// <summary>
  /// 在当前界面中，导入编辑区域
  /// (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddDPV_Edit)
  /// </summary>
  /// <returns></returns>
  public async AddDPV_Edit(divName4Edit: string) {
    const strUrl = './SysSkill_Edit/';
    console.log(`divName4Edit:(In AddDPV_Edit)${divName4Edit}`);
    return new Promise(function (resolve, reject) {
      $.ajax({
        url: strUrl,
        method: 'GET',
        dataType: 'html',
        data: {},
        success(data) {
          console.log(`已经成功获取页面:${strUrl}  字节数: ${data.length.toString()}`);
          $(`#${divName4Edit}`).html(data);
          resolve(true);
          //setTimeout(() => { clsEditObj.BindTab(); }, 100);
          //clsEditObj.BindTab();
        },
        error: (e: any) => {
          console.error(e);
          reject(e);
        },
      });
    });
  }

  /* 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
    具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_btnOKUpd_Click)
  */
  public async btnOKUpd_Click() {
    const divName = this.getDivName();
    if (divName == null) return;
    const strCommandText: string = this.btnSubmit_Click.name;
    try {
      if (userStore.getUserId != '') {
        const strSysskillId = GetInputValueInDivObj(divName, 'hidSkillId');
        let returnBool8;
        let returnBool9;
        switch (strCommandText) {
          case '添加':
            await this.AddNewRecord();
            break;
          case '确认添加':
            //这是一个单表的插入的代码,由于逻辑层太简单,
            //就把逻辑层合并到控制层,
            if (this.opType == 'AddWithMaxId') {
              await this.AddNewRecordWithMaxIdSaveRetrunId();
            } else {
              await this.AddNewRecordSave().then((jsonData) => {
                const returnBool: boolean = jsonData;
                if (returnBool == true) {
                  // HideDialog();
                  //this.BindGv_vSysSkill();
                  this.iShowList.BindGv(clsvSysSkillEN._CurrTabName, returnBool.toString());
                }
              });
            }
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool8 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSysskillId,
              '09',
              '1',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool8 == true) {
              console.log('技能数据总表同步成功；');
            } else {
              console.log('技能数据总表同步失败；');
            }
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });
            break;
          case '确认修改':
            //这是一个单表的修改的代码,由于逻辑层太简单,
            await this.UpdateRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              const strInfo: string = returnBool ? '修改成功！' : '修改不成功！';
              //strInfo += "(In SysSkillCRUD.btnOKUpd_Click)";

              //显示信息框
              console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                // HideDialog();
                //this.BindGv_vSysSkill();
              }
            });
            //更新总表3个参数 主键、子表类型、页面操作类型；

            returnBool9 = await gs_TotalDataStatisticsEx_AddAndUpdateAndDeleteTotalStatis(
              strSysskillId,
              '09',
              '2',
              clsPubLocalStorage.idCurrEduCls,
            );

            if (returnBool9 == true) {
              console.log('技能数据总表同步成功；');
            } else {
              console.log('技能数据总表同步失败；');
            }
            //添加记录的同时添加历史版本
            await this.AddVersionRecordSave().then((jsonData) => {
              const returnBool: boolean = jsonData;
              if (returnBool == true) {
                CloseWindow();
                //alert("添加历史版本出问题！");
              }
            });
            break;
          default:
            AccessSubmitClickDefault(strCommandText, 'btnOKUpd_Click');

            break;
        }
      } else {
        alert('登录超时，请重新登录');
        reLogin();
      }
      HideDivInDivObj(divName, 'divLoading');

      //去掉提交按钮不可用状态
      $('#btnOKUpd').attr('disabled', 'false');
    } catch (e: any) {
      const strMsg = `(errid: WiTsCs0033)在保存记录时(${strCommandText})时出错!请联系管理员!${e}`;
      alert(strMsg);
    }
  }
  //添加历史版本
  public async AddVersionRecordSave() {
    const strThisFuncName = this.AddVersionRecordSave.name;

    const objSysSkillVerEN: clsSysSkillVerEN = new clsSysSkillVerEN();
    objSysSkillVerEN.SetSkillId(this.skillId);
    this.PutDataToSysSkillVClass(objSysSkillVerEN);

    try {
      const responseText2 = await SysSkillVer_AddNewRecordAsync(objSysSkillVerEN);
      const returnBool = !!responseText2;
      if (returnBool == true) {
        const strWhereCond2 = ` 1 =1 and skillId=${this.skillId}`;
        const intVersionCount = await SysSkillVer_GetRecCountByCondAsync(strWhereCond2);

        const objViewpointEN: clsSysSkillEN = new clsSysSkillEN();
        objViewpointEN.SetSkillId(this.skillId);
        objViewpointEN.SetVersionCount(intVersionCount);

        objViewpointEN.sfUpdFldSetStr = objViewpointEN.updFldString; //设置哪些字段被修改(脏字段)
        if (objViewpointEN.skillId == '' || objViewpointEN.skillId == undefined) {
          throw Format('关键字不能为空!(in {0}.{1})', this.constructor.name, strThisFuncName);
        }

        SysSkill_UpdateRecordAsync(objViewpointEN).then((jsonData) => {
          const returnBool: boolean = jsonData;
          if (returnBool == true) {
            return true;
          } else {
            const strInfo = `添加历史版本数不成功!`;
            alert(strInfo);
            console.log('添加历史版本数不成功');
            CloseWindow();
            return false;
          }
        });
        return true;
      }
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加版本记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjSysSkillEN">数据传输的目的类对象</param>
*/
  public PutDataToSysSkillVClass(pobjSysSkillVerEN: clsSysSkillVerEN) {
    pobjSysSkillVerEN.SetSkillId(this.skillId); // 技能Id
    pobjSysSkillVerEN.SetSkillName(this.skillName); // 技能名称
    pobjSysSkillVerEN.SetOperationTypeId(this.operationTypeId); // 操作类型
    pobjSysSkillVerEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSkillVerEN.SetProcess(this.process); // 实施过程
    pobjSysSkillVerEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSkillVerEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSkillVerEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    //pobjSysSkillVerEN.SetIsSubmit(this.isSubmit;// 是否提交
    pobjSysSkillVerEN.SetCitationId(this.citationId); // 引用Id
    pobjSysSkillVerEN.SetMemo(this.memo); // 备注
  }

  /* 函数功能:把界面上的属性数据传到类对象中
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
 <param name = "pobjSysSkillEN">数据传输的目的类对象</param>
*/
  public async PutDataToSysSkillClass(pobjSysSkillEN: clsSysSkillEN) {
    const divName = this.getDivName();
    pobjSysSkillEN.SetSkillId(this.skillId); // 技能Id
    pobjSysSkillEN.SetSkillName(this.skillName); // 技能名称
    pobjSysSkillEN.SetOperationTypeId(this.operationTypeId); // 操作类型
    pobjSysSkillEN.SetLevelId(this.levelId); // 级别Id
    pobjSysSkillEN.SetProcess(this.process); // 实施过程
    pobjSysSkillEN.SetUpdUser(userStore.getUserId); // 修改人
    pobjSysSkillEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjSysSkillEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjSysSkillEN.SetShareId(this.shareId);
    pobjSysSkillEN.SetIsSubmit(this.isSubmit); // 是否提交
    pobjSysSkillEN.SetCitationId(this.citationId); // 引用Id
    pobjSysSkillEN.SetMemo(this.memo); // 备注
    const strPdfPageNum = GetInputValueInDivObjN(divName, 'hidPdfPageNum');
    if (strPdfPageNum != 0) {
      pobjSysSkillEN.SetPdfPageNum(strPdfPageNum);
    } else {
      pobjSysSkillEN.SetPdfPageNum(1);
    }
  }
  /* 添加新记录，由后台自动获取最大值的关键字。保存函数
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordWithMaxIdSave)
*/
  public async AddNewRecordWithMaxIdSaveRetrunId() {
    const objSysSkillEN: clsSysSkillEN = new clsSysSkillEN();
    objSysSkillEN.SetCreateDate(clsPubFun4Web.getNowDate_ymd());
    this.PutDataToSysSkillClass(objSysSkillEN);
    try {
      //const responseText2 = await SysSkill_AddNewRecordWithMaxIdAsync(objSysSkillEN);
      const responseText = await SysSkill_AddNewRecordWithReturnKeyAsync(objSysSkillEN);
      const strSysskillId: string = responseText;
      //const returnBool: boolean = !!responseText2;
      if (strSysskillId != '') {
        $('#hidSkillId').val(strSysskillId);

        await this.AddNewRecordSaveRtSysskill();

        return true;
      } else {
        const strInfo = `添加记录不成功!`;

        //显示信息框
        alert(strInfo);
      }
      return strSysskillId; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false;
    }
    //return strSysskillId;//一定要有一个返回值，否则会出错！
  }
  /* 函数功能:把界面上的属性数据传到类对象中
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_PutDataToClass)
<param name = "pobjRTSysSkillRelaEN">数据传输的目的类对象</param>
*/
  public PutDataToRTSysSkillRelaClass(pobjRTSysSkillRelaEN: clsRTSysSkillRelaEN) {
    const divName = this.getDivName();
    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strUserId = userStore.getUserId;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    pobjRTSysSkillRelaEN.SetIdCurrEduCls(clsPubLocalStorage.idCurrEduCls);
    pobjRTSysSkillRelaEN.SetTopicId(strTopicId); // 主题编号
    pobjRTSysSkillRelaEN.SetSkillId(strSkillId); // 技能Id
    pobjRTSysSkillRelaEN.SetUpdDate(clsPubFun4Web.getNowDate()); // 修改日期
    pobjRTSysSkillRelaEN.SetUpdUser(strUserId);
    pobjRTSysSkillRelaEN.SetMemo(this.memo); // 备注
    pobjRTSysSkillRelaEN.SetClassificationId('0000000000'); // 分类为000000
  }

  /* 添加新记录，保存函数
    (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_AddNewRecordSave)
   */
  public async AddNewRecordSaveRtSysskill() {
    const divName = this.getDivName();
    const strThisFuncName = this.AddNewRecordSaveRtSysskill.name;

    const strTopicId = clsPrivateSessionStorage.topicIdInTree;
    const strSkillId = GetInputValueInDivObj(divName, 'hidSkillId');
    const strUserId = userStore.getUserId;
    const objRTSysSkillRelaEN: clsRTSysSkillRelaEN = new clsRTSysSkillRelaEN();
    this.PutDataToRTSysSkillRelaClass(objRTSysSkillRelaEN);
    try {
      //同一用户，同一主题 同一技能 只能添加一次；
      const strWhere = ` 1 = 1 And topicId = '${strTopicId}' And skillId = '${strSkillId}' And updUser = '${strUserId}'`;
      const responseText = await RTSysSkillRela_IsExistRecordAsync(strWhere);
      const bolIsExist: boolean = responseText;
      if (bolIsExist == true) {
        const strMsg = `同一主题同一个用户不能重复添加同一个技能！`;
        alert(strMsg);
        return responseText; //一定要有一个返回值，否则会出错！
      } else {
        const responseText2 = await RTSysSkillRela_AddNewRecordAsync(objRTSysSkillRelaEN);
        const returnBool = !!responseText2;
        if (returnBool == true) {
          const strInfo = `添加记录成功!`;

          //根据ID获取最大数；
          const strWhereCond2 = ` 1 =1 and skillId=${strSkillId}`;
          const intCitationCount = await RTSysSkillRela_GetRecCountByCondAsync(strWhereCond2);

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
          //HideDialogNine();
        } else {
          const strInfo = `添加记录不成功!`;

          //显示信息框
          alert(strInfo);
        }
      }
      return responseText; //一定要有一个返回值，否则会出错！
    } catch (e: any) {
      console.error('catch(e)=');
      console.error(e);
      const strMsg = `添加记录不成功,${e}.`;
      alert(strMsg);
      return false; //一定要有一个返回值，否则会出错！
    }
  }

  /* 函数功能:在数据 列表中跳转到某一页 论文列表
(AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_IndexPage)
<param name = "intPageIndex">页序号</param>
*/
  //public IndexPageTwo(intPageIndex: number) {
  //    if (intPageIndex == 0) {
  //        intPageIndex = this.objPager.pageCount;
  //    }
  //    console.log("跳转到" + intPageIndex + "页");
  //    this.setCurrPageIndex(intPageIndex, this.divName4Pager);
  //    this.BindGv_vPaper();
  //}
  /*
   * 设置排序字段-相当使用ViewState功能
   */
  public set hidSortvPaperBy(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'hidSortvPaperBy', value);
  }
  /*
   * 设置排序字段
   */
  public get hidSortvPaperBy(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'hidSortvPaperBy');
  }
  /*
   * 论文标题
   */
  public get paperTitle_q(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperTitle_q');
  }
  ///////////////////////论文列表条件
  public get readUser_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlUserId_q');
  }

  /*
   * 文献类型Id
   */
  public get literatureTypeId_q(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlLiteratureTypeId_q');
  }
  /*
   * 论文Id
   */
  public set paperId(value: string) {
    const divName = this.getDivName();
    SetInputValueInDivObj(divName, 'txtPaperId', value);
  }
  /*
   * 论文
   */
  public get paperId(): string {
    const divName = this.getDivName();
    return GetInputValueInDivObj(divName, 'txtPaperId');
  }
  /* 把所有的查询控件内容组合成一个条件串
 (AutoGCLib.WA_ViewScriptCS_TS4TypeScript:Gen_WApi_Ts_CombineCondition)
  <returns>条件串(strWhereCond)</returns>
*/
  public async CombinevPaperCondition(): Promise<string> {
    // const divName = this.getDivName();
    //使条件串的初值为"1 = 1",以便在该串的后面用"and "添加其他条件,
    //例如 1 = 1 && userName = '张三'
    let strWhereCond = ' 1 = 1 ';

    //如果该条件控件的内容不为空,就组成一个条件并添加到总条件串中。
    try {
      if (this.paperTitle_q != '') {
        strWhereCond += ` And ${clsPaperEN.con_PaperTitle} like '%${this.paperTitle_q}%'`;
      }

      if (this.literatureTypeId_q != '' && this.literatureTypeId_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_LiteratureTypeId} = '${this.literatureTypeId_q}'`;
      }
      //用户
      if (this.readUser_q != '' && this.readUser_q != '0') {
        strWhereCond += ` And ${clsPaperEN.con_UpdUser} = '${this.readUser_q}'`;
      }
      //只查询提交的论文数据
      strWhereCond += ` And ${clsPaperEN.con_IsSubmit} = 'true'`;

      //排除获取已被当前观点引用过的论文数据；
      //strWhereCond += ` And paperId not in (select paperId from RTPaperRela where viewpointId = '${strTopicId}')`;
    } catch (objException) {
      const strMsg = `(errid:WiTsCs0002)在组合查询条件(CombinePaperCondition)时出错!请联系管理员!${objException}`;
      throw strMsg;
    }
    return strWhereCond;
  }

  //选择论文弹出列表数据；
  public async selectPaper_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  //查询论文列表
  public async btnPaperQuery_Click() {
    const objPage_Paper = new Pub_PaperList();
    await objPage_Paper.BindGv_vPaper();
  }
  //确定选择的论文 并添加到关系表中
  public btnPaperRecordInTab_Click(strkeyId: string) {
    const divName = this.getDivName();
    if (divName == null) return;
    //存放Id
    SetHidPaperId(divName, strkeyId);
    $('#txtCitationId').val(strkeyId);
    //设置只读属性；
    $('#txtCitationId').attr('disabled', 'disabled');
    //关闭列表
    HideDialogThree();
  }

  /*
   * 分享
   */
  public set shareId(value: string) {
    const divName = this.getDivName();
    SetSelectValueByIdInDivObj(divName, 'ddlShareId', value);
  }
  /*
   * 分享
   */
  public get shareId(): string {
    const divName = this.getDivName();
    return GetSelectValueInDivObj(divName, 'ddlShareId');
  }
}
