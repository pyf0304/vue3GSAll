/**
 * 类名:QxRoleRightRelation_Detail(界面:QxRoleRightRelationCRUD)
 * 表名:QxRoleRightRelation(01120957)
 * 版本:2024.03.11.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/17 14:21:31
 * 生成者:
 工程名称:问卷调查(0112)
 CM工程:游戏化教育平台(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 * 模块中文名:用户管理(UserManage)
 * 框架-层名:Vue_详细信息后台_TS(TS)(Vue_ViewScript_DetailCS_TS)
 * 编程语言:TypeScript
 **/
import { QxRoleRightRelation_GetObjBymIdAsync } from '@/ts/L3ForWApi/UserManage/clsQxRoleRightRelationWApi';
import { ObjectAssign } from '@/ts/PubFun/clsCommFunc4Web';
import { QxRoleRightRelationEx_FuncMapByFldName } from '@/ts/L3ForWApiExShare/UserManage_GP/clsQxRoleRightRelationExWApi';
import { IsNullOrEmpty, Format } from '@/ts/PubFun/clsString';
import { clsQxRoleRightRelationEN } from '@/ts/L0Entity/UserManage/clsQxRoleRightRelationEN';
import { clsQxRoleRightRelationENEx } from '@/ts/L0Entity/UserManage/clsQxRoleRightRelationENEx';
import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { IShowList } from '@/ts/PubFun/IShowList';
import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
/* QxRoleRightRelation_Detail 的摘要说明。其中Q代表查询,U代表修改
   (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:GeneCode)
 */
export abstract class QxRoleRightRelation_Detail {
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
  public HideDialog_QxRoleRightRelation() {
    if (QxRoleRightRelation_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      QxRoleRightRelation_Detail.DetailObj.hideDialog();
    }
  }

  /**
   * 显示对话框
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_ShowDialog)
   **/
  public async ShowDialog_QxRoleRightRelation(strOp: string): Promise<boolean> {
    const strThisFuncName = this.ShowDialog_QxRoleRightRelation.name;
    if (QxRoleRightRelation_Detail.strPageDispModeId == enumPageDispMode.PopupBox_01) {
      if (QxRoleRightRelation_Detail.DetailObj == null) {
        const strMsg = Format(
          '当前详细信息区的DetailObj为空，请检查！(in {0}.{1})',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        return false;
      }
      await QxRoleRightRelation_Detail.DetailObj.showDialog();
    }
    this.divDetail = QxRoleRightRelation_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxRoleRightRelation_Detail.times4TestShowDialog < 2) {
        QxRoleRightRelation_Detail.times4TestShowDialog++;
        setTimeout(() => {
          this.ShowDialog_QxRoleRightRelation(strOp);
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
      QxRoleRightRelation_Detail.times4TestShowDialog = 0;
    }
    if (strOp === 'Detail') {
      this.btnCancelQxRoleRightRelation = '关闭';
    }
    return true;
  }

  /**
   * 获取显示详细信息的div对象
   * (AutoGCLib.Vue_ViewScript_DetailCS_TS4TypeScript:Gen_Vue_TS_GetDivName)
   **/
  public getDivName(): HTMLDivElement | null {
    const strThisFuncName = this.getDivName.name;
    if (QxRoleRightRelation_Detail.strPageDispModeId != enumPageDispMode.PopupBox_01) {
      if (this.divDetail != null) return this.divDetail;
    } else {
      if (QxRoleRightRelation_Detail.DetailObj.dialogVisible == false) {
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
    this.divDetail = QxRoleRightRelation_Detail.DetailObj.$refs.refDivDetail;
    if (this.divDetail == null) {
      if (QxRoleRightRelation_Detail.times4TestShowDialog < 2) {
        QxRoleRightRelation_Detail.times4TestShowDialog++;
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
      QxRoleRightRelation_Detail.times4TestShowDialog = 0;
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
    const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation('Detail');
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
  public async DetailRecord4Func(lngmId: number) {
    const strThisFuncName = this.DetailRecord4Func.name;
    this.btnCancelQxRoleRightRelation = '关闭';
    try {
      const objQxRoleRightRelationEN = await QxRoleRightRelation_GetObjBymIdAsync(lngmId);
      const objQxRoleRightRelationENEx = new clsQxRoleRightRelationENEx();
      ObjectAssign(objQxRoleRightRelationENEx, objQxRoleRightRelationEN);
      await QxRoleRightRelationEx_FuncMapByFldName(
        clsQxRoleRightRelationENEx.con_MyRoleName,
        objQxRoleRightRelationENEx,
      );
      await QxRoleRightRelationEx_FuncMapByFldName(
        clsQxRoleRightRelationENEx.con_RoleName,
        objQxRoleRightRelationENEx,
      );
      await QxRoleRightRelationEx_FuncMapByFldName(
        clsQxRoleRightRelationENEx.con_PrjName,
        objQxRoleRightRelationENEx,
      );
      this.ShowDetailDataFromQxRoleRightRelationClass4Func(objQxRoleRightRelationENEx);
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
    const bolIsSuccess = await this.ShowDialog_QxRoleRightRelation('Detail');
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
  /// <param name = "objQxRoleRightRelationENS">源对象</param>
  /// <returns>目标对象=>clsQxRoleRightRelationEN:objQxRoleRightRelationENT</returns>
  public CopyToEx(objQxRoleRightRelationENS: clsQxRoleRightRelationEN): clsQxRoleRightRelationENEx {
    const strThisFuncName = this.CopyToEx.name;
    const objQxRoleRightRelationENT = new clsQxRoleRightRelationENEx();
    try {
      ObjectAssign(objQxRoleRightRelationENT, objQxRoleRightRelationENS);
      return objQxRoleRightRelationENT;
    } catch (e) {
      const strMsg = Format(
        '(errid:WiTsCs0027)Copy表对象数据出错,{0}.(in {1}.{2})',
        e,
        this.constructor.name,
        strThisFuncName,
      );
      console.error(strMsg);
      alert(strMsg);
      return objQxRoleRightRelationENT;
    }
  }

  /* 函数功能:把类对象的属性内容显示到界面的详细信息区域中
   (AutoGCLib.WA_ViewScript_DetailCS_TS4TypeScript:Gen_WApi_Ts_ShowDetailDataFromClass4Func)
   <param name = "pobjQxRoleRightRelationEN">表实体类对象</param>
 */
  public ShowDetailDataFromQxRoleRightRelationClass4Func(
    pobjQxRoleRightRelationENEx: clsQxRoleRightRelationENEx,
  ) {
    this.myRoleId_d = pobjQxRoleRightRelationENEx.myRoleId; // 主角色Id
    this.roleId_d = pobjQxRoleRightRelationENEx.roleId; // 角色Id
    this.qxPrjId_d = pobjQxRoleRightRelationENEx.qxPrjId; // QxPrjId
    this.myRoleName_d = pobjQxRoleRightRelationENEx.myRoleName; // 主角色名
    this.roleName_d = pobjQxRoleRightRelationENEx.roleName; // 角色名
    this.prjName_d = pobjQxRoleRightRelationENEx.prjName; // PrjName
    this.updDate_d = pobjQxRoleRightRelationENEx.updDate; // 修改日期
    this.updUser_d = pobjQxRoleRightRelationENEx.updUser; // 修改人
    this.memo_d = pobjQxRoleRightRelationENEx.memo; // 备注
  }
  /**
   * 设置取消按钮的标题(Used In DetailRecord())
   **/
  public set btnCancelQxRoleRightRelation(value: string) {
    QxRoleRightRelation_Detail.DetailObj.SetButtonText('btnCancelQxRoleRightRelation', value);
  }
  /**
   * 备注 (Used In ShowDetailDataFromClass4Func())
   **/
  public set memo_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMemo_d', value);
  }
  /**
   * 主角色Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set myRoleId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMyRoleId_d', value);
  }
  /**
   * 主角色Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set myRoleName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblMyRoleName_d', value);
  }
  /**
   * QxPrjId (Used In ShowDetailDataFromClass4Func())
   **/
  public set prjName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblPrjName_d', value);
  }
  /**
   * QxPrjId (Used In ShowDetailDataFromClass4Func())
   **/
  public set qxPrjId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblQxPrjId_d', value);
  }
  /**
   * 角色Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set roleId_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblRoleId_d', value);
  }
  /**
   * 角色Id (Used In ShowDetailDataFromClass4Func())
   **/
  public set roleName_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblRoleName_d', value);
  }
  /**
   * 修改日期 (Used In ShowDetailDataFromClass4Func())
   **/
  public set updDate_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdDate_d', value);
  }
  /**
   * 修改人 (Used In ShowDetailDataFromClass4Func())
   **/
  public set updUser_d(value: string) {
    SetLabelHtmlByIdInDivObj(this.divDetail, 'lblUpdUser_d', value);
  }
}
