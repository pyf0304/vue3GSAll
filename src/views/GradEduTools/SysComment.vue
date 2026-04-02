<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divLayout" ref="refDivLayout" class="divComContainer">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>

      <div style="padding: 10px 30px 10px 30px; height: 500px">
        <div class="divleft">
          <div id="div_Viewpoint"></div>
        </div>
        <div class="divComment">
          <div id="J_Short" class="comment-short">
            <div class="comment-title" style="margin-top: 5px">
              <p class="comment-all" @click="AllComment_Click()">全部评论</p>
              <div id="J_CommentCenter" class="comment-center">
                <span class="comment-center-slash">/</span>
                <span class="comment-my J_userCenter" @click="MyComment_Click()">我的评论</span>
              </div>
              <p class="comment-sort">
                <span
                  data-targetid="4760694256"
                  data-sort="1"
                  class="J_CommentSort comment-sort-cur"
                  @click="NewComment_Click()"
                  >最新</span
                >
                &nbsp;/&nbsp;
                <span
                  data-targetid="4760694256"
                  data-sort="0"
                  class="J_CommentSort comment-sort-cur"
                  @click="btn_Click('HottestComment', '')"
                  >最热</span
                >
                &nbsp;&nbsp; &nbsp;&nbsp;
                <button
                  id="btnOKUpd"
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="width: 150px"
                  @click="btn_Click('AddAppraise', '')"
                >
                  添加评论
                </button>
              </p>
            </div>
            <div id="J_ShortComment_SC"></div>
          </div>
        </div>
      </div>

      <div
        id="divEditAppraise"
        class="modal fade"
        style="z-index: 1062"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 330px; margin-top: 100px">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">观点评论</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                ×
              </button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucsyscommentsAppraise"
                name="tabwucsyscommentsAppraise"
                style="width: 760px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr>
                  <td class="NameTD">
                    <label class="col-form-label text-right" style="width: 90px">评分</label>
                  </td>
                  <td class="ValueTD">
                    <div id="ScoreType"></div>
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblAppraiseContent"
                      name="lblAppraiseContent"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评议
                    </label>
                  </td>
                  <td class="ValueTD">
                    <textarea
                      id="txtAppraiseContent"
                      placeholder="请输入您的评语"
                      name="txtAppraiseContent"
                      class="form-control form-control-sm"
                      style="width: 500px; height: 80px"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button
                id="btnOKUpdAppraise"
                type="button"
                class="btn btn-primary"
                @click="SubmitAppraise_Click()"
              >
                添加
              </button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>

      <input id="hidParentId" type="hidden" />
      <input id="hidPubParentId" type="hidden" />

      <input id="hidUser" type="hidden" />

      <input id="hidScoreNum" type="hidden" />

      <input id="hidFontSize" type="hidden" />

      <input id="hidScoreType" type="hidden" />
      <SysComment_EditCom ref="SysComment_EditRef"></SysComment_EditCom>
    </div>

    <!-- <template #footer>
      <el-button id="btnCancelqa_Answer" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitqa_Answer" type="primary" @click="btn_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template> -->
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/public.css';
  // import '@/assets/css/paperlist.css';
  import '@/assets/css/comment.css';
  // import '@/assets/css/SimpleTree.css';

  import '@/assets/lib/startnum-1.0/css/startnum.css';

  import { defineComponent, onMounted, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  //   import { message } from '@/utils/myMessage';

  import { message } from '@/utils/myMessage';

  import { SysCommentEx } from '@/views/GradEduTools/SysCommentEx';
  import { SysComment_Edit } from '@/viewsBase/GradEduTools/SysComment_Edit';
  import SysComment_EditCom from '@/views/GradEduTools/SysComment_Edit.vue';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
  export default defineComponent({
    name: 'SysComment',
    components: {
      // 组件注册
      SysComment_EditCom,
    },
    props: {
      keyId: {
        type: String,
        default: '',
      },
      commentTypeId: {
        type: String,
        default: '',
      },
      user: {
        type: String,
        default: '',
      },
      pubParentId: {
        type: String,
        default: '',
      },
      fontSize: {
        type: String,
        default: '',
      },
      scoreType: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      console.log(props);
      const strTitle = ref('系统评论');
      const SysComment_EditRef = ref();
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');

      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        SysCommentEx.vuebtn_Click = btn_Click;
        SysCommentEx.GetPropValue = GetPropValue;
        SysCommentEx.divLayout = refDivLayout.value;

        // window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          // case 'idCurrEduCls':
          //   return idCurrEduCls.value;
          case 'commentTypeId':
            return props.commentTypeId;
          // case 'activeTabId':
          //   return activeTabId.value;
          case 'tableKey':
            return props.keyId;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            break;

          case 'AddAppraise':
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            SysCommentEx.EditObj = SysComment_EditRef.value;
            SysComment_Edit.EditObj = SysComment_EditRef.value;
            break;

          default:
            break;
        }
        SysCommentEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      const dialogVisible = ref(false);
      const dialogWidth = ref('80%'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          SysCommentEx.divLayout = refDivLayout.value;
          SysCommentEx.vuebtn_Click = btn_Click;
          SysCommentEx.GetPropValue = GetPropValue;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
            SysCommentEx.divLayout = refDivLayout.value;
            SysCommentEx.vuebtn_Click = btn_Click;
            SysCommentEx.GetPropValue = GetPropValue;
          }, 500);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      // 方法定义

      function window_onload(): boolean {
        // $('#h1idOrderbyId').val('1');
        return GetRequestId_PageLoad(enumCommentOrder.AllComment_01);
      }

      function GetRequestId_PageLoad(strCommentOrder: enumCommentOrder): boolean {
        // let Request = new Object();
        // Request = GetRequest();

        const strKey = props.keyId; // Request['Key'];
        const strCommentTypeId = props.commentTypeId; // Request['Type'];
        const strUser = props.user; // Request['User'];
        const strPubParentId = props.pubParentId; // Request['PubParentId'];
        const strFontSize = props.fontSize; // Request['FontSize'];
        const strScoreType = props.scoreType; // FontSize Request['ScoreType'];
        if (IsNullOrEmpty(strKey) == true) return false;
        if (strKey != null) {
          $('#hidUser').val(strUser);
          $('#hidPubParentId').val(strPubParentId);
          $('#hidScoreType').val(strScoreType);

          const objPage = new SysCommentEx();
          objPage.PageLoad(enumCommentOrder.AllComment_01);
        }
        if (strFontSize != null) {
          $('#hidFontSize').val(strFontSize);
        }
        return true;
      }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        btn_Click,
        SysComment_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        window_onload,
      };
    },

    methods: {
      //锚点

      Layui_Score() {
        // layui.use('rate', function () {
        //   const rate = layui.rate;
        //   const txtContent = document.getElementById('txtAppraiseContent') as HTMLInputElement;
        //   const hidScore = document.getElementById('hidScoreNum') as HTMLInputElement;
        //   if (hidScore == null) return;
        //   //渲染
        //   const ins1 = rate.render({
        //     elem: '#pingfen2', //绑定元素
        //     length: 10, //设置多少星
        //     value: 0, //初始值
        //     half: true, //开启半星
        //     text: true, //开启文本
        //     setText(value: string) {
        //       this.span.text(`${value}分`);
        //     },
        //     choose(value) {
        //       hidScore.value = value;
        //       if (value < 4) {
        //         txtContent.value = '极差';
        //       } else if (value > 3 && value < 5) {
        //         txtContent.value = '差';
        //       } else if (value > 4 && value < 6) {
        //         txtContent.value = '中等';
        //       } else if (value > 5 && value < 7) {
        //         txtContent.value = '及格';
        //       } else if (value > 6 && value < 8) {
        //         txtContent.value = '良好';
        //       } else if (value > 7 && value < 9) {
        //         txtContent.value = '很好';
        //       } else if (value > 8 && value < 10) {
        //         txtContent.value = '极好';
        //       } else if (value > 9) {
        //         txtContent.value = '非常好';
        //       }
        //     },
        //   });
        // });
      },

      //设置全局字体
      SetFontSize() {
        const ClassArtlist = document.getElementsByClassName('artlist');
        const varFontSize = document.getElementById('hidFontSize') as HTMLInputElement;
        if (varFontSize.value != '') {
          let i;
          for (i = 0; i < ClassArtlist.length; i++) {
            (ClassArtlist[i] as any).style.fontSize = `${varFontSize.value}px`;
          }
        }
      },
      /*
       * 添加评论
       */
      btnAddAppraise_Click(strKeyId: string) {
        $('#hidSubViewpointId').val(strKeyId);
        this.ShowDialog();
      },

      //评论弹窗
      btnDetailAddAppraise_Click() {
        $('#hidParentId').val('root');
        if ($('#hidScoreType').val() != '3') {
          this.Layui_Score();
        }

        this.ShowDialog();
      },

      //回复弹窗
      btnReplyComment_Click(strKeyId: string) {
        $('#hidParentId').val(strKeyId);
        if ($('#hidScoreType').val() != '3') {
          this.Layui_Score();
        }
        this.ShowDialog();
      },

      /*
       * 显示对话框
       */
      ShowDialog() {
        // $('#divEditAppraise').modal('show');
      },

      /*
       * 隐藏对话框
       */
      HideDialog() {
        // $('#divEditAppraise').modal('hide');
      },

      /*
       * 提交评论
       */
      SubmitAppraise_Click() {
        $('#btnOKUpdAppraise').attr('disabled', 'true');

        // const objPage = new SysCommentEx();
        // objPage.SubmitAppraise_Click();
      },
      /*
       * 删除评论
       */
      btnDeleteComment_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new SysCommentEx();
        objPage.btnDeleteComment_Click(strKeyId);
      },

      //全部评论
      AllComment_Click() {
        // $('#h1idOrderbyId').val('1');

        const objPage = new SysCommentEx();
        objPage.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      },

      //我的评论
      MyComment_Click() {
        // $('#h1idOrderbyId').val('2');

        const objPage = new SysCommentEx();
        objPage.btnShowAppraise_Click(enumCommentOrder.Personal_02);
      },

      //最新评论
      NewComment_Click() {
        // $('#h1idOrderbyId').val('3');

        const objPage = new SysCommentEx();
        objPage.btnShowAppraise_Click(enumCommentOrder.LatestComments_03);
      },

      //添加评论以后刷新父页面数据
      RefreshWindow() {
        try {
          const strCommentTypeId = SysCommentEx.GetPropValue('commentTypeId');
          switch (strCommentTypeId) {
            case '02':
              //   window.parent.Refresh_vPaperSubViewpoint();
              break;
            case '03':
              //   window.parent.Refresh_AllTopicRela();
              break;
            case '04':
              //   window.parent.Refresh_AllTopicRela();
              break;
            case '05':
              //   window.parent.Refresh_AllTopicRela();
              break;
            case '06':
              //   window.parent.Refresh_AllTopicRela();
              break;
            case '07':
              //   window.parent.Refresh_AllTopicRela();
              break;
            case '11':
              //   window.parent.Refresh_vTea_QA();
              break;
            case '12':
              //   window.parent.liPaperReportClick();
              break;
            case '13':
              //   window.parent.liResearchResultClick();
              break;
            default:
              //   window.parent.Refresh_AllTopicRela();
              break;
          }
        } catch (e: any) {
          window.opener.location = '父页面地址';
          window.opener = null;
          window.close();
        }
      },

      AlertOK() {
        message.success('评论成功!');
      },

      AlertNo() {
        message.success('删除成功!');
      },

      AlertScore() {
        message.info('请输入评分!');
      },

      AlertComment() {
        message.info('请输入评语!');
      },
    },
  });
</script>
<style scoped>
  .divleft {
    width: 45%;
    /*position: fixed;*/
    /*border-right: solid 1px #dededf;*/
    /*border-bottom: solid 1px #dbdcde;*/
    /*border-radius: 10px 8px 8px 4px;*/ /* 四个半径值分别是左上角、右上角、右下角和左下角 */
    float: left;
    /*background: #fff;*/
    font-family: 'Microsoft YaHei';
    top: 40px;
    left: 10px;
    /*bottom: 5%;*/
    z-index: 999;
    /*height:500px;*/
    /*overflow: hidden;*/
  }

  /*右边内容区*/
  .divComment {
    margin-right: 10px;
    padding: 20px;
    width: 50%;
    float: right;
    overflow: hidden;
  }

  /*各观点*/
  .artlist {
    font-size: 16px;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
