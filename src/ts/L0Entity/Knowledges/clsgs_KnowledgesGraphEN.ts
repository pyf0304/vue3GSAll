
 /**
 * 类名:clsgs_KnowledgesGraphEN
 * 表名:gs_KnowledgesGraph(01120873)
 * 版本:2023.11.03.1(服务器:WIN-SRV103-116)
 * 日期:2023/11/08 11:45:33
 * 生成者:pyf
 工程名称:问卷调查(0112)
 CM工程:研究生论文学习(变量首字母小写)-全部函数集
 * 相关数据库:103.116.76.183,9433EduHigh_Jsie
 * PrjDataBaseId:0170
 模块中文名:知识点相关(Knowledges)
 * 框架-层名:实体层(TS)(EntityLayer)
 * 编程语言:TypeScript
 **/
 /**
 * 知识点逻辑图(gs_KnowledgesGraph)
 * (AutoGCLib.EntityLayer4TypeScript:GeneCode)
 **/
import { clsGeneralTab } from '@/ts/PubFun/clsGeneralTab';

export class  clsgs_KnowledgesGraphEN extends clsGeneralTab
{
public static CacheAddiCondition = "";//缓存附加条件,作为向后台调取数据的附加条件
public static CacheModeId = "04"; //sessionStorage
public static IsUseDelSign = false; //使用删除标志,记录不能删除,仅设置删除标志
public static WhereFormat = ""; //条件格式串
public static _CurrTabName= "gs_KnowledgesGraph"; //当前表名,与该类相关的表名
public static _KeyFldName= "KnowledgeGraphId"; //当前表中的关键字名称,与该类相关的表中关键字名
public static mintAttributeCount = 17;
public static AttributeName = ["knowledgeGraphId", "knowledgeGraphName", "idCurrEduCls", "courseId", "createUser", "updDate", "updUser", "memo", "graphTypeId", "isDisplay", "isExtend", "isRecommend", "isAnswer", "isSubmit", "startTime", "submitTime", "takeUpTime"];
//以下是属性变量

/**
 * 构造函数
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClassConstructor1)
*/
 constructor()
 {
 super();
 }

/**
 * 设置对象中私有属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPrivateVar)
*/
private mstrKnowledgeGraphId = "";    //知识点图Id
private mstrKnowledgeGraphName = "";    //连连看图名
private mstrIdCurrEduCls = "";    //教学班流水号
private mstrCourseId = "";    //课程Id
private mstrCreateUser = "";    //建立用户
private mstrUpdDate = "";    //修改日期
private mstrUpdUser = "";    //修改人
private mstrMemo = "";    //备注
private mstrGraphTypeId = "";    //图谱类型Id
private mbolIsDisplay = false;    //是否显示
private mbolIsExtend = false;    //是否扩展
private mbolIsRecommend = false;    //是否推荐
private mbolIsAnswer = false;    //是否回答
private mbolIsSubmit = false;    //是否提交
private mstrStartTime = "";    //开始时间
private mstrSubmitTime = "";    //提交时间
private mstrTakeUpTime = "";    //耗时

/**
 * 知识点图Id(说明:;字段类型:char;字段长度:10;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeGraphId (value: string)
{
if (value  != undefined)
{
 this.knowledgeGraphId = value;
    this.hmProperty["knowledgeGraphId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 连连看图名(说明:;字段类型:varchar;字段长度:100;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetKnowledgeGraphName (value: string)
{
if (value  != undefined)
{
 this.knowledgeGraphName = value;
    this.hmProperty["knowledgeGraphName"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 教学班流水号(说明:;字段类型:char;字段长度:8;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIdCurrEduCls (value: string)
{
if (value  != undefined)
{
 this.idCurrEduCls = value;
    this.hmProperty["idCurrEduCls"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 课程Id(说明:;字段类型:char;字段长度:8;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCourseId (value: string)
{
if (value  != undefined)
{
 this.courseId = value;
    this.hmProperty["courseId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 建立用户(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetCreateUser (value: string)
{
if (value  != undefined)
{
 this.createUser = value;
    this.hmProperty["createUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改日期(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdDate (value: string)
{
if (value  != undefined)
{
 this.updDate = value;
    this.hmProperty["updDate"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 修改人(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetUpdUser (value: string)
{
if (value  != undefined)
{
 this.updUser = value;
    this.hmProperty["updUser"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 备注(说明:;字段类型:varchar;字段长度:1000;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetMemo (value: string)
{
if (value  != undefined)
{
 this.memo = value;
    this.hmProperty["memo"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 图谱类型Id(说明:;字段类型:char;字段长度:2;是否可空:False)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetGraphTypeId (value: string)
{
if (value  != undefined)
{
 this.graphTypeId = value;
    this.hmProperty["graphTypeId"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否显示(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsDisplay (value: boolean)
{
if (value  != undefined)
{
 this.isDisplay = value;
    this.hmProperty["isDisplay"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否扩展(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsExtend (value: boolean)
{
if (value  != undefined)
{
 this.isExtend = value;
    this.hmProperty["isExtend"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否推荐(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsRecommend (value: boolean)
{
if (value  != undefined)
{
 this.isRecommend = value;
    this.hmProperty["isRecommend"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否回答(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsAnswer (value: boolean)
{
if (value  != undefined)
{
 this.isAnswer = value;
    this.hmProperty["isAnswer"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 是否提交(说明:;字段类型:bit;字段长度:1;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetIsSubmit (value: boolean)
{
if (value  != undefined)
{
 this.isSubmit = value;
    this.hmProperty["isSubmit"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 开始时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetStartTime (value: string)
{
if (value  != undefined)
{
 this.startTime = value;
    this.hmProperty["startTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 提交时间(说明:;字段类型:varchar;字段长度:20;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetSubmitTime (value: string)
{
if (value  != undefined)
{
 this.submitTime = value;
    this.hmProperty["submitTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}

/**
 * 耗时(说明:;字段类型:varchar;字段长度:50;是否可空:True)
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsProperty)
*/
 public SetTakeUpTime (value: string)
{
if (value  != undefined)
{
 this.takeUpTime = value;
    this.hmProperty["takeUpTime"] = true;
   this.sfUpdFldSetStr = this.updFldString;
}
}


/**
 * 根据字段名获取对象中某字段的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GetFldValue)
 * @param strFldName:字段名
 * @returns 字段值
*/
public GetFldValue(strFldName: string):any
{
let strMsg = "";
switch (strFldName)
{
case clsgs_KnowledgesGraphEN.con_KnowledgeGraphId:
return this.knowledgeGraphId;
case clsgs_KnowledgesGraphEN.con_KnowledgeGraphName:
return this.knowledgeGraphName;
case clsgs_KnowledgesGraphEN.con_IdCurrEduCls:
return this.idCurrEduCls;
case clsgs_KnowledgesGraphEN.con_CourseId:
return this.courseId;
case clsgs_KnowledgesGraphEN.con_CreateUser:
return this.createUser;
case clsgs_KnowledgesGraphEN.con_UpdDate:
return this.updDate;
case clsgs_KnowledgesGraphEN.con_UpdUser:
return this.updUser;
case clsgs_KnowledgesGraphEN.con_Memo:
return this.memo;
case clsgs_KnowledgesGraphEN.con_GraphTypeId:
return this.graphTypeId;
case clsgs_KnowledgesGraphEN.con_IsDisplay:
return this.isDisplay;
case clsgs_KnowledgesGraphEN.con_IsExtend:
return this.isExtend;
case clsgs_KnowledgesGraphEN.con_IsRecommend:
return this.isRecommend;
case clsgs_KnowledgesGraphEN.con_IsAnswer:
return this.isAnswer;
case clsgs_KnowledgesGraphEN.con_IsSubmit:
return this.isSubmit;
case clsgs_KnowledgesGraphEN.con_StartTime:
return this.startTime;
case clsgs_KnowledgesGraphEN.con_SubmitTime:
return this.submitTime;
case clsgs_KnowledgesGraphEN.con_TakeUpTime:
return this.takeUpTime;
case "sfUpdFldSetStr":
return this.sfUpdFldSetStr;
case "sfFldComparisonOp":
return this.sfFldComparisonOp;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraph]中不存在!`;
console.error(strMsg);
return "";
}
}

/**
 * 设置对象中某字段名的值.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_SetFldValue)
 * @param strFldName:字段名
 * @param strValue:字段值
 * @returns 字段值
*/
public SetFldValue(strFldName: string, strValue:string)
{
const strThisFuncName = "SetFldValue";
let strMsg = "";
switch (strFldName)
{
case clsgs_KnowledgesGraphEN.con_KnowledgeGraphId:
this.knowledgeGraphId = strValue;
    this.hmProperty["knowledgeGraphId"] = true;
break;
case clsgs_KnowledgesGraphEN.con_KnowledgeGraphName:
this.knowledgeGraphName = strValue;
    this.hmProperty["knowledgeGraphName"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IdCurrEduCls:
this.idCurrEduCls = strValue;
    this.hmProperty["idCurrEduCls"] = true;
break;
case clsgs_KnowledgesGraphEN.con_CourseId:
this.courseId = strValue;
    this.hmProperty["courseId"] = true;
break;
case clsgs_KnowledgesGraphEN.con_CreateUser:
this.createUser = strValue;
    this.hmProperty["createUser"] = true;
break;
case clsgs_KnowledgesGraphEN.con_UpdDate:
this.updDate = strValue;
    this.hmProperty["updDate"] = true;
break;
case clsgs_KnowledgesGraphEN.con_UpdUser:
this.updUser = strValue;
    this.hmProperty["updUser"] = true;
break;
case clsgs_KnowledgesGraphEN.con_Memo:
this.memo = strValue;
    this.hmProperty["memo"] = true;
break;
case clsgs_KnowledgesGraphEN.con_GraphTypeId:
this.graphTypeId = strValue;
    this.hmProperty["graphTypeId"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IsDisplay:
this.isDisplay = Boolean(strValue);
    this.hmProperty["isDisplay"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IsExtend:
this.isExtend = Boolean(strValue);
    this.hmProperty["isExtend"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IsRecommend:
this.isRecommend = Boolean(strValue);
    this.hmProperty["isRecommend"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IsAnswer:
this.isAnswer = Boolean(strValue);
    this.hmProperty["isAnswer"] = true;
break;
case clsgs_KnowledgesGraphEN.con_IsSubmit:
this.isSubmit = Boolean(strValue);
    this.hmProperty["isSubmit"] = true;
break;
case clsgs_KnowledgesGraphEN.con_StartTime:
this.startTime = strValue;
    this.hmProperty["startTime"] = true;
break;
case clsgs_KnowledgesGraphEN.con_SubmitTime:
this.submitTime = strValue;
    this.hmProperty["submitTime"] = true;
break;
case clsgs_KnowledgesGraphEN.con_TakeUpTime:
this.takeUpTime = strValue;
    this.hmProperty["takeUpTime"] = true;
break;
case "sfUpdFldSetStr":
this.sfUpdFldSetStr = strValue;
break;
case "sfFldComparisonOp":
this.sfFldComparisonOp = strValue;
break;
default:
strMsg = `字段名:[${strFldName}]在表对象:[gs_KnowledgesGraph]中不存在!(in ${this.constructor.name}.${strThisFuncName})`;
console.error(strMsg);
break;
}
}

/**
 * 设置对象中公共属性.
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_ClsPublicVar)
*/
public knowledgeGraphId = "";    //知识点图Id
public knowledgeGraphName = "";    //连连看图名
public idCurrEduCls = "";    //教学班流水号
public courseId = "";    //课程Id
public createUser = "";    //建立用户
public updDate = "";    //修改日期
public updUser = "";    //修改人
public memo = "";    //备注
public graphTypeId = "";    //图谱类型Id
public isDisplay = false;    //是否显示
public isExtend = false;    //是否扩展
public isRecommend = false;    //是否推荐
public isAnswer = false;    //是否回答
public isSubmit = false;    //是否提交
public startTime = "";    //开始时间
public submitTime = "";    //提交时间
public takeUpTime = "";    //耗时


 /**
 * 常量:"KnowledgeGraphId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeGraphId(): string {return "knowledgeGraphId";}    //知识点图Id

 /**
 * 常量:"KnowledgeGraphName"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_KnowledgeGraphName(): string {return "knowledgeGraphName";}    //连连看图名

 /**
 * 常量:"IdCurrEduCls"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IdCurrEduCls(): string {return "idCurrEduCls";}    //教学班流水号

 /**
 * 常量:"CourseId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CourseId(): string {return "courseId";}    //课程Id

 /**
 * 常量:"CreateUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_CreateUser(): string {return "createUser";}    //建立用户

 /**
 * 常量:"UpdDate"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdDate(): string {return "updDate";}    //修改日期

 /**
 * 常量:"UpdUser"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_UpdUser(): string {return "updUser";}    //修改人

 /**
 * 常量:"Memo"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_Memo(): string {return "memo";}    //备注

 /**
 * 常量:"GraphTypeId"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_GraphTypeId(): string {return "graphTypeId";}    //图谱类型Id

 /**
 * 常量:"IsDisplay"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsDisplay(): string {return "isDisplay";}    //是否显示

 /**
 * 常量:"IsExtend"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsExtend(): string {return "isExtend";}    //是否扩展

 /**
 * 常量:"IsRecommend"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsRecommend(): string {return "isRecommend";}    //是否推荐

 /**
 * 常量:"IsAnswer"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsAnswer(): string {return "isAnswer";}    //是否回答

 /**
 * 常量:"IsSubmit"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_IsSubmit(): string {return "isSubmit";}    //是否提交

 /**
 * 常量:"StartTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_StartTime(): string {return "startTime";}    //开始时间

 /**
 * 常量:"SubmitTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_SubmitTime(): string {return "submitTime";}    //提交时间

 /**
 * 常量:"TakeUpTime"
 * (AGC.BusinessLogicEx.clsPrjTabFldBLEx:DefPropertyNameConst)
 */
 public static get con_TakeUpTime(): string {return "takeUpTime";}    //耗时

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
if (Object.prototype.hasOwnProperty.call(this.dicFldComparisonOp, strFldName) == false)
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
else
{
this.dicFldComparisonOp[strFldName] = strComparisonOp;
}
this.sfFldComparisonOp = JSON.stringify(this.dicFldComparisonOp);
}
}