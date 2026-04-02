/**
 * 类名:clsSection
 * 表名:Section(01120558)
 * 版本:2024.03.19.1(服务器:WIN-SRV103-116)
 * 日期:2024/03/26 16:51:12
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:研培论文(GradEduPaper)
 * 框架-层名:实体层Store(TS)(StoreEntityLayer)
 * 编程语言:TypeScript
 **/
/**
 * 论文节表(Section)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsSection {
  public static _CurrTabName = 'Section'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'SectionId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 8;
  public static AttributeName = [
    'sectionId',
    'sectionName',
    'paperId',
    'parentId',
    'orderNum',
    'updDate',
    'updUser',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public sectionId = ''; //节Id
  public sectionName = ''; //节名
  public paperId = ''; //论文Id
  public parentId = ''; //父节点Id
  public orderNum = 0; //序号
  public updDate = ''; //修改日期
  public updUser = ''; //修改人
  public memo = ''; //备注

  /**
   * 根据字段名获取对象中某字段的值.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_GetFldValue)
   * @param strFldName:字段名
   * @returns 字段值
   */
  public GetFldValue(strFldName: string): any {
    let strMsg = '';
    switch (strFldName) {
      case clsSection.con_SectionId:
        return this.sectionId;
      case clsSection.con_SectionName:
        return this.sectionName;
      case clsSection.con_PaperId:
        return this.paperId;
      case clsSection.con_ParentId:
        return this.parentId;
      case clsSection.con_OrderNum:
        return this.orderNum;
      case clsSection.con_UpdDate:
        return this.updDate;
      case clsSection.con_UpdUser:
        return this.updUser;
      case clsSection.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[Section]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"SectionId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_SectionId(): string {
    return 'sectionId';
  } //节Id

  /**
   * 常量:"SectionName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_SectionName(): string {
    return 'sectionName';
  } //节名

  /**
   * 常量:"PaperId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PaperId(): string {
    return 'paperId';
  } //论文Id

  /**
   * 常量:"ParentId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_ParentId(): string {
    return 'parentId';
  } //父节点Id

  /**
   * 常量:"OrderNum"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_OrderNum(): string {
    return 'orderNum';
  } //序号

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"UpdUser"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUser(): string {
    return 'updUser';
  } //修改人

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注
}
