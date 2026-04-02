/**
 * 类名:gs_VpClassification_Detail(界面:gs_VpClassificationCRUD)
 * 表名:gs_VpClassification(01120958)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:04:59
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培主题(GradEduTopic)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { gs_VpClassification_GetObjByClassificationIdAsync } from '@/ts/L3ForWApi/GradEduTopic/clsgs_VpClassificationWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { gs_VpClassificationEx_FuncMapByFldName } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_VpClassificationEN } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationEN';
import { clsgs_VpClassificationENEx } from '@/ts/L0Entity/GradEduTopic/clsgs_VpClassificationENEx';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* gs_VpClassification_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class gs_VpClassification_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  private iShowList: IShowList;
  public mstrListDiv = 'divDataLst';
  public bolIsLoadDetailRegion = false; //记录是否导入编辑区的变量
  public divName4Detail = 'divDetail'; //编辑区的Id
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivDetail(): HTMLDivElement {
    return this.divDetail;
  }
  /**
   * 获取当前组件的divEdit的层对象
   **/
  public get thisDivLayout(): HTMLDivElement {
    return this.divDetail;
  }
  constructor(objShowList: IShowList) {
    this.iShowList = objShowList;
    const divTemp = document.createElement('div');
    divTemp.id = 'temp';
    this.divDetail = divTemp;
  }

  /**
   * 隐藏对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_HideDialog)
   **/
  public HideDialog_gs_VpClassification() {
    if (gs_VpClassification_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      gs_VpClassification_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_gs_VpClassification(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_gs_VpClassification.name;
    if (gs_VpClassification_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (gs_VpClassification_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await gs_VpClassification_Detail.DetailObj.showDialog();
    }
    this.divDetail = gs_VpClassification_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_VpClassification_Detail.times4TestShowDialog < 2) {
        gs_VpClassification_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_gs_VpClassification(strOp);
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      return false;
    } else {
      gs_VpClassification_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelgs_VpClassification = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (gs_VpClassification_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (gs_VpClassification_Detail.DetailObj.dialogVisible == false) {
        const strMsg = Format(
          '当前详细信息区的的对话框还没有打开，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
    }
    this.divDetail = gs_VpClassification_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_VpClassification_Detail.times4TestShowDialog < 2) {
        gs_VpClassification_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.getDivName();
        }, 100);
      } else {
        const strMsg = Format(
          '当前详细信息区的层(div)对象为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return null;
      }
      return null;
    } else {
      gs_VpClassification_Detail.times4TestShowDialog = 0;
    }
    return this.divDetail;
  }

  /* 
 在数据表里详细信息记录
 (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_btnDetailRecordInTab_Click)
*/
  public async btnDetailRecordInTab_Click(strKeyId: string) {
    const strThisFuncName = this.btnDetailRecordInTab_Click.name;
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_gs_VpClassification('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.DetailRecord4Func(lngKeyId);
    } catch (e) {
      const strMsg = Format(
        '详细信息记录不成功. {0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 
 根据关键字详细信息记录
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord4Func)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord4Func(lngClassificationId: number) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelgs_VpClassification = '关闭';
    try {
      const objgs_VpClassificationEN = await gs_VpClassification_GetObjByClassificationIdAsync(
        lngClassificationId,
      );
      const objgs_VpClassificationENEx = new clsgs_VpClassificationENEx();
      ObjectAssign(objgs_VpClassificationENEx, objgs_VpClassificationEN);
      await gs_VpClassificationEx_FuncMapByFldName(
        clsgs_VpClassificationENEx.con_DateTimeSim,
        objgs_VpClassificationENEx,
      );
      this.ShowDetailDataFromgs_VpClassificationClass4Func(objgs_VpClassificationENEx);
      console.log('完成DetailRecord4Func!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息4Func不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
    }
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_gs_VpClassification('Detail');
    if (bolIsSuccess == false) return;
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    const lngKeyId = Number(strKeyId);
    this.DetailRecord4Func(lngKeyId);
  }

  /// <summary>
  /// 把同一个类的对象,复制到另一个对象
  /// (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_CopyToEx)
  /// </summary>
  /// <param name = "objgs_VpClassificationENS">源对象</param>
  /// <returns>目标对象=>clsgs_VpClassificationEN:objgs_VpClassificationENT</returns>
  public CopyToEx(objgs_VpClassificationENS: clsgs_VpClassificationEN): clsgs_VpClassificationENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objgs_VpClassificationENT = new clsgs_VpClassificationENEx();
    try {
      ObjectAssign(objgs_VpClassificationENT, objgs_VpClassificationENS);
      return objgs_VpClassificationENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objgs_VpClassificationENT;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
  <param name = "pobjgs_VpClassificationEN">表实体类对象</param>
*/
  public ShowDetailDataFromgs_VpClassificationClass4Func(
    pobjgs_VpClassificationENEx: clsgs_VpClassificationENEx,
  ) {
    this.classificationName_d = pobjgs_VpClassificationENEx.classificationName; // 分类名称
    this.orderNum_d = pobjgs_VpClassificationENEx.orderNum; // 序号
    this.updUser_d = pobjgs_VpClassificationENEx.updUser; // 修改人
    this.dateTimeSim_d = pobjgs_VpClassificationENEx.dateTimeSim; // 简化日期时间
    this.memo_d = pobjgs_VpClassificationENEx.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelgs_VpClassification(value: string) {
    gs_VpClassification_Detail.DetailObj.SetButtonText('btnCancelgs_VpClassification', value);
  }
  /**
   * 分类名称 (Used In ShowDetailDataFromClass4Func())
   **/
  public set classificationName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblClassificationName_d', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass4Func())
   **/
  public set dateTimeSim_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblDateTimeSim_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass4Func())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 序号 (Used In ShowDetailDataFromClass4Func())
   **/
  public set orderNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblOrderNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 修改人 (Used In ShowDetailDataFromClass4Func())
   **/
  public set updUser_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdUser_d', value);
  }
}
