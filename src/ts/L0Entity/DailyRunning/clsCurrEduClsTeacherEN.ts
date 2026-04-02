/**
 * 类名:clsCurrEduClsTeacherEN
 * 表名:CurrEduClsTeacher(01120124)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/10 11:54:49
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:日常运行(DailyRunning)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 当前教学班教师(CurrEduClsTeacher)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsCurrEduClsTeacherEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'CurrEduClsTeacher'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdEduClsTeacher'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 13;
  public static AttributeName = [
    'idEduClsTeacher',
    'idCurrEduCls',
    'idTeacher',
    'idPk2EduClsTeacherType',
    'schoolTerm',
    'schoolYear',
    'openBeginDate',
    'openEndDate',
    'orderNum',
    'updDate',
    'lastVisitedDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
   */
  constructor() {
    super();
  }

  /**
   * 设置对象中私有属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
   */
  private mlngIdEduClsTeacher = 0; //教学班老师流水号
  private mstrIdCurrEduCls = ''; //教学班流水号
  private mstrIdTeacher = ''; //教师流水号
  private mstrIdPk2EduClsTeacherType = ''; //教学班老师角色(主讲,辅导)流水号
  private mstrSchoolTerm = ''; //学期
  private mstrSchoolYear = ''; //学年
  private mstrOpenBeginDate = ''; //开放开始日期
  private mstrOpenEndDate = ''; //开放结束日期
  private mintOrderNum = 0; //序号
  private mstrUpdDate = ''; //修改日期
  private mstrLastVisitedDate = ''; //修改日期
  private mstrUpdUser = ''; //修改人
  private mstrMemo = ''; //备注

  /**
   * 教学班老师流水号(说明:;字段类型:bigint;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdEduClsTeacher(value: number) {
    if (value != undefined) {
      this.idEduClsTeacher = value;
      this.hmProperty['idEduClsTeacher'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdCurrEduCls(value: string) {
    if (value != undefined) {
      this.idCurrEduCls = value;
      this.hmProperty['idCurrEduCls'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教师流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdTeacher(value: string) {
    if (value != undefined) {
      this.idTeacher = value;
      this.hmProperty['idTeacher'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教学班老师角色(主讲,辅导)流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdPk2EduClsTeacherType(value: string) {
    if (value != undefined) {
      this.idPk2EduClsTeacherType = value;
      this.hmProperty['idPk2EduClsTeacherType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学期(说明:;字段类型:char;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSchoolTerm(value: string) {
    if (value != undefined) {
      this.schoolTerm = value;
      this.hmProperty['schoolTerm'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学年(说明:;字段类型:varchar;字段长度:10;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetSchoolYear(value: string) {
    if (value != undefined) {
      this.schoolYear = value;
      this.hmProperty['schoolYear'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 开放开始日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpenBeginDate(value: string) {
    if (value != undefined) {
      this.openBeginDate = value;
      this.hmProperty['openBeginDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 开放结束日期(说明:;字段类型:varchar;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOpenEndDate(value: string) {
    if (value != undefined) {
      this.openEndDate = value;
      this.hmProperty['openEndDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 序号(说明:;字段类型:int;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOrderNum(value: number) {
    if (value != undefined) {
      this.orderNum = value;
      this.hmProperty['orderNum'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdDate(value: string) {
    if (value != undefined) {
      this.updDate = value;
      this.hmProperty['updDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetLastVisitedDate(value: string) {
    if (value != undefined) {
      this.lastVisitedDate = value;
      this.hmProperty['lastVisitedDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetUpdUser(value: string) {
    if (value != undefined) {
      this.updUser = value;
      this.hmProperty['updUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMemo(value: string) {
    if (value != undefined) {
      this.memo = value;
      this.hmProperty['memo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsCurrEduClsTeacherEN.con_IdEduClsTeacher:
        return this.idEduClsTeacher;
      case clsCurrEduClsTeacherEN.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsCurrEduClsTeacherEN.con_IdTeacher:
        return this.idTeacher;
      case clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
        return this.idPk2EduClsTeacherType;
      case clsCurrEduClsTeacherEN.con_SchoolTerm:
        return this.schoolTerm;
      case clsCurrEduClsTeacherEN.con_SchoolYear:
        return this.schoolYear;
      case clsCurrEduClsTeacherEN.con_OpenBeginDate:
        return this.openBeginDate;
      case clsCurrEduClsTeacherEN.con_OpenEndDate:
        return this.openEndDate;
      case clsCurrEduClsTeacherEN.con_OrderNum:
        return this.orderNum;
      case clsCurrEduClsTeacherEN.con_UpdDate:
        return this.updDate;
      case clsCurrEduClsTeacherEN.con_LastVisitedDate:
        return this.lastVisitedDate;
      case clsCurrEduClsTeacherEN.con_UpdUser:
        return this.updUser;
      case clsCurrEduClsTeacherEN.con_Memo:
        return this.memo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsTeacher]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsCurrEduClsTeacherEN.con_IdEduClsTeacher:
        this.idEduClsTeacher = Number(strValue);
        this.hmProperty['idEduClsTeacher'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_IdCurrEduCls:
        this.idCurrEduCls = strValue;
        this.hmProperty['idCurrEduCls'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_IdTeacher:
        this.idTeacher = strValue;
        this.hmProperty['idTeacher'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_IdPk2EduClsTeacherType:
        this.idPk2EduClsTeacherType = strValue;
        this.hmProperty['idPk2EduClsTeacherType'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_SchoolTerm:
        this.schoolTerm = strValue;
        this.hmProperty['schoolTerm'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_SchoolYear:
        this.schoolYear = strValue;
        this.hmProperty['schoolYear'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_OpenBeginDate:
        this.openBeginDate = strValue;
        this.hmProperty['openBeginDate'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_OpenEndDate:
        this.openEndDate = strValue;
        this.hmProperty['openEndDate'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_OrderNum:
        this.orderNum = Number(strValue);
        this.hmProperty['orderNum'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_UpdDate:
        this.updDate = strValue;
        this.hmProperty['updDate'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_LastVisitedDate:
        this.lastVisitedDate = strValue;
        this.hmProperty['lastVisitedDate'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_UpdUser:
        this.updUser = strValue;
        this.hmProperty['updUser'] = true;
        break;
      case clsCurrEduClsTeacherEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[CurrEduClsTeacher]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idEduClsTeacher = 0; //教学班老师流水号
  public idCurrEduCls = ''; //教学班流水号
  public idTeacher = ''; //教师流水号
  public idPk2EduClsTeacherType = ''; //教学班老师角色(主讲,辅导)流水号
  public schoolTerm = ''; //学期
  public schoolYear = ''; //学年
  public openBeginDate = ''; //开放开始日期
  public openEndDate = ''; //开放结束日期
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public lastVisitedDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 常量:"IdEduClsTeacher"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdEduClsTeacher(): string {
    return 'idEduClsTeacher';
  } //教学班老师流水号

  /**
   * 常量:"IdCurrEduCls"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"IdTeacher"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdTeacher(): string {
    return 'idTeacher';
  } //教师流水号

  /**
   * 常量:"IdPk2EduClsTeacherType"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_IdPk2EduClsTeacherType(): string {
    return 'idPk2EduClsTeacherType';
  } //教学班老师角色(主讲,辅导)流水号

  /**
   * 常量:"SchoolTerm"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SchoolTerm(): string {
    return 'schoolTerm';
  } //学期

  /**
   * 常量:"SchoolYear"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_SchoolYear(): string {
    return 'schoolYear';
  } //学年

  /**
   * 常量:"OpenBeginDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpenBeginDate(): string {
    return 'openBeginDate';
  } //开放开始日期

  /**
   * 常量:"OpenEndDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OpenEndDate(): string {
    return 'openEndDate';
  } //开放结束日期

  /**
   * 常量:"OrderNum"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"UpdDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"LastVisitedDate"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_LastVisitedDate(): string {
    return 'lastVisitedDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"Memo"
   * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 设置条件字段值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetCondFldValue)
   * @param strFldName:字段名
   * @param strFldValue:字段值
   * @param strComparisonOp:比较操作条符
   * @returns 根据关键字获取的名称
   **/
  public SetCondFldValue(strFldName: string, strFldValue: any, strComparisonOp: string): void {
    this.SetFldValue(strFldName, strFldValue);
    if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false) {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    } else {
      this.dicFldComparisonOp[strFldName] = strComparisonOp;
    }
    this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
  }
}
