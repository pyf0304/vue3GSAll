/**
 * 类名:clsPaperSubAttachment
 * 表名:PaperSubAttachment(01120579)
 * 版本:2024.01.20.1(服务器:WIN-SRV103-116)
 * 日期:2024/01/22 15:06:08
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
 * 子观点附件(PaperSubAttachment)
 * (AutoGCLib.StoreEntityLayer4TypeScript:GeneCode)
 **/

export class clsPaperSubAttachment {
  public static _CurrTabName = 'PaperSubAttachment'; //当前表名,与该类相关的表名
  public static _KeyFldName = 'PaperSubAttachmentId'; //当前表中的关键字名称,与该类相关的表中关键字名
  public static mintAttributeCount = 9;
  public static AttributeName = [
    'paperSubAttachmentId',
    'paperSubAttachmentName',
    'filePath',
    'idCurrEduCls',
    'paperRWId',
    'subViewpointId',
    'updUserId',
    'updDate',
    'memo',
  ];
  //以下是属性变量

  /**
   * 设置对象中公共属性.
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_ClsPublicVar)
   */
  public paperSubAttachmentId = 0; //子观点附件Id
  public paperSubAttachmentName = ''; //附件名称
  public filePath = ''; //文件路径
  public idCurrEduCls = ''; //教学班流水号
  public paperRWId = ''; //课文阅读
  public subViewpointId = 0; //子观点Id
  public updUserId = ''; //修改用户Id
  public updDate = ''; //修改日期
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
      case clsPaperSubAttachment.con_PaperSubAttachmentId:
        return this.paperSubAttachmentId;
      case clsPaperSubAttachment.con_PaperSubAttachmentName:
        return this.paperSubAttachmentName;
      case clsPaperSubAttachment.con_FilePath:
        return this.filePath;
      case clsPaperSubAttachment.con_IdCurrEduCls:
        return this.idCurrEduCls;
      case clsPaperSubAttachment.con_PaperRWId:
        return this.paperRWId;
      case clsPaperSubAttachment.con_SubViewpointId:
        return this.subViewpointId;
      case clsPaperSubAttachment.con_UpdUserId:
        return this.updUserId;
      case clsPaperSubAttachment.con_UpdDate:
        return this.updDate;
      case clsPaperSubAttachment.con_Memo:
        return this.memo;
      default:
        strMsg = `字段名:[${strFldName}]在表对象:[PaperSubAttachment]中不存在!`;
        console.error(strMsg);
        return '';
    }
  }

  /**
   * 常量:"PaperSubAttachmentId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PaperSubAttachmentId(): string {
    return 'paperSubAttachmentId';
  } //子观点附件Id

  /**
   * 常量:"PaperSubAttachmentName"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PaperSubAttachmentName(): string {
    return 'paperSubAttachmentName';
  } //附件名称

  /**
   * 常量:"FilePath"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_FilePath(): string {
    return 'filePath';
  } //文件路径

  /**
   * 常量:"IdCurrEduCls"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_IdCurrEduCls(): string {
    return 'idCurrEduCls';
  } //教学班流水号

  /**
   * 常量:"PaperRWId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_PaperRWId(): string {
    return 'paperRWId';
  } //课文阅读

  /**
   * 常量:"SubViewpointId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_SubViewpointId(): string {
    return 'subViewpointId';
  } //子观点Id

  /**
   * 常量:"UpdUserId"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdUserId(): string {
    return 'updUserId';
  } //修改用户Id

  /**
   * 常量:"UpdDate"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_UpdDate(): string {
    return 'updDate';
  } //修改日期

  /**
   * 常量:"Memo"
   * (AutoGCLib.StoreEntityLayer4TypeScript:Gen_StoreEN_PropertyNameConst)
   */
  public static get con_Memo(): string {
    return 'memo';
  } //备注
}
