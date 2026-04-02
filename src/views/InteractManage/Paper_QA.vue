<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>

    <div style="width: 100%; height: 100%">
      <!--  问题  -->
      <div id="div_Questions" class="div_Questions">
        <!-- 问题显示列表 -->
        <div id="div_qa_Questions"></div>
      </div>
      <!-- 欢迎 -->
      <div id="div_qa_Welcome">
        <div style="text-align: center"><h2>论文答疑使用说明</h2></div>
        <ul>
          <li class="rowtit color1">
            选中左边的pdf文字会弹出两个图标，选中问号图标就可以添加问题了，问题可推送给其他人
          </li>
          <li class="rowtit color2"> 选中右边的问题可以在问题下面显示回答，并追踪到pdf页码 </li>
          <li class="rowtit color3">
            选中问题可以在显示回答区对问题进行回复、并可以对自己的回答修改、删除
          </li>
          <li class="rowtit color4">选中回答可以对父类回答进行回复</li>
        </ul>
      </div>

      <!-- 答案显示列表 -->
      <div id="div_qa_Answer">
        <div class="divComment">
          <div id="J_Short" class="comment-short">
            <div class="comment-title" style="margin-top: 5px">
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

            <div id="J_ShortComment"></div>
          </div>
        </div>
      </div>

      <!-- 问题编辑 -->
      <div id="divEditQuestionsRegion">
        <div ref="qa_Questions_EditRef" class="modal-content" style="width: 100%">
          <div>
            <h3 id="myModalLabel" class="modal-title">问题编辑</h3>
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
                    class="form-control form-control-sm"
                    style="width: 50px"
                  />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <textarea
                    id="txtQuestionsContent"
                    placeholder="问题内容"
                    class="layui-input"
                    style="width: 100%; height: 150px"
                  ></textarea>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <button
                    type="button"
                    class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
                    @click="btn_Click('InviteOthers', '1')"
                  >
                    <font-awesome-icon icon="user-plus" />邀请其他人来回答
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;<input
                    id="chkIsRequestReply"
                    type="checkbox"
                    Text="是否要求回复"
                  />要求回复
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="btnCancel1"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btnCancel1_Click()"
                  >
                    取消编辑
                  </button>
                </td>
                <td>
                  <button
                    id="btnOKUpd1"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btn_Click('QuestionsSubmit', '')"
                  >
                    添加
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <!-- 答案编辑 -->
      <div id="divEditAnswerRegion" ref="qa_Answer_EditRef">
        <div class="modal-content" style="width: 100%">
          <div class="modal-header">
            <h4 id="myModalLabel" class="modal-title">回答编辑</h4>
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
                    id="txtAnswerContent"
                    placeholder="回答内容"
                    class="layui-input"
                    style="width: 100%; height: 200px"
                  ></textarea>
                </td>
              </tr>
              <tr style="display: none">
                <td colspan="2">
                  <button
                    type="button"
                    class="layui-btn layui-btn-sm layui-btn-radius layui-btn-normal"
                    @click="btn_Click('InviteOthers', '2')"
                  >
                    <font-awesome-icon icon="user-plus" />邀请其他人来回答
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    id="btnCancelqa_Answer"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btnCancel2_Click()"
                  >
                    取消编辑
                  </button>
                </td>
                <td>
                  <button
                    id="btnSubmitqa_Answer"
                    type="button"
                    class="layui-btn layui-btn-primary"
                    style="width: 100%"
                    @click="btn_Click('AnswerSubmit', '')"
                  >
                    添加
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <!-- /.modal-content -->
        <!-- /.modal -->
      </div>
    </div>

    <!-- 当前教学班Id  -->
    <input id="hidIdCurrEduCls" type="hidden" />

    <!-- 答疑Id  -->
    <input id="hidqa_PaperId" type="hidden" />
    <!-- 论文Id -->
    <input id="hidPaperId" type="hidden" />

    <!-- 推送ID -->
    <input id="hidPushId" type="hidden" />

    <!-- 主题Id -->
    <input id="hidTopicId" type="hidden" />

    <!-- 问题用户  -->
    <input id="hidQuestionsUser" type="hidden" />
    <!-- 答案排序标识 -->

    <input id="hidOpType" type="hidden" />

    <input id="hidAnswerId" type="hidden" />

    <!-- pdf页码  -->
    <input id="hidPdfPageNum" type="hidden" />

    <!-- pdf内容  -->
    <input id="hidPdfContent" type="hidden" />

    <!-- 答案父节点Id -->
    <input id="hidParentId" type="hidden" />

    <!--  邀请key  -->
    <input id="hidInviteKey" type="hidden" />

    <!-- pdfContent num -->
    <input id="hidleftNum" type="hidden" value="55" />
    <!-- rightContent num -->
    <input id="hidrightNum" type="hidden" value="45" />

    <!-- at用户Id数量 -->
    <input id="hidUserIdLst" type="hidden" />

    <!-- 标注ID  -->
    <input id="hidTagsId" type="hidden" />

    <!-- pdf当前页top -->
    <input id="page_top" type="hidden" />

    <!-- pdf当前页内码 -->
    <input id="page_cache" type="hidden" />

    <!-- pdf——zoom -->
    <input id="pdf_zoom" type="hidden" />

    <!-- pdf选中文本top -->
    <input id="pdfDiv_top" type="hidden" />

    <!-- pdf选中文本left -->
    <input id="pdfDiv_left" type="hidden" />

    <!-- pdf选中文本left -->
    <input id="hidPdfFile" type="hidden" />
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
  import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { message } from '@/utils/myMessage';
  import { PaperQAA } from '@/views/InteractManage/Paper_QAA';
  import { HideDivInDivObj, ShowDivInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { qa_Questions_Edit } from '@/viewsBase/InteractManage/qa_Questions_Edit';
  import { qa_Questions_EditEx } from '@/views/InteractManage/qa_Questions_EditEx';
  import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';
  import {
    pdf_ClearHighLightText,
    pdf_LocationPdfPageNum,
    pdf_SetClientType,
  } from '@/ts/FunClass/clsPubFun4Pdf';
  import { stuPdfData } from '@/ts/PubFun/stuPdfData';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';

  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import CommentHead from '@/ts/components/CommentHead.vue';

  export default defineComponent({
    name: 'PaperQA',
    components: {
      // 组件注册
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
      pushId: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const buttons: Array<clsBtnItem> = [
        { type: 'a', keyId: '01', text: '全部回答', title: '' },
        { type: 'a', keyId: '02', text: '我的回答', title: '' },
        { type: 'a', keyId: '03', text: '最新回答', title: '' },
      ];

      const CommentHeadRef = ref();
      const questionsId = ref('');
      const strTitle = ref('论文答疑表维护');
      const qa_Questions_EditRef = ref();
      const qa_Answer_EditRef = ref();
      const qa_Paper_EditRef = ref();
      const qa_Paper_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const refIsShowHelp = ref(false);
      const checkShowHelp = ref(false);
      const iframeFunction = (data: stuPdfData) => {
        console.log('从 iframe 接收到的数据：', data);
        // message.success("从 iframe 接收到的数据：");
        // 在这里执行你的逻辑
      };
      // 在 setup 中设置一个变量来存储事件处理函数
      const handleIframeMessage = (event: any) => {
        // 处理从 iframe 接收到的消息
        const data = event.data;
        // 假设消息格式是字符串，你可以根据需要进行解析
        if (typeof data.funcName === 'string') {
          // 调用组件中的函数
          switch (data.funcName) {
            case 'AddQ':
              // btn_Click(data.funcName, data.selectText);
              // console.log();
              AddQ(data);
              break;
          }
          // iframeFunction(data);
        }
      };
      onMounted(() => {
        window.addEventListener('message', handleIframeMessage);
        PaperQAA.divLayout = refDivLayout.value;
        PaperQAA.vuebtn_Click = btn_Click;
        PaperQAA.GetPropValue = GetPropValue;
        pdf_ClearHighLightText();
        window_onload();
      });
      // 在组件卸载前移除事件监听器
      onUnmounted(() => {
        window.removeEventListener('message', handleIframeMessage);
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
        switch (objData.keyId) {
          case '01':
            await AllQA_Click();
            break;
          case '02':
            await MyQA_Click();
            break;
          case '03':
            await NewQA_Click();
            break;
        }
        console.log('objData:', objData);

        // 处理点击选项后的逻辑
      }
      //点击问题显示答案
      function btnShowAnswer_Click(strKey: string, pageNum: number, pdfContent: string) {
        $('#div_qa_Welcome').hide();
        ShowDivInDivObj(PaperQAA.divLayout, 'div_qa_Answer');
        questionsId.value = strKey;
        $('#hidPdfContent').val(pdfContent);
        //先清除背景色
        $('#infoPaper_QA div').removeClass('liRowsColor');
        //添加背景色
        const strKey1 = `Q${strKey}`;
        $(`#${strKey1}`).addClass('liRowsColor');

        //定位pdf页码

        // $('#iframe_qaPdf', parent.document).contents().find('#hid1IsQA_Tags').val(1);
        pdf_SetClientType('QA');

        pdf_LocationPdfPageNum(pageNum, pdfContent);
        const objPage = new PaperQAA();
        objPage.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
      }

      //全部评论
      async function AllQA_Click() {
        const objPage = new PaperQAA();

        await objPage.btnShowAnswer_Click(enumCommentOrder.AllComment_01);
      }

      //我的评论
      async function MyQA_Click() {
        console.log('MyQA_Click');
        const objPage = new PaperQAA();
        await objPage.btnShowAnswer_Click(enumCommentOrder.Personal_02);
      }

      //最新评论
      async function NewQA_Click() {
        const objPage = new PaperQAA();
        await objPage.btnShowAnswer_Click(enumCommentOrder.LatestComments_03);
      }

      function btn_Click(strCommandName: string, strKeyId: any) {
        if (strCommandName == 'QuestionsSubmit') {
          qa_Questions_Edit.EditObj = qa_Questions_EditRef.value;
          // this.divEdit = qa_Questions_EditRef.value;
          qa_Questions_EditEx.btnEdit_Click('QuestionsSubmit', strKeyId);
          return;
        } else if (strCommandName == 'ShowAnswer') {
          const arr = strKeyId.split('|');

          if (arr.length != 3) {
            const strMsg = `在执行btnShowAnswer_Click过程中，参数数目不正确！`;
            console.error(strMsg);
            alert(strMsg);
            return;
          }
          const strQuestionsId = arr[0];
          const intPdfPageNum = Number(arr[1]);
          const strPdfContent = arr[2];
          btnShowAnswer_Click(strQuestionsId, intPdfPageNum, strPdfContent);
          return;
        }
        switch (strCommandName) {
          case 'AllQA_Click':
            AllQA_Click();
            break;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'AddQuestion':
            // PaperQAA.EditObj = qa_Questions_EditRef.value;
            qa_Questions_Edit.EditObj = qa_Questions_EditRef.value;
            // this.divEdit = qa_Questions_EditRef.value;
            PaperQAA.questionTypeId = '01';
            console.log('qa_Questions_Edit.EditRef:', qa_Questions_Edit.EditObj);
            PaperQAA.btn_Click(strCommandName, strKeyId, qa_Questions_EditRef.value);
            return;
          case 'UpdateAnswerInP':
          case 'AddNewAnswer':
            qa_Answer_Edit.EditObj = qa_Answer_EditRef.value;
            // this.divEdit = qa_Answer_EditRef.value;

            console.log('qa_Answer_Edit.EditRef:', qa_Answer_Edit.EditObj);
            PaperQAA.btn_Click(strCommandName, strKeyId, qa_Answer_EditRef.value);
            return;
          default:
            break;
        }
        PaperQAA.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      const handleShowHelp = (newValue: any) => {
        refIsShowHelp.value = newValue;
      };
      /**
       * 页面导入-在导入页面后运行的函数
       **/
      function window_onload() {
        // $('#h1idOrderbyId').val('1');
        Getqa_PaperId();

        const objPage = new PaperQAA();
        objPage.PageLoad(enumCommentOrder.AllComment_01);
      }
      function Getqa_PaperId() {
        const strIdCurrEduCls = props.idCurrEduCls;

        const strPushId = props.pushId;
        const strPaperId = props.paperId;
        const strQuestionsId = props.questionsId;

        if (strIdCurrEduCls != null && strIdCurrEduCls != '') {
          clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
        }

        if (strPushId != null) {
          $('#hidPushId').val(strPushId);
        }
        if (strPaperId != null && strPaperId != '') {
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
      function AddQ(myPdfData: stuPdfData) {
        // $('#icon').hide();
        HideDivInDivObj(PaperQAA.divLayout, 'div_qa_Questions');
        ShowDivInDivObj(PaperQAA.divLayout, 'div_qa_Answer');
        HideDivInDivObj(PaperQAA.divLayout, 'div_qa_Welcome');
        HideDivInDivObj(PaperQAA.divLayout, 'divEditAnswerRegion');

        ShowDivInDivObj(PaperQAA.divLayout, 'divEditQuestionsRegion');
        btn_Click('AddQuestion', myPdfData);
      }
      return {
        strTitle,
        btn_Click,
        qa_Questions_EditRef,
        qa_Paper_EditRef,
        qa_Paper_DetailRef,
        qa_Answer_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        window_onload,
        iframeFunction,
        AllQA_Click,
        MyQA_Click,
        NewQA_Click,
        CommentHeadRef,
        handleItemClick,
        buttons,
        handleShowHelp,
        checkShowHelp,
        questionsId,
      };
    },

    methods: {
      // 方法定义

      ////////////////////////////////////////////////////问题//////////////////////////////////////////////////////

      //锚点
      btnIndexesQuestions_Click(strKeyId: string) {
        //先清除观点 和问题的 背景

        //先清除背景色
        $('#infoPaper_QA div').removeClass('liRowsColor');
        //添加背景色
        strKeyId = `Q${strKeyId}`;
        $(`#${strKeyId}`).addClass('liRowsColor');
        //$("#" + strKey).addClass("liRowsColor");
        //window.location.hash = "#Q" + strKeyId;
      },

      /*
       * 取消问题
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
       * 删除问题
       */
      btnDelAnswer_Click(strKey: string) {
        const objPage = new PaperQAA();
        objPage.btnDelAnswer_Click(strKey);
      },

      /*
       * 取消答案
       */
      btnCancel2_Click() {
        ShowDivInDivObj(PaperQAA.divLayout, 'div_qa_Answer');
        $('#divEditAnswerRegion').hide();
      },

      LayercClose() {
        // const index = layer.index;
        // layer.close(index);
      },
    },
  });
</script>
<style scoped lang="scss">
  li {
    line-height: 30px;
  }
  .nowrap {
    white-space: nowrap;
    display: inline;
  }

  .number {
    color: blue;
    display: inline;
  }

  .text {
    color: black;
    display: inline;
    text-indent: 2em; /* 设置首行缩进为2个字母的宽度 */
  }

  .brackets {
    color: green;
    display: inline;
  }

  .break-word {
    word-wrap: break-word;
    display: inline;
  }

  .italic-text {
    font-style: italic;
    display: inline;
  }

  tr {
    /*padding-bottom: 10px; /* 在每个表格行的底部添加 10 像素的间距 */
    margin-bottom: 10px; /* 在每个表格行的底部添加 10 像素的间距 */
  }

  .custom-tr {
    background-color: #f0f0f0; /* 自定义背景颜色 */
    color: #333; /* 自定义文本颜色 */
    /* 添加其他自定义样式 */
    margin-bottom: 10px; /* 在每个表格行的底部添加 10 像素的间距 */
    font-size: 20px;
    min-height: 60px;
  }

  // .custom-table {
  //   border-spacing: 0 50px; /* 设置行之间的下边距为 20 像素 */
  // }

  .spacer {
    height: 5px; /* 设置空白行的高度为 20 像素 */
  }
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

  /* .div_Questions {
    border-radius: 15px;
    margin-top: 15px;
     height: 350px;
  } */

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
    border-radius: 5px;
    background-color: #fff;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    display: none;
    min-height: 450px;
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
</style>

<!-- 
    
    <script src="../lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script type="text/javascript" src="../lib/Xadmin/js/x1admin.js"></script>
    
    <script src="../lib/at/AtPaper_QA.js"></script>
} -->
