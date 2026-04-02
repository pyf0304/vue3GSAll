/**
 * 类名:clsTeacherInfoENEx
 * 表名:TeacherInfo(01120093)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 12:12:21
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体扩展层(TS)(EntityLayerEx)
 * 编程语言:TypeScript
 **/
/**
 * 教师(TeacherInfo)
 * (AutoGCLib.EntityLayerEx4TypeScript:GeneCode)
 **/
import { clsTeacherInfoEN } from '@/ts/L0Entity/BaseInfo/clsTeacherInfoEN';

export class clsTeacherInfoENEx extends clsTeacherInfoEN {
  //以下是属性变量

  /**
   * 构造函数
   * (AutoGCLib.EntityLayerEx4TypeScript:GenClassConstructor1)
   **/
  constructor() {
    super();
  }

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strValue;
    switch (strFldName) {
      case 'CtrlId':
        return '';
      case clsTeacherInfoENEx.con_SexDesc:
        return this.sexDesc;
      case clsTeacherInfoENEx.con_UniZoneDesc:
        return this.uniZoneDesc;
      case clsTeacherInfoENEx.con_CollegeName:
        return this.collegeName;
      case clsTeacherInfoENEx.con_EthnicName:
        return this.ethnicName;
      case clsTeacherInfoENEx.con_PoliticsName:
        return this.politicsName;
      case clsTeacherInfoENEx.con_ProfenssionalGradeName:
        return this.profenssionalGradeName;
      case clsTeacherInfoENEx.con_StaffTypeName:
        return this.staffTypeName;
      case clsTeacherInfoENEx.con_MajorName:
        return this.majorName;
      case clsTeacherInfoENEx.con_AdminGradeDesc:
        return this.adminGradeDesc;
      case clsTeacherInfoENEx.con_DateTimeSim:
        return this.dateTimeSim;
      default:
        strValue = super.GetFldValue(strFldName);
        return strValue;
    }
  }

  /**
   * 常量:"SexDesc"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_SexDesc(): string {
    return 'sexDesc';
  } //性别名称

  /**
   * 常量:"UniZoneDesc"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_UniZoneDesc(): string {
    return 'uniZoneDesc';
  } //校区名称

  /**
   * 常量:"CollegeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"EthnicName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_EthnicName(): string {
    return 'ethnicName';
  } //民族名称

  /**
   * 常量:"PoliticsName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_PoliticsName(): string {
    return 'politicsName';
  } //政治面貌

  /**
   * 常量:"ProfenssionalGradeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_ProfenssionalGradeName(): string {
    return 'profenssionalGradeName';
  } //专业职称

  /**
   * 常量:"StaffTypeName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_StaffTypeName(): string {
    return 'staffTypeName';
  } //职工类型名称

  /**
   * 常量:"MajorName"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_MajorName(): string {
    return 'majorName';
  } //专业名称

  /**
   * 常量:"AdminGradeDesc"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_AdminGradeDesc(): string {
    return 'adminGradeDesc';
  } //行政职务描述

  /**
   * 常量:"DateTimeSim"
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_PropertyNameConst)
   */
  public static get con_DateTimeSim(): string {
    return 'dateTimeSim';
  } //简化日期时间

  public sexDesc = ''; //性别名称
  public uniZoneDesc = ''; //校区名称
  public collegeName = ''; //学院名称
  public ethnicName = ''; //民族名称
  public politicsName = ''; //政治面貌
  public profenssionalGradeName = ''; //专业职称
  public staffTypeName = ''; //职工类型名称
  public majorName = ''; //专业名称
  public adminGradeDesc = ''; //行政职务描述
  public dateTimeSim = ''; //简化日期时间

  /**
   * 设置对象中某字段名的值.
   * (AutoGCLib.EntityLayerEx4TypeScript:Gen_ENEx_SetFldValue)
   * @param strFldName:字段名
   * @param strValue:字段值
   * @returns 字段值
   */
  public SetFldValue(strFldName: string, strValue: string) {
    const strThisFuncName = 'SetFldValue';
    let strMsg = '';
    switch (strFldName) {
      case clsTeacherInfoENEx.con_SexDesc:
        this.sexDesc = strValue;
        this.hmProperty['sexDesc'] = true;
        break;
      case clsTeacherInfoENEx.con_UniZoneDesc:
        this.uniZoneDesc = strValue;
        this.hmProperty['uniZoneDesc'] = true;
        break;
      case clsTeacherInfoENEx.con_CollegeName:
        this.collegeName = strValue;
        this.hmProperty['collegeName'] = true;
        break;
      case clsTeacherInfoENEx.con_EthnicName:
        this.ethnicName = strValue;
        this.hmProperty['ethnicName'] = true;
        break;
      case clsTeacherInfoENEx.con_PoliticsName:
        this.politicsName = strValue;
        this.hmProperty['politicsName'] = true;
        break;
      case clsTeacherInfoENEx.con_ProfenssionalGradeName:
        this.profenssionalGradeName = strValue;
        this.hmProperty['profenssionalGradeName'] = true;
        break;
      case clsTeacherInfoENEx.con_StaffTypeName:
        this.staffTypeName = strValue;
        this.hmProperty['staffTypeName'] = true;
        break;
      case clsTeacherInfoENEx.con_MajorName:
        this.majorName = strValue;
        this.hmProperty['majorName'] = true;
        break;
      case clsTeacherInfoENEx.con_AdminGradeDesc:
        this.adminGradeDesc = strValue;
        this.hmProperty['adminGradeDesc'] = true;
        break;
      case clsTeacherInfoENEx.con_DateTimeSim:
        this.dateTimeSim = strValue;
        this.hmProperty['dateTimeSim'] = true;
        break;
      case 'sfUpdFldSetStr':
        this.sfUpdFldSetStr = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TeacherInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }
}
