/**
 * 类名:clsvTeacherInfoEN
 * 表名:vTeacherInfo(01120094)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 12:05:33
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * v教师(vTeacherInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTabV } from '@/ts/PubFun/clsGeneralTabV';

export class clsvTeacherInfoEN extends clsGeneralTabV {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '02'; //客户端缓存
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
  public static _CurrTabName = 'vTeacherInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdTeacher'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 62;
  public static AttributeName = [
    'idTeacher',
    'teacherId',
    'teacherName',
    'idSex',
    'sexDesc',
    'idSchoolPs',
    'idDisciplinePs',
    'idUniZone',
    'uniZoneDesc',
    'idEthnic',
    'ethnicName',
    'idPolitics',
    'politicsName',
    'idAdminGrade',
    'adminGradeDesc',
    'idProfGrade',
    'profenssionalGradeName',
    'idQualif',
    'qualifDesc',
    'idDegree',
    'degreeName',
    'idStaffType',
    'staffTypeName',
    'idProvince',
    'provinceName',
    'citizenId',
    'cardNo',
    'birthday',
    'graduationMajor',
    'telNo',
    'email',
    'webSite',
    'personBlog',
    'entryDate',
    'offed',
    'isAvconUser',
    'isGpUser',
    'isLocalUser',
    'fromUnit',
    'memo',
    'idXzCollege',
    'collegeId',
    'collegeName',
    'collegeNameA',
    'idXzMajor',
    'entryDay',
    'idPhoto',
    'idReligion',
    'religionName',
    'isMessage',
    'microblog',
    'modifyUserId',
    'offedBak',
    'phoneNumber',
    'qQ',
    'teachIdCollege',
    'teachIdMajor',
    'tel',
    'modifyDate',
    'registerPassword',
    'entryYear',
    'idCardNo',
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
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsvTeacherInfoEN.con_IdTeacher:
        return this.idTeacher;
      case clsvTeacherInfoEN.con_TeacherId:
        return this.teacherId;
      case clsvTeacherInfoEN.con_TeacherName:
        return this.teacherName;
      case clsvTeacherInfoEN.con_IdSex:
        return this.idSex;
      case clsvTeacherInfoEN.con_SexDesc:
        return this.sexDesc;
      case clsvTeacherInfoEN.con_IdSchoolPs:
        return this.idSchoolPs;
      case clsvTeacherInfoEN.con_IdDisciplinePs:
        return this.idDisciplinePs;
      case clsvTeacherInfoEN.con_IdUniZone:
        return this.idUniZone;
      case clsvTeacherInfoEN.con_UniZoneDesc:
        return this.uniZoneDesc;
      case clsvTeacherInfoEN.con_IdEthnic:
        return this.idEthnic;
      case clsvTeacherInfoEN.con_EthnicName:
        return this.ethnicName;
      case clsvTeacherInfoEN.con_IdPolitics:
        return this.idPolitics;
      case clsvTeacherInfoEN.con_PoliticsName:
        return this.politicsName;
      case clsvTeacherInfoEN.con_IdAdminGrade:
        return this.idAdminGrade;
      case clsvTeacherInfoEN.con_AdminGradeDesc:
        return this.adminGradeDesc;
      case clsvTeacherInfoEN.con_IdProfGrade:
        return this.idProfGrade;
      case clsvTeacherInfoEN.con_ProfenssionalGradeName:
        return this.profenssionalGradeName;
      case clsvTeacherInfoEN.con_IdQualif:
        return this.idQualif;
      case clsvTeacherInfoEN.con_QualifDesc:
        return this.qualifDesc;
      case clsvTeacherInfoEN.con_IdDegree:
        return this.idDegree;
      case clsvTeacherInfoEN.con_DegreeName:
        return this.degreeName;
      case clsvTeacherInfoEN.con_IdStaffType:
        return this.idStaffType;
      case clsvTeacherInfoEN.con_StaffTypeName:
        return this.staffTypeName;
      case clsvTeacherInfoEN.con_IdProvince:
        return this.idProvince;
      case clsvTeacherInfoEN.con_ProvinceName:
        return this.provinceName;
      case clsvTeacherInfoEN.con_CitizenId:
        return this.citizenId;
      case clsvTeacherInfoEN.con_CardNo:
        return this.cardNo;
      case clsvTeacherInfoEN.con_Birthday:
        return this.birthday;
      case clsvTeacherInfoEN.con_GraduationMajor:
        return this.graduationMajor;
      case clsvTeacherInfoEN.con_TelNo:
        return this.telNo;
      case clsvTeacherInfoEN.con_Email:
        return this.email;
      case clsvTeacherInfoEN.con_WebSite:
        return this.webSite;
      case clsvTeacherInfoEN.con_PersonBlog:
        return this.personBlog;
      case clsvTeacherInfoEN.con_EntryDate:
        return this.entryDate;
      case clsvTeacherInfoEN.con_Offed:
        return this.offed;
      case clsvTeacherInfoEN.con_IsAvconUser:
        return this.isAvconUser;
      case clsvTeacherInfoEN.con_IsGpUser:
        return this.isGpUser;
      case clsvTeacherInfoEN.con_IsLocalUser:
        return this.isLocalUser;
      case clsvTeacherInfoEN.con_FromUnit:
        return this.fromUnit;
      case clsvTeacherInfoEN.con_Memo:
        return this.memo;
      case clsvTeacherInfoEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsvTeacherInfoEN.con_CollegeId:
        return this.collegeId;
      case clsvTeacherInfoEN.con_CollegeName:
        return this.collegeName;
      case clsvTeacherInfoEN.con_CollegeNameA:
        return this.collegeNameA;
      case clsvTeacherInfoEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsvTeacherInfoEN.con_EntryDay:
        return this.entryDay;
      case clsvTeacherInfoEN.con_IdPhoto:
        return this.idPhoto;
      case clsvTeacherInfoEN.con_IdReligion:
        return this.idReligion;
      case clsvTeacherInfoEN.con_ReligionName:
        return this.religionName;
      case clsvTeacherInfoEN.con_IsMessage:
        return this.isMessage;
      case clsvTeacherInfoEN.con_Microblog:
        return this.microblog;
      case clsvTeacherInfoEN.con_ModifyUserId:
        return this.modifyUserId;
      case clsvTeacherInfoEN.con_OffedBak:
        return this.offedBak;
      case clsvTeacherInfoEN.con_PhoneNumber:
        return this.phoneNumber;
      case clsvTeacherInfoEN.con_QQ:
        return this.qQ;
      case clsvTeacherInfoEN.con_TeachIdCollege:
        return this.teachIdCollege;
      case clsvTeacherInfoEN.con_TeachIdMajor:
        return this.teachIdMajor;
      case clsvTeacherInfoEN.con_Tel:
        return this.tel;
      case clsvTeacherInfoEN.con_ModifyDate:
        return this.modifyDate;
      case clsvTeacherInfoEN.con_RegisterPassword:
        return this.registerPassword;
      case clsvTeacherInfoEN.con_EntryYear:
        return this.entryYear;
      case clsvTeacherInfoEN.con_IdCardNo:
        return this.idCardNo;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo]中不存在!`;
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
      case clsvTeacherInfoEN.con_IdTeacher:
        this.idTeacher = strValue;
        break;
      case clsvTeacherInfoEN.con_TeacherId:
        this.teacherId = strValue;
        break;
      case clsvTeacherInfoEN.con_TeacherName:
        this.teacherName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdSex:
        this.idSex = strValue;
        break;
      case clsvTeacherInfoEN.con_SexDesc:
        this.sexDesc = strValue;
        break;
      case clsvTeacherInfoEN.con_IdSchoolPs:
        this.idSchoolPs = strValue;
        break;
      case clsvTeacherInfoEN.con_IdDisciplinePs:
        this.idDisciplinePs = strValue;
        break;
      case clsvTeacherInfoEN.con_IdUniZone:
        this.idUniZone = strValue;
        break;
      case clsvTeacherInfoEN.con_UniZoneDesc:
        this.uniZoneDesc = strValue;
        break;
      case clsvTeacherInfoEN.con_IdEthnic:
        this.idEthnic = strValue;
        break;
      case clsvTeacherInfoEN.con_EthnicName:
        this.ethnicName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdPolitics:
        this.idPolitics = strValue;
        break;
      case clsvTeacherInfoEN.con_PoliticsName:
        this.politicsName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdAdminGrade:
        this.idAdminGrade = strValue;
        break;
      case clsvTeacherInfoEN.con_AdminGradeDesc:
        this.adminGradeDesc = strValue;
        break;
      case clsvTeacherInfoEN.con_IdProfGrade:
        this.idProfGrade = strValue;
        break;
      case clsvTeacherInfoEN.con_ProfenssionalGradeName:
        this.profenssionalGradeName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdQualif:
        this.idQualif = strValue;
        break;
      case clsvTeacherInfoEN.con_QualifDesc:
        this.qualifDesc = strValue;
        break;
      case clsvTeacherInfoEN.con_IdDegree:
        this.idDegree = strValue;
        break;
      case clsvTeacherInfoEN.con_DegreeName:
        this.degreeName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdStaffType:
        this.idStaffType = strValue;
        break;
      case clsvTeacherInfoEN.con_StaffTypeName:
        this.staffTypeName = strValue;
        break;
      case clsvTeacherInfoEN.con_IdProvince:
        this.idProvince = strValue;
        break;
      case clsvTeacherInfoEN.con_ProvinceName:
        this.provinceName = strValue;
        break;
      case clsvTeacherInfoEN.con_CitizenId:
        this.citizenId = strValue;
        break;
      case clsvTeacherInfoEN.con_CardNo:
        this.cardNo = strValue;
        break;
      case clsvTeacherInfoEN.con_Birthday:
        this.birthday = strValue;
        break;
      case clsvTeacherInfoEN.con_GraduationMajor:
        this.graduationMajor = strValue;
        break;
      case clsvTeacherInfoEN.con_TelNo:
        this.telNo = strValue;
        break;
      case clsvTeacherInfoEN.con_Email:
        this.email = strValue;
        break;
      case clsvTeacherInfoEN.con_WebSite:
        this.webSite = strValue;
        break;
      case clsvTeacherInfoEN.con_PersonBlog:
        this.personBlog = strValue;
        break;
      case clsvTeacherInfoEN.con_EntryDate:
        this.entryDate = strValue;
        break;
      case clsvTeacherInfoEN.con_Offed:
        this.offed = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_IsAvconUser:
        this.isAvconUser = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_IsGpUser:
        this.isGpUser = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_IsLocalUser:
        this.isLocalUser = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_FromUnit:
        this.fromUnit = strValue;
        break;
      case clsvTeacherInfoEN.con_Memo:
        this.memo = strValue;
        break;
      case clsvTeacherInfoEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        break;
      case clsvTeacherInfoEN.con_CollegeId:
        this.collegeId = strValue;
        break;
      case clsvTeacherInfoEN.con_CollegeName:
        this.collegeName = strValue;
        break;
      case clsvTeacherInfoEN.con_CollegeNameA:
        this.collegeNameA = strValue;
        break;
      case clsvTeacherInfoEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        break;
      case clsvTeacherInfoEN.con_EntryDay:
        this.entryDay = strValue;
        break;
      case clsvTeacherInfoEN.con_IdPhoto:
        this.idPhoto = strValue;
        break;
      case clsvTeacherInfoEN.con_IdReligion:
        this.idReligion = strValue;
        break;
      case clsvTeacherInfoEN.con_ReligionName:
        this.religionName = strValue;
        break;
      case clsvTeacherInfoEN.con_IsMessage:
        this.isMessage = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_Microblog:
        this.microblog = strValue;
        break;
      case clsvTeacherInfoEN.con_ModifyUserId:
        this.modifyUserId = strValue;
        break;
      case clsvTeacherInfoEN.con_OffedBak:
        this.offedBak = Boolean(strValue);
        break;
      case clsvTeacherInfoEN.con_PhoneNumber:
        this.phoneNumber = strValue;
        break;
      case clsvTeacherInfoEN.con_QQ:
        this.qQ = strValue;
        break;
      case clsvTeacherInfoEN.con_TeachIdCollege:
        this.teachIdCollege = strValue;
        break;
      case clsvTeacherInfoEN.con_TeachIdMajor:
        this.teachIdMajor = strValue;
        break;
      case clsvTeacherInfoEN.con_Tel:
        this.tel = strValue;
        break;
      case clsvTeacherInfoEN.con_ModifyDate:
        this.modifyDate = strValue;
        break;
      case clsvTeacherInfoEN.con_RegisterPassword:
        this.registerPassword = strValue;
        break;
      case clsvTeacherInfoEN.con_EntryYear:
        this.entryYear = strValue;
        break;
      case clsvTeacherInfoEN.con_IdCardNo:
        this.idCardNo = strValue;
        break;
      case 'sfFldComparisonOp':
        this.sfFldComparisonOp = strValue;
        break;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[vTeacherInfo]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
        console.error(strMsg);
        break;
    }
  }

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
   */
  public idTeacher = ''; //教师流水号
  public teacherId = ''; //教师工号
  public teacherName = ''; //教师姓名
  public idSex = ''; //性别流水号
  public sexDesc = ''; //性别名称
  public idSchoolPs = ''; //学校流水号
  public idDisciplinePs = ''; //学科流水号
  public idUniZone = ''; //校区流水号
  public uniZoneDesc = ''; //校区名称
  public idEthnic = ''; //民族流水号
  public ethnicName = ''; //民族名称
  public idPolitics = ''; //政治面貌流水号
  public politicsName = ''; //政治面貌
  public idAdminGrade = ''; //行政职务流水号
  public adminGradeDesc = ''; //行政职务描述
  public idProfGrade = ''; //专业职称流水号
  public profenssionalGradeName = ''; //专业职称
  public idQualif = ''; //学历流水号
  public qualifDesc = ''; //QualifDesc
  public idDegree = ''; //学位流水号
  public degreeName = ''; //学位名称
  public idStaffType = ''; //职工类型流水号
  public staffTypeName = ''; //职工类型名称
  public idProvince = ''; //省份流水号
  public provinceName = ''; //ProvinceName
  public citizenId = ''; //身份证号
  public cardNo = ''; //卡号
  public birthday = ''; //出生日期
  public graduationMajor = ''; //毕业专业
  public telNo = ''; //电话
  public email = ''; //电子邮箱
  public webSite = ''; //个人主页
  public personBlog = ''; //个人博客
  public entryDate = ''; //进校日期
  public offed = false; //是否离校
  public isAvconUser = false; //IsAvconUser
  public isGpUser = false; //是否Gp用户
  public isLocalUser = false; //是否本地用户
  public fromUnit = ''; //来自单位
  public memo = ''; //备注
  public idXzCollege = ''; //学院流水号
  public collegeId = ''; //学院ID
  public collegeName = ''; //学院名称
  public collegeNameA = ''; //学院名称简写
  public idXzMajor = ''; //专业流水号
  public entryDay = ''; //EntryDay
  public idPhoto = ''; //id_Photo
  public idReligion = ''; //id_Religion
  public religionName = ''; //ReligionName
  public isMessage = false; //IsMessage
  public microblog = ''; //Microblog
  public modifyUserId = ''; //修改人
  public offedBak = false; //OffedBak
  public phoneNumber = ''; //电话
  public qQ = ''; //QQ
  public teachIdCollege = ''; //Teach_id_College
  public teachIdMajor = ''; //Teach_id_Major
  public tel = ''; //Tel
  public modifyDate = ''; //修改日期
  public registerPassword = ''; //RegisterPassword
  public entryYear = ''; //EntryYear
  public idCardNo = ''; //身份证号

  /**
   * 常量:"IdTeacher"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdTeacher(): string {
    return 'idTeacher';
  } //教师流水号

  /**
   * 常量:"TeacherId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TeacherId(): string {
    return 'teacherId';
  } //教师工号

  /**
   * 常量:"TeacherName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TeacherName(): string {
    return 'teacherName';
  } //教师姓名

  /**
   * 常量:"IdSex"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdSex(): string {
    return 'idSex';
  } //性别流水号

  /**
   * 常量:"SexDesc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_SexDesc(): string {
    return 'sexDesc';
  } //性别名称

  /**
   * 常量:"IdSchoolPs"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdSchoolPs(): string {
    return 'idSchoolPs';
  } //学校流水号

  /**
   * 常量:"IdDisciplinePs"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdDisciplinePs(): string {
    return 'idDisciplinePs';
  } //学科流水号

  /**
   * 常量:"IdUniZone"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdUniZone(): string {
    return 'idUniZone';
  } //校区流水号

  /**
   * 常量:"UniZoneDesc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_UniZoneDesc(): string {
    return 'uniZoneDesc';
  } //校区名称

  /**
   * 常量:"IdEthnic"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdEthnic(): string {
    return 'idEthnic';
  } //民族流水号

  /**
   * 常量:"EthnicName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EthnicName(): string {
    return 'ethnicName';
  } //民族名称

  /**
   * 常量:"IdPolitics"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdPolitics(): string {
    return 'idPolitics';
  } //政治面貌流水号

  /**
   * 常量:"PoliticsName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PoliticsName(): string {
    return 'politicsName';
  } //政治面貌

  /**
   * 常量:"IdAdminGrade"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdAdminGrade(): string {
    return 'idAdminGrade';
  } //行政职务流水号

  /**
   * 常量:"AdminGradeDesc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_AdminGradeDesc(): string {
    return 'adminGradeDesc';
  } //行政职务描述

  /**
   * 常量:"IdProfGrade"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdProfGrade(): string {
    return 'idProfGrade';
  } //专业职称流水号

  /**
   * 常量:"ProfenssionalGradeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProfenssionalGradeName(): string {
    return 'profenssionalGradeName';
  } //专业职称

  /**
   * 常量:"IdQualif"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdQualif(): string {
    return 'idQualif';
  } //学历流水号

  /**
   * 常量:"QualifDesc"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QualifDesc(): string {
    return 'qualifDesc';
  } //QualifDesc

  /**
   * 常量:"IdDegree"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdDegree(): string {
    return 'idDegree';
  } //学位流水号

  /**
   * 常量:"DegreeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_DegreeName(): string {
    return 'degreeName';
  } //学位名称

  /**
   * 常量:"IdStaffType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdStaffType(): string {
    return 'idStaffType';
  } //职工类型流水号

  /**
   * 常量:"StaffTypeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_StaffTypeName(): string {
    return 'staffTypeName';
  } //职工类型名称

  /**
   * 常量:"IdProvince"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdProvince(): string {
    return 'idProvince';
  } //省份流水号

  /**
   * 常量:"ProvinceName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ProvinceName(): string {
    return 'provinceName';
  } //ProvinceName

  /**
   * 常量:"CitizenId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CitizenId(): string {
    return 'citizenId';
  } //身份证号

  /**
   * 常量:"CardNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CardNo(): string {
    return 'cardNo';
  } //卡号

  /**
   * 常量:"Birthday"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Birthday(): string {
    return 'birthday';
  } //出生日期

  /**
   * 常量:"GraduationMajor"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_GraduationMajor(): string {
    return 'graduationMajor';
  } //毕业专业

  /**
   * 常量:"TelNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TelNo(): string {
    return 'telNo';
  } //电话

  /**
   * 常量:"Email"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Email(): string {
    return 'email';
  } //电子邮箱

  /**
   * 常量:"WebSite"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_WebSite(): string {
    return 'webSite';
  } //个人主页

  /**
   * 常量:"PersonBlog"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PersonBlog(): string {
    return 'personBlog';
  } //个人博客

  /**
   * 常量:"EntryDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EntryDate(): string {
    return 'entryDate';
  } //进校日期

  /**
   * 常量:"Offed"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Offed(): string {
    return 'offed';
  } //是否离校

  /**
   * 常量:"IsAvconUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsAvconUser(): string {
    return 'isAvconUser';
  } //IsAvconUser

  /**
   * 常量:"IsGpUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsGpUser(): string {
    return 'isGpUser';
  } //是否Gp用户

  /**
   * 常量:"IsLocalUser"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsLocalUser(): string {
    return 'isLocalUser';
  } //是否本地用户

  /**
   * 常量:"FromUnit"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_FromUnit(): string {
    return 'fromUnit';
  } //来自单位

  /**
   * 常量:"Memo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"IdXzCollege"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"CollegeId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CollegeId(): string {
    return 'collegeId';
  } //学院ID

  /**
   * 常量:"CollegeName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CollegeName(): string {
    return 'collegeName';
  } //学院名称

  /**
   * 常量:"CollegeNameA"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_CollegeNameA(): string {
    return 'collegeNameA';
  } //学院名称简写

  /**
   * 常量:"IdXzMajor"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"EntryDay"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EntryDay(): string {
    return 'entryDay';
  } //EntryDay

  /**
   * 常量:"IdPhoto"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdPhoto(): string {
    return 'idPhoto';
  } //id_Photo

  /**
   * 常量:"IdReligion"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdReligion(): string {
    return 'idReligion';
  } //id_Religion

  /**
   * 常量:"ReligionName"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ReligionName(): string {
    return 'religionName';
  } //ReligionName

  /**
   * 常量:"IsMessage"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IsMessage(): string {
    return 'isMessage';
  } //IsMessage

  /**
   * 常量:"Microblog"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Microblog(): string {
    return 'microblog';
  } //Microblog

  /**
   * 常量:"ModifyUserId"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ModifyUserId(): string {
    return 'modifyUserId';
  } //修改人

  /**
   * 常量:"OffedBak"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_OffedBak(): string {
    return 'offedBak';
  } //OffedBak

  /**
   * 常量:"PhoneNumber"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_PhoneNumber(): string {
    return 'phoneNumber';
  } //电话

  /**
   * 常量:"QQ"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_QQ(): string {
    return 'qQ';
  } //QQ

  /**
   * 常量:"TeachIdCollege"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TeachIdCollege(): string {
    return 'teachIdCollege';
  } //Teach_id_College

  /**
   * 常量:"TeachIdMajor"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TeachIdMajor(): string {
    return 'teachIdMajor';
  } //Teach_id_Major

  /**
   * 常量:"Tel"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Tel(): string {
    return 'tel';
  } //Tel

  /**
   * 常量:"ModifyDate"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_ModifyDate(): string {
    return 'modifyDate';
  } //修改日期

  /**
   * 常量:"RegisterPassword"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_RegisterPassword(): string {
    return 'registerPassword';
  } //RegisterPassword

  /**
   * 常量:"EntryYear"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_EntryYear(): string {
    return 'entryYear';
  } //EntryYear

  /**
   * 常量:"IdCardNo"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdCardNo(): string {
    return 'idCardNo';
  } //身份证号

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
