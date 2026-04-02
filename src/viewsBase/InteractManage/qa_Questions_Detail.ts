/**
 * 类名:qa_Questions_Detail(界面:qa_QuestionsCRUD)
 * 表名:qa_Questions(01120642)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:05:27
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:互动管理(InteractManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { vqa_Questions_GetObjByQuestionsIdAsync } from '@/ts/L3ForWApi/InteractManage/clsvqa_QuestionsWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsvqa_QuestionsEN } from '@/ts/L0Entity/InteractManage/clsvqa_QuestionsEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* qa_Questions_Detail 的摘要说明。其中Q代表查询,U代表修改
  (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
*/
export abstract class qa_Questions_Detail {
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
  public HideDialog_qa_Questions() {
    if (qa_Questions_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      qa_Questions_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_vqa_Questions(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_vqa_Questions.name;
    if (qa_Questions_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (qa_Questions_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await qa_Questions_Detail.DetailObj.showDialog();
    }
    this.divDetail = qa_Questions_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (qa_Questions_Detail.times4TestShowDialog < 2) {
        qa_Questions_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_vqa_Questions(strOp);
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
      qa_Questions_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelvqa_Questions = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (qa_Questions_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (qa_Questions_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = qa_Questions_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (qa_Questions_Detail.times4TestShowDialog < 2) {
        qa_Questions_Detail.times4TestShowDialog++;
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
      qa_Questions_Detail.times4TestShowDialog = 0;
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
  public async DetailRecord(strQuestionsId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelvqa_Questions = '关闭';
    try {
      const objvqa_QuestionsEN = await vqa_Questions_GetObjByQuestionsIdAsync(strQuestionsId);
      if (objvqa_QuestionsEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromvqa_QuestionsClass(objvqa_QuestionsEN);
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
  <param name = "pobjqa_QuestionsEN">表实体类对象</param>
*/
  public ShowDetailDataFromvqa_QuestionsClass(pobjvqa_QuestionsEN: clsvqa_QuestionsEN) {
    this.questionsId_d = pobjvqa_QuestionsEN.questionsId; // 提问Id
    this.paperId_d = pobjvqa_QuestionsEN.paperId; // 论文Id
    this.isSubmit_d = pobjvqa_QuestionsEN.isSubmit; // 是否提交
    this.qaPaperId_d = pobjvqa_QuestionsEN.qaPaperId; // 论文答疑Id
    this.questionsContent_d = pobjvqa_QuestionsEN.questionsContent; // 提问内容
    this.pdfContent_d = pobjvqa_QuestionsEN.pdfContent; // Pdf内容
    this.pdfPageNum_d = pobjvqa_QuestionsEN.pdfPageNum; // Pdf页码
    this.isDelete_d = pobjvqa_QuestionsEN.isDelete; // 是否删除
    this.isPublic_d = pobjvqa_QuestionsEN.isPublic; // 是否公开
    this.isEnd_d = pobjvqa_QuestionsEN.isEnd; // 是否结束
    this.voteCount_d = pobjvqa_QuestionsEN.voteCount; // 点赞计数
    this.answerCount_d = pobjvqa_QuestionsEN.answerCount; // 回答计数
    this.orderNum_d = pobjvqa_QuestionsEN.orderNum; // 序号
    this.memo_d = pobjvqa_QuestionsEN.memo; // 备注
    this.userName_d = pobjvqa_QuestionsEN.userName; // 用户名
    this.idCurrEduCls_d = pobjvqa_QuestionsEN.idCurrEduCls; // 当前教学班流水号
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
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelvqa_Questions(value: string) {
    qa_Questions_Detail.DetailObj.SetButtonText('btnCancelvqa_Questions', value);
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
   * 是否结束 (Used In ShowDetailDataFromClass())
   **/
  public set isEnd_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblIsEnd_d', value !== null ? value.toString() : '');
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
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 序号 (Used In ShowDetailDataFromClass())
   **/
  public set orderNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblOrderNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 论文Id (Used In ShowDetailDataFromClass())
   **/
  public set paperId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPaperId_d', value);
  }
  /**
   * Pdf内容 (Used In ShowDetailDataFromClass())
   **/
  public set pdfContent_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPdfContent_d', value);
  }
  /**
   * Pdf页码 (Used In ShowDetailDataFromClass())
   **/
  public set pdfPageNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblPdfPageNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 论文答疑Id (Used In ShowDetailDataFromClass())
   **/
  public set qaPaperId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQaPaperId_d', value);
  }
  /**
   * 提问内容 (Used In ShowDetailDataFromClass())
   **/
  public set questionsContent_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQuestionsContent_d', value);
  }
  /**
   * 提问Id (Used In ShowDetailDataFromClass())
   **/
  public set questionsId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQuestionsId_d', value);
  }
  /**
   * 用户名 (Used In ShowDetailDataFromClass())
   **/
  public set userName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUserName_d', value);
  }
  /**
   * 点赞计数 (Used In ShowDetailDataFromClass())
   **/
  public set voteCount_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblVoteCount_d',
      value !== null ? value.toString() : '',
    );
  }
}
