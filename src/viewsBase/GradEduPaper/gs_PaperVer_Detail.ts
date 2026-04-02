/**
 * 类名:gs_PaperVer_Detail(界面:gs_PaperVerCRUD)
 * 表名:gs_PaperVer(01120678)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:05
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { gs_PaperVer_GetObjByPaperVIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsgs_PaperVerWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsgs_PaperVerEN } from '@/ts/L0Entity/GradEduPaper/clsgs_PaperVerEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* gs_PaperVer_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class gs_PaperVer_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static CourseIdStatic = ''; //6、定义下拉框条件变量1
  public static IdCurrEduClsStatic = ''; //6、定义下拉框条件变量1
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
  public HideDialog_gs_PaperVer() {
    if (gs_PaperVer_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      gs_PaperVer_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_gs_PaperVer(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_gs_PaperVer.name;
    if (gs_PaperVer_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (gs_PaperVer_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await gs_PaperVer_Detail.DetailObj.showDialog();
    }
    this.divDetail = gs_PaperVer_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_PaperVer_Detail.times4TestShowDialog < 2) {
        gs_PaperVer_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_gs_PaperVer(strOp);
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
      gs_PaperVer_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelgs_PaperVer = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (gs_PaperVer_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (gs_PaperVer_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = gs_PaperVer_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (gs_PaperVer_Detail.times4TestShowDialog < 2) {
        gs_PaperVer_Detail.times4TestShowDialog++;
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
      gs_PaperVer_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_gs_PaperVer('Detail');
    if (bolIsSuccess == false) return;
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      const lngKeyId = Number(strKeyId);
      this.DetailRecord(lngKeyId);
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
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_DetailRecord)
  <param name = "sender">参数列表</param>
*/
  public async DetailRecord(lngPaperVId: number): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelgs_PaperVer = '关闭';
    try {
      const objgs_PaperVerEN = await gs_PaperVer_GetObjByPaperVIdAsync(lngPaperVId);
      if (objgs_PaperVerEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromgs_PaperVerClass(objgs_PaperVerEN);
      console.log('完成DetailRecord!');
    } catch (e) {
      const strMsg = Format(
        '显示详细信息不成功,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return false;
    }
    return true;
  }

  /* 修改记录
 (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_Ts_btnDetailRecord_Click)
*/
  public async btnDetailRecord_Click(strKeyId: string) {
    this.opType = 'Detail';
    const bolIsSuccess = await this.ShowDialog_gs_PaperVer('Detail');
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
    this.DetailRecord(lngKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjgs_PaperVerEN">表实体类对象</param>
*/
  public ShowDetailDataFromgs_PaperVerClass(pobjgs_PaperVerEN: clsgs_PaperVerEN) {
    this.paperId_d = pobjgs_PaperVerEN.paperId; // 论文Id
    this.paperTitle_d = pobjgs_PaperVerEN.paperTitle; // 论文标题
    this.paperContent_d = pobjgs_PaperVerEN.paperContent; // 主题内容
    this.periodical_d = pobjgs_PaperVerEN.periodical; // 期刊
    this.author_d = pobjgs_PaperVerEN.author; // 作者
    this.researchQuestion_d = pobjgs_PaperVerEN.researchQuestion; // 研究问题
    this.keyword_d = pobjgs_PaperVerEN.keyword; // 关键字
    this.literatureSources_d = pobjgs_PaperVerEN.literatureSources; // 文献来源
    this.literatureLink_d = pobjgs_PaperVerEN.literatureLink; // 文献链接
    this.uploadfileUrl_d = pobjgs_PaperVerEN.uploadfileUrl; // 文件地址
    this.isQuotethesis_d = pobjgs_PaperVerEN.isQuotethesis; // 是否引用论文
    this.isSubmit_d = pobjgs_PaperVerEN.isSubmit; // 是否提交
    this.isChecked_d = pobjgs_PaperVerEN.isChecked; // 是否检查
    this.quoteId_d = pobjgs_PaperVerEN.quoteId; // 引用Id
    this.checker_d = pobjgs_PaperVerEN.checker; // 审核人
    this.literatureTypeId_d = pobjgs_PaperVerEN.literatureTypeId; // 作文类型Id
    this.updUser_d = pobjgs_PaperVerEN.updUser; // 修改人
    this.updDate_d = pobjgs_PaperVerEN.updDate; // 修改日期
    this.idCurrEduCls_d = pobjgs_PaperVerEN.idCurrEduCls; // 教学班流水号
    this.paperTypeId_d = pobjgs_PaperVerEN.paperTypeId; // 论文类型Id
    this.paperStatusId_d = pobjgs_PaperVerEN.paperStatusId; // 论文状态Id
    this.memo_d = pobjgs_PaperVerEN.memo; // 备注
  }
  /**
   * 作者 (Used In ShowDetailDataFromClass())
   **/
  public set author_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblAuthor_d', value);
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelgs_PaperVer(value: string) {
    gs_PaperVer_Detail.DetailObj.SetButtonText('btnCancelgs_PaperVer', value);
  }
  /**
   * 审核人 (Used In ShowDetailDataFromClass())
   **/
  public set checker_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblChecker_d', value);
  }
  /**
   * 教学班流水号 (Used In ShowDetailDataFromClass())
   **/
  public set idCurrEduCls_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblIdCurrEduCls_d', value);
  }
  /**
   * 是否检查 (Used In ShowDetailDataFromClass())
   **/
  public set isChecked_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsChecked_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 是否引用论文 (Used In ShowDetailDataFromClass())
   **/
  public set isQuotethesis_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsQuotethesis_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 是否提交 (Used In ShowDetailDataFromClass())
   **/
  public set isSubmit_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsSubmit_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 关键字 (Used In ShowDetailDataFromClass())
   **/
  public set keyword_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblKeyword_d', value);
  }
  /**
   * 文献链接 (Used In ShowDetailDataFromClass())
   **/
  public set literatureLink_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblLiteratureLink_d', value);
  }
  /**
   * 文献来源 (Used In ShowDetailDataFromClass())
   **/
  public set literatureSources_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblLiteratureSources_d', value);
  }
  /**
   * 文献类型Id (Used In ShowDetailDataFromClass())
   **/
  public set literatureTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblLiteratureTypeId_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 主题内容 (Used In ShowDetailDataFromClass())
   **/
  public set paperContent_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperContent_d', value);
  }
  /**
   * 论文Id (Used In ShowDetailDataFromClass())
   **/
  public set paperId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperId_d', value);
  }
  /**
   * 论文状态Id (Used In ShowDetailDataFromClass())
   **/
  public set paperStatusId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperStatusId_d', value);
  }
  /**
   * 论文标题 (Used In ShowDetailDataFromClass())
   **/
  public set paperTitle_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperTitle_d', value);
  }
  /**
   * 论文类型Id (Used In ShowDetailDataFromClass())
   **/
  public set paperTypeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperTypeId_d', value);
  }
  /**
   * 期刊 (Used In ShowDetailDataFromClass())
   **/
  public set periodical_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPeriodical_d', value);
  }
  /**
   * 引用Id (Used In ShowDetailDataFromClass())
   **/
  public set quoteId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQuoteId_d', value);
  }
  /**
   * 研究问题 (Used In ShowDetailDataFromClass())
   **/
  public set researchQuestion_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblResearchQuestion_d', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass())
   **/
  public set updDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdDate_d', value);
  }
  /**
   * 修改人 (Used In ShowDetailDataFromClass())
   **/
  public set updUser_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdUser_d', value);
  }
  /**
   * 文件地址 (Used In ShowDetailDataFromClass())
   **/
  public set uploadfileUrl_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUploadfileUrl_d', value);
  }
}
