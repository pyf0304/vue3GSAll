/**
 * 类名:clsTeacherInfoEN
 * 表名:TeacherInfo(01120093)
 * 版本:2024.01.01.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/14 11:59:13
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
 * 教师(TeacherInfo)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class clsTeacherInfoEN extends clsGeneralTab {
  public static CacheAddiCondition = ''; //缓存附加条件,作为向后台调取数据的附加条件
  public static CacheModeId = '07'; //PiniaStore
  public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
  public static WhereFormat = ''; //条件格式串
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
  private mstrIdTeacher = ''; //教师流水号
  private mstrTeacherId = ''; //教师工号
  private mstrTeacherName = ''; //教师姓名
  private mstrIdSex = ''; //性别流水号
  private mstrIdSchoolPs = ''; //学校流水号
  private mstrIdDisciplinePs = ''; //学科流水号
  private mstrIdUniZone = ''; //校区流水号
  private mstrIdEthnic = ''; //民族流水号
  private mstrIdPolitics = ''; //政治面貌流水号
  private mstrIdAdminGrade = ''; //行政职务流水号
  private mstrIdProfGrade = ''; //专业职称流水号
  private mstrIdQualif = ''; //学历流水号
  private mstrIdDegree = ''; //学位流水号
  private mstrIdStaffType = ''; //职工类型流水号
  private mstrIdProvince = ''; //省份流水号
  private mstrCitizenId = ''; //身份证号
  private mstrCardNo = ''; //卡号
  private mstrBirthday = ''; //出生日期
  private mstrGraduationMajor = ''; //毕业专业
  private mstrTelNo = ''; //电话
  private mstrEmail = ''; //电子邮箱
  private mstrWebSite = ''; //个人主页
  private mstrPersonBlog = ''; //个人博客
  private mstrEntryDate = ''; //进校日期
  private mbolOffed = false; //是否离校
  private mbolIsAvconUser = false; //IsAvconUser
  private mbolIsGpUser = false; //是否Gp用户
  private mbolIsLocalUser = false; //是否本地用户
  private mstrFromUnit = ''; //来自单位
  private mstrMemo = ''; //备注
  private mstrIdXzCollege = ''; //学院流水号
  private mstrIdXzMajor = ''; //专业流水号
  private mstrEntryDay = ''; //EntryDay
  private mstrIdPhoto = ''; //id_Photo
  private mstrIdReligion = ''; //id_Religion
  private mbolIsMessage = false; //IsMessage
  private mstrMicroblog = ''; //Microblog
  private mstrModifyUserId = ''; //修改人
  private mbolOffedBak = false; //OffedBak
  private mstrPhoneNumber = ''; //电话
  private mstrQQ = ''; //QQ
  private mstrTeachIdCollege = ''; //Teach_id_College
  private mstrTeachIdMajor = ''; //Teach_id_Major
  private mstrTel = ''; //Tel
  private mstrHeadphoto = ''; //Headphoto
  private mstrModifyDate = ''; //修改日期
  private mstrRegisterPassword = ''; //RegisterPassword
  private mstrTeacherPhoto = ''; //TeacherPhoto
  private mstrIdCardNo = ''; //身份证号

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
   * 教师工号(说明:;字段类型:varchar;字段长度:12;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeacherId(value: string) {
    if (value != undefined) {
      this.teacherId = value;
      this.hmProperty['teacherId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 教师姓名(说明:;字段类型:varchar;字段长度:50;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeacherName(value: string) {
    if (value != undefined) {
      this.teacherName = value;
      this.hmProperty['teacherName'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 性别流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdSex(value: string) {
    if (value != undefined) {
      this.idSex = value;
      this.hmProperty['idSex'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学校流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdSchoolPs(value: string) {
    if (value != undefined) {
      this.idSchoolPs = value;
      this.hmProperty['idSchoolPs'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学科流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdDisciplinePs(value: string) {
    if (value != undefined) {
      this.idDisciplinePs = value;
      this.hmProperty['idDisciplinePs'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 校区流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdUniZone(value: string) {
    if (value != undefined) {
      this.idUniZone = value;
      this.hmProperty['idUniZone'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 民族流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdEthnic(value: string) {
    if (value != undefined) {
      this.idEthnic = value;
      this.hmProperty['idEthnic'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 政治面貌流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdPolitics(value: string) {
    if (value != undefined) {
      this.idPolitics = value;
      this.hmProperty['idPolitics'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 行政职务流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdAdminGrade(value: string) {
    if (value != undefined) {
      this.idAdminGrade = value;
      this.hmProperty['idAdminGrade'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业职称流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdProfGrade(value: string) {
    if (value != undefined) {
      this.idProfGrade = value;
      this.hmProperty['idProfGrade'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学历流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdQualif(value: string) {
    if (value != undefined) {
      this.idQualif = value;
      this.hmProperty['idQualif'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 学位流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdDegree(value: string) {
    if (value != undefined) {
      this.idDegree = value;
      this.hmProperty['idDegree'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 职工类型流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdStaffType(value: string) {
    if (value != undefined) {
      this.idStaffType = value;
      this.hmProperty['idStaffType'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 省份流水号(说明:;字段类型:char;字段长度:4;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdProvince(value: string) {
    if (value != undefined) {
      this.idProvince = value;
      this.hmProperty['idProvince'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 身份证号(说明:;字段类型:varchar;字段长度:25;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCitizenId(value: string) {
    if (value != undefined) {
      this.citizenId = value;
      this.hmProperty['citizenId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 卡号(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetCardNo(value: string) {
    if (value != undefined) {
      this.cardNo = value;
      this.hmProperty['cardNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 出生日期(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetBirthday(value: string) {
    if (value != undefined) {
      this.birthday = value;
      this.hmProperty['birthday'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 毕业专业(说明:;字段类型:varchar;字段长度:40;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetGraduationMajor(value: string) {
    if (value != undefined) {
      this.graduationMajor = value;
      this.hmProperty['graduationMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 电话(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTelNo(value: string) {
    if (value != undefined) {
      this.telNo = value;
      this.hmProperty['telNo'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 电子邮箱(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEmail(value: string) {
    if (value != undefined) {
      this.email = value;
      this.hmProperty['email'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 个人主页(说明:;字段类型:varchar;字段长度:60;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetWebSite(value: string) {
    if (value != undefined) {
      this.webSite = value;
      this.hmProperty['webSite'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 个人博客(说明:;字段类型:varchar;字段长度:60;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPersonBlog(value: string) {
    if (value != undefined) {
      this.personBlog = value;
      this.hmProperty['personBlog'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 进校日期(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEntryDate(value: string) {
    if (value != undefined) {
      this.entryDate = value;
      this.hmProperty['entryDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否离校(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOffed(value: boolean) {
    if (value != undefined) {
      this.offed = value;
      this.hmProperty['offed'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsAvconUser(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsAvconUser(value: boolean) {
    if (value != undefined) {
      this.isAvconUser = value;
      this.hmProperty['isAvconUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否Gp用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsGpUser(value: boolean) {
    if (value != undefined) {
      this.isGpUser = value;
      this.hmProperty['isGpUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 是否本地用户(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsLocalUser(value: boolean) {
    if (value != undefined) {
      this.isLocalUser = value;
      this.hmProperty['isLocalUser'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 来自单位(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetFromUnit(value: string) {
    if (value != undefined) {
      this.fromUnit = value;
      this.hmProperty['fromUnit'] = true;
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
   * 学院流水号(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzCollege(value: string) {
    if (value != undefined) {
      this.idXzCollege = value;
      this.hmProperty['idXzCollege'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 专业流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdXzMajor(value: string) {
    if (value != undefined) {
      this.idXzMajor = value;
      this.hmProperty['idXzMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * EntryDay(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetEntryDay(value: string) {
    if (value != undefined) {
      this.entryDay = value;
      this.hmProperty['entryDay'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * id_Photo(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdPhoto(value: string) {
    if (value != undefined) {
      this.idPhoto = value;
      this.hmProperty['idPhoto'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * id_Religion(说明:;字段类型:char;字段长度:4;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdReligion(value: string) {
    if (value != undefined) {
      this.idReligion = value;
      this.hmProperty['idReligion'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * IsMessage(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIsMessage(value: boolean) {
    if (value != undefined) {
      this.isMessage = value;
      this.hmProperty['isMessage'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Microblog(说明:;字段类型:varchar;字段长度:200;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetMicroblog(value: string) {
    if (value != undefined) {
      this.microblog = value;
      this.hmProperty['microblog'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改人(说明:;字段类型:varchar;字段长度:18;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyUserId(value: string) {
    if (value != undefined) {
      this.modifyUserId = value;
      this.hmProperty['modifyUserId'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * OffedBak(说明:;字段类型:bit;字段长度:1;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetOffedBak(value: boolean) {
    if (value != undefined) {
      this.offedBak = value;
      this.hmProperty['offedBak'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 电话(说明:;字段类型:varchar;字段长度:15;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetPhoneNumber(value: string) {
    if (value != undefined) {
      this.phoneNumber = value;
      this.hmProperty['phoneNumber'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * QQ(说明:;字段类型:varchar;字段长度:100;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetQQ(value: string) {
    if (value != undefined) {
      this.qQ = value;
      this.hmProperty['qQ'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Teach_id_College(说明:;字段类型:varchar;字段长度:6;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeachIdCollege(value: string) {
    if (value != undefined) {
      this.teachIdCollege = value;
      this.hmProperty['teachIdCollege'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Teach_id_Major(说明:;字段类型:char;字段长度:8;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeachIdMajor(value: string) {
    if (value != undefined) {
      this.teachIdMajor = value;
      this.hmProperty['teachIdMajor'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Tel(说明:;字段类型:varchar;字段长度:50;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTel(value: string) {
    if (value != undefined) {
      this.tel = value;
      this.hmProperty['tel'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * Headphoto(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetHeadphoto(value: string) {
    if (value != undefined) {
      this.headphoto = value;
      this.hmProperty['headphoto'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetModifyDate(value: string) {
    if (value != undefined) {
      this.modifyDate = value;
      this.hmProperty['modifyDate'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * RegisterPassword(说明:;字段类型:varchar;字段长度:30;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetRegisterPassword(value: string) {
    if (value != undefined) {
      this.registerPassword = value;
      this.hmProperty['registerPassword'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * TeacherPhoto(说明:;字段类型:varchar;字段长度:500;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetTeacherPhoto(value: string) {
    if (value != undefined) {
      this.teacherPhoto = value;
      this.hmProperty['teacherPhoto'] = true;
      this.sfUpdFldSetStr = this.updFldString;
    }
  }

  /**
   * 身份证号(说明:;字段类型:varchar;字段长度:20;是否可空:True)
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
   */
  public SetIdCardNo(value: string) {
    if (value != undefined) {
      this.idCardNo = value;
      this.hmProperty['idCardNo'] = true;
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
      case clsTeacherInfoEN.con_IdTeacher:
        return this.idTeacher;
      case clsTeacherInfoEN.con_TeacherId:
        return this.teacherId;
      case clsTeacherInfoEN.con_TeacherName:
        return this.teacherName;
      case clsTeacherInfoEN.con_IdSex:
        return this.idSex;
      case clsTeacherInfoEN.con_IdSchoolPs:
        return this.idSchoolPs;
      case clsTeacherInfoEN.con_IdDisciplinePs:
        return this.idDisciplinePs;
      case clsTeacherInfoEN.con_IdUniZone:
        return this.idUniZone;
      case clsTeacherInfoEN.con_IdEthnic:
        return this.idEthnic;
      case clsTeacherInfoEN.con_IdPolitics:
        return this.idPolitics;
      case clsTeacherInfoEN.con_IdAdminGrade:
        return this.idAdminGrade;
      case clsTeacherInfoEN.con_IdProfGrade:
        return this.idProfGrade;
      case clsTeacherInfoEN.con_IdQualif:
        return this.idQualif;
      case clsTeacherInfoEN.con_IdDegree:
        return this.idDegree;
      case clsTeacherInfoEN.con_IdStaffType:
        return this.idStaffType;
      case clsTeacherInfoEN.con_IdProvince:
        return this.idProvince;
      case clsTeacherInfoEN.con_CitizenId:
        return this.citizenId;
      case clsTeacherInfoEN.con_CardNo:
        return this.cardNo;
      case clsTeacherInfoEN.con_Birthday:
        return this.birthday;
      case clsTeacherInfoEN.con_GraduationMajor:
        return this.graduationMajor;
      case clsTeacherInfoEN.con_TelNo:
        return this.telNo;
      case clsTeacherInfoEN.con_Email:
        return this.email;
      case clsTeacherInfoEN.con_WebSite:
        return this.webSite;
      case clsTeacherInfoEN.con_PersonBlog:
        return this.personBlog;
      case clsTeacherInfoEN.con_EntryDate:
        return this.entryDate;
      case clsTeacherInfoEN.con_Offed:
        return this.offed;
      case clsTeacherInfoEN.con_IsAvconUser:
        return this.isAvconUser;
      case clsTeacherInfoEN.con_IsGpUser:
        return this.isGpUser;
      case clsTeacherInfoEN.con_IsLocalUser:
        return this.isLocalUser;
      case clsTeacherInfoEN.con_FromUnit:
        return this.fromUnit;
      case clsTeacherInfoEN.con_Memo:
        return this.memo;
      case clsTeacherInfoEN.con_IdXzCollege:
        return this.idXzCollege;
      case clsTeacherInfoEN.con_IdXzMajor:
        return this.idXzMajor;
      case clsTeacherInfoEN.con_EntryDay:
        return this.entryDay;
      case clsTeacherInfoEN.con_IdPhoto:
        return this.idPhoto;
      case clsTeacherInfoEN.con_IdReligion:
        return this.idReligion;
      case clsTeacherInfoEN.con_IsMessage:
        return this.isMessage;
      case clsTeacherInfoEN.con_Microblog:
        return this.microblog;
      case clsTeacherInfoEN.con_ModifyUserId:
        return this.modifyUserId;
      case clsTeacherInfoEN.con_OffedBak:
        return this.offedBak;
      case clsTeacherInfoEN.con_PhoneNumber:
        return this.phoneNumber;
      case clsTeacherInfoEN.con_QQ:
        return this.qQ;
      case clsTeacherInfoEN.con_TeachIdCollege:
        return this.teachIdCollege;
      case clsTeacherInfoEN.con_TeachIdMajor:
        return this.teachIdMajor;
      case clsTeacherInfoEN.con_Tel:
        return this.tel;
      case clsTeacherInfoEN.con_Headphoto:
        return this.headphoto;
      case clsTeacherInfoEN.con_ModifyDate:
        return this.modifyDate;
      case clsTeacherInfoEN.con_RegisterPassword:
        return this.registerPassword;
      case clsTeacherInfoEN.con_TeacherPhoto:
        return this.teacherPhoto;
      case clsTeacherInfoEN.con_IdCardNo:
        return this.idCardNo;
      case 'sfUpdFldSetStr':
        return this.sfUpdFldSetStr;
      case 'sfFldComparisonOp':
        return this.sfFldComparisonOp;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[TeacherInfo]中不存在!`;
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
      case clsTeacherInfoEN.con_IdTeacher:
        this.idTeacher = strValue;
        this.hmProperty['idTeacher'] = true;
        break;
      case clsTeacherInfoEN.con_TeacherId:
        this.teacherId = strValue;
        this.hmProperty['teacherId'] = true;
        break;
      case clsTeacherInfoEN.con_TeacherName:
        this.teacherName = strValue;
        this.hmProperty['teacherName'] = true;
        break;
      case clsTeacherInfoEN.con_IdSex:
        this.idSex = strValue;
        this.hmProperty['idSex'] = true;
        break;
      case clsTeacherInfoEN.con_IdSchoolPs:
        this.idSchoolPs = strValue;
        this.hmProperty['idSchoolPs'] = true;
        break;
      case clsTeacherInfoEN.con_IdDisciplinePs:
        this.idDisciplinePs = strValue;
        this.hmProperty['idDisciplinePs'] = true;
        break;
      case clsTeacherInfoEN.con_IdUniZone:
        this.idUniZone = strValue;
        this.hmProperty['idUniZone'] = true;
        break;
      case clsTeacherInfoEN.con_IdEthnic:
        this.idEthnic = strValue;
        this.hmProperty['idEthnic'] = true;
        break;
      case clsTeacherInfoEN.con_IdPolitics:
        this.idPolitics = strValue;
        this.hmProperty['idPolitics'] = true;
        break;
      case clsTeacherInfoEN.con_IdAdminGrade:
        this.idAdminGrade = strValue;
        this.hmProperty['idAdminGrade'] = true;
        break;
      case clsTeacherInfoEN.con_IdProfGrade:
        this.idProfGrade = strValue;
        this.hmProperty['idProfGrade'] = true;
        break;
      case clsTeacherInfoEN.con_IdQualif:
        this.idQualif = strValue;
        this.hmProperty['idQualif'] = true;
        break;
      case clsTeacherInfoEN.con_IdDegree:
        this.idDegree = strValue;
        this.hmProperty['idDegree'] = true;
        break;
      case clsTeacherInfoEN.con_IdStaffType:
        this.idStaffType = strValue;
        this.hmProperty['idStaffType'] = true;
        break;
      case clsTeacherInfoEN.con_IdProvince:
        this.idProvince = strValue;
        this.hmProperty['idProvince'] = true;
        break;
      case clsTeacherInfoEN.con_CitizenId:
        this.citizenId = strValue;
        this.hmProperty['citizenId'] = true;
        break;
      case clsTeacherInfoEN.con_CardNo:
        this.cardNo = strValue;
        this.hmProperty['cardNo'] = true;
        break;
      case clsTeacherInfoEN.con_Birthday:
        this.birthday = strValue;
        this.hmProperty['birthday'] = true;
        break;
      case clsTeacherInfoEN.con_GraduationMajor:
        this.graduationMajor = strValue;
        this.hmProperty['graduationMajor'] = true;
        break;
      case clsTeacherInfoEN.con_TelNo:
        this.telNo = strValue;
        this.hmProperty['telNo'] = true;
        break;
      case clsTeacherInfoEN.con_Email:
        this.email = strValue;
        this.hmProperty['email'] = true;
        break;
      case clsTeacherInfoEN.con_WebSite:
        this.webSite = strValue;
        this.hmProperty['webSite'] = true;
        break;
      case clsTeacherInfoEN.con_PersonBlog:
        this.personBlog = strValue;
        this.hmProperty['personBlog'] = true;
        break;
      case clsTeacherInfoEN.con_EntryDate:
        this.entryDate = strValue;
        this.hmProperty['entryDate'] = true;
        break;
      case clsTeacherInfoEN.con_Offed:
        this.offed = Boolean(strValue);
        this.hmProperty['offed'] = true;
        break;
      case clsTeacherInfoEN.con_IsAvconUser:
        this.isAvconUser = Boolean(strValue);
        this.hmProperty['isAvconUser'] = true;
        break;
      case clsTeacherInfoEN.con_IsGpUser:
        this.isGpUser = Boolean(strValue);
        this.hmProperty['isGpUser'] = true;
        break;
      case clsTeacherInfoEN.con_IsLocalUser:
        this.isLocalUser = Boolean(strValue);
        this.hmProperty['isLocalUser'] = true;
        break;
      case clsTeacherInfoEN.con_FromUnit:
        this.fromUnit = strValue;
        this.hmProperty['fromUnit'] = true;
        break;
      case clsTeacherInfoEN.con_Memo:
        this.memo = strValue;
        this.hmProperty['memo'] = true;
        break;
      case clsTeacherInfoEN.con_IdXzCollege:
        this.idXzCollege = strValue;
        this.hmProperty['idXzCollege'] = true;
        break;
      case clsTeacherInfoEN.con_IdXzMajor:
        this.idXzMajor = strValue;
        this.hmProperty['idXzMajor'] = true;
        break;
      case clsTeacherInfoEN.con_EntryDay:
        this.entryDay = strValue;
        this.hmProperty['entryDay'] = true;
        break;
      case clsTeacherInfoEN.con_IdPhoto:
        this.idPhoto = strValue;
        this.hmProperty['idPhoto'] = true;
        break;
      case clsTeacherInfoEN.con_IdReligion:
        this.idReligion = strValue;
        this.hmProperty['idReligion'] = true;
        break;
      case clsTeacherInfoEN.con_IsMessage:
        this.isMessage = Boolean(strValue);
        this.hmProperty['isMessage'] = true;
        break;
      case clsTeacherInfoEN.con_Microblog:
        this.microblog = strValue;
        this.hmProperty['microblog'] = true;
        break;
      case clsTeacherInfoEN.con_ModifyUserId:
        this.modifyUserId = strValue;
        this.hmProperty['modifyUserId'] = true;
        break;
      case clsTeacherInfoEN.con_OffedBak:
        this.offedBak = Boolean(strValue);
        this.hmProperty['offedBak'] = true;
        break;
      case clsTeacherInfoEN.con_PhoneNumber:
        this.phoneNumber = strValue;
        this.hmProperty['phoneNumber'] = true;
        break;
      case clsTeacherInfoEN.con_QQ:
        this.qQ = strValue;
        this.hmProperty['qQ'] = true;
        break;
      case clsTeacherInfoEN.con_TeachIdCollege:
        this.teachIdCollege = strValue;
        this.hmProperty['teachIdCollege'] = true;
        break;
      case clsTeacherInfoEN.con_TeachIdMajor:
        this.teachIdMajor = strValue;
        this.hmProperty['teachIdMajor'] = true;
        break;
      case clsTeacherInfoEN.con_Tel:
        this.tel = strValue;
        this.hmProperty['tel'] = true;
        break;
      case clsTeacherInfoEN.con_Headphoto:
        this.headphoto = strValue;
        this.hmProperty['headphoto'] = true;
        break;
      case clsTeacherInfoEN.con_ModifyDate:
        this.modifyDate = strValue;
        this.hmProperty['modifyDate'] = true;
        break;
      case clsTeacherInfoEN.con_RegisterPassword:
        this.registerPassword = strValue;
        this.hmProperty['registerPassword'] = true;
        break;
      case clsTeacherInfoEN.con_TeacherPhoto:
        this.teacherPhoto = strValue;
        this.hmProperty['teacherPhoto'] = true;
        break;
      case clsTeacherInfoEN.con_IdCardNo:
        this.idCardNo = strValue;
        this.hmProperty['idCardNo'] = true;
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

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
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
   * 常量:"IdEthnic"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdEthnic(): string {
    return 'idEthnic';
  } //民族流水号

  /**
   * 常量:"IdPolitics"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdPolitics(): string {
    return 'idPolitics';
  } //政治面貌流水号

  /**
   * 常量:"IdAdminGrade"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdAdminGrade(): string {
    return 'idAdminGrade';
  } //行政职务流水号

  /**
   * 常量:"IdProfGrade"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdProfGrade(): string {
    return 'idProfGrade';
  } //专业职称流水号

  /**
   * 常量:"IdQualif"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdQualif(): string {
    return 'idQualif';
  } //学历流水号

  /**
   * 常量:"IdDegree"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdDegree(): string {
    return 'idDegree';
  } //学位流水号

  /**
   * 常量:"IdStaffType"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdStaffType(): string {
    return 'idStaffType';
  } //职工类型流水号

  /**
   * 常量:"IdProvince"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_IdProvince(): string {
    return 'idProvince';
  } //省份流水号

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
   * 常量:"Headphoto"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_Headphoto(): string {
    return 'headphoto';
  } //Headphoto

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
   * 常量:"TeacherPhoto"
   * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_PropertyNameConst)
   */
  public static get con_TeacherPhoto(): string {
    return 'teacherPhoto';
  } //TeacherPhoto

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
