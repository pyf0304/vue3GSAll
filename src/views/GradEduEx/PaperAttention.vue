<template>
  <div id="divLayout_PaperAttention" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <PageHeadCom
      v-if="isShowHeader == true"
      ref="PageHeadRef"
      :title="'关注论文'"
      :isShowEduCls="'true'"
      :header-height="'60px'"
      :is-show-paper-iframe="'true'"
      :is-show-topic="'false'"
      :is-show-search="'false'"
      :is-show-major="'true'"
      :is-show-attention="'true'"
      :paper-id="paperId"
    ></PageHeadCom>
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
    <div id="tabLayout">
      <!-- 标题层 -->
      <div v-if="showHeader" class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#/index">首页</a></li>
              <li class="breadcrumb-item"><a href="#/PaperIframe/">论文管理</a></li>
              <li class="breadcrumb-item active" aria-current="page"> 关注论文 </li>
              <li class="breadcrumb-item">
                <label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-3">
          <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
            <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
            <!-- <i class="fas fa-sync-alt"></i> -->
          </a>
        </div>
      </div>

      <div style="margin: 5px; width: 100%">
        <div id="divTree" class="divTree" style="width: 29%">
          <div id="divFunction" ref="refDivFunction" class="layui-card-header">
            <div style="float: left">您关注的论文有:</div>

            <div style="float: right" class="btn-group btn-group-sm">
              <button
                id="btnAddNewRecord"
                class="btn btn-success"
                name="btnAddNewRecord"
                title="添加组"
                @click="btnAddNewRecord_Click()"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
              </button>

              <button
                id="btnDelRecord"
                class="btn btn-danger"
                name="btnDelRecord"
                title="取消关注"
                @click="btnDelRecord_Click()"
              >
                <font-awesome-icon :icon="['fas', 'trash']" />取消关注
              </button>
            </div>

            <div style="float: right; margin-right: 50px">
              <input
                id="ckbMyResearch"
                type="checkbox"
                v-model="isMyResearchChecked"
                @click="ckbMyResearch_Click"
              />我的研究
            </div>
          </div>
          <ul id="TreeBind" class="st_tree"></ul>
        </div>

        <div id="right_Content" class="divContent divContent2" style="width: 69%">
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
            <div v-show="activeTabId === 'Paper_SubViewpoint'" id="Paper_SubViewpoint">
              <div class="alert alert-info alert-dismissible">
                <button type="button" class="close" data-dismiss="alert"> &times; </button>
                <strong>本界面功能：</strong
                >左侧显示关注后的论文，选中论文以后可以进行取消，点击论文后面的编辑按钮可以维护论文子观点，右边显示该论文简略子观点！
              </div>
              <!-- 查询区 -->
              <div id="divQuery" ref="refDivQuery" class="div_query no-wrap-button">
                <table
                  id="tabQuery"
                  name="tabQuery"
                  style="width: 20%"
                  class="table table-bordered table-hover table td table-sm"
                >
                  <tr>
                    <td>
                      <select
                        id="ddlSubViewpointTypeId_q"
                        class="form-control form-control-sm"
                        style="width: 200px"
                      />
                    </td>
                    <td>
                      <select
                        id="ddlSectionId_q"
                        class="form-control form-control-sm"
                        style="width: 200px"
                      />
                    </td>
                    <td>
                      <!-- <button
                        title="查询"
                        class="layui-btn"
                        lay-submit=""
                        lay-filter="sreach"
                        @click="btnQuery_Click()"
                      >
                        <font-awesome-icon icon="search" />
                      </button> -->
                      <button
                        title="查询"
                        class="btn btn-info btn-sm"
                        style="white-space: nowrap"
                        @click="btn_Click('Query', '')"
                      >
                        查询
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- 功能区 -->

              <div id="div_SubViewpointList">
                <div class="layui-row layui-col-space15">
                  <div class="layui-col-md12">
                    <div class="layui-card">
                      <div class="layui-card-body div_List">
                        <table class="layui-table layui-form">
                          <tbody id="tbList" class="x-cate"></tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-show="activeTabId === 'Paper_QA'" id="Paper_QA">
              <div class="divComment" style="margin: 10px">
                <div id="J_Short" class="comment-short"></div>
              </div>
            </div>

            <div v-show="activeTabId === 'Paper_Tags'" id="Paper_Tags"></div>
            <div v-show="activeTabId === 'Tea_QA'" id="Tea_QA">
              <div class="divComment" style="margin: 10px">
                <div id="J_Short_TeaQA" class="comment-short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input id="hidPaperId" type="hidden" />

    <input id="hidPaperAttentionId" type="hidden" />

    <!-- 存放tab页顺序 -->

    <input id="hidIdCurrEduCls" type="hidden" />

    <!-- 我的研究 -->
    <input id="hidMyResearch" type="hidden" />
    <!-- 问题用户 -->
    <input id="hidQuestionsUser" type="hidden" />
    <SysCommentCom
      ref="SysCommentRef"
      :key-id="refKeyId"
      :comment-type-id="refCommentTypeId"
      :font-size="refFontSize"
      :pub-parent-id="refPubParentId"
      :score-type="refScoreType"
      :user="refUser"
    ></SysCommentCom>
  </div>
  <!-- 模态框 -->
  <el-dialog v-model="dialogVisibleGroup" id="editGroup" width="500px" title="编辑论文组名">
    <!-- 模态框主体 -->
    <div ref="refDivEditGroup">
      <input
        id="txtPaperGroupName"
        class="form-control form-control-sm text-primary"
        style="width: 90%"
      />
      <input id="hidPaperGroupId" type="hidden" />
    </div>

    <template #footer>
      <el-button id="btnCancel_Group" @click="dialogVisibleGroup = false">{{
        strCancelButtonTextGroup
      }}</el-button>
      <el-button id="btnSubmit_Group" type="primary" @click="SubmitUpdateGroup_Click()">{{
        strSubmitButtonTextGroup
      }}</el-button>
    </template>
  </el-dialog>

  <el-dialog
    id="editPaperGroup"
    v-model:visible="dialogVisiblePaperGroup"
    width="500px"
    title="调整关注论文组"
  >
    <!-- 模态框主体 -->

    <table>
      <tr>
        <td>
          <select
            id="ddlPaperGroupId"
            name="ddlPaperGroupId"
            class="form-control form-control-sm"
            style="width: 300px"
          />
        </td>
        <td>
          <button type="button" class="btn btn-primary" @click="SubmitPaperGroup_Click()">
            提交更改
          </button>
        </td>
      </tr>
    </table>
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

  import { defineComponent, onMounted, reactive, ref } from 'vue';

  import $ from 'jquery';
  import router from '@/router';
  import SysCommentCom from '@/views/GradEduTools/SysComment.vue';
  import { PaperAttention } from '@/views/GradEduEx/PaperAttention';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { CommQuestionAnswer } from '@/views/InteractManage/CommQuestionAnswer';
  import { Paper_GetObjByPaperIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';

  import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { message } from '@/utils/myMessage';
  import PageHeadCom from '@/ts/components/PageHead.vue';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'PaperAttention',
    components: {
      // 组件注册
      SysCommentCom,
      PageHeadCom,
    },
    props: {
      showHeader: {
        type: Boolean,
        default: false,
      },
      paras: { type: String, default: '' },
    },
    setup(props) {
      const activeTabId = ref('Paper_SubViewpoint');
      const tabs = reactive([
        { id: 'Paper_SubViewpoint', label: '子观点' },
        { id: 'Paper_QA', label: '论文答疑' },
        { id: 'Paper_Tags', label: '论文标记' },
        { id: 'Tea_QA', label: '教师提问' },
      ]);
      const readWriteTypeId = ref('01'); //默认阅读写作类型为01：阅读
      const paperId = ref(''); // 声明一个 ref 用于存储参数
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const isShowHeader = ref(false);
      const dialogVisibleGroup = ref(false);
      const dialogVisiblePaperGroup = ref(false);
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
        if (typeof route.query.showHeader === 'string') {
          isShowHeader.value = Boolean(route.query.showHeader);
        } else {
          // 如果不是字符串，可以在这里处理
          if (props.showHeader == true) isShowHeader.value = true; // 或者设置默认值
          else isShowHeader.value = false; // 或者设置默认值
        }

        PaperAttention.divLayout = refDivLayout.value;
        PaperAttention.divQuery = refDivQuery.value;
        PaperAttention.divList = refDivList.value;
        PaperAttention.vuebtn_Click = btn_Click;
        PaperAttention.GetPropValue = GetPropValue;
        const objPage = new PaperAttention();
        objPage.PageLoad();
      });

      //维护子观点或者查看子观点
      async function UpdatePaperSubView_Click(strType: string) {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        var strTitle = '';
        var strPaperId = clsPrivateSessionStorage.paperId;
        var stridCurrEduCls = clsPubLocalStorage.idCurrEduCls;
        if (strType == '01') {
          strTitle = '论文子观点维护';
        } else {
          strTitle = '论文子观点查看';
        }
        let myRouter = ``;
        const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaper == null) {
          message.warning('');
          return;
        }
        if (objPaper.literatureTypeId == '05') {
          myRouter = `/ReadTraining?paperId=${objPaper.paperId}&type=${strType}`;
        } else {
          myRouter = `/PaperSubViewpoint?paperId=${objPaper.paperId}&type=${strType}`;
        }

        router.push(myRouter);
        // xadmin.open(
        //   strTitle,
        //   '../GraduateEduEx/PaperSubViewpoint_pdf?Type=' +
        //     strType +
        //     '&idCurrEduCls=' +
        //     stridCurrEduCls +
        //     '&PaperId=' +
        //     strPaperId,
        //   '',
        //   '',
        //   true,
        // );
      }
      //添加论文答疑和教师提问
      async function btnAddQA_Click(QuestionsTypeId: string) {
        let strTitle = '';
        const strPaperId = clsPrivateSessionStorage.paperId;
        const stridCurrEduCls = clsPubLocalStorage.idCurrEduCls;

        if (QuestionsTypeId == '01') {
          strTitle = '论文答疑';
        } else {
          strTitle = '教师提问';
        }
        let myRouter = ``;
        const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaper == null) {
          message.warning('');
          return;
        }
        const strType = '01';
        if (objPaper.literatureTypeId == '05') {
          myRouter = `/ReadTraining?paperId=${objPaper.paperId}&type=${strType}&questionsTypeId=${QuestionsTypeId}`;
        } else {
          myRouter = `/PaperSubViewpoint?paperId=${objPaper.paperId}&type=${strType}&questionsTypeId=${QuestionsTypeId}`;
        }

        router.push(myRouter);
        // xadmin.open(
        //   strTitle,
        //   '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&PaperId=' +
        //     strPaperId +
        //     '&QuestionsTypeId=' +
        //     QuestionsTypeId +
        //     '&idCurrEduCls=' +
        //     stridCurrEduCls,
        //   '',
        //   '',
        //   true,
        // );
      }
      //修改组名
      async function UpdateGroupName_Click(strKey: string, PaperGroupName: string) {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        //xadmin.open('论文子观点维护', '../GraduateEduEx/PaperSubViewpoint_pdf?Type=1&PaperId=' + strKey, '', '', true);
        //$('#editGroup').modal('show');
        try {
          await showDialogGroup();
          if (PaperAttention.divEditGroup == null) {
            PaperAttention.divEditGroup = refDivEditGroup.value;
          }
          SetButtonText('btnSubmit_Group', '确认修改');
          SetInputValueInDivObj(PaperAttention.divEditGroup, 'hidPaperGroupId', strKey);
          SetInputValueInDivObj(PaperAttention.divEditGroup, 'txtPaperGroupName', PaperGroupName);
        } catch (e) {
          console.error(e);
        }
      }
      function showDialogGroup() {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisibleGroup.value = true;
          PaperAttention.divEditGroup = refDivEditGroup.value;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
            PaperAttention.divEditGroup = refDivEditGroup.value;
          }, 1000);
        });
      }
      //解答论文答疑和教师提问
      async function btnQAnswer_Click(
        PaperId: string,
        QuestionsId: string,
        QuestionsTypeId: string,
        idCurrEduCls: string,
      ) {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        const strPaperId = PaperId;
        const stridCurrEduCls = idCurrEduCls;

        var strTitle = '';
        if (QuestionsTypeId == '01') {
          strTitle = '论文答疑';
        } else {
          strTitle = '教师提问';
        }
        let myRouter = ``;
        const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaper == null) {
          message.warning('');
          return;
        }
        if (objPaper.literatureTypeId == '05') {
          myRouter = `/ReadTraining?paperId=${objPaper.paperId}&type=${QuestionsTypeId}&questionsTypeId=${QuestionsTypeId}&questionsId=${QuestionsId}&idCurrEduCls=${idCurrEduCls}`;
        } else {
          myRouter = `/PaperSubViewpoint?paperId=${objPaper.paperId}&type=${QuestionsTypeId}&questionsTypeId=${QuestionsTypeId}&questionsId=${QuestionsId}&idCurrEduCls=${idCurrEduCls}`;
        }

        router.push(myRouter);
        // xadmin.open(
        //   strTitle,
        //   '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&PaperId=' +
        //     PaperId +
        //     '&QuestionsId=' +
        //     QuestionsId +
        //     '&QuestionsTypeId=' +
        //     QuestionsTypeId +
        //     '&idCurrEduCls=' +
        //     idCurrEduCls,
        //   '',
        //   '',
        //   true,
        // );
      }

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return idCurrEduCls.value;
          case 'paperId':
            return paperId.value;
          case 'activeTabId':
            return activeTabId.value;
          case 'readWriteTypeId':
            return readWriteTypeId.value;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: any): string {
        console.log(strKeyId);
        let arr;
        let strMsg;
        let strAnswerId;
        let strUserId;
        let strQuestionsId;
        let returnValue = '';
        let objData = strKeyId;
        switch (strCommandName) {
          case 'GetButtonText':
            returnValue = GetButtonText(strKeyId);

            return returnValue;
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
            // arr = strKeyId.split('|');
            // if (arr.length != 3) {
            //   strMsg = `在执行btnSysComment_Click过程中，参数数目不正确！`;
            //   console.error(strMsg);
            //   alert(strMsg);
            //   return;
            // }

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
          case 'UpdatePaperSubView':
            UpdatePaperSubView_Click(strKeyId);
            return '';
          case 'AddQA':
            btnAddQA_Click('');
            break;
          case 'UpdateGroupName':
            UpdateGroupName_Click(objData.paperGroupId, objData.paperGroupName);
            return '';
          case 'QAnswer':
            btnQAnswer_Click(
              objData.paperId,
              objData.questionsId,
              objData.questionsTypeId,
              objData.idCurrEduCls,
            );
            return '';
          // break;
          default:
            return PaperAttention.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        }
        return PaperAttention.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        isMyResearchChecked,
        dialogVisibleGroup,
        dialogVisiblePaperGroup,
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
        activeTabId,
        tabs,
        refCommentTypeId,
        refKeyId,
        refTypeId,
        refFontSize,
        refPubParentId,
        refScoreType,
        refUser,
        showDialogGroup,
        isShowHeader,
        paperId,
      };
    },
    methods: {
      // 方法定义

      changeTab(tabId: string) {
        this.activeTabId = tabId;
        PaperAttention.btn_Click('changeTab', tabId, this.refDivLayout);
      },
      //点击树菜单事件；
      btnSelectPaper(strKeyId: string, mId: number, idCurrEduCls: string) {
        //先清除背景色
        $('.submenu li a').removeClass('selected');
        //添加背景色
        $(`#${strKeyId} a`).addClass('selected');
        //存储点击的id

        clsPrivateSessionStorage.paperId = strKeyId;
        $('#hidPaperAttentionId').val(mId);
        clsPubLocalStorage.idCurrEduCls = idCurrEduCls;

        //点击后调整关系表数据方法；

        const objPage = new PaperAttention();
        objPage.li_PaperAttentionTab_Click();
      },

      //调整关注论文组
      UpdatePaperGroup_Click(strKey: string, PaperGroupId: string) {
        $('#hidPaperAttentionId').val(strKey);
        $('#ddlPaperGroupId').val(PaperGroupId);

        this.ShowDialogPaperGroup();

        //    var objPage = new paper.PaperAttention();
        //    objPage.SubmitUpdateGroup_Click();
      },

      ShowDialogPaperGroup() {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          this.dialogVisiblePaperGroup = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      },
      hideDialogPaperGroup() {
        this.dialogVisiblePaperGroup = false;
      },

      hideDialogGroup() {
        this.dialogVisibleGroup = false;
      },

      btnAddNewRecord_Click() {
        //$('#hidPaperGroupId').val(strKey);
        //$('#txtPaperGroupName').val(PaperGroupName);

        this.SetButtonText('btnSubmit_Group', '确认添加');
        $('#txtPaperGroupName').val('');
        this.showDialogGroup();
      },

      SubmitUpdateGroup_Click() {
        this.hideDialogGroup();

        var objPage = new PaperAttention();
        objPage.SubmitUpdateGroup_Click();
      },

      SubmitPaperGroup_Click() {
        this.hideDialogPaperGroup();

        var objPage = new PaperAttention();
        objPage.SubmitPaperGroup_Click();
      },

      //取消论文关注
      btnDelRecord_Click() {
        const strKeyId = GetInputValueInDivObj(PaperAttention.divLayout, 'hidPaperAttentionId');

        if (strKeyId == '') {
          alert('请选择需要取消关注的论文！');
          return;
        } else {
          if (confirm('确定是要取消当前论文的关注吗？')) {
            var objPage = new PaperAttention();
            objPage.btnDelRecordInTab_Click(strKeyId);
            return true;
          }
          return false;
        }
      },

      //只显示我的研究
      ckbMyResearch_Click() {
        if (this.isMyResearchChecked == true) {
          message.info('只显示我的研究！');
          $('#hidMyResearch').val(1);
        } else {
          message.info('只显示我关注的！');
          $('#hidMyResearch').val(0);
        }

        var objPage = new PaperAttention();
        objPage.PageLoad();
      },
    },
  });
</script>
<style scoped>
  body {
    transform: scale(0.9); /* 将页面内容缩小 0.8 倍 */
    transform-origin: left top; /* 设置缩放的基点为左上角 */
  }

  #divTree {
    float: left;
    width: 29%;
    /* height: 100%; */
    /* position: fixed; */
    position: relative;
    top: 1px;
    left: 1px;
    border-radius: 10px;
    bottom: 0; /* 设置底部位置为0，使其延伸到屏幕底部*/
  }

  #right_Content {
    float: right;
    width: 69%;
    bottom: 0; /* 设置底部位置为0，使其延伸到屏幕底部 */

    /* height: 900px; */
  }

  .div_List {
    font-size: 15px;
    overflow: auto;
    height: 740px;
    bottom: 0;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #0080ff;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
  }

  .divTree22 {
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
    width: 99%;
  }

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }
  .full-height-div {
    height: 100vh;
    background-color: #f0f0f0; /* Set a background color to make it visible */
  }
</style>
<!-- 

    
    
    
    

    
      layui.use(['laydate', 'form'], function () {
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
          elem: '#txtUpdDate_q', //指定元素
        });
      });
    
    

    
      function window_onload = function () {
        $('#hidTabNum').val(1);
        
          var objPage = new paper.PaperAttention();
          objPage.PageLoad();
        
      };

      //刷新本页面观点
      function Refresh_vPaperSubViewpoint() {
        
          var objPage = new paper.PaperAttention();
          objPage.Bind_PaperSubViewpoint();
        
      }



      var flag = false;
      function main_Click(strKey:string) {
        if (flag == true) {
          $('#' + strKey).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
          $('#ul' + strKey).show();

          flag = false;
        } else {
          $('#' + strKey).css('background', 'url(../images/st_folder.gif) no-repeat left');
          $('#ul' + strKey).hide();

          flag = true;
        }
      }

      //默认展开数据
      function LoadTreeShow(strKey) {
        $('#' + strKey).css('background', 'url(../images/st_folder_open.gif) no-repeat left');

        //    var num = $('.main').index(this);
        //$('.main').eq(num).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
        //    $('.submenu').eq(num).show(100);
        //    flag = false;
      }

   
      //信息提示
      function layui_Alert(iconKey, strMsg) {
        message.success(strMsg, {
          icon: iconKey,
          time: 2000,
        });
      }

    
      

      //点击树菜单事件；
      function li_PaperAttentionTab_Click(KeyId: string) {
        //存储点击的id
        $('#hidTabNum').val(KeyId);
        
          var objPage = new paper.PaperAttention();
          objPage.li_PaperAttentionTab_Click();
        
      }

    

      //添加论文答疑和教师提问
      function btnAddPaperTags_Click() {
        var strPaperId = GetHidPaperId(divName);
        var stridCurrEduCls = clsPubLocate.idCurrEduCls;

        xadmin.open(
          '论文标注',
          '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&PaperId=' +
            strPaperId +
            '&QuestionsTypeId=03&idCurrEduCls=' +
            stridCurrEduCls,
          '',
          '',
          true,
        );
      }


      /*
添加点赞
(AutoGCLib.WA_ViewScript_TS4CSharp:btnAddVote_Click)
*/
      function btnAddVote_Click(strKeyId: string, strUserId: string) {
        //$('#hidSubViewpointId').val(strKeyId);
        
          var objPage = new paper.PaperAttention();
          objPage.btnAddVote_Click(strKeyId, strUserId);
        
      }
    </script> -->
