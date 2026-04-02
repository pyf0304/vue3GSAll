<template>
  <el-dialog id="elPaperDetail" v-model="dialogVisible" width="1000px" title="论文详情">
    <div id="divLayout_PaperDetail" ref="refDivLayout" class="divComContainer">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>
      <!-- <ul>
        <li class="myLi">AA</li>
        <li class="myLi">BB</li>
      </ul> -->
      <a
        id="backtop"
        class="back-top"
        href="javascript:scroll(0,0);"
        target="_self"
        title="返回顶部"
        style="display: block"
      >
        <i class="icon-backtop"></i>
      </a>
      <div id="tabLayout" class="tab_layout">
        <div class="x-nav">
          <span class="layui-breadcrumb">
            <a href="">首页</a>
            <a href="">论文管理</a>
            <a>
              <cite> 论文详情</cite>
            </a>
            <label id="lblMsg_List" name="lblMsg_List"></label>
          </span>
          <a
            class="layui-btn layui-btn-small"
            style="line-height: 1.6em; margin-top: 3px; float: right"
            @click="location_reload()"
            title="刷新"
          >
            <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
          </a>
        </div>

        <div id="divList" ref="refDivList" class="div_List">
          <div id="divDataLst" ref="refDivDataLst" class="div_List">
            <div class="modal-content" style="width: 100%">
              <div style="padding: 7px 10px 5px 5px; border-bottom: 1px solid #dee2e6; width: 100%">
                <div style="float: left; color: red; line-height: 25px; margin-left: 10px">
                  编辑时间：<label id="lblUpdDate" name="lblUpdDate"></label>&nbsp;&nbsp;
                  编辑用户：<label id="lblUpdUser" name="lblUpdUser"></label>
                </div>

                <div
                  id="div_VoteCollection"
                  style="float: right; margin-right: 50px; line-height: 25px"
                >
                  评分:<label id="lblScore" name="lblScore"></label> &nbsp;&nbsp; 浏览量:<label
                    id="lblViews"
                    name="lblViews"
                  ></label>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" @click="btnAddVote_Click()"
                    ><img
                      id="imgVotet"
                      src="@/assets/img/vote.png"
                      width="25px"
                      height="25px"
                      title="点赞"
                  /></a>
                  <label id="lblOKCount" name="lblOKCount"></label>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" @click="btnAddCollection_Click()"
                    ><img
                      id="imgCollection"
                      src="@/assets/img/collection.png"
                      width="25px"
                      height="25px"
                      title="收藏"
                  /></a>
                </div>
              </div>
              <div class="modal-body" style="padding-left: 80px; padding-right: 80px">
                <div style="text-align: center; margin-bottom: 20px">
                  <h2><label id="txtPaperTitle" name="txtPaperTitle" /></h2
                ></div>

                <div style="text-align: center; margin-top: 20px; color: cadetblue"
                  ><a href="javascript:void(0)"><label id="txtAuthor" name="txtAuthor"></label></a
                ></div>
                <div style="text-align: left; margin-top: 20px">
                  <label id="txtPaperContent" name="txtPaperContent" />
                </div>
                <div style="text-align: left; margin-top: 30px">
                  <label
                    id="lblResearchQuestion"
                    name="lblResearchQuestion"
                    style="font-weight: bold"
                  >
                    研究问题：
                  </label>
                  <label id="txtResearchQuestion" name="txtResearchQuestion" />
                </div>
                <div style="text-align: left; margin-top: 30px">
                  <label id="lblKeyword" name="lblKeyword" style="font-weight: bold">
                    关键字：
                  </label>
                  <label id="txtKeyword" name="txtKeyword" />
                </div>

                <div style="text-align: left; margin-top: 30px">
                  <label id="lblPeriodical" name="lblPeriodical" style="font-weight: bold">
                    期刊：
                  </label>
                  <label id="txtPeriodical" name="txtPeriodical" />
                </div>

                <div style="text-align: right; margin-top: 50px">
                  <button
                    id="btnDownLoadFile"
                    type="button"
                    class="btn btn-primary"
                    @click="btnDownLoadFile_Click()"
                    >下载附件</button
                  >
                  <label
                    id="lblDownLoadFile"
                    name="txtPeriodical"
                    style="color: crimson; font-weight: bold"
                    >此论文暂无下载文件</label
                  >
                </div>
              </div>

              <div style="padding-left: 170px; padding-right: 100px">
                <div id="pingfen1"></div>
              </div>

              <div style="padding-left: 100px; padding-right: 100px; padding-bottom: 100px">
                <div class="box" id="J_Post">
                  <div class="common-avatar my-avatar J_userCenter">
                    <img src="@/assets/img/avatar5.png" width="100%" height="100%" /><span
                      >pyf</span
                    >
                  </div>
                  <div class="box-content box-login">
                    <div class="box-textarea-block">
                      <textarea
                        class="box-textarea J_Textarea"
                        id="txtAppraiseContent"
                        placeholder="说两句吧..."
                      ></textarea>
                    </div>

                    <div class="box-info" style="height: 60px">
                      <div class="box-operate">
                        <span class="box-avatar">
                          <img src="@/assets/img/avatar3.png" width="100%" height="100%" />
                        </span>
                        <b class="box-username" id="bUserName"></b>
                      </div>
                      <div
                        class="box-commentBtn box-commentBtn--able J_PostBtn"
                        id="J_PostBtn"
                        @click="SubmitAppraise1_Click()"
                        >发布评论</div
                      >
                    </div>
                  </div>
                </div>

                <div class="comment-short" id="J_Short">
                  <div class="comment-title">
                    <p class="comment-all" @click="AllComment_Click()">全部评论</p>
                    <div class="comment-center" id="J_CommentCenter">
                      <span class="comment-center-slash">/</span>
                      <span class="comment-my J_userCenter" @click="MyComment_Click()"
                        >我的评论</span
                      >
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
                        @click="HottestComment_Click()"
                        >最热</span
                      >
                    </p>
                  </div>
                  <div id="J_ShortComment"> </div>
                </div>
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal -->
        </div>

        <div
          class="modal fade"
          style="z-index: 1062"
          id="divEditAppraise"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="margin-left: 330px; margin-top: 100px">
            <div class="modal-content" style="width: 800px">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">评论回复</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                  >×</button
                >
              </div>
              <div class="modal-body">
                <table
                  id="tabwucPaperSubViewpointAppraise"
                  name="tabwucPaperSubViewpointAppraise"
                  style="width: 760px; padding: 1px; border: 0px"
                  class="table table-bordered table-hover"
                >
                  <tr>
                    <td class="NameTD">
                      <label class="col-form-label text-right" style="width: 90px">评分</label>
                    </td>
                    <td class="ValueTD">
                      <div id="pingfen2"></div>
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblAppraiseContent2"
                        name="lblAppraiseContent"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        评论
                      </label>
                    </td>
                    <td class="ValueTD">
                      <textarea
                        id="txtAppraiseContent2"
                        name="txtAppraiseContent"
                        class="form-control"
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
                  @click="SubmitAppraise2_Click()"
                  >添加</button
                >
              </div>
            </div>
            <!-- /.modal-content -->
          </div>
          <!-- /.modal -->
        </div>
      </div>

      <input id="hidOpType" type="hidden" />
      <input id="hidPaperId" type="hidden" />
      <input id="hidSubviewPointId" type="hidden" />
      <input id="hidSubviewPointTypeId" type="hidden" />
      <input id="hidOperationType" type="hidden" value="{{OperationType}}" />
      <input id="hidKeyId" type="hidden" />

      <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortvThesisBy" type="hidden" value="" />
      <input id="hidPicAddress" type="hidden" value="" />

      <input id="hidUserId" type="hidden" />
      <input id="hidRoleId" type="hidden" />

      <input id="hidUserName" type="hidden" />
      <input id="hidBrowseNumber" type="hidden" />

      <input id="hidParentId" type="hidden" />

      <input id="hidPaperUserId" type="hidden" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';
  import '@/assets/css/comment.css';
  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/lib/startnum-1.0/css/startnum.css';

  import { defineComponent, onMounted, reactive, ref } from 'vue';

  import $ from 'jquery';
  import router from '@/router';
  import SysCommentCom from '@/views/GradEduTools/SysComment.vue';
  import { CommQuestionAnswer } from '@/views/InteractManage/CommQuestionAnswer';

  import { message } from '@/utils/myMessage';
  import PageHeadCom from '@/ts/components/PageHead.vue';
  import { useRoute } from 'vue-router';
  import PaperDetail from '@/views/GradEduEx/PaperDetail';
  import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
  import { initPingFen } from '@/ts/PubFun/StarNum';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';

  export default defineComponent({
    name: 'PaperDetail',
    components: {
      // 组件注册
      SysCommentCom,
      PageHeadCom,
    },
    props: {
      paperId: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      // const paperId = ref(''); // 声明一个 ref 用于存储参数
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const isShowHeader = ref(false);

      const dialogVisible = ref(false);
      const strSubmitButtonTextGroup = ref('添加');
      const strCancelButtonTextGroup = ref('取消');

      const isMyResearchChecked = ref(false);
      const Login_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivList = ref();
      const refDivEditGroup = ref();
      const SysCommentRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      const refCommentTypeId = ref('');
      const refPubParentId = ref('');
      const refScoreType = ref('');
      const refUser = ref('');
      const refKeyId = ref('');
      const refTypeId = ref('');
      const refFontSize = ref('');
      const route = useRoute(); // 获取当前路由信息

      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancel_Group':
            strCancelButtonTextGroup.value = strNewValue;
            break;
          case 'btnSubmit_Group':
            strSubmitButtonTextGroup.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancel_Group':
            return strCancelButtonTextGroup.value;
          case 'btnSubmit_Group':
            return strSubmitButtonTextGroup.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            return '';
        }
      };
      onMounted(() => {
        // const strShowHeader = route.params.showHeader;
        // console.log(strShowHeader);

        PaperDetail.vuebtn_Click = btn_Click;
        PaperDetail.GetPropValue = GetPropValue;

        // window_onload();
      });
      function SetDiv() {}
      function showDialog() {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      }

      function hideDialog() {
        dialogVisible.value = false;
      }

      function GetPaperID(strCommentOrder: enumCommentOrder) {
        // const Request = new Object();
        // Request = GetRequest();

        // if (typeof route.query.paperId === 'string') {
        //   paperId.value = route.query.paperId;
        // } else {
        //   // 如果不是字符串，可以在这里处理
        //   paperId.value = ''; // 或者设置默认值
        // }

        const objpage = new PaperDetail(refDivLayout.value);
        objpage.btnDetailRecord_Click(strCommentOrder);
        // objpage.PageLoad();
      }

      function window_onload() {
        //		aurl   文件夹路径
        //	divname   div的id ， （必传参数）
        //	inputname  会为你生成input :text;设置input id 默认div id;
        //	starnum    星星的个数；默认五个；
        //	startnum   星星初始化个数，初始化后，不可更改；(op  设置 true ；)
        //  textTure   星星数默认五颗；开启文本显示；
        initPingFen({ divname: 'pingfen1', textTure: true, inputname: 'pin1' });
        initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin2' });
        GetPaperID(enumCommentOrder.AllComment_01);
      }

      /*
       * 添加点赞
       */
      function btnAddVote_Click() {
        //$('#hidSubViewpointId').val(strKeyId);

        const objPage = new PaperDetail(refDivLayout.value);
        objPage.btnAddVote_Click();

        message.success('已点赞!');
      }

      /*
       * 添加收藏
       */
      function btnAddCollection_Click() {
        //$('#hidSubViewpointId').val(strKeyId);

        const objPage = new PaperDetail(refDivLayout.value);
        objPage.btnAddCollection_Click();
        message.success('已收藏!');
      }

      //下载
      function btnDownLoadFile_Click() {
        const objpage = new PaperDetail(refDivLayout.value);
        objpage.btnDownLoadFile_Click();
      }

      //下载方法
      function doDownLoad(filepath: string, filename: string) {
        const aLink = document.createElement('a');
        aLink.download = filename;
        aLink.href = filepath;
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink);
      }

      /*
       * 添加评论
       */
      function SubmitAppraise1_Click() {
        $('#J_PostBtn').attr('disabled', 'true');

        $('#hidParentId').val('root');

        if ($('#hidUserInfo').val() != '') {
          //alert("提交" + strOp);

          const objPage = new PaperDetail(refDivLayout.value);
          objPage.SubmitAppraise1_Click();
        } else {
          $('#J_PostBtn').attr('disabled', 'false');
          alert('用户session丢失，请重新登录！');
        }
      }

      //回复评论
      function SubmitAppraise2_Click() {
        $('#btnOKUpdAppraise').attr('disabled', 'true');
        if ($('#hidUserInfo').val() != '') {
          //alert("提交" + strOp);

          const objPage = new PaperDetail(refDivLayout.value);
          objPage.SubmitAppraise2_Click();
        } else {
          $('#btnOKUpdAppraise').attr('disabled', 'false');
          alert('用户session丢失，请重新登录！');
        }
      }

      /*
       * 删除评论
       */
      function btnDeleteComment_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new PaperDetail(refDivLayout.value);
        objPage.btnDeleteComment_Click(strKeyId);
      }

      function btnReplyComment_Click(strKeyId: string) {
        $('#hidParentId').val(strKeyId);
        showDialog();
      }

      //全部评论
      function AllComment_Click() {
        // $('#h1idOrderbyId').val('1');

        const objPage = new PaperDetail(refDivLayout.value);
        objPage.Bind_ShowAppraise_Click(enumCommentOrder.AllComment_01);

        //message.success('已点赞!');
      }

      //我的评论
      function MyComment_Click() {
        // $('#h1idOrderbyId').val('2');

        const objPage = new PaperDetail(refDivLayout.value);
        objPage.Bind_ShowAppraise_Click(enumCommentOrder.Personal_02);

        //message.success('已点赞!');
      }

      //最新评论
      function NewComment_Click() {
        // $('#h1idOrderbyId').val('3');

        const objPage = new PaperDetail(refDivLayout.value);
        objPage.Bind_ShowAppraise_Click(enumCommentOrder.LatestComments_03);

        //message.success('已点赞!');
      }
      function AlertOK() {
        message.success('评论成功!');
      }

      function AlertNo() {
        message.success('删除成功!');
      }

      function AlertScore() {
        message.info('请输入评分!');
      }

      function AlertComment() {
        message.info('请输入评语!');
      }

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return idCurrEduCls.value;
          case 'paperId':
            return props.paperId;

          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: any): void {
        console.log(strKeyId);
        let arr;
        let strMsg;
        let strAnswerId;
        let strUserId;
        let strQuestionsId;
        let returnValue = '';
        let objData = strKeyId;
        switch (strCommandName) {
          case 'AlertOK':
            AlertOK();
            return;
          case 'AlertNo':
            AlertNo();
            return;
          case 'AlertScore':
            AlertScore();
            return;
          case 'AlertComment':
            AlertComment();
            return;

          case 'window_onload':
            window_onload();
            return;
          case 'SetDiv':
            SetDiv();
            return;
          case 'ShowDialog':
            showDialog();
            return;
          case 'HideDialog':
            hideDialog();
            return;

          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          case 'SysComment':
            refKeyId.value = objData.keyId;
            refUser.value = objData.user;
            if (objData.pubParentId == '') {
              refPubParentId.value = 'pyf';
            } else {
              refPubParentId.value = objData.pubParentId;
            }
            refCommentTypeId.value = objData.type; // '02';
            refScoreType.value = '3';
            CommQuestionAnswer.SysCommentRef = SysCommentRef;

            break;

          // break;
          default:
            return PaperDetail.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        }
        return PaperDetail.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function location_reload() {
        window.location.reload();
      }
      function HottestComment_Click() {}
      return {
        isMyResearchChecked,
        dialogVisible,
        strSubmitButtonTextGroup,
        strCancelButtonTextGroup,
        SetButtonText,
        GetButtonText,
        Login_EditRef,
        SysCommentRef,
        refDivLayout,
        refDivQuery,
        refDivList,
        refDivEditGroup,
        btn_Click,
        getUser,
        UserId,
        UserName,

        refCommentTypeId,
        refKeyId,
        refTypeId,
        refFontSize,
        refPubParentId,
        refScoreType,
        refUser,
        isShowHeader,
        btnAddVote_Click,
        location_reload,
        SubmitAppraise2_Click,
        showDialog,
        hideDialog,
        btnDownLoadFile_Click,
        btnAddCollection_Click,
        SubmitAppraise1_Click,
        AllComment_Click,
        MyComment_Click,
        NewComment_Click,
        HottestComment_Click,
      };
    },
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped>
  body {
    transform: scale(0.9); /* 将页面内容缩小 0.8 倍 */
    transform-origin: left top; /* 设置缩放的基点为左上角 */
  }
  .myLi {
    background: url('/lib/startnum-1.0/images/star.gif') 0px 0px no-repeat;
  }
</style>

<!-- import '@/assets/lib/Xadmin/lib/layui/layui.js'; 
 import '@/assets/lib/Xadmin/js/x1admin.js'; 
import '@/assets/lib/startnum-1.0/starnum.js'; -->
