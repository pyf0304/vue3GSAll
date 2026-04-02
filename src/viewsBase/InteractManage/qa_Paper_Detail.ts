/**
 * 类名:qa_Paper_Detail(界面:qa_PaperCRUD)
 * 表名:qa_Paper(01120643)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:03
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { vqa_Paper_GetObjByQaPaperIdAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_PaperWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvqa_PaperEN } from '@/ts/L0Entity/InteractManage/clsvqa_PaperEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* qa_Paper_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class qa_Paper_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public static IdCurrEduClsCache = ''; //2、界面主表的缓存分类字段变量1
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
  public HideDialog_qa_Paper() {
    if (qa_Paper_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      qa_Paper_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_vqa_Paper(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_vqa_Paper.name;
    if (qa_Paper_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (qa_Paper_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await qa_Paper_Detail.DetailObj.showDialog();
    }
    this.divDetail = qa_Paper_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (qa_Paper_Detail.times4TestShowDialog < 2) {
        qa_Paper_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_vqa_Paper(strOp);
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
      qa_Paper_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelvqa_Paper = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (qa_Paper_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (qa_Paper_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = qa_Paper_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (qa_Paper_Detail.times4TestShowDialog < 2) {
        qa_Paper_Detail.times4TestShowDialog++;
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
      qa_Paper_Detail.times4TestShowDialog = 0;
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
    try {
      if (strKeyId == '') {
        alert('请选择需要详细信息的记录!');
        return '';
      }
      this.DetailRecord(strKeyId);
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
  public async DetailRecord(strQaPaperId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelvqa_Paper = '关闭';
    try {
      const objvqa_PaperEN = await vqa_Paper_GetObjByQaPaperIdAsync(strQaPaperId);
      if (objvqa_PaperEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromvqa_PaperClass(objvqa_PaperEN);
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
    if (IsNullOrEmpty(strKeyId) == true) {
      const strMsg = '需要显示详细信息记录的关键字为空,请检查!';
      console.error(strMsg);
      alert(strMsg);
    }
    // 为编辑区绑定下拉框
    //const conBindDdl = await this.BindDdl4DetailRegion();
    this.bolIsLoadDetailRegion = true; //
    this.DetailRecord(strKeyId);
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
  (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass)
  <param name = "pobjqa_PaperEN">表实体类对象</param>
*/
  public ShowDetailDataFromvqa_PaperClass(pobjvqa_PaperEN: clsvqa_PaperEN) {
    this.qaPaperId_d = pobjvqa_PaperEN.qaPaperId; // 论文答疑Id
    this.paperId_d = pobjvqa_PaperEN.paperId; // 论文Id
    this.questionsCount_d = pobjvqa_PaperEN.questionsCount; // 提问计数
    this.isDelete_d = pobjvqa_PaperEN.isDelete; // 是否删除
    this.isPublic_d = pobjvqa_PaperEN.isPublic; // 是否公开
    this.isSubmit_d = pobjvqa_PaperEN.isSubmit; // 是否提交
    this.userName_d = pobjvqa_PaperEN.userName; // 用户名
    this.updUser_d = pobjvqa_PaperEN.updUser; // 修改人
    this.memo_d = pobjvqa_PaperEN.memo; // 备注
    this.paperTitle_d = pobjvqa_PaperEN.paperTitle; // 论文标题
    this.attachmentCount_d = pobjvqa_PaperEN.attachmentCount; // 附件计数
    this.paperContent_d = pobjvqa_PaperEN.paperContent; // 主题内容
    this.periodical_d = pobjvqa_PaperEN.periodical; // 期刊
    this.author_d = pobjvqa_PaperEN.author; // 作者
    this.researchQuestion_d = pobjvqa_PaperEN.researchQuestion; // 研究问题
    this.literatureSources_d = pobjvqa_PaperEN.literatureSources; // 文献来源
    this.uploadfileUrl_d = pobjvqa_PaperEN.uploadfileUrl; // 文件地址
    this.majorName_d = pobjvqa_PaperEN.majorName; // 专业名称
    this.idCurrEduCls_d = pobjvqa_PaperEN.idCurrEduCls; // 当前教学班流水号
    this.answerCount_d = pobjvqa_PaperEN.answerCount; // 回答计数
  }
  /**
   * 回答计数 (Used In ShowDetailDataFromClass())
   **/
  public set answerCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblAnswerCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 附件计数 (Used In ShowDetailDataFromClass())
   **/
  public set attachmentCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblAttachmentCount_d',
      value !== null ? value.toString() : '',
    );
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
  public set btnCancelvqa_Paper(value: string) {
    qa_Paper_Detail.DetailObj.SetButtonText('btnCancelvqa_Paper', value);
  }
  /**
   * 教学班流水号 (Used In ShowDetailDataFromClass())
   **/
  public set idCurrEduCls_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblIdCurrEduCls_d', value);
  }
  /**
   * 是否删除 (Used In ShowDetailDataFromClass())
   **/
  public set isDelete_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsDelete_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 是否公开 (Used In ShowDetailDataFromClass())
   **/
  public set isPublic_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsPublic_d',
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
   * 文献来源 (Used In ShowDetailDataFromClass())
   **/
  public set literatureSources_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblLiteratureSources_d', value);
  }
  /**
   * 专业名称 (Used In ShowDetailDataFromClass())
   **/
  public set majorName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMajorName_d', value);
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
   * 论文标题 (Used In ShowDetailDataFromClass())
   **/
  public set paperTitle_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperTitle_d', value);
  }
  /**
   * 期刊 (Used In ShowDetailDataFromClass())
   **/
  public set periodical_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPeriodical_d', value);
  }
  /**
   * 论文答疑Id (Used In ShowDetailDataFromClass())
   **/
  public set qaPaperId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQaPaperId_d', value);
  }
  /**
   * 提问计数 (Used In ShowDetailDataFromClass())
   **/
  public set questionsCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblQuestionsCount_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 研究问题 (Used In ShowDetailDataFromClass())
   **/
  public set researchQuestion_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblResearchQuestion_d', value);
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
  /**
   * 用户名 (Used In ShowDetailDataFromClass())
   **/
  public set userName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUserName_d', value);
  }
}
