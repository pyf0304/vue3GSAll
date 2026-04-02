<template>
  <div id="divLayout_ReadTraining" ref="refDivLayout" style="height: 100%">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="divHead" class="layout-header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand moduleTitle text-secondary" href="index">课文阅读</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ml-3">
                <router-link to="/index" class="nav-link">前台首页</router-link>
              </li>
              <li class="nav-item ml-3">
                <router-link to="/PaperIframe" class="nav-link">课文管理</router-link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span id="spnEduClsName_Head_MiddleSchool" title="当前选择的教学班"></span>
                </a>
                <ul id="ulCurrEduCls" class="dropdown-menu"></ul>
              </li>

              <li class="nav-item ml-3">
                <a id="lnkUserName" class="nav-link" href="javascript:;"></a>
                <ul id="ulCurrEduCls" class="dropdown-menu">
                  <!-- 二级菜单 -->
                  <li>
                    <a onclick="xadmin.open('个人信息', '../Web/UserInfo', 1000, 800)">个人信息</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ml-3">
                <span id="spanMajorName" title="当前用户专业名称" class="nav-link"></span>
              </li>
              <li class="nav-item ml-3">
                <a
                  class="nav-link"
                  onclick="                 xadmin.add_tab(
                      '邀请回答问题',
                      '../InteractManage/qa_PaperCRUD?typeid=2&IsReceive=1',
                    )
                  "
                  >答疑被邀请<span id="QuestionsCount" class="badge text-bg-info">0</span></a
                >
              </li>
              <li class="nav-item ml-3">
                <a
                  class="btn btn-sm btn-info"
                  title="刷新"
                  @click="btn_Click('location.reload', '')"
                >
                  <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
                </a>
              </li>

              <li class="nav-item ml-3">
                <a
                  class="btn btn-info btn-sm"
                  style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                  title="向右推移"
                  @click="left_Click()"
                >
                  <font-awesome-icon :icon="['fas', 'angles-right']" />
                </a>
              </li>

              <li class="nav-item ml-3">
                <a
                  class="btn btn-info btn-sm"
                  style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                  title="向左推移"
                  @click="right_Click()"
                >
                  <font-awesome-icon :icon="['fas', 'angles-left']" />
                </a>
              </li>

              <li class="nav-item ml-3">
                <a
                  class="btn btn-warning btn-sm"
                  style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                  title="内容区最大化"
                  @click="Maximize_Click()"
                >
                  <font-awesome-icon :icon="['fas', 'maximize']" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div id="divContent" style="width: 100%; height: 800px">
      <div id="leftPart" style="height: 800px"></div>
      <div id="right_Content">
        <!-- <ul id="tabMenu" class="nav nav-tabs" role="tablist">
          <li id="liPaper_SubViewpoint" class="nav-item">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#Paper_SubViewpoint"
              @click="li_PaperMenu_Click(1)"
              >子观点</a
            >
          </li>
          <li id="liPaper_QA" class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#Paper_QA" @click="li_PaperMenu_Click(2)"
              >论文答疑</a
            >
          </li>
          <li id="liPaper_Tags" class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#Paper_Tags" @click="li_PaperMenu_Click(3)"
              >论文标记</a
            >
          </li>
          <li id="liQuestion_QA" class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#Question_QA" @click="li_PaperMenu_Click(4)"
              >教师提问</a
            >
          </li>
          <li id="liTeaTest_QA" class="nav-item" style="display: none">
            <a class="nav-link" data-toggle="tab" href="#TeaTest_QA" @click="li_PaperMenu_Click(5)"
              >教师测试提问</a
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
        <!-- Tab panes -->
        <div class="tab-content">
          <div v-show="activeTabId === 'Paper_SubViewpoint'" id="Paper_SubViewpoint">
            <div class="layui-collapse" lay-accordion>
              <div class="layui-colla-item">
                <h3 class="text-secondary">论文详情</h3>
                <div id="divtab1" class="layui-colla-content">
                  <!-- 论文详情区 -->
                  <div id="div_PaperDetail">
                    <div id="tabwucPaperReadWrite" style="background-color: white"></div>
                  </div>
                </div>
              </div>

              <div class="layui-colla-item">
                <h3 class="text-secondary">论文子观点</h3>
                <div id="divtab2" class="layui-colla-content layui-show">
                  <!-- 查询区 -->
                  <div id="divQuery" ref="refDivQuery" class="div_query">
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
                            name="ddlSubViewpointTypeId_q"
                            class="form-control form-control-sm"
                            style="width: 200px"
                          />
                        </td>
                        <td>
                          <select
                            id="ddlSectionId_q"
                            name="ddlSectionId_q"
                            class="form-control form-control-sm"
                            style="width: 200px"
                          />
                        </td>
                        <td>
                          <button
                            title="查询"
                            class="btn btn-info btn-sm btn-nowrap"
                            lay-submit=""
                            lay-filter="sreach"
                            style="width: 70px"
                            @click="btnQuery_Click()"
                          >
                            <font-awesome-icon icon="search" />查询
                          </button>
                        </td>
                        <td>
                          <button
                            title="最新子观点"
                            class="btn btn-info btn-sm btn-nowrap"
                            lay-submit=""
                            lay-filter="sreach"
                            style="width: 70px"
                            @click="btnOrderBy_Click()"
                          >
                            <font-awesome-icon icon="sort-up" />最新
                          </button>
                        </td>
                        <td>
                          <button
                            title="添加子观点"
                            class="btn btn-info btn-sm btn-nowrap"
                            lay-submit=""
                            style="width: 70px"
                            @click="btnAddNewRecord_Click()"
                          >
                            <font-awesome-icon :icon="['fas', 'plus']" />添加1
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <!-- 功能区  -->
                  <div id="div_SubViewpointList" class="layui-fluid">
                    <div class="layui-row layui-col-space15">
                      <div class="layui-col-md12">
                        <div class="layui-card">
                          <div class="layui-card-body">
                            <table class="layui-table layui-form">
                              <tbody id="tbList" class="x-cate"></tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- 编辑层 -->

                  <div id="divEditRegion" style="display: none; margin-top: 50px">
                    <form id="uploadForm" method="post" enctype="multipart/form-data">
                      <div ref="PaperSubViewpoint_EditRef" class="modal-content" style="width: 99%">
                        <div class="modal-header">
                          <h4 id="myModalLabel" class="modal-title"> 子观点编辑 </h4>

                          <button
                            id="btnSubmitPaperSubViewpoint"
                            type="button"
                            class="btn btn-primary btn-sm"
                            style="float: right; width: 110px; margin-left: 300px"
                            @click="btn_Click('mySubmit', '')"
                          >
                            添加
                          </button>
                          <button
                            id="btnCancelPaperSubViewpoint"
                            type="button"
                            class="btn btn-primary btn-sm"
                            style="width: 110px"
                            @click="btn_Click('Cancel', '')"
                          >
                            取消编辑
                          </button>
                        </div>
                        <div class="modal-body">
                          <table
                            id="tabwucPaperSubViewpoint"
                            name="tabwucPaperSubViewpoint"
                            style="width: 100%; padding: 1px; border: 0px"
                            class="table table-bordered table-hover"
                          >
                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblSectionId"
                                  name="lblSectionId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  论文节
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  id="ddlSectionId"
                                  name="ddlSectionId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblShareId"
                                  name="lblShareId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  分享权限
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  id="ddlShareId"
                                  name="ddlShareId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointTypeId"
                                  name="lblSubViewpointTypeId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  类型
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  id="ddlSubViewpointTypeId"
                                  name="ddlSubViewpointTypeId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblAttitudesId"
                                  name="lblRWTitle"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  观点态度
                                </label>
                              </td>
                              <td>
                                <select
                                  id="ddlAttitudesId"
                                  name="ddlAttitudesId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblRWTitle"
                                  name="lblRWTitle"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  类型标题
                                </label>
                              </td>
                              <td>
                                <input
                                  id="txtRWTitle"
                                  name="txtRWTitle"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                            </tr>

                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  name="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  观点内容
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  id="txtSubViewpointContent"
                                  name="txtSubViewpointContent"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 80px"
                                ></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblExplainTypeId"
                                  name="lblExplainTypeId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  说明类型
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  id="ddlExplainTypeId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td></td>
                              <td style="display: none">
                                <span class="form-control form-control-sm" style="width: 200px">
                                  <input
                                    id="chkIsPublic"
                                    type="checkbox"
                                    checked="true"
                                    Text="是否公开"
                                  /><label for="chkIsPublic">是否公开</label>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblExplainContent"
                                  name="lblExplainContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  说明内容
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  id="txtExplainContent"
                                  name="txtExplainContent"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 80px"
                                ></textarea>
                              </td>
                            </tr>

                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblUploadfileUrl"
                                  name="lblUploadfileUrl"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  上传图片
                                </label>
                              </td>
                              <td id="tdInputsWrapper" class="ValueTD" colspan="3">
                                <input id="txtUploadImgFile" type="file" />
                                <button
                                  id="AddMoreFileBox"
                                  type="button"
                                  class="btn btn-primary"
                                  data-dismiss="modal"
                                >
                                  添加更多图片
                                </button>
                              </td>
                            </tr>

                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblLiteratureSourcesId"
                                  name="lblLiteratureSourcesId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  文献来源
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  id="txtLiteratureSourcesId"
                                  disabled
                                  class="form-control form-control-sm"
                                  style="width: 100px"
                                />
                              </td>
                              <td>
                                <button
                                  id="btnselectPaper"
                                  type="button"
                                  class="btn btn-primary"
                                  style="margin-top: 2px; width: 100px"
                                  @click="selectPaper_Click()"
                                >
                                  引用文献
                                </button>
                              </td>
                              <td></td>
                            </tr>
                            <tr style="display: none">
                              <td class="NameTD">
                                <label
                                  id="lblPageNumber"
                                  name="lblPageNumber"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  页码
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  id="txtPageNumber"
                                  name="txtPageNumber"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr style="display: none">
                              <td class="NameTD">
                                <label
                                  id="lblOrderNum"
                                  name="lblOrderNum"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  序号
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  id="txtOrderNum"
                                  name="txtOrderNum"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                  value="30"
                                />
                              </td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblMemo"
                                  name="lblMemo"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  备注
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  id="txtMemo"
                                  name="txtMemo"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 60px"
                                ></textarea>
                              </td>
                            </tr>
                          </table>
                        </div>
                        <input id="hdnFileOne" type="hidden" />
                        <input id="hdnFileTwo" type="hidden" />
                        <input id="hdnFileThree" type="hidden" />
                      </div>
                    </form>
                  </div>

                  <div
                    id="divPaperList"
                    class="modal fade"
                    style="z-index: 1060"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="myModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" style="margin-left: 200px">
                      <div class="modal-content" style="width: 1000px">
                        <div class="modal-header">
                          <h4 id="myModalLabel" class="modal-title"> 引用论文 </h4>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                          >
                            ×
                          </button>
                        </div>
                        <div class="modal-body">
                          <div id="divList" ref="refDivList" class="div_List">
                            <div id="divDataLst" ref="refDivDataLst" class="div_DataList"></div>
                            <div id="divPager" class="pager" value="1"></div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            id="btnCancel"
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                            @click="close_Click()"
                          >
                            关闭
                          </button>
                        </div>
                      </div>
                      <!-- /.modal-content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeTabId === 'Paper_QA'" id="divPaper_QA">
            <Paper_QACom
              ref="Paper_QARef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :push-id="pushId"
              :questions-id="questionsId"
            ></Paper_QACom>
          </div>
          <div v-show="activeTabId === 'Paper_Tags'" id="Paper_Tags">
            <Paper_TagsCom
              ref="Paper_TagsRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
            ></Paper_TagsCom>
          </div>
          <div v-if="activeTabId === 'RelaResource'" id="RelaResource">
            <!-- <Question_QACom
              ref="RelaResourceRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'21'"
            ></Question_QACom> -->
            <PaperResRelaListInCom
              ref="PaperResRelaListInRef"
              :paper-id="paperId"
            ></PaperResRelaListInCom>
          </div>
          <div v-if="activeTabId === 'UncommonWords'" id="UncommonWords">
            <Question_QACom
              ref="UncommonWordsRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'11'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'TextualQuestions'" id="TextualQuestions">
            <Question_QACom
              ref="TextualQuestionsRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'12'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'FundamentalQuestions'" id="FundamentalQuestions">
            <Question_QACom
              ref="FundamentalQuestionsRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'15'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'MindMap'" id="MindMap">
            <Question_QACom
              ref="MindMapRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'20'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'UnderstandReason'" id="UnderstandReason">
            <Question_QACom
              ref="UnderstandReasonRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'16'"
            ></Question_QACom>
          </div>
          <div
            v-if="activeTabId === 'ViewpointSupportingEvidence'"
            id="ViewpointSupportingEvidence"
          >
            <Question_QACom
              ref="ViewpointSupportingEvidenceRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'17'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'ReadSelfQuestioning'" id="ReadSelfQuestioning">
            <Question_QACom
              ref="ReadSelfQuestioningRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'18'"
            ></Question_QACom>
          </div>
          <div v-if="activeTabId === 'StoryEnding'" id="StoryEnding">
            <Question_QACom
              ref="StoryEndingRef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
              :question-type-id="'19'"
            ></Question_QACom>
          </div>
        </div>
      </div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" />
    <input id="hidRoleId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvPaperSubViewpointBy" type="hidden" value="" />

    <input id="hidPaperId" type="hidden" />
    <input id="hidPaperRWId" type="hidden" />

    <input id="hidSubViewpointId" type="hidden" />
    <input id="hidSubViewpointTypeId" type="hidden" />

    <input id="hdnFileOne" type="hidden" />
    <input id="hdnFileTwo" type="hidden" />
    <input id="hdnFileThree" type="hidden" />

    <input id="hidIsSubmit" type="hidden" />

    <!-- pdf查看维护类型 -->

    <input id="hidExplainContent" type="hidden" />

    <input id="hidOrderNum" type="hidden" />

    <!-- 评论相关 -->
    <input id="hidParentId" type="hidden" />

    <!-- pdfContent num -->
    <input id="hidleftNum" type="hidden" value="55" />
    <!-- rightContent num -->
    <input id="hidrightNum" type="hidden" value="45" />

    <!-- 答疑问题Id -->
    <input id="hidQuestionsId" type="hidden" />

    <!-- 答疑问题类型Id -->
    <input id="hidQuestionsTypeId" type="hidden" />

    <!-- 教学班Id -->
    <input id="hidIdCurrEduCls" type="hidden" />

    <!-- 回复Id -->
    <input id="hidPushId" type="hidden" />

    <!-- tab页菜单Id -->

    <!-- 主题Id -->
    <input id="hidTopicId" type="hidden" />

    <input id="hidSortPsv" type="hidden" />
    <PaperSubViewpoint_EditCom></PaperSubViewpoint_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import '@/assets/css/comment.css';
  import '@/assets/css/public.css';
  import '@/assets/css/paperlist.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { useRoute } from 'vue-router';
  import { message } from '@/utils/myMessage';
  import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
  import PaperSubViewpoint_EditCom from '@/views/GradEduPaper/PaperSubViewpoint_Edit.vue';
  import Paper_QACom from '@/views/InteractManage/Paper_QA.vue';
  import Paper_TagsCom from '@/views/InteractManage/Paper_Tags.vue';
  import Question_QACom from '@/views/MiddleSchoolReading/Question_QA.vue';

  import { PaperSubViewpoint_Edit } from '@/viewsBase/GradEduPaper/PaperSubViewpoint_Edit';
  import { ReadTraining_pdf } from '@/views/MiddleSchoolReading/ReadTraining_pdf';
  import { CitingPaper } from '@/views/GradEduEx/CitingPaper';
  import { Paper_GetObjByPaperIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { PaperSubViewpoint_EditEx } from '@/views/GradEduPaper/PaperSubViewpoint_EditEx';
  import { stuPdfData } from '@/ts/PubFun/stuPdfData';
  import { pdf_LocationPdfPageNum } from '@/ts/FunClass/clsPubFun4Pdf';
  import { enumqa_QuestionsType } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsTypeEN';
  import enumSubViewPointTabs from '@/ts/FunClass/enumSubViewPointTabs';
  import { initPingFen } from '@/ts/PubFun/StarNum';
  import PaperResRelaListInCom from '@/views/GradEduPaper/PaperResRelaListIn.vue';

  export default defineComponent({
    name: 'ReadTrainingPdf',
    components: {
      // 组件注册
      PaperSubViewpoint_EditCom,
      Paper_QACom,
      Paper_TagsCom,
      Question_QACom,
      PaperResRelaListInCom,
    },
    setup() {
      const activeTabId = ref('Paper_QA');
      const tabs = reactive([
        // { id: 'Paper_SubViewpoint', label: '子观点', quesTypeId: '11' },
        { id: 'Paper_QA', label: '答疑', quesTypeId: '01' },
        { id: 'Paper_Tags', label: '标记', quesTypeId: '01' },
        { id: 'RelaResource', label: '资源展示', quesTypeId: '21' },
        { id: 'UncommonWords', label: '生僻字词', quesTypeId: '11' },
        // { id: "TextualQuestions", label: "课文疑问", quesTypeId: "12" },
        { id: 'FundamentalQuestions', label: '基本问题', quesTypeId: '15' },
        { id: 'MindMap', label: '思维导图', quesTypeId: '20' },
        { id: 'UnderstandReason', label: '理解推理', quesTypeId: '16' },
        {
          id: 'ViewpointSupportingEvidence',
          label: '观点依据',
          quesTypeId: '17',
        },
        { id: 'ReadSelfQuestioning', label: '阅读自问', quesTypeId: '18' },
        { id: 'StoryEnding', label: '故事结尾', quesTypeId: '19' },
        // { id: 'TeaTest_QA', label: '教师测试提问' },
      ]);
      const readWriteTypeId = ref('01'); //默认阅读写作类型为01：阅读
      const paperId = ref(''); // 声明一个 ref 用于存储参数
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const questionsId = ref(''); // 声明一个 ref 用于存储参数
      const pushId = ref(''); // 声明一个 ref 用于存储参数
      const topicId = ref(''); // 声明一个 ref 用于存储参数

      const paperName = ref(''); // 声明一个 ref 用于存储参数
      const route = useRoute(); // 获取当前路由信息

      // 通过 route.params 访问路由参数
      const routeParams = route.params;
      const strTitle = ref('子观点表维护');
      const PaperSubViewpoint_EditRef = ref();
      const Paper_QARef = ref();
      const Paper_TagsRef = ref();
      const Question_QARef = ref();
      const TeaTest_QARef = ref();

      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const iframeFunction = (data: stuPdfData) => {
        console.log('从 iframe 接收到的数据：(in ReadTraining_pdf.vue)', data);
        message.success('从 iframe 接收到的数据：');
        // 在这里执行你的逻辑
      };
      // 在 setup 中设置一个变量来存储事件处理函数
      const handleIframeMessage = (event: any) => {
        // 处理从 iframe 接收到的消息
        const data: stuPdfData = event.data;
        // 假设消息格式是字符串，你可以根据需要进行解析
        if (typeof data === 'string') {
          // 调用组件中的函数
          iframeFunction(data);
        }
      };
      onMounted(async () => {
        // window.addEventListener('message', handleIframeMessage);
        // 检查路由参数是否存在且是字符串
        if (typeof route.query.paperId === 'string') {
          paperId.value = route.query.paperId;
        } else {
          // 如果不是字符串，可以在这里处理
          paperId.value = ''; // 或者设置默认值
        }

        ReadTraining_pdf.SetPaperQaPara = SetPaperQaPara;
        ReadTraining_pdf.SetPaperTagsPara = SetPaperTagsPara;
        ReadTraining_pdf.SetTeaQaPara = SetTeaQaPara;
        ReadTraining_pdf.SetTeaTestQaPara = SetTeaTestQaPara;
        ReadTraining_pdf.vuebtn_Click = btn_Click;
        ReadTraining_pdf.GetPropValue = GetPropValue;
        await window_onload();
      });
      function SetPaperQaPara(
        strPaperId: string,
        strIdCurrEducls: string,
        strQuestionsId: string,
        strPushId: string,
      ) {
        if (strQuestionsId != '') {
          if (strPushId != '') {
            paperId.value = strPaperId;
            idCurrEduCls.value = strIdCurrEducls;
            questionsId.value = strQuestionsId;
            pushId.value = strPushId;
          } else {
            paperId.value = strPaperId;
            idCurrEduCls.value = strIdCurrEducls;
            questionsId.value = strQuestionsId;
          }
        } else {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
        }
        Paper_QARef.value.window_onload();
      }
      function SetPaperTagsPara(strPaperId: string, strIdCurrEducls: string) {
        paperId.value = strPaperId;
        idCurrEduCls.value = strIdCurrEducls;
        Paper_TagsRef.value.window_onload();
      }

      function SetTeaQaPara(
        strPaperId: string,
        strIdCurrEducls: string,
        strQuestionsId: string,
        strTopicId: string,
      ) {
        if (strQuestionsId != '') {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
          questionsId.value = strQuestionsId;
        } else if (strTopicId != '') {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
          topicId.value = strTopicId;
        } else {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
        }
        Question_QARef.value.window_onload();
      }

      function SetTeaTestQaPara(
        strPaperId: string,
        strIdCurrEducls: string,
        strQuestionsId: string,
        strTopicId: string,
      ) {
        if (strQuestionsId != '') {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
          questionsId.value = strQuestionsId;
        } else if (strTopicId != '') {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
          topicId.value = strTopicId;
        } else {
          paperId.value = strPaperId;
          idCurrEduCls.value = strIdCurrEducls;
        }
        TeaTest_QARef.value.window_onload();
      }

      async function window_onload() {
        $('#hidSortPsv').val(1);
        ToolUploadFileNum();
        await GetPaperRWId_PageLoad();
      }
      //定义附件框数量
      function ToolUploadFileNum() {
        const MaxInputs = 2;
        const tdInputsWrapper = $('#tdInputsWrapper');
        let x = tdInputsWrapper.length;
        let FieldCount = 1;
        $('#AddMoreFileBox').click(function () {
          if (x <= MaxInputs) {
            FieldCount++;
            //add input box
            $('#tdInputsWrapper').append(
              `<br/><input type="file" name="txtUploadImgFile${FieldCount}" id="txtUploadImgFile${FieldCount}"/>`,
            );
            x++; //text box increment
          }
          return false;
        });
        //		aurl   文件夹路径
        //	divname   div的id ， （必传参数）
        //	inputname  会为你生成input :text;设置input id 默认div id;
        //	starnum    星星的个数；默认五个；
        //	startnum   星星初始化个数，初始化后，不可更改；(op  设置 true ；)
        //  textTure   星星数默认五颗；开启文本显示；

        initPingFen({ divname: 'pingfen1', textTure: true, starnum: 10 });
        initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin' });
      }
      async function GetPaperRWId_PageLoad() {
        // let Request = new Object();
        // Request = GetRequest();

        //var strPaperRWId = Request['PaperRWId'];
        let strPaperId = paperId.value; // Request["PaperId"];
        if (strPaperId == null) {
          if (typeof routeParams.paperId == 'string') strPaperId = routeParams.paperId;
          else strPaperId = routeParams.paperId[0];
        }
        console.log('strPaperId:', strPaperId);
        clsPrivateSessionStorage.paperId = strPaperId;
        const strType = '01'; //Request["Type"];
        const strQuestionsId = ''; // Request["QuestionsId"];
        const strQuestionsTypeId = clsPrivateSessionStorage.questionsTypeId; // Request['QuestionsTypeId'];

        const strPushId = ''; // Request["PushId"];
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaper == null) return;
        paperName.value = objPaper.paperTitle;
        if (strPaperId != null) {
          clsPrivateSessionStorage.paperId = strPaperId;
          readWriteTypeId.value = strType;

          clsPrivateSessionStorage.topicIdInTree = strTopicId;

          if (strQuestionsTypeId != null) {
            switch (strQuestionsTypeId) {
              case enumqa_QuestionsType.ThesisQuAndAnswer_01: // '01'
                activeTabId.value = enumSubViewPointTabs.Paper_QA; //  $('#h1idTabNum').val(2);
                break;
              case enumqa_QuestionsType.TeacherInquiry_02: // == '02'
                activeTabId.value = enumSubViewPointTabs.Tea_QA; //$('#h1idTabNum').val(4);
              case enumqa_QuestionsType.TestInquiry_03:
                activeTabId.value = enumSubViewPointTabs.TeaTest_QA; //$('#h1idTabNum').val(3);
                break;
            }

            $('#hidQuestionsTypeId').val(strQuestionsTypeId);
            $('#hidQuestionsId').val(strQuestionsId);
            $('#hidPushId').val(strPushId);
          }

          const objPage = new ReadTraining_pdf(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;
          objPage.divFunction = refDivFunction.value;
          objPage.divList = refDivList.value;
          objPage.PageLoad();
          //tbody();
        }
      }
      // function GetRequest() {
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
      // }
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
      function btn_Click(strCommandName: string, strKeyId: string) {
        if (strCommandName == 'mySubmit') {
          PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
          // this.divEdit = PaperSubViewpoint_EditRef.value;
          PaperSubViewpoint_EditEx.btnEdit_Click('Submit', strKeyId);
          return;
        }
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'UpdateSubViewPoint':
          case 'AddNewRecordBySubType':
            PaperSubViewpointCRUD.EditObj = PaperSubViewpoint_EditRef.value;
            PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
            // this.divEdit = PaperSubViewpoint_EditRef.value;
            break;

          default:
            break;
        }
        ReadTraining_pdf.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function btnAddNewRecord_Click() {
        //$('#ddlSubViewpointTypeId').val(strKeyId);
        $('#ddlExplainTypeId').val('01');

        //$('#hidSubViewpointTypeId').val(strKeyId);

        //ShowDialog('Add');
        $('#div_PaperDetail').hide();
        $('#divQuery').hide();
        $('#div_SubViewpointList').hide();
        $('#divEditRegion').show();
        // this.divEdit = PaperSubViewpoint_EditRef.value;
        PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
        console.log('this.divEdit:', PaperSubViewpoint_Edit.EditObj);
        ReadTraining_pdf.btn_Click('AddNewRecord', '', refDivLayout.value);
      }

      return {
        paperId,
        paperName,
        strTitle,
        btn_Click,
        PaperSubViewpoint_EditRef,
        Paper_QARef,
        Paper_TagsRef,
        Question_QARef,
        TeaTest_QARef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        activeTabId,
        tabs,
        idCurrEduCls,
        questionsId,
        pushId,
        topicId,
        SetPaperQaPara,
        btnAddNewRecord_Click,
        handleIframeMessage,
      };
    },
    data() {
      return {
        cateIds: [],
        counter: 0, // Define a common variable in the data section
      };
    },

    methods: {
      // 方法定义

      changeTab(tabId: string) {
        this.activeTabId = tabId;
        ReadTraining_pdf.btn_Click('changeTab', tabId, this.refDivLayout);
      },
      tbody() {
        $("tbody.x-cate tr[fid!='0']").hide();
        // 栏目多级显示效果
        $('.x-show').click(function () {
          if ($(this).attr('status') == 'true') {
            $(this).html('&#xe625;');
            $(this).attr('status', 'false');
            const cateId = $(this).parents('tr').attr('cate-id');
            $(`tbody tr[fid=${cateId}]`).show();
          } else {
            const cateIds: Array<number> = [];
            $(this).html('&#xe623;');
            $(this).attr('status', 'true');
            // const cateId = $(this).parents('tr').attr('cate-id');
            // this.getCateId(cateId);
            for (const i in cateIds) {
              $(`tbody tr[cate-id=${cateIds[i]}]`)
                .hide()
                .find('.x-show')
                .html('&#xe623;')
                .attr('status', 'true');
            }
          }
        });
      },

      //   getCateId(cateId: string) {
      //     $(`tbody tr[fid=${cateId}]`).each(function (index, el) {
      //       const id = $(el).attr('cate-id');
      //       this.cateIds.push(id);
      //       this.getCateId(id);
      //     });
      //   },

      /*
               添加新记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnAddNewRecord_Click)
              */
      btnAddNewRecord_ClickBak(strKeyId: string) {
        $('#ddlSubViewpointTypeId').val(strKeyId);
        $('#ddlExplainTypeId').val('01');

        $('#hidSubViewpointTypeId').val(strKeyId);

        //ShowDialog('Add');
        $('#div_PaperDetail').hide();
        $('#divQuery').hide();
        $('#div_SubViewpointList').hide();
        $('#divEditRegion').show();

        // const objPage = new ReadTraining_pdf();
        // objPage.btnAddNewRecord_Click();
      },

      /*
              添加点赞
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnAddNewRecord_Click)
             */
      btnAddLikeLog_Click(strKeyId: string) {
        $('#hidSubViewpointId').val(strKeyId);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnAddLikeLog_Click();
      },

      /*
              修改排序号
             */
      btnUpdateOrderNum_Click(strKeyId: string, strOrderNum: number) {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnUpdateOrderNum_Click(Number(strKeyId), strOrderNum);
      },

      /**选择类型得到类型简称 */
      //   selectTitle_Click() {
      //     const objPage = new ReadTraining_pdf();
      //     objPage.selectTitle_Click();
      //   },

      /*
               删除记录的事件函数
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnDelRecord_Click)
              */
      btnDelRecord_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnDelRecord_Click();
      },

      /*
               在数据表里删除记录的事件函数
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnDelRecordInTab_Click)
              */
      btnDelRecordInTab_Click(strKeyId: number) {
        if (strKeyId == 0) {
          alert(`请选择需要删除的记录！`);
          return;
        }
        $('#hidKeyId').val(strKeyId);
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnDelRecordInTab_Click(strKeyId);
      },
      /*
                   记录上移
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnUpMove_Click)
                  */
      btnUpMove_Click(strKeyId: string, OrderNum: number, SubViewpointTypeId: string) {
        $('#hidKeyId').val(strKeyId);
        $('#hidOrderNum').val(OrderNum);
        $('#hidSubViewpointTypeId').val(SubViewpointTypeId);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnUpMove_Click();
      },

      /*
               记录下移
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnDownMove_Click)
              */
      btnDownMove_Click(strKeyId: string, OrderNum: number, SubViewpointTypeId: string) {
        $('#hidKeyId').val(strKeyId);
        $('#hidOrderNum').val(OrderNum);
        $('#hidSubViewpointTypeId').val(SubViewpointTypeId);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnDownMove_Click();
      },

      /*
              记录重序
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnReOrder_Click)
             */
      btnReOrder_Click(SubViewpointTypeId: string) {
        $('#hidSubViewpointTypeId').val(SubViewpointTypeId);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnReOrder_Click();
      },

      /*
               记录移底
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnGoBottum_Click)
              */
      btnGoBottum_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnGoBottum_Click();
      },

      /*
               记录置顶
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnGoTop_Click)
              */
      btnGoTop_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnGoTop_Click();
      },

      /*
               查询记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
              */
      btnQuery_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnQueryEx_Click();
      },

      /*
               在数据表里修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnUpdateRecordInTab_Click)
              */
      //   btnUpdateRecordInTab_Click(strKeyId: string) {
      //     if (strKeyId == '') {
      //       alert('请选择需要修改的记录！');
      //       return;
      //     }
      //     //ShowDialog('Update');
      //     $('#div_PaperDetail').hide();
      //     $('#divQuery').hide();
      //     $('#div_SubViewpointList').hide();
      //     $('#divEditRegion').show();
      //     const objPage = new ReadTraining_pdf();
      //     objPage.btnUpdateRecordInTab_Click(strKeyId);
      //   },

      /*
               修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ExpandDiv)
              */
      //   ExpandDiv(divName: string) {
      //     //基于RequireJS来调用tzPubFun.ts中的函数OnlyShowDiv。

      //     this.OnlyShowDiv(divName, 'function', 'content');
      //   },

      /*
               获取数据列表中的所选记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_GetAllCkechedKeys)
              */
      GetAllCkechedKeys(tabName: HTMLDivElement) {
        const arrKeys = tabName.getElementsByTagName('chkInTab');
        alert(arrKeys.length.toString());
      },

      //判断图片附件格式、以及文件附件格式
      async IsHasFileBak() {
        //图片
        const tdInputsWrapper = $('#tdInputsWrapper');
        //console.error(tdInputsWrapper);
        //var MaxInputs = 2;
        const y = tdInputsWrapper.length;

        //循环得到的个数
        for (let i = 0; i < y; i++) {
          if (i == 0) {
            const file1 = $('#txtUploadImgFile').val()?.toString();
            console.log('file1:', file1);
            //console.error(file1);
            if (file1 != null && file1 != '') {
              const strs = file1.split('.');
              const suffix = strs[strs.length - 1];

              if (
                suffix != 'jpg' &&
                suffix != 'JPG' &&
                suffix != 'gif' &&
                suffix != 'GIF' &&
                suffix != 'png' &&
                suffix != 'PNG'
              ) {
                alert('请选择jpg、gif、png格式文件！');
                // const obj = document.getElementById('txtUploadImgFile');
                // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return true;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            } else {
              return false;
            }
          } else if (i == 1) {
            const file2 = $('#txtUploadImgFile2').val()?.toString();

            if (file2 != null && file2 != '') {
              const strs = file2.split('.');
              const suffix = strs[strs.length - 1];

              if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
                alert('请选择jpg、gif、png格式文件！');
                // const obj = document.getElementById('txtUploadImgFile2');
                // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return true;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            }
          } else if (i == 2) {
            const file3 = $('#txtUploadImgFile3').val()?.toString();

            if (file3 != null && file3 != '') {
              const strs = file3.split('.');
              const suffix = strs[strs.length - 1];

              if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
                alert('请选择jpg、gif、png格式文件！');
                // const obj = document.getElementById('txtUploadImgFile3');
                // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return true;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            }
          }
        }
        //上传
        const bolIsSuccess = await this.doUpload();
        return bolIsSuccess;
      },
      //上传方法
      async doUpload() {
        let bolIsSuccess = false;
        const formData = new FormData($('#uploadForm')[0] as HTMLFormElement);
        let strUrl = '@Url.Action("UploadFile", "testUploadPic")';
        if (strUrl == '') {
          //            strUrl = 'https://www.sh-tz.com/GS/ApitestUploadPic/';
          strUrl = 'http://localhost:49590/GraduateStudyWebApp/Api/testUploadPic/UploadFile/';
        }
        $.ajax({
          url: strUrl,
          type: 'post',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success(returndata) {
            console.error(returndata.status);
            //成功/为空
            if (returndata.status == 0 || returndata.status == -1) {
              //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
              if (returndata.fileNameOne != '') {
                $('#hdnFileOne').val(returndata.fileNameOne);
                console.error('文件1已经上传');
                bolIsSuccess = true;
              }
              if (returndata.fileNameTwo != '') {
                $('#hdnFileTwo').val(returndata.fileNameTwo);
                console.error('文件2已经上传');
                bolIsSuccess = true;
              }
              if (returndata.fileNameThree != '') {
                $('#hdnFileThree').val(returndata.fileNameThree);
                console.error('文件3已经上传');
                bolIsSuccess = true;
              }

              console.error('进入：objPage.btnOKUpd_Click();');
              //   const objPage = new ReadTraining_pdf();
              //   objPage.btnOKUpd_Click();

              $('#div_PaperDetail').show();
              $('#divQuery').show();
              $('#div_SubViewpointList').show();
              $('#divEditRegion').hide();

              // var aa = JSON.stringify(returndata);

              //alert(returndata.message);
            } else {
              alert('请选择正确图片格式(in ReadTraining_pdf)');
            }
          },
          error(returndata) {
            alert(returndata);
          },
        });
        return bolIsSuccess;
      },

      /*
       *  分页修改记录
       */
      IndexPage(intPageIndex: number) {
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
       * 分页修改记录
       */
      JumpToPage() {
        const intCurrPageIndex = $('#input_number').val();
        const intPageIndex = Number(intCurrPageIndex);
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
               分页修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_NextPage)
              */
      NextPage() {
        const intCurrPageIndex = $('#hidCurrPageIndex').val();
        const intPageIndex = Number(intCurrPageIndex) + 1;
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
               分页修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_PageNum)
              */
      PageNum(intPageIndex: number) {
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
               分页修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_PrevPage)
              */
      PrevPage() {
        const intCurrPageIndex = $('#hidCurrPageIndex').val();
        const intPageIndex = Number(intCurrPageIndex) - 1;
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
               修改记录
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_SortBy)
              */
      SortBy(strFldName: string) {
        console.log(`按：${strFldName}排序`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.SortBy(strFldName);
      },

      /*
               显示对话框
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
              */
      ShowDialog(pstrOp: string) {
        const strOp = pstrOp;
        console.log(strOp);
        // if (strOp === 'Add') {
        //   $('#myModalLabel').html('添加记录');
        //   //ReadTraining_pdf.GetMaxStrId('#txtSubViewpointId');
        // } else if (strOp === 'Update') {
        //   $('#myModalLabel').html('修改记录');
        // } else if (strOp === 'Detail') {
        //   $('#btnOKUpd').hide();
        //   $('#myModalLabel').html('详细信息');
        // }
        // $('#divEditRegion').modal('show');
      },

      /*
               隐藏对话框
              (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
              */
      HideDialog() {
        // $('#divEditRegion').modal('hide');
      },

      //选择文献
      selectPaper_Click() {
        const objPage = new CitingPaper(this.refDivLayout);
        objPage.PageLoad();

        // ShowDialog2();
      },
      //关闭文献列表
      close_Click() {
        // HideDialog2();
      },

      //确认引用文献
      btnCitingPaper_Click(strKeyId: string) {
        $('#txtLiteratureSourcesId').val(strKeyId);
        // HideDialog2();
      },

      /*
             显示对话框2
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
             */
      ShowDialog2() {
        // $('#divPaperList').modal('show');
      },

      /*
              隐藏对话框2
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
             */
      HideDialog2() {
        // $('#divPaperList').modal('hide');
      },

      /*
             显示对话框3
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
             */
      ShowDialog3() {
        // $('#divEditAppraise').modal('show');
      },

      /*
              隐藏对话框3
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
             */
      HideDialog3() {
        // $('#divEditAppraise').modal('hide');
      },

      /*
             显示对话框4
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
             */
      ShowDialog4() {
        // $('#divShowAppraise').modal('show');
      },

      /*
              隐藏对话框4
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
             */
      HideDialog4() {
        // $('#divShowAppraise').modal('hide');
      },

      /*
                 是否隐藏
             (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
             */
      btnIsDisplay_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnIsDisplay_Click();
      },

      /*
             添加点赞
             (AutoGCLib.WA_ViewScript_TS4CSharp:btnAddVote_Click)
             */
      btnAddVote_Click(strKeyId: string, strUserId: string) {
        //$('#hidSubViewpointId').val(strKeyId);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.btnAddVote_Click(Number(strKeyId), strUserId);

        message.success('已点赞!');
      },

      /*
             添加收藏
             (AutoGCLib.WA_ViewScript_TS4CSharp:btnAddCollection_Click)
             */
      //   btnAddCollection_Click(strKeyId: string) {
      //     const objPage = new ReadTraining_pdf();
      //     objPage.btnAddCollection_Click(strKeyId);
      //     message.success('已收藏!');
      //   },

      //下载
      btnDownLoadFile_Click() {
        const objpage = new ReadTraining_pdf(this.refDivLayout);
        objpage.btnDownLoadFile_Click();
      },

      //控制pdf页码
      btnUpdatePaperPageNum_Click(PageNum: number, ExplainContent: string) {
        //定位pdf页码

        pdf_LocationPdfPageNum(PageNum, ExplainContent);

        $('#hidExplainContent').val(ExplainContent);

        if (PageNum != 0) {
          const objpage = new ReadTraining_pdf(this.refDivLayout);
          objpage.btnUpdatePaperPageNum_Click();
        }
      },

      //刷新本页面观点
      Refresh_vPaperSubViewpoint() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.BindGv_vPaperSubViewpoint();
        if (objPage != null) {
          alert('aa');
        }
      },

      //向左推移
      right_Click() {
        const leftPart = document.getElementById('leftPart') as HTMLDivElement;

        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidrightNum == null) return;
        const num = 5;
        hidleftNum.value = (parseInt(hidleftNum.value) - num).toString();
        hidrightNum.value = (parseInt(hidrightNum.value) + num).toString();

        leftPart.style.width = `${hidleftNum.value}%`;

        right_Content.style.width = `${hidrightNum.value}%`;

        message.success(`内容编辑区增宽到：${hidrightNum.value}%`);
        alert('aa');
      },

      //向右推移
      left_Click() {
        const leftPart = document.getElementById('leftPart') as HTMLDivElement;
        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        if (hidrightNum == null) return;
        const num = 5;
        hidleftNum.value = (parseInt(hidleftNum.value) + num).toString();
        hidrightNum.value = (parseInt(hidrightNum.value) - num).toString();
        leftPart.style.width = `${hidleftNum.value}%`;
        right_Content.style.width = `${hidrightNum.value}%`;
        message.success(`pdf增宽到：${hidleftNum.value}%`);
      },

      //最大化
      Maximize_Click() {
        const leftPart = document.getElementById('leftPart') as HTMLDivElement;
        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        if (hidrightNum == null) return;
        if (hidleftNum != null && hidleftNum.value != '0') {
          hidleftNum.value = '0';
          hidrightNum.value = '100';

          leftPart.style.width = '0%';
          right_Content.style.width = '100%';

          $('#i_Maximize').removeClass('layui-icon-screen-full');
          $('#i_Maximize').addClass('layui-icon-screen-restore');
          //$("#infoSubViewpoint div").removeClass("liRowsColor");
          ////添加背景色
          //strKey = "Q" + strKey;
          //$("#" + strKey).addClass("liRowsColor");

          message.success('内容编辑区已经最大化！');
        } else {
          hidleftNum.value = '55';
          hidrightNum.value = '45';

          leftPart.style.width = '55%';
          right_Content.style.width = '45%';

          $('#i_Maximize').removeClass('layui-icon-screen-restore');
          $('#i_Maximize').addClass('layui-icon-screen-full');

          message.success('内容编辑区已经恢复！');
        }
      },

      li_PaperQA_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.Bind_Paper_QA();
      },

      li_PaperTags_Click() {
        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.Bind_Paper_Tags();
      },

      //点击tab事件；
      li_PaperMenu_Click(KeyId: string) {
        //存储点击的id

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.li_PaperMenu_Click();
      },

      //辅助子界面查看小组答案的历史版本
      SearchAnsWerV(strKeyId: string) {
        console.log(strKeyId);
        // xadmin.open('历史版本', `../GraduateEduEx/HistoricalVersion?Key=${strKeyId}&Type=12`);
      },

      //排序_最新子观点
      btnOrderBy_Click() {
        $('#hidSortPsv').val(2);

        const objPage = new ReadTraining_pdf(this.refDivLayout);
        objPage.BindGv_vPaperSubViewpoint();
      },

      //评论
      SysComment(strAnswerId: string, strUserId: string, strQuestionsId: string) {
        console.log(strAnswerId, strUserId, strQuestionsId);
        // xadmin.open(
        //   '教师问题回答评论',
        //   `../GraduateEduTools/SysComment?Key=${strAnswerId}&Type=11&User=${strUserId}&PubParentId=${strQuestionsId}`,
        // );
      },

      //刷新教师回答页面
      Refresh_vQuestion_QA() {
        // $('#iframe_Question_QA')[0].contentWindow.Refresh_vQuestion_QA();
        const iframeElement = $('#iframe_Question_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).Refresh_vQuestion_QA();
        }
      },

      //刷新教师测试回答页面
      Refresh_vTeaTest_QA() {
        // $('#iframe_TeaTest_QA')[0].contentWindow.Refresh_vTeaTest_QA();
        const iframeElement = $('#iframe_TeaTest_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).Refresh_vTeaTest_QA();
        }
      },
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style lang="less" scoped>
  .div_List {
    height: 500px;
    overflow: auto;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #0080ff;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
  }

  .layui-fluid {
    padding: 0px;
  }

  .layui-table td,
  .layui-table th {
    min-width: 20px;
  }

  #tbList img {
    max-width: 460px;
  }

  .text-span {
    background-color: yellow;
    /*color: red;*/
  }

  #leftPart {
    float: left;
    width: 55%;
    /* height: 100%; */
    position: fixed;
    top: 40px;
    left: 1px;
    border-radius: 10px;
  }

  #right_Content {
    float: right;
    width: 45%;
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

  /* .tab-content {
    margin-top: 10px;
  } */

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }

  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
  }

  .layout-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: @header-height;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #aacbec;

    * {
      cursor: pointer;
    }
  }

  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }

  .page-content {
    position: absolute;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 1;
  }

  #TopicName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }

  .container {
    width: 100%;
    height: 45px;
    background-color: #007fff;
  }

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
    /* background: url(@/assets/css/index/img/logo_tz2.png) no-repeat; */
    /* width: 200px; */
  }

  .page-content-bg {
    /* position: absolute; */
    position: relative;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 220px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 100;
    display: none;
  }

  .layui-tab-content {
    padding: 5px;
  }
</style>

<!-- 


    
    
    
    
    
     文件上传 
<script src="../lib/jquery-form.js"></script>
<script src="../lib/jquery.min.js"></script>


} -->
