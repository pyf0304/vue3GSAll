<template>
  <div id="divLayoutTea" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>

    <div>
      <!-- 问题  -->
      <div id="div_Questions" class="div_Questions">
        <!-- 问题显示列表  -->
        <div id="div_qa_Questions"> </div>
      </div>
      <!-- 欢迎 -->
      <div v-if="refIsShowHelp" id="div_qa_Welcome">
        <div style="text-align: center"><h2>教师提问使用说明</h2></div>
        <ul>
          <li class="rowtit color1"
            >1、教师可以在问题顶部添加问题，成功添加的问题会推送给当前教学班的所有学生；</li
          >
          <li class="rowtit color2">2、当前界面只有教师可以添加问题，学生只能回答教师问题；</li>
          <li class="rowtit color3"
            >3、不提交的回答其他人看不到，小组内成员回答提交后，在小组内可见；</li
          >
          <li class="rowtit color4"
            >4、组长可以在小组成员的回答中挑选一个回答为母版建立小组推荐回答；</li
          >
          <li class="rowtit color4">5、组员可以对小组推荐回答进行修改，若提交就不能被修改；</li>
          <li class="rowtit color4">6、提交后的小组推荐回答可以被回答该问题的其他小组查看；</li>
          <li class="rowtit color4"
            >7、选中问题可以在显示回答区对问题进行回复、并可以对自己的回答修改、删除；</li
          >
          <li class="rowtit color4">8、选中回答可以对父类回答进行回复；</li>
        </ul>
      </div>

      <!-- 答案显示列表 -->
      <div id="div_qa_Answer1">
        <div class="divComment">
          <div id="J_Short" class="comment-short">
            <div class="comment-title">
              <div style="float: left; width: 100%" class="row mt-1 mb-1">
                <div class="col-8">
                  <span
                    id="Questions_Name"
                    style="float: left"
                    class="questionName text-primary"
                  ></span
                  ><br />
                </div>
                <div class="col-4">
                  <p class="comment-sort">
                    <el-checkbox v-model="checkShowHelp" @change="handleShowHelp"
                      >显示Help</el-checkbox
                    >
                    <button
                      id="btnAddAnswer"
                      type="button"
                      class="btn btn-primary btn-sm"
                      style="width: 150px"
                      @click="btn_Click('AddNewAnswer', '')"
                      >我来回答</button
                    >
                  </p></div
                >
              </div>
              <div style="float: left; width: 100%">
                <CommentHead
                  v-show="questionsId != ''"
                  ref="CommentHeadRef"
                  :menuItems="buttons"
                  @on-item-click="handleItemClick"
                ></CommentHead>
              </div>
            </div>

            <!-- <ul id="tabMenu" class="nav nav-tabs" role="tablist">
              <li id="liAnswer" class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#Answer"
                  @click="li_AnswerMenu_Click('01')"
                  >问题回答<span id="AnswerCount" class="badge badge-pill badge-success">0</span></a
                >
              </li>
              <li id="liDiscuss2" class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#Discuss2"
                  @click="li_AnswerMenu_Click('03')"
                  >组内讨论区<span id="GroupDiscussCount" class="badge badge-pill badge-success"
                    >0</span
                  ></a
                >
              </li>
              <li id="liAnswer2" class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#Answer2"
                  @click="li_AnswerMenu_Click('04')"
                  >小组推荐答案<span
                    id="RecommendAnswerCount"
                    class="badge badge-pill badge-success"
                    >0</span
                  ></a
                >
              </li>
              <li id="liDiscuss" class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#Discuss"
                  @click="li_AnswerMenu_Click('02')"
                  >组间讨论区<span id="DiscussCount" class="badge badge-pill badge-success"
                    >0</span
                  ></a
                >
              </li>
            </ul> -->
            <div class="tab-header">
              <div
                v-for="tab in tabs"
                :key="tab.id"
                :class="{ active: tab.id === activeTabId }"
                @click="changeTab(tab.id)"
              >
                {{ tab.label }}
              </div>
            </div>
            <div class="tab-content">
              <div v-show="activeTabId === 'liAnswer'" id="liAnswer">
                <div id="J_ShortComment_Tea"> </div>
              </div>
              <div v-show="activeTabId === 'liDiscuss'" id="Discuss">
                <div
                  id="J_ShortComment_Discuss"
                  style="overflow-y: auto; overflow-x: hidden; height: 450px"
                >
                </div>
              </div>

              <div v-show="activeTabId === 'liAnswer2'" id="Answer2">
                <div id="J_ShortComment2"> </div>
              </div>
              <div v-show="activeTabId === 'liDiscuss2'" id="Discuss2">
                <div
                  id="J_ShortComment_Discuss2"
                  style="overflow-y: auto; overflow-x: hidden; height: 450px"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 问题编辑 -->
      <div id="divEditQuestionsRegion">
        <div class="modal-content" style="width: 100%">
          <div>
            <h3 id="myModalQuestionsLabel" class="modal-title">问题编辑</h3>
          </div>
          <div class="modal-body">
            <table
              id="tabEdit"
              style="width: 100%"
              class="table table-bordered table-hover table td table-sm"
            >
              <tr style="display: none">
                <td>
                  <input
                    id="txtOrderNum"
                    name="txtOrderNum"
                    class="form-control form-control-sm"
                    style="width: 50px"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea
                    id="txtQuestionsContent"
                    name="txtQuestionsContent"
                    placeholder="问题内容"
                    class="layui-input"
                    style="width: 100%; height: 150px"
                  ></textarea>
                </td>
              </tr>

              <tr style="display: none">
                <td colspan="2">
                  <button
                    type="button"
                    class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
                    @click="InviteOthers_Click('1')"
                  >
                    <font-awesome-icon icon="user-plus" />邀请其他人来回答
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;<input
                    id="chkIsRequestReply"
                    type="checkbox"
                    name="chkIsRequestReply"
                    Text="是否要求回复"
                  />要求回复
                </td>
              </tr>
              <tr>
                <td
                  ><button
                    id="btnCancel1"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btnCancel1_Click()"
                    >取消编辑</button
                  ></td
                >
                <td
                  ><button
                    id="btnOKUpd1"
                    type="button"
                    class="layui-btn"
                    style="width: 100%"
                    @click="btn_Click('QuestionsSubmit', '')"
                    >添加</button
                  ></td
                >
              </tr>
            </table>
          </div>
        </div>
      </div>

      <!-- 答案编辑 -->
      <div id="divEditAnswerRegion">
        <div class="modal-content" style="width: 100%">
          <div class="modal-header">
            <h4 id="myModalAnswerLabel" class="modal-title">回答编辑</h4>
            <span id="AnswerInfo" style="color: red"
              >提示：普通答案建议勾选提交按钮,不勾选不显示.小组推荐答案，可以先不勾选提交.</span
            >
            <span id="AnswerIsSubmit" style="float: right"
              ><input
                id="chkIsSubmit"
                type="checkbox"
                name="chkIsSubmit"
                text="是否提交"
                value="false"
              />是否提交</span
            >
          </div>
          <div class="modal-body">
            <table
              id="tabEdit"
              style="width: 100%"
              class="table table-bordered table-hover table td table-sm"
            >
              <tr>
                <td colspan="2">
                  <textarea
                    id="txt1AnswerContent"
                    placeholder="内容"
                    class="form-control form-control-sm"
                    style="width: 100%; height: 200px"
                  ></textarea>
                </td>
              </tr>
              <tr style="display: none">
                <td colspan="2">
                  <button
                    type="button"
                    class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
                    @click="InviteOthers_Click('2')"
                  >
                    <font-awesome-icon icon="user-plus" />邀请其他人来回答
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  ><button
                    id="btnCancel2"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btnCancel2_Click()"
                    >取消编辑</button
                  ></td
                >
                <td
                  ><button id="btnOKUpd2" type="button" class="layui-btn" style="width: 100%"
                    >添加</button
                  ></td
                >
              </tr>
            </table>
          </div>
        </div>
        <!-- /.modal-content -->
        <!-- /.modal -->
      </div>

      <div class="form-group" style="display: none">
        <div class="col-sm-4">
          <!-- 老的带标签的数据 不更改-->
          <textarea id="inpOldData" rows="2" cols="20" type="text" name="inpOldData"></textarea>
          <!-- 需要比对去标签的数据 -->
          <textarea id="inpLeft" rows="2" cols="20" type="text" name="inpLeft"></textarea>
        </div>

        <textarea id="inpRight" rows="2" cols="20" type="text" name="inpRight"></textarea>
      </div>

      <div id="DiscussEdit" class="DiscussEdit ml-3">
        <table style="width: 95%" class="table table-bordered table-hover table td table-sm">
          <tr>
            <td style="width: 70%">
              <textarea
                id="txtDiscussContent"
                name="txtDiscussContent"
                placeholder="请输入讨论内容"
                class="form-control form-control-sm"
                style="width: 100%; height: 62px"
              ></textarea>
            </td>
            <td style="width: 10%">
              <button
                id="btnDiscussSubmit"
                class="btn btn-outline-info text-nowrap"
                style="width: 90%; height: 62px"
                @click="DiscussSubmit_Click()"
                >发布</button
              >
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!-- 当前教学班Id -->
    <input id="hidIdCurrEduCls" type="hidden" />

    <!-- 答疑Id -->
    <input id="hidqa_PaperId" type="hidden" />
    <!-- 论文Id -->
    <input id="hidPaperId" type="hidden" />

    <!-- 推送ID -->
    <input id="hidPushId" type="hidden" />

    <!-- 主题Id -->
    <input id="hidTopicId" type="hidden" />

    <!-- 问题用户 -->
    <input id="hidQuestionsUser" type="hidden" />
    <!-- 答案排序标识 -->

    <input id="hidOpType" type="hidden" />

    <input id="hidAnswerId" type="hidden" />

    <!-- pdf页码 -->
    <input id="hidPdfPageNum" type="hidden" />

    <!-- pdf内容 -->
    <input id="hidPdfContent" type="hidden" />

    <!-- 答案父节点Id -->
    <input id="hidParentId" type="hidden" />

    <!-- 邀请key -->
    <input id="hidInviteKey" type="hidden" />

    <!-- pdfContent num -->
    <input id="hidleftNum" type="hidden" value="55" />
    <!-- rightContent num -->
    <input id="hidrightNum" type="hidden" value="45" />

    <!-- at用户Id数量 -->
    <input id="hidUserIdLst" type="hidden" />

    <!-- 标注ID -->
    <input id="hidTagsId" type="hidden" />

    <!-- pdf当前页top -->
    <input id="page_top" type="hidden" name="page_top" />

    <!-- pdf当前页内码 -->
    <input id="page_cache" type="hidden" name="page_cache" />

    <!-- pdf——zoom -->
    <input id="pdf_zoom" type="hidden" name="pdf_zoom" />

    <!-- pdf选中文本top  -->
    <input id="pdfDiv_top" type="hidden" name="pdfDiv_top" />

    <!-- pdf选中文本left -->
    <input id="pdfDiv_left" type="hidden" name="pdfDiv_left" />

    <!-- pdf选中文本left -->
    <input id="hidPdfFile" type="hidden" name="hidPdfFile" />

    <!-- 是否推荐  -->
    <input id="hidIsRecommend" type="hidden" />

    <!-- 回答类型  -->
    <input id="hidAnswerTypeId" type="hidden" />
    <!-- 登录用户色码块 -->
    <input id="hidColorCode" type="hidden" />
    <!-- 登录用户Id -->
    <input id="hidUserId" type="hidden" />

    <!-- 排序主键Id -->
    <input id="hidKeyId" type="hidden" />
    <!-- 排序号 -->
    <input id="hidOrderNum" type="hidden" />
    <qa_Questions_EditCom ref="qa_Questions_EditRef"></qa_Questions_EditCom>
    <qa_Answer_EditCom ref="qa_Answer_EditRef"></qa_Answer_EditCom>
    <SysCommentCom
      ref="SysCommentRef"
      :answer-id="refAnswerId"
      :comment-type-id="refCommentTypeId"
      :font-size="refFontSize"
      :pub-parent-id="refPubParentId"
      :score-type="refScoreType"
      :user="refUser"
    ></SysCommentCom>
    <HistoricalVersionCom
      ref="HistoricalVersionRef"
      :key-id="refKeyId"
      :type-id="refTypeId"
    ></HistoricalVersionCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/public.css';
  import '@/assets/css/paperlist.css';
  import '@/assets/css/comment.css';
  import '@/assets/css/SimpleTree.css';

  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { message } from '@/utils/myMessage';
  import { Tea_QA } from '@/views/InteractManage/Tea_QA';
  import qa_Questions_EditCom from '@/views/InteractManage/qa_Questions_Edit.vue';
  import qa_Answer_EditCom from '@/views/InteractManage/qa_Answer_Edit.vue';
  import SysCommentCom from '@/views/GradEduTools/SysComment.vue';
  import HistoricalVersionCom from '@/views/GradEduEx/HistoricalVersion.vue';

  import { qa_Questions_Edit } from '@/viewsBase/InteractManage/qa_Questions_Edit';
  import {
    HideDivInDivObj,
    SetSpanHtmlInDivObj,
    ShowDivInDivObj,
  } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { qa_Answer_EditEx } from '@/views/InteractManage/qa_Answer_EditEx';
  import { CommQuestionAnswer } from '@/views/InteractManage/CommQuestionAnswer';
  import { HistoricalVersionEx } from '@/views/GradEduEx/HistoricalVersionEx';
  import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { pdf_LocationPdfPageNum, pdf_SetClientType } from '@/ts/FunClass/clsPubFun4Pdf';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import CommentHead from '@/ts/components/CommentHead.vue';
  import enumAnswerType from '@/ts/PubFun/enumAnswerType';
  import { qa_Questions_GetObjByQuestionsIdAsync } from '@/ts/L3ForWApi/InteractManage/clsqa_QuestionsWApi';

  export default defineComponent({
    name: 'PaperQA',
    components: {
      // 组件注册
      qa_Questions_EditCom,
      qa_Answer_EditCom,
      SysCommentCom,
      HistoricalVersionCom,
      CommentHead,
    },
    props: {
      paperId: {
        type: String,
        default: '',
      },
      idCurrEduCls: {
        type: String,
        default: '',
      },
      questionsId: {
        type: String,
        default: '',
      },
      topicId: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      // console.log(props);
      const activeTabId = ref('liAnswer');
      const tabs = reactive([
        { id: 'liAnswer', label: '问题回答' },
        { id: 'liDiscuss2', label: '组内讨论区' },
        { id: 'liAnswer2', label: '小组推荐答案' },
        { id: 'liDiscuss', label: '组间讨论区' },
      ]);
      const buttons: Array<clsBtnItem> = [
        { type: 'a', keyId: '01', text: '全部回答', title: '' },
        { type: 'a', keyId: '02', text: '我的回答', title: '' },
        { type: 'a', keyId: '03', text: '最新回答', title: '' },
      ];
      const questionsId = ref('');
      const strTitle = ref('论文答疑表维护');
      const qa_Questions_EditRef = ref();
      const qa_Answer_EditRef = ref();
      const qa_Paper_EditRef = ref();
      const qa_Paper_DetailRef = ref();
      const SysCommentRef = ref();
      const HistoricalVersionRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const refAnswerId = ref('');
      const refCommentTypeId = ref('');
      const refFontSize = ref('');
      const refPubParentId = ref('');
      const refScoreType = ref('');
      const refUser = ref('');
      const refKeyId = ref('');
      const refTypeId = ref('');
      const refIsShowHelp = ref(false);
      const checkShowHelp = ref(false);
      onMounted(() => {
        Tea_QA.vuebtn_Click = btn_Click;
        Tea_QA.GetPropValue = GetPropValue;
        // CommQuestionAnswer.setVuebtn_Click(btn_Click);
        Tea_QA.divLayout = refDivLayout.value;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'questionsId':
            return questionsId.value;

          default:
            return '';
        }
        return '';
      }
      async function handleItemClick(objData: any) {
        await TabQA_Click(objData.keyId);
        console.log('objData:', objData);

        // 处理点击选项后的逻辑
      }

      const handleShowHelp = (newValue: any) => {
        refIsShowHelp.value = newValue;
      };
      //查看评论，调用父界面查看方法strKeyId;答案Id
      function SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
        try {
          console.log(strAnswerId, strUserId, strQuestionsId);
          SysCommentRef.value.showDialog(); // window.parent.SysComment(strAnswerId, strUserId, strQuestionsId);
        } catch (e: any) {
          window.opener.location = '父页面地址';
          window.opener = null;

          window.close();
        }
      }
      function HistoricalVersion(strAnswerId: string, strUserId: string, strQuestionsId: string) {
        try {
          console.log(strAnswerId, strUserId, strQuestionsId);
          HistoricalVersionRef.value.showDialog(); // window.parent.SysComment(strAnswerId, strUserId, strQuestionsId);
        } catch (e: any) {
          window.opener.location = '父页面地址';
          window.opener = null;

          window.close();
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        let arr;
        let strMsg;
        let strAnswerId;
        let strUserId;
        let strQuestionsId;
        // CommQuestionAnswer.setVuebtn_Click(btn_Click);
        switch (strCommandName) {
          case 'Detail':
            break;

          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'UpdateQuestions':
            Tea_QA.EditObj = qa_Questions_EditRef.value;
            qa_Questions_Edit.EditObj = qa_Questions_EditRef.value;
            console.log('Tea_QA.EditRef:', Tea_QA.EditObj);
            break;
          case 'AddNewAnswer':
          case 'UpdateQa_Answer':
            Tea_QA.EditObj = qa_Answer_EditRef.value;
            qa_Answer_Edit.EditObj = qa_Answer_EditRef.value;
            break;
          case 'SysComment':
            arr = strKeyId.split('|');
            if (arr.length != 3) {
              strMsg = `在执行btnSysComment_Click过程中，参数数目不正确！`;
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            strAnswerId = arr[0];
            strUserId = arr[1];
            strQuestionsId = arr[2];
            refAnswerId.value = strAnswerId;
            refUser.value = strUserId;
            refPubParentId.value = strQuestionsId;
            refCommentTypeId.value = '11';
            refScoreType.value = '3';
            CommQuestionAnswer.SysCommentRef = SysCommentRef;

            break;
          case 'SearchParentV':
            if (strKeyId == '') {
              strMsg = `在执行btnSearchParentV_Click过程中，strKeyId不能为空！`;
              console.error(strMsg);
              alert(strMsg);
              return;
            }
            refTypeId.value = '12';
            refKeyId.value = strKeyId;

            CommQuestionAnswer.HistoricalVersionRef = HistoricalVersionRef;
            HistoricalVersionEx.HistoricalVersionRef = HistoricalVersionRef;
            break;
          case 'ShowAnswer':
            arr = strKeyId.split('|');
            if (arr.length != 3) {
              strMsg = `在执行btnShowAnswer_Click过程中，参数数目不正确！`;
              console.error(strMsg);
              alert(strMsg);
              return;
            }

            questionsId.value = arr[0];
            ShowQuestionName();
            // vvuebtn_Click('ShowAnswer', `${strQuestionsId}|${intPdfPageNum}|${strPdfContent}`);
            break;
          default:
            break;
        }
        Tea_QA.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      async function ShowQuestionName() {
        const objqa_Questions = await qa_Questions_GetObjByQuestionsIdAsync(questionsId.value);
        if (objqa_Questions != null) {
          SetSpanHtmlInDivObj(
            refDivLayout.value,
            'Questions_Name',
            `问题:${objqa_Questions.questionsContent}`,
          );
        }
      }
      // 方法定义

      function window_onload() {
        // $('#h1idOrderbyId').val('1');
        $('#hidAnswerTypeId').val('01');

        Getqa_PaperId();

        const objPage = new Tea_QA();
        objPage.PageLoad(enumCommentOrder.AllComment_01);
      }

      function Getqa_PaperId() {
        // let Request = new Object();
        // Request = this.GetRequest();

        const strIdCurrEduCls = props.idCurrEduCls;
        const strTopicId = props.topicId;

        //const strPushId = Request['PushId'];
        const strPaperId = props.paperId;
        const strQuestionsId = props.questionsId;

        if (IsNullOrEmpty(strIdCurrEduCls) == false) {
          clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
        }
        if (IsNullOrEmpty(strTopicId) == false) {
          clsPrivateSessionStorage.topicIdInTree = strTopicId;
        } else {
          $('#liDiscuss').hide();
          $('#liDiscuss2').hide();
          $('#liAnswer2').hide();
        }

        if (strPaperId != null) {
          clsPrivateSessionStorage.paperId = strPaperId;
        }
        if (strQuestionsId != null) {
          questionsId.value = strQuestionsId;
        }
      }

      //   function GetRequest() {
      //     const url = location.search; //获取url中"?"符后的字串
      //     const theRequest = new Object();
      //     if (url.indexOf('?') != -1) {
      //       const str = url.substring(1);
      //       const strs = str.split('&');
      //       for (let i = 0; i < strs.length; i++) {
      //         theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //       }
      //     }
      //     return theRequest;
      //   }
      //全部评论
      function TabQA_Click(strCommentOrder: enumCommentOrder) {
        const objPage = new Tea_QA();

        objPage.Bind_Show3List('', '', strCommentOrder);
      }
      //回答讨论区切换
      function li_AnswerMenu_Click(strAnswerTypeId: string) {
        Tea_QA.answerTypeId = strAnswerTypeId;

        const objPage = new Tea_QA();
        switch (strAnswerTypeId) {
          case enumAnswerType.QuestionAnswer_01:
            $('#div_qa_Questions').css({ height: '300px' });
            //$("#div_qa_Answer").css({ "height": "100%" });
            $('#AllQA').html('全部回答');
            $('#MyQA').html('我的回答');
            $('#NewQA').html('最新回答');
            $('#btnAddAnswer').show();
            $('#btnAddAnswer').html('我来回答');

            HideDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');
            //objPage.btnShowAnswer_Click();
            break;
          case enumAnswerType.InterGroupDiscussionArea_04:
            $('#div_qa_Questions').css({ height: '300px' });
            //$("#div_qa_Answer").css({ "height": "100%" });
            $('#AllQA').html('全部回答');
            $('#MyQA').html('我的回答');
            $('#NewQA').html('最新回答');
            //$('#btnAddAnswer').html("我来回答");
            $('#btnAddAnswer').hide();
            HideDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');
            //objPage.btnShowAnswer_Click();
            break;
          default:
            $('#div_qa_Questions').css({ height: '100px' });
            //$("#div_qa_Answer").css({ "height": "510px" });

            ShowDivInDivObj(Tea_QA.divLayout, 'DiscussEdit');
            $('#btnAddAnswer').hide();

            $('#AllQA').html('全部讨论');
            $('#MyQA').html('我的讨论');
            $('#NewQA').html('最新讨论');
            //$('#btnAddAnswer').show();
            $('#btnAddAnswer').html('参与讨论');
            break;
          //objPage.btnShowDiscuss_Click();
        }
        objPage.Bind_Show3List('', strAnswerTypeId, enumCommentOrder.AllComment_01);

        //atOthers();
      }
      return {
        strTitle,
        btn_Click,
        qa_Paper_EditRef,
        qa_Paper_DetailRef,
        qa_Questions_EditRef,
        qa_Answer_EditRef,
        SysCommentRef,
        HistoricalVersionRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        window_onload,
        SysComment,
        HistoricalVersion,
        refAnswerId,
        refCommentTypeId,
        refKeyId,
        refTypeId,
        refFontSize,
        refPubParentId,
        refScoreType,
        refUser,
        refIsShowHelp,
        handleShowHelp,
        checkShowHelp,
        activeTabId,
        tabs,
        handleItemClick,
        buttons,
        TabQA_Click,
        li_AnswerMenu_Click,
        questionsId,
        ShowQuestionName,
      };
    },

    methods: {
      //锚点
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        Tea_QA.btn_Click('changeTab', tabId, this.refDivLayout);
      },
      /*
          *
       显示对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_ShowDialog)
      */
      AddTags(strOp: string) {
        if (strOp === 'Add') {
          $('#txtTagsContent').val('');
          $('#myModalLabel').html('添加标注');

          $('#btnOKUpd3').html('添加标注');

          //Paper_QUDI.GetMaxStrId('#txtPaperId');
        } else if (strOp === 'Update') {
          $('#myModalLabel').html('修改标注');
          $('#btnOKUpd3').html('修改标注');
        } else if (strOp === 'Detail') {
          $('#btnOKUpd').hide();
          $('#myModalLabel').html('详细信息');
        }
        // $('#divEditTagsRegion').modal('show');
      },

      /*
           *
        显示对话框
       (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_ShowDialog)
       */
      ShowDialog(pstrOp: string) {
        $('#icon').hide();

        const strOp = pstrOp;

        if (strOp === 'Add') {
          $('#txtTagsContent').val('');
          $('#myModalLabel').html('添加标注');

          $('#btnOKUpd3').html('添加标注');

          //Paper_QUDI.GetMaxStrId('#txtPaperId');
        } else if (strOp === 'Update') {
          $('#myModalLabel').html('修改标注');
          $('#btnOKUpd3').html('修改标注');
        } else if (strOp === 'Detail') {
          $('#btnOKUpd').hide();
          $('#myModalLabel').html('详细信息');
        }
        // $('#divEditTagsRegion').modal('show');
      },

      /*
           隐藏对话框
          (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_HideDialog)
          */
      HideDialog() {
        // $('#divEditTagsRegion').modal('hide');
      },

      btnCancel3_Click() {
        $('#div_Tags').show();
        $('#div_qa_Welcome').show();
        $('#divEditTagsRegion').hide();
      },

      //点击标注定位pdf
      btnShowTags_Click(strKey: string, pageNum: number, pdfContent: string) {
        $('#hidTagsId').val(strKey);
        $('#hidPdfContent').val(pdfContent);

        //先清除背景色
        $('#infoTages div').removeClass('liRowsColor');
        //添加背景色
        strKey = `T${strKey}`;
        $(`#${strKey}`).addClass('liRowsColor');

        //定位pdf页码
        // $('#iframe_qaPdf', parent.document).contents().find('#hid1IsQA_Tags').val(2);
        pdf_SetClientType('Tags');

        pdf_LocationPdfPageNum(pageNum, pdfContent);
      },

      //锚点
      btnIndexesTags_Click(strKeyId: string) {
        //先清除观点 和问题的 背景

        //先清除背景色
        $('#infoTages div').removeClass('liRowsColor');
        //添加背景色
        $(`#T${strKeyId}`).addClass('liRowsColor');
      },

      stripscript(s: string) {
        const pattern = new RegExp(
          "[`~!#$^&*()=|{}': ;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]",
        );
        let rs = '';
        for (let i = 0; i < s.length; i++) {
          rs = rs + s.substring(i, 1).replace(pattern, '');
        }
        return rs;
      },

      //通过返回的新的数据循环读取span 存放数组
      GetSpanList() {
        const ColorCode = $('#hidColorCode').val();
        // const strUserId = $('#hidUserId').val();
        const array: string[] = []; //声明一个新的数组
        $('#inpRight span').each(function (index, item) {
          console.log(index, item);
          const val = $(this).html().toString();
          // alert(val);
          array.push(val); //往数组中存入值
        });

        //循环数组数据，比对含有标签的修改数据；如果找到相同地方，取出然后替换增加背景标签插入到修改段落中；
        // $.each(array, function (index, value) {
        for (const value of array) {
          const txt = $('#txtAnswerContent').val()?.toString();
          console.log(txt);
          const strResult = this.stripscript(value);
          if (txt != undefined) {
            const tt = txt.replace(
              new RegExp(strResult, 'g'),
              `<span style="color: ${ColorCode};">${strResult}</span>`,
            );
            $('#txtAnswerContent').val(tt);
          }
        }
      },

      //所有用户自定义的JS函数建议都放在这里
      startCompare() {
        const a = $('#inpLeft').val()?.toString().trim();
        if (a == undefined) return;
        let stra = a.replace(/<[^<>]+>/g, ''); //去掉html
        stra = stra.replace(/[\r\n]/g, ''); //去掉回车
        // const stra1 = a.replace(/<\/?.+?>/g, '')

        //const b = $.trim($("#inpRight").val());
        const b = $('#txtAnswerContent').val()?.toString().trim();
        if (b == undefined) return;
        let strb = b.replace(/<[^<>]+>/g, ''); // //去掉html
        strb = strb.replace(/[\r\n]/g, ''); //去掉回车

        // const strb1 = b.replace(/<\/?.+?>/g, '')
        const result = this.getHighLightDifferent(stra, strb);
        //getHighLightDifferent("1000", "10012");

        $('#show1').html(result[0]); //老的数据
        //$("#show2").html(result[1]);//返回新的数据
        $('#inpRight').html(result[1]); //返回新的数据存放div中

        //把返回的比对后的不同高亮数据循环得到存入数组
        //   GetSpanList();
        return false;
      },

      // const flag = 1;

      getHighLightDifferent(a: any, b: any) {
        //console.log("输入：" + a);
        //console.log("输入：" + b);

        const temp = this.getDiffArray(a, b);
        const a1 = this.getHighLight(a, temp[0]);
        //console.log("输出：" + a1);

        const a2 = this.getHighLight(b, temp[1]);
        //console.log("输出：" + a2);
        //console.log(flag);
        const aa = [a1, a2];
        return aa;
      },

      getHighLight(source: string, temp: string) {
        const ColorCode = $('#hidColorCode').val();
        const strUserId = $('#hidUserId').val();
        let result = '';
        const sourceChars = source.split('');
        const tempChars = temp.split('');
        let flag = false;
        for (let i = 0; i < sourceChars.length; i++) {
          if (tempChars[i] != ' ') {
            if (i == 0) {
              //result.append("<span style='color: blue'>");
              result += `<span style='color: ${ColorCode}' name='${strUserId}'>`;
              //result.append("<span style='color: " + ColorCode + "'>");
              result += sourceChars[i];
            } else if (flag) {
              result += sourceChars[i];
            } else {
              //result.append("<span style='color: blue'>");
              result += `<span style='color: ${ColorCode}' name='${strUserId}'>`;
              //result.append("<span style='color: " + ColorCode + "'>");
              result += sourceChars[i];
            }
            flag = true;
            if (i == sourceChars.length - 1) {
              result += '</span>';
            }
          } else if (flag == true) {
            result += '</span>';
            result += sourceChars[i];
            flag = false;
          } else {
            result += sourceChars[i];
          }
        }
        return result;
      },

      getDiffArray(a: any, b: any) {
        let result: string[] = [];
        //选取长度较小的字符串用来穷举子串
        if (a.length < b.length) {
          const start = 0;
          const end = a.length;
          result = this.getDiff(a, b, start, end);
        } else {
          //   const start = 0;
          //   const end = b.length;
          result = this.getDiff(b, a, 0, b.length);
          result = [result[1], result[0]];
        }
        return result;
      },

      //将a的指定部分与b进行比较生成比对结果
      getDiff(a: any, b: any, start: number, end: number) {
        let result: string[] = [a, b];
        let len = result[0].length;
        while (len > 0) {
          for (let i = start; i < end - len + 1; i++) {
            const sub = result[0].substring(i, i + len);
            let idx = -1;
            if ((idx = result[1].indexOf(sub)) != -1) {
              result[0] = this.setEmpty(result[0], i, i + len);
              result[1] = this.setEmpty(result[1], idx, idx + len);
              if (i > 0) {
                //递归获取空白区域左边差异
                result = this.getDiff(result[0], result[1], start, i);
              }
              if (i + len < end) {
                //递归获取空白区域右边差异
                result = this.getDiff(result[0], result[1], i + len, end);
              }
              len = 0; //退出while循环
              break;
            }
          }
          len = len / 2;
          //len = len - 1;
          //console.log(len);
        }
        //console.log(result.join(""));
        return result;
      },

      //将字符串s指定的区域设置成空格
      setEmpty(s: string, start: number, end: number) {
        const array = s.split('');
        for (let i = start; i < end; i++) {
          array[i] = ' ';
        }
        return array.join('');
      },

      // GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //     const str = url.substring(1);
      //     const strs = str.split('&');
      //     for (let i = 0; i < strs.length; i++) {
      //       theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //     }
      //   }
      //   return theRequest;
      // },
      AddQ() {
        $('#icon').hide();
        //$('#div_qa_Questions').hide();
        HideDivInDivObj(Tea_QA.divLayout, 'div_qa_Answer');
        $('#div_qa_Welcome').hide();
        $('#divEditAnswerRegion').hide();

        $('#divEditQuestionsRegion').show();

        if ($('#btnOKUpd1').html() != '确认修改') {
          $('#btnOKUpd1').html('确认添加');
          $('#btnCancel1').html('取消添加');

          $('#txtQuestionsContent').val('');
        }
      },

      //点击问题显示答案
      btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string) {
        $('#div_qa_Welcome').hide();
        ShowDivInDivObj(Tea_QA.divLayout, 'div_qa_Answer');
        this.questionsId = strKey;
        $('#hidPdfContent').val(pdfContent);
        //先清除背景色
        $('#infoSubViewpoint div').removeClass('liRowsColor');
        //添加背景色
        strKey = `Q${strKey}`;
        $(`#${strKey}`).addClass('liRowsColor');

        //定位pdf页码

        //定位pdf页码并高亮

        pdf_LocationPdfPageNum(pageNum, pdfContent);
        const objPage = new Tea_QA();
        objPage.Bind_Show3List('', '', enumCommentOrder.AllComment_01);
        //objPage.btnShowAnswer_Click();
      },
      ////////////////////////////////////////////////////问题//////////////////////////////////////////////////////

      /**显示绑定标注悬浮层 */
      Showdiv_PdfQuestions_Click() {
        const objPage = new Tea_QA();
        objPage.Showdiv_PdfQuestions();
      },

      //锚点
      btnIndexesQuestions_Click(strKeyId: string) {
        //先清除观点 和问题的 背景

        //先清除背景色
        $('#infoSubViewpoint div').removeClass('liRowsColor');
        //添加背景色
        strKeyId = `Q${strKeyId}`;
        $(`#${strKeyId}`).addClass('liRowsColor');
      },

      /*
    删除问题
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btnAddNewRecord_Click)
    */
      btnDelQuestions_Click(strKey: string) {
        const objPage = new Tea_QA();
        objPage.btnDelQuestions_Click(strKey);
      },

      /*
       *  取消问题
       */
      btnCancel1_Click() {
        //$('#div_qa_Questions').show();
        $('#divEditQuestionsRegion').hide();
        $('#div_qa_Welcome').show();
        $('#btnOKUpd1').html('添加');
        $('#btnCancel1').html('取消编辑');
      },

      ////////////////////////////////////////////////////答案//////////////////////////////////////////////////////
      /*
       *  添加答案
       */
      btnAddNewAnswer_Click() {
        qa_Answer_EditEx.answerTypeIdTemp = 'root';
        this.instantiateTextbox();

        // const objPage = new Tea_QA();
        // objPage.btnAddNewAnswer_Click();
      },

      //回复弹窗
      btnReplyAnswer_Click(strKeyId: string) {
        qa_Answer_EditEx.answerTypeIdTemp = strKeyId;
        this.instantiateTextbox();

        HideDivInDivObj(Tea_QA.divLayout, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();
        // const objPage = new Tea_QA();
        // objPage.btnAddNewAnswer_Click();
      },

      //回复讨论
      btnReplyDiscuss_Click(strKeyId: string, strUserName: string) {
        const btnReplyDiscuss = $(`#J_Reply${strKeyId}`).html();
        if (btnReplyDiscuss == '回复') {
          qa_Answer_EditEx.answerTypeIdTemp = strKeyId;
          $('#btnDiscussSubmit').html('回复');
          $('#txtDiscussContent').attr('placeholder', `回复 ${strUserName}: `);

          $(`#J_Reply${strKeyId}`).html('收起');
          $(`#J_Reply${strKeyId}`).addClass('operate-visited J_ReplyVisited');
        } else {
          $(`#J_Reply${strKeyId}`).html('回复');
          $(`#J_Reply${strKeyId}`).removeClass('operate-visited J_ReplyVisited');

          qa_Answer_EditEx.answerTypeIdTemp = 'root';
          $('#btnDiscussSubmit').html('发布');
          $('#txtDiscussContent').attr('placeholder', '请输入讨论内容');
          //$("#J_Reply" + strKeyId).addClass("operate-visited J_ReplyVisited")
        }
      },

      /*
    修改答案
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btnAddNewRecord_Click)
    */
      btnUpdateQa_Answer_Click(strKey: string, strTopicId: string) {
        this.instantiateTextbox();

        //ShowDialog('Add');
        //   $("#hidParentId").val("root");

        HideDivInDivObj(Tea_QA.divLayout, 'div_qa_Answer');
        $('#divEditAnswerRegion').show();

        $('#hidIsRecommend').val();
        // const objPage = new Tea_QA();
        // objPage.btnUpdateQa_Answer_Click(strKey, strTopicId);
        console.log(strKey, strTopicId);
      },

      //提交答案
      btnSubmitQa_Answer_Click(strKey: string) {
        const objPage = new Tea_QA();
        objPage.btnSubmitQa_Answer_Click(strKey);
      },

      setTextboxio() {
        // const editors1 = $('#txtAnswerContent').val();
        // const editors = textboxio.get('#txtAnswerContent');
        // const editor = editors[0];
        // editor.content.set(editors1);
      },
      //所有用户自定义的JS函数建议都放在这里
      instantiateTextbox() {
        // textboxio.replace('#txtAnswerContent', {
        //   paste: {
        //     style: 'clean',
        //   },
        //   css: {
        //     stylesheets: ['../textboxio/example.css'],
        //   },
        // });
      },
      /*
    删除问题
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btnAddNewRecord_Click)
    */
      btnDelAnswer_Click(strKey: string) {
        const objPage = new Tea_QA();
        objPage.btnDelAnswer_Click(strKey);
      },

      /*
    讨论提交编辑
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_mySubmit)
    */
      DiscussSubmit_Click() {
        if ($('#btnDiscussSubmit').html() == '发布') {
          qa_Answer_EditEx.answerTypeIdTemp = 'root';
        }
        if ($('#txtDiscussContent').val() != '') {
          const objPage = new Tea_QA();
          objPage.DiscussSubmit_Click();
        } else {
          message.warning('讨论区内容不能为空！');
        }
      },

      /**
       * 讨论回车提交
       */
      EnterDiscussSubmit_Click(e: any) {
        if (e.keyCode == 13) {
          if ($('#btnDiscussSubmit').html() == '发布') {
            qa_Answer_EditEx.answerTypeIdTemp = 'root';
          }
          if ($('#txtDiscussContent').val() != '') {
            const objPage = new Tea_QA();
            objPage.DiscussSubmit_Click();
          } else {
            message.warning('讨论区内容不能为空！');
          }
        }
      },
      //div滚动条显示在最底层
      DiscussListOrderby() {
        const divscll = document.getElementById('J_ShortComment_Discuss2') as HTMLDivElement;
        divscll.scrollTop = divscll.scrollHeight;
      },
      /*
    取消答案
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btnAddNewRecord_Click)
    */
      btnCancel2_Click() {
        ShowDivInDivObj(Tea_QA.divLayout, 'div_qa_Answer');
        $('#divEditAnswerRegion').hide();
      },

      /*
    添加点赞
    (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_btnAddNewRecord_Click)
    */
      btnAddVote_Click(strKeyId: string, UserId: string) {
        //$('#hidSubViewpointId').val(strKeyId);

        const objPage = new Tea_QA();
        objPage.btnAddVote_Click(strKeyId, UserId);
      },
      //信息提示

      //邀请其他同学回答
      InviteOthers_Click(key: string) {
        $('#hidInviteKey').val(key);
        //message.info('hi，功能还在搭建中....');

        const objPage = new Tea_QA();
        objPage.InviteOthers_Click();

        //atOthers();
      },

      //at弹出层教师学生数据
      //   atOthers(strStuName:string, strTeaName:string) {
      //     layer.tab({
      //       area: ['500px', '400px'],
      //       tab: [
      //         {
      //           title: '同学',
      //           content: strStuName,
      //         },
      //         {
      //           title: '老师',
      //           content: strTeaName,
      //         },
      //       ],
      //     });
      //   },

      //确定at姓名
      btnAtUserName_Click(strKey: string, strName: string) {
        const objPage = new Tea_QA();
        objPage.btnAtUserName_Click(strKey, strName);

        //atOthers();
      },

      LayercClose() {
        // const index = layer.index;
        // layer.close(index);
      },

      //定时加载回答讨论区
      //setInterval('Bind_DiscussCount()', 3000);  //指定3s刷新一次

      Bind_DiscussCount() {
        const strAnswerTypeId = $('#hidAnswerTypeId').val();
        if (strAnswerTypeId == '02' || strAnswerTypeId == '03') {
          const objPage = new Tea_QA();
          objPage.Bind_Show3List('', strAnswerTypeId, enumCommentOrder.AllComment_01);
        }
      },

      //查看历史版本，调用父界面查看方法strKeyId;答案Id
      SearchParentV(strKeyId: string) {
        try {
          console.log('strKeyId:', strKeyId);
          //   window.parent.SearchAnsWerV(strKeyId);
        } catch (e: any) {
          window.opener.location = '父页面地址';
          window.opener = null;
          window.close();
        }
      },

      /*
    记录上移
    (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_btnUpMove_Click)
    */
      btnUpMove_Click(strKeyId: string, OrderNum: number) {
        $('#hidKeyId').val(strKeyId);
        $('#hidOrderNum').val(OrderNum);
        if (OrderNum == 1) {
          alert('该记录已经是第一条记录！');
          return;
        } else {
          // const objPage = new Tea_QA();
          Tea_QA.btnUpMove_Click(strKeyId, OrderNum);
        }
      },

      /*
    记录下移
    (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_btnDownMove_Click)
    */
      btnDownMove_Click(strKeyId: string, OrderNum: number) {
        $('#hidKeyId').val(strKeyId);
        $('#hidOrderNum').val(OrderNum);

        // const objPage = new Tea_QA();
        Tea_QA.btnDownMove_Click(strKeyId, OrderNum);
      },

      //刷新本页面回答
      Refresh_vTea_QA() {
        // const objPage = new Tea_QA();
        Tea_QA.btnShowAnswer_Click('', 0, '', enumCommentOrder.AllComment_01);
      },

      // @*@param $
      // 自定义jQuery扩展方法, 在光标处插入内容*@

      // (function ($) {
      // "use strict";
      // $.fn.extend({
      // insertAtCaret: function (myValue) {
      //     const $t = $(this)[0];
      //     if (document.selection) {
      //         this.focus();
      //         const sel = document.selection.createRange();
      //         sel.text = myValue;
      //         this.focus();
      //     } else
      //         if ($t.selectionStart || $t.selectionStart == '0') {
      //             const startPos = $t.selectionStart;
      //             const endPos = $t.selectionEnd;
      //             const scrollTop = $t.scrollTop;
      //             $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
      //             this.focus();
      //             $t.selectionStart = startPos + myValue.length;
      //             $t.selectionEnd = startPos + myValue.length;
      //             $t.scrollTop = scrollTop;
      //         } else {
      //             this.value += myValue;
      //             this.focus();
      //         }
      // }
      // });
      // })(jQuery);
    },
  });
</script>
<style scoped>
  .info {
    margin-top: 10px;
    border-bottom: solid 0px #dbdcde;
  }

  #leftPart {
    float: left;
    width: 55%;
    height: 100%;
    position: fixed;
    top: 40px;
    left: 1px;
    border-radius: 10px;
  }

  #rightPart {
    float: right;
    width: 45%;
    margin-top: 20px;
  }

  #list_Tags {
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    height: 220px;
    /*height: 400px;*/
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #div_qa_Questions {
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    height: 300px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    /*overflow-x: scroll;*/
  }

  .div_Answer {
    margin-top: 5px;
    /*position: fixed;
            bottom: 1px;
            right: 0px;*/
  }

  #div_qa_Welcome {
    border-radius: 5px;
    background-color: beige;
    margin: 10px 10px 10px 10px;
    padding: 20px 20px 20px 20px;
  }

  .artlist li {
    line-height: 35px;
  }

  .rowtit {
    font-size: 16px;
  }

  #div_qa_Answer {
    /*width: 100%;*/
    border-radius: 5px;
    background-color: #fff;
    margin: 10px 0px 0px 10px;
    padding: 10px 10px 10px 10px;
    display: none;
    /*min-height: 450px;*/
  }

  #divEditQuestionsRegion {
    width: 100%;
    min-height: 450px;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: #fff;
    display: none;
  }

  #divEditAnswerRegion {
    width: 100%;
    min-height: 450px;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: #fff;
    display: none;
  }

  /*pdf高亮*/
  .text-span {
    background-color: crimson;
    /*color: red;*/
  }

  .liRowsColor {
    border: 1px solid #ddd;
    background-color: aliceblue;
    color: #fff;
  }

  /**讨论编辑框*/
  .DiscussEdit {
    display: none;
    position: relative;
    right: 10px;
    bottom: 30px;
    z-index: 999;
    width: 90%;
    height: 70px;
    border-radius: 8px;
    background-color: white;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #0080ff;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
  }

  .divTree2 {
    /* position: fixed; */
    position: relative;
    /* top: 45px; */
    top: 5px;
    left: 10px;
    /* bottom: 5%; */
    z-index: 999;
  }

  li {
    line-height: 30px;
    text-align: left;
  }

  .tab-header {
    display: flex;
  }

  .tab-header div {
    padding: 10px;
    cursor: pointer;
  }

  .tab-header div.active {
    background-color: #ccc;
  }

  .tab-content {
    margin-top: 10px;
  }

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }

  .questionName {
    font-size: 18px;
    font-weight: bold; /* 如果需要粗体 */
    font-style: italic;
    color: #2a2a2a;
  }
</style>

<!-- 

    
    <script src="../lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="../lib/Xadmin/js/x1admin.js"></script>
    
    <script src="../lib/at/AtTea_QA.js"></script>
    <script type='text/javascript' src='~/textboxio/textboxio.js'></script>
    
} -->
