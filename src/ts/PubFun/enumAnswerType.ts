export type Type_AnswerType = '00' | '01' | '02' | '03' | '04';
/**
 * 根据表内容设置enum列表
 * (AutoGCLib.EntityLayer4TypeScript:Gen_EN_GeneEnumConstList)
 **/
export default class enumAnswerType {
  /**
   * 无
   **/
  static readonly None_00 = '00'; //问题回答
  /**
   * 问题回答
   **/
  static readonly QuestionAnswer_01 = '01'; //问题回答
  /**
   * 组内讨论区
   **/
  static readonly GroupDiscussionArea_02 = '02'; //组内讨论区
  /**
   * 小组推荐答案
   **/
  static readonly AnswersRecommendedByTheGroup_03 = '03'; //小组推荐答案
  /**
   * 组间讨论区
   **/
  static readonly InterGroupDiscussionArea_04 = '04'; //组间讨论区
}
