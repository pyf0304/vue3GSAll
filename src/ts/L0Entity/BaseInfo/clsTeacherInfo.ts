/**
 * 类名:clsTeacherInfo
 * 表名:TeacherInfo(01120093)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 12:12:25
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:基本信息维护(BaseInfo)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 教师(TeacherInfo)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsTeacherInfo {
  public static _CurrTabName = 'TeacherInfo'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'IdTeacher'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 49;
  public static AttributeName = [
    'idTeacher',
    'teacherId',
    'teacherName',
    'idSex',
    'idSchoolPs',
    'idDisciplinePs',
    'idUniZone',
    'idEthnic',
    'idPolitics',
    'idAdminGrade',
    'idProfGrade',
    'idQualif',
    'idDegree',
    'idStaffType',
    'idProvince',
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
    'idXzMajor',
    'entryDay',
    'idPhoto',
    'idReligion',
    'isMessage',
    'microblog',
    'modifyUserId',
    'offedBak',
    'phoneNumber',
    'qQ',
    'teachIdCollege',
    'teachIdMajor',
    'tel',
    'headphoto',
    'modifyDate',
    'registerPassword',
    'teacherPhoto',
    'idCardNo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public idTeacher = ''; //教师流水号
  public teacherId = ''; //教师工号
  public teacherName = ''; //教师姓名
  public idSex = ''; //性别流水号
  public idSchoolPs = ''; //学校流水号
  public idDisciplinePs = ''; //学科流水号
  public idUniZone = ''; //校区流水号
  public idEthnic = ''; //民族流水号
  public idPolitics = ''; //政治面貌流水号
  public idAdminGrade = ''; //行政职务流水号
  public idProfGrade = ''; //专业职称流水号
  public idQualif = ''; //学历流水号
  public idDegree = ''; //学位流水号
  public idStaffType = ''; //职工类型流水号
  public idProvince = ''; //省份流水号
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
  public idXzMajor = ''; //专业流水号
  public entryDay = ''; //EntryDay
  public idPhoto = ''; //id_Photo
  public idReligion = ''; //id_Religion
  public isMessage = false; //IsMessage
  public microblog = ''; //Microblog
  public modifyUserId = ''; //修改人
  public offedBak = false; //OffedBak
  public phoneNumber = ''; //电话
  public qQ = ''; //QQ
  public teachIdCollege = ''; //Teach_id_College
  public teachIdMajor = ''; //Teach_id_Major
  public tel = ''; //Tel
  public headphoto = ''; //Headphoto
  public modifyDate = ''; //修改日期
  public registerPassword = ''; //RegisterPassword
  public teacherPhoto = ''; //TeacherPhoto
  public idCardNo = ''; //身份证号

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsTeacherInfo.con_IdTeacher:
        return this.idTeacher;
      case clsTeacherInfo.con_TeacherId:
        return this.teacherId;
      case clsTeacherInfo.con_TeacherName:
        return this.teacherName;
      case clsTeacherInfo.con_IdSex:
        return this.idSex;
      case clsTeacherInfo.con_IdSchoolPs:
        return this.idSchoolPs;
      case clsTeacherInfo.con_IdDisciplinePs:
        return this.idDisciplinePs;
      case clsTeacherInfo.con_IdUniZone:
        return this.idUniZone;
      case clsTeacherInfo.con_IdEthnic:
        return this.idEthnic;
      case clsTeacherInfo.con_IdPolitics:
        return this.idPolitics;
      case clsTeacherInfo.con_IdAdminGrade:
        return this.idAdminGrade;
      case clsTeacherInfo.con_IdProfGrade:
        return this.idProfGrade;
      case clsTeacherInfo.con_IdQualif:
        return this.idQualif;
      case clsTeacherInfo.con_IdDegree:
        return this.idDegree;
      case clsTeacherInfo.con_IdStaffType:
        return this.idStaffType;
      case clsTeacherInfo.con_IdProvince:
        return this.idProvince;
      case clsTeacherInfo.con_CitizenId:
        return this.citizenId;
      case clsTeacherInfo.con_CardNo:
        return this.cardNo;
      case clsTeacherInfo.con_Birthday:
        return this.birthday;
      case clsTeacherInfo.con_GraduationMajor:
        return this.graduationMajor;
      case clsTeacherInfo.con_TelNo:
        return this.telNo;
      case clsTeacherInfo.con_Email:
        return this.email;
      case clsTeacherInfo.con_WebSite:
        return this.webSite;
      case clsTeacherInfo.con_PersonBlog:
        return this.personBlog;
      case clsTeacherInfo.con_EntryDate:
        return this.entryDate;
      case clsTeacherInfo.con_Offed:
        return this.offed;
      case clsTeacherInfo.con_IsAvconUser:
        return this.isAvconUser;
      case clsTeacherInfo.con_IsGpUser:
        return this.isGpUser;
      case clsTeacherInfo.con_IsLocalUser:
        return this.isLocalUser;
      case clsTeacherInfo.con_FromUnit:
        return this.fromUnit;
      case clsTeacherInfo.con_Memo:
        return this.memo;
      case clsTeacherInfo.con_IdXzCollege:
        return this.idXzCollege;
      case clsTeacherInfo.con_IdXzMajor:
        return this.idXzMajor;
      case clsTeacherInfo.con_EntryDay:
        return this.entryDay;
      case clsTeacherInfo.con_IdPhoto:
        return this.idPhoto;
      case clsTeacherInfo.con_IdReligion:
        return this.idReligion;
      case clsTeacherInfo.con_IsMessage:
        return this.isMessage;
      case clsTeacherInfo.con_Microblog:
        return this.microblog;
      case clsTeacherInfo.con_ModifyUserId:
        return this.modifyUserId;
      case clsTeacherInfo.con_OffedBak:
        return this.offedBak;
      case clsTeacherInfo.con_PhoneNumber:
        return this.phoneNumber;
      case clsTeacherInfo.con_QQ:
        return this.qQ;
      case clsTeacherInfo.con_TeachIdCollege:
        return this.teachIdCollege;
      case clsTeacherInfo.con_TeachIdMajor:
        return this.teachIdMajor;
      case clsTeacherInfo.con_Tel:
        return this.tel;
      case clsTeacherInfo.con_Headphoto:
        return this.headphoto;
      case clsTeacherInfo.con_ModifyDate:
        return this.modifyDate;
      case clsTeacherInfo.con_RegisterPassword:
        return this.registerPassword;
      case clsTeacherInfo.con_TeacherPhoto:
        return this.teacherPhoto;
      case clsTeacherInfo.con_IdCardNo:
        return this.idCardNo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TeacherInfo]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"IdTeacher"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdTeacher(): string {
    return 'idTeacher';
  } //教师流水号

  /**
   * 常量:"TeacherId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TeacherId(): string {
    return 'teacherId';
  } //教师工号

  /**
   * 常量:"TeacherName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TeacherName(): string {
    return 'teacherName';
  } //教师姓名

  /**
   * 常量:"IdSex"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdSex(): string {
    return 'idSex';
  } //性别流水号

  /**
   * 常量:"IdSchoolPs"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdSchoolPs(): string {
    return 'idSchoolPs';
  } //学校流水号

  /**
   * 常量:"IdDisciplinePs"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdDisciplinePs(): string {
    return 'idDisciplinePs';
  } //学科流水号

  /**
   * 常量:"IdUniZone"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdUniZone(): string {
    return 'idUniZone';
  } //校区流水号

  /**
   * 常量:"IdEthnic"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdEthnic(): string {
    return 'idEthnic';
  } //民族流水号

  /**
   * 常量:"IdPolitics"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdPolitics(): string {
    return 'idPolitics';
  } //政治面貌流水号

  /**
   * 常量:"IdAdminGrade"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdAdminGrade(): string {
    return 'idAdminGrade';
  } //行政职务流水号

  /**
   * 常量:"IdProfGrade"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdProfGrade(): string {
    return 'idProfGrade';
  } //专业职称流水号

  /**
   * 常量:"IdQualif"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdQualif(): string {
    return 'idQualif';
  } //学历流水号

  /**
   * 常量:"IdDegree"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdDegree(): string {
    return 'idDegree';
  } //学位流水号

  /**
   * 常量:"IdStaffType"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdStaffType(): string {
    return 'idStaffType';
  } //职工类型流水号

  /**
   * 常量:"IdProvince"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdProvince(): string {
    return 'idProvince';
  } //省份流水号

  /**
   * 常量:"CitizenId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CitizenId(): string {
    return 'citizenId';
  } //身份证号

  /**
   * 常量:"CardNo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_CardNo(): string {
    return 'cardNo';
  } //卡号

  /**
   * 常量:"Birthday"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Birthday(): string {
    return 'birthday';
  } //出生日期

  /**
   * 常量:"GraduationMajor"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_GraduationMajor(): string {
    return 'graduationMajor';
  } //毕业专业

  /**
   * 常量:"TelNo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TelNo(): string {
    return 'telNo';
  } //电话

  /**
   * 常量:"Email"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Email(): string {
    return 'email';
  } //电子邮箱

  /**
   * 常量:"WebSite"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_WebSite(): string {
    return 'webSite';
  } //个人主页

  /**
   * 常量:"PersonBlog"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PersonBlog(): string {
    return 'personBlog';
  } //个人博客

  /**
   * 常量:"EntryDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_EntryDate(): string {
    return 'entryDate';
  } //进校日期

  /**
   * 常量:"Offed"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Offed(): string {
    return 'offed';
  } //是否离校

  /**
   * 常量:"IsAvconUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsAvconUser(): string {
    return 'isAvconUser';
  } //IsAvconUser

  /**
   * 常量:"IsGpUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsGpUser(): string {
    return 'isGpUser';
  } //是否Gp用户

  /**
   * 常量:"IsLocalUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsLocalUser(): string {
    return 'isLocalUser';
  } //是否本地用户

  /**
   * 常量:"FromUnit"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FromUnit(): string {
    return 'fromUnit';
  } //来自单位

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注

  /**
   * 常量:"IdXzCollege"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdXzCollege(): string {
    return 'idXzCollege';
  } //学院流水号

  /**
   * 常量:"IdXzMajor"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdXzMajor(): string {
    return 'idXzMajor';
  } //专业流水号

  /**
   * 常量:"EntryDay"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_EntryDay(): string {
    return 'entryDay';
  } //EntryDay

  /**
   * 常量:"IdPhoto"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdPhoto(): string {
    return 'idPhoto';
  } //id_Photo

  /**
   * 常量:"IdReligion"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdReligion(): string {
    return 'idReligion';
  } //id_Religion

  /**
   * 常量:"IsMessage"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IsMessage(): string {
    return 'isMessage';
  } //IsMessage

  /**
   * 常量:"Microblog"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Microblog(): string {
    return 'microblog';
  } //Microblog

  /**
   * 常量:"ModifyUserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ModifyUserId(): string {
    return 'modifyUserId';
  } //修改人

  /**
   * 常量:"OffedBak"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OffedBak(): string {
    return 'offedBak';
  } //OffedBak

  /**
   * 常量:"PhoneNumber"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PhoneNumber(): string {
    return 'phoneNumber';
  } //电话

  /**
   * 常量:"QQ"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_QQ(): string {
    return 'qQ';
  } //QQ

  /**
   * 常量:"TeachIdCollege"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TeachIdCollege(): string {
    return 'teachIdCollege';
  } //Teach_id_College

  /**
   * 常量:"TeachIdMajor"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TeachIdMajor(): string {
    return 'teachIdMajor';
  } //Teach_id_Major

  /**
   * 常量:"Tel"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Tel(): string {
    return 'tel';
  } //Tel

  /**
   * 常量:"Headphoto"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Headphoto(): string {
    return 'headphoto';
  } //Headphoto

  /**
   * 常量:"ModifyDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ModifyDate(): string {
    return 'modifyDate';
  } //修改日期

  /**
   * 常量:"RegisterPassword"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_RegisterPassword(): string {
    return 'registerPassword';
  } //RegisterPassword

  /**
   * 常量:"TeacherPhoto"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_TeacherPhoto(): string {
    return 'teacherPhoto';
  } //TeacherPhoto

  /**
   * 常量:"IdCardNo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdCardNo(): string {
    return 'idCardNo';
  } //身份证号
}
