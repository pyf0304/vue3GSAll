/**
 * 类名:QxPrjMenus_Detail(界面:QxPrjMenusCRUD)
 * 表名:QxPrjMenus(00140004)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:24:07
 * 生成者:
 工程名称:统一平台(0014)
 CM工程:统一平台前端(变量首字母小写)-WebApi函数集
 * 相关数据库:103.116.76.183,9433GeneralPlatformTz
 * PrjDataBaseId:0218
 * 模块中文名:菜单管理(MenuManage_GP)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxPrjMenus_GetObjByMenuIdAsync } from '@/ts/L3ForWApi/MenuManage_GP/clsQxPrjMenusWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxPrjMenusEN } from '@/ts/L0Entity/MenuManage_GP/clsQxPrjMenusEN';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* QxPrjMenus_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class QxPrjMenus_Detail {
  public static DetailObj: any;
  public divDetail: HTMLDivElement;
  public static times4TestShowDialog = 0;
  public opType = '';
  public keyId = '';
  public static strPageDispModeId = '01'; //PopupBox(弹出框)

  public QxPrjId = ''; //5、处理添加、修改记录时PutData所用的Session缓存变量,用于获取界面编辑主表时所用的Session类字段值
  public static QxPrjId4PrefixStatic = ''; //3、前缀变量
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
  public HideDialog_QxPrjMenus() {
    if (QxPrjMenus_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxPrjMenus_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxPrjMenus(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxPrjMenus.name;
    if (QxPrjMenus_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxPrjMenus_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxPrjMenus_Detail.DetailObj.showDialog();
    }
    this.divDetail = QxPrjMenus_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPrjMenus_Detail.times4TestShowDialog < 2) {
        QxPrjMenus_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxPrjMenus(strOp);
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
      QxPrjMenus_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelQxPrjMenus = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxPrjMenus_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (QxPrjMenus_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = QxPrjMenus_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxPrjMenus_Detail.times4TestShowDialog < 2) {
        QxPrjMenus_Detail.times4TestShowDialog++;
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
      QxPrjMenus_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_QxPrjMenus('Detail');
    if (bolIsSuccess == false) return;
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
  public async DetailRecord(strMenuId: string): Promise<boolean> {
    const strThisFuncName = this.DetailRecord.name;
    this.btnCancelQxPrjMenus = '关闭';
    try {
      const objQxPrjMenusEN = await QxPrjMenus_GetObjByMenuIdAsync(strMenuId);
      if (objQxPrjMenusEN == null) {
        const strMsg = Format(
          '根据关键字获取相应的记录的对象为空.(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      this.ShowDetailDataFromQxPrjMenusClass(objQxPrjMenusEN);
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
    const bolIsSuccess = await this.ShowDialog_QxPrjMenus('Detail');
    if (bolIsSuccess == false) return;
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
   <param name = "pobjQxPrjMenusEN">表实体类对象</param>
 */
  public ShowDetailDataFromQxPrjMenusClass(pobjQxPrjMenusEN: clsQxPrjMenusEN) {
    this.menuName_d = pobjQxPrjMenusEN.menuName; // 菜单名
    this.qxPrjId_d = pobjQxPrjMenusEN.qxPrjId; // 项目Id
    this.upMenuId_d = pobjQxPrjMenusEN.upMenuId; // 上级菜单Id
    this.linkFile_d = pobjQxPrjMenusEN.linkFile; // 链接文件
    this.qsParameters_d = pobjQxPrjMenusEN.qsParameters; // qs参数
    this.tabId_d = pobjQxPrjMenusEN.tabId; // 表ID
    this.imgFile_d = pobjQxPrjMenusEN.imgFile; // 图像文件
    this.roleId_d = pobjQxPrjMenusEN.roleId; // 角色Id
    this.orderNum_d = pobjQxPrjMenusEN.orderNum; // 排序号
    this.isLeafNode_d = pobjQxPrjMenusEN.isLeafNode; // 是否叶子
    this.menuSetId_d = pobjQxPrjMenusEN.menuSetId; // 菜单集Id
    this.menuTitle_d = pobjQxPrjMenusEN.menuTitle; // 菜单标题
    this.pageDispModeId_d = pobjQxPrjMenusEN.pageDispModeId; // 页面显示模式Id
    this.inUse_d = pobjQxPrjMenusEN.inUse; // 是否在用
    this.menuControlName_d = pobjQxPrjMenusEN.menuControlName; // MenuControlName
    this.applicationTypeId_d = pobjQxPrjMenusEN.applicationTypeId; // 应用程序类型ID
    this.memo_d = pobjQxPrjMenusEN.memo; // 备注
  }
  /**
   * 应用程序类型Id (Used In ShowDetailDataFromClass())
   **/
  public set applicationTypeId_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblApplicationTypeId_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelQxPrjMenus(value: string) {
    QxPrjMenus_Detail.DetailObj.SetButtonText('btnCancelQxPrjMenus', value);
  }
  /**
   * 图像文件 (Used In ShowDetailDataFromClass())
   **/
  public set imgFile_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblImgFile_d', value);
  }
  /**
   * 是否在用 (Used In ShowDetailDataFromClass())
   **/
  public set inUse_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblInUse_d', value !== null ? value.toString() : '');
  }
  /**
   * 是否叶子 (Used In ShowDetailDataFromClass())
   **/
  public set isLeafNode_d(value: boolean) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblIsLeafNode_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 链接文件 (Used In ShowDetailDataFromClass())
   **/
  public set linkFile_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblLinkFile_d', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 菜单控件名 (Used In ShowDetailDataFromClass())
   **/
  public set menuControlName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuControlName_d', value);
  }
  /**
   * 菜单名 (Used In ShowDetailDataFromClass())
   **/
  public set menuName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuName_d', value);
  }
  /**
   * 菜单集Id (Used In ShowDetailDataFromClass())
   **/
  public set menuSetId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuSetId_d', value);
  }
  /**
   * 菜单标题 (Used In ShowDetailDataFromClass())
   **/
  public set menuTitle_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMenuTitle_d', value);
  }
  /**
   * 排序号 (Used In ShowDetailDataFromClass())
   **/
  public set orderNum_d(value: number) {
    SetLabelHtmlByIdInDivObj(
      this.divDetail,
      'lblOrderNum_d',
      value !== null ? value.toString() : '',
    );
  }
  /**
   * 页面显示模式Id (Used In ShowDetailDataFromClass())
   **/
  public set pageDispModeId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPageDispModeId_d', value);
  }
  /**
   * qs参数 (Used In ShowDetailDataFromClass())
   **/
  public set qsParameters_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblqsParameters_d', value);
  }
  /**
   * 项目Id (Used In ShowDetailDataFromClass())
   **/
  public set qxPrjId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQxPrjId_d', value);
  }
  /**
   * 角色Id (Used In ShowDetailDataFromClass())
   **/
  public set roleId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblRoleId_d', value);
  }
  /**
   * 表ID (Used In ShowDetailDataFromClass())
   **/
  public set tabId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblTabId_d', value);
  }
  /**
   * 上级菜单Id (Used In ShowDetailDataFromClass())
   **/
  public set upMenuId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpMenuId_d', value);
  }
}
