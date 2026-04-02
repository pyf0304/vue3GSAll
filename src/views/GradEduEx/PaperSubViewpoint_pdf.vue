<template>
  <div id="divLayout" ref="refDivLayout" style="height: 100%">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <!-- <PageHeadCom
      ref="PageHeadRef"
      :title="'论文子观点'"
      :header-height="'40'"
      :isShowEduCls="'true'"
      :is-show-paper-iframe="'true'"
      :isShowTopic="'true'"
      :is-show-search="'false'"
      :is-show-major="'true'"
      :is-show-attention="'true'"
      :paper-id="paperId"
    ></PageHeadCom> -->
    <div id="divHead" class="row">
      <div class="col-md-9">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <!-- <li class="breadcrumb-item"><h5 class="font-weight-bold">论文子观点(pdf)</h5></li> -->
            <li class="breadcrumb-item"><a href="#/index">首页</a></li>
            <li class="breadcrumb-item"><a href="#/PaperIframe/">论文管理</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              <span class="text-primary">{{ paperName }}</span
              ><span class="title-local">-论文子观点(pdf)</span></li
            >
            <li class="breadcrumb-item"
              ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
            ></li>
            <li class="m-1">
              <a
                class="btn btn-info btn-sm"
                style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                title="向左推移"
                @click="right_Click()"
              >
                <font-awesome-icon :icon="['fas', 'angles-left']" />
              </a>
            </li>
            <li class="m-1">
              <a
                class="btn btn-info btn-sm"
                style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                title="向右推移"
                @click="left_Click()"
              >
                <font-awesome-icon :icon="['fas', 'angles-right']" />
              </a>
            </li>

            <li class="m-1">
              <a
                class="btn btn-warning btn-sm"
                style="line-height: 1.6em; margin-top: 2px; float: right; color: #fff"
                title="内容区最大化"
                @click="Maximize_Click()"
              >
                <font-awesome-icon :icon="['fas', 'maximize']" />
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div class="col-md-2">
        <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
          <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
        </a>
      </div>
      <div class="col-md-1"></div>
    </div>

    <div id="divContent" style="width: 100%; height: 800px">
      <div id="leftPart" style="height: 800px"> </div>
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
          <li id="liTea_QA" class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#Tea_QA" @click="li_PaperMenu_Click(4)"
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
                    <div id="tabwucPaperReadWrite" style="background-color: white"> </div>
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
                        <td class="ml-1">
                          <button
                            title="查询"
                            class="btn btn-info btn-sm ml-1"
                            lay-submit=""
                            lay-filter="sreach"
                            @click="btnQuery_Click()"
                          >
                            <font-awesome-icon icon="search" />
                          </button>
                        </td>
                        <td class="ml-1">
                          <button
                            title="最新子观点"
                            class="btn btn-info btn-sm ml-1"
                            lay-submit=""
                            lay-filter="sreach"
                            @click="btnOrderBy_Click()"
                          >
                            <font-awesome-icon icon="sort-up" />
                          </button>
                        </td>
                        <td class="ml-1">
                          <button
                            title="添加子观点"
                            class="btn btn-warning btn-sm ml-1"
                            lay-submit=""
                            lay-filter="sreach"
                            @click="btnAddNewRecord_Click()"
                          >
                            <font-awesome-icon :icon="['fas', 'plus']" />
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

                  <div
                    id="divEditRegion"
                    ref="refDivEditRegion"
                    style="display: none; margin-top: 50px"
                  >
                    <form id="uploadForm" method="post" enctype="multipart/form-data">
                      <div class="modal-content" style="width: 99%">
                        <div class="modal-header">
                          <h4 id="myModalLabel" class="modal-title">子观点编辑</h4>

                          <button
                            id="btnSubmitPaperSubViewpoint"
                            type="button"
                            class="btn btn-info btn-sm"
                            style="float: right; width: 100px; margin-left: 300px"
                            @click="SubmitSubViewpoint('')"
                            >添加</button
                          >
                          <button
                            id="btnCancelPaperSubViewpoint"
                            type="button"
                            class="btn btn-info btn-sm"
                            style="width: 100px"
                            @click="btnCancel_Click()"
                            >取消编辑</button
                          >
                        </div>
                        <div class="modal-body">
                          <table
                            id="tabwucPaperSubViewpoint"
                            name="tabwucPaperSubViewpoint"
                            style="width: 90%; padding: 1px; border: 0px"
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
                                  知识类型
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  v-model="gsKnowledgeTypeId"
                                  id="ddlgsKnowledgeTypeId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                  @change="ddlgsKnowledgeTypeId_ItemChange"
                                />
                              </td>
                              <td class="NameTD"> </td>
                              <td class="ValueTD"> </td>
                            </tr>

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
                                  区域类型
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  v-model="subViewpointTypeId"
                                  id="ddlSubViewpointTypeId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td v-show="gsKnowledgeTypeId != '03'" class="NameTD">
                                <label
                                  id="lblAttitudesId"
                                  name="lblRWTitle"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  观点态度
                                </label>
                              </td>
                              <td v-show="gsKnowledgeTypeId != '03'"
                                ><select
                                  id="ddlAttitudesId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                              /></td>
                              <td v-show="false" class="NameTD">
                                <label
                                  id="lblRWTitle"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  类型标题
                                </label>
                              </td>
                              <td v-show="false"
                                ><input
                                  id="txtRWTitle"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                              /></td>
                            </tr>

                            <tr v-show="gsKnowledgeTypeId != '07'">
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  观点内容
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  id="txtSubViewpointContent"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 80px"
                                ></textarea>
                              </td>
                            </tr>

                            <tr v-show="gsKnowledgeTypeId == '07'">
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  姓名
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  v-model="fullName"
                                  id="txtFullName"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  工作单位
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  v-model="workUnit"
                                  id="txtWorkUnit"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                            </tr>
                            <tr v-show="gsKnowledgeTypeId == '07'">
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  国籍
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  v-model="nationality"
                                  id="txtNationality"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  专业
                                </label>
                              </td>
                              <td class="ValueTD">
                                <input
                                  v-model="major"
                                  id="txtMajor"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                            </tr>
                            <tr v-show="gsKnowledgeTypeId == '07'">
                              <td class="NameTD">
                                <label
                                  id="lblSubViewpointContent"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  成就
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  v-model="achievement"
                                  id="txtAchievement"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 80px"
                                ></textarea>
                              </td>
                            </tr>

                            <tr>
                              <td class="NameTD">
                                <label
                                  id="lblExplainContent"
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
                            <tr v-show="gsKnowledgeTypeId == '04' || gsKnowledgeTypeId == '05'">
                              <td class="NameTD">
                                <label
                                  id="lblConclusion"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  结论
                                </label>
                              </td>
                              <td class="ValueTD" colspan="3">
                                <textarea
                                  v-model="conclusion"
                                  id="txtConclusion"
                                  class="form-control form-control-sm"
                                  style="width: 550px; height: 80px"
                                ></textarea>
                              </td>
                            </tr>
                            <tr v-show="gsKnowledgeTypeId == '06'">
                              <td class="NameTD">
                                <label
                                  id="lblOperationTypeId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  操作类型
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  v-model="operationTypeId"
                                  id="ddlOperationTypeId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                              <td class="NameTD">
                                <label
                                  id="lblLevelId"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  级别
                                </label>
                              </td>
                              <td class="ValueTD">
                                <select
                                  v-model="levelId"
                                  id="ddlLevelId"
                                  class="form-control form-control-sm"
                                  style="width: 200px"
                                />
                              </td>
                            </tr>
                            <tr v-show="gsKnowledgeTypeId == '01' || gsKnowledgeTypeId == '02'">
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
                                  id="lblUploadfileUrl"
                                  name="lblUploadfileUrl"
                                  class="col-form-label text-right"
                                  style="width: 90px"
                                >
                                  上传图片
                                </label>
                              </td>
                              <td id="tdInputsWrapper" class="ValueTD" colspan="3">
                                <input
                                  id="txtUploadImgFile"
                                  type="file"
                                  @change="handleFileChange($event)"
                                />
                                <button
                                  id="AddMoreFileBox"
                                  type="button"
                                  class="btn btn-info btn-sm"
                                  data-dismiss="modal"
                                  >添加更多图片</button
                                >
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
                              <td
                                ><button
                                  id="btnselectPaper"
                                  type="button"
                                  class="btn btn-info btn-sm"
                                  style="margin-top: 2px; width: 100px"
                                  @click="selectPaper_Click()"
                                  >引用文献</button
                                ></td
                              >
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
                      </div>
                    </form>

                    <input id="hdnFileOne" type="hidden" />
                    <input id="hdnFileTwo" type="hidden" />
                    <input id="hdnFileThree" type="hidden" />
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
                          <h4 id="myModalLabel" class="modal-title">引用论文</h4>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-hidden="true"
                            >×</button
                          >
                        </div>
                        <div class="modal-body">
                          <div id="divList" ref="refDivList" class="div_List">
                            <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
                            <div id="divPager" class="pager" value="1"> </div>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            id="btnCancel"
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                            @click="close_Click()"
                            >关闭</button
                          >
                        </div>
                      </div>
                      <!-- /.modal-content -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-show="activeTabId === 'Paper_QA'" id="Paper_QA">
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
          <div v-show="activeTabId === 'Tea_QA'" id="Tea_QA">
            <Tea_QACom
              ref="Tea_QARef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
            ></Tea_QACom>
          </div>
          <div v-show="activeTabId === 'TeaTest_QA'" id="TeaTest_QA">
            <TeaTest_QACom
              ref="TeaTest_QARef"
              :paper-id="paperId"
              :id-curr-edu-cls="idCurrEduCls"
              :questions-id="questionsId"
              :topic-id="topicId"
            ></TeaTest_QACom>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-left: 170px; padding-right: 100px">
      <div id="pingfen1"></div>
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
    <!-- <input id="h1idTabNum" type="hidden" /> -->

    <!-- 主题Id -->
    <input id="hidTopicId" type="hidden" />

    <input id="hidSortPsv" type="hidden" />
    <PaperSubViewpoint_EditCom ref="PaperSubViewpoint_EditRef"></PaperSubViewpoint_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  // import '@/assets/css/site.css';

  // import '@/assets/css/comment.css';

  // import '@/assets/css/public.css';
  // import '@/assets/css/paperlist.css';
  import { defineComponent, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { useRoute } from 'vue-router';
  import { message } from '@/utils/myMessage';
  import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
  import PaperSubViewpoint_EditCom from '@/views/GradEduPaper/PaperSubViewpoint_EditKT.vue';
  import Paper_QACom from '@/views/InteractManage/Paper_QA.vue';
  import Paper_TagsCom from '@/views/InteractManage/Paper_Tags.vue';
  import Tea_QACom from '@/views/InteractManage/Tea_QA.vue';
  import TeaTest_QACom from '@/views/InteractManage/TeaTest_QA.vue';
  import { PaperSubViewpoint_Edit } from '@/viewsBase/GradEduPaper/PaperSubViewpoint_Edit';
  import {
    PaperSubViewpoint_pdf,
    enumSubViewPointTabs,
  } from '@/views/GradEduEx/PaperSubViewpoint_pdf';
  import { CitingPaper } from '@/views/GradEduEx/CitingPaper';
  import {
    PaperSubViewpoint_EditEx,
    updateProps,
  } from '@/views/GradEduPaper/PaperSubViewpoint_EditEx';

  import { Paper_GetObjByPaperIdAsync } from '@/ts/L3ForWApi/GradEduPaper/clsPaperWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { stuPdfData } from '@/ts/PubFun/stuPdfData';
  import { pdf_LocationPdfPageNum } from '@/ts/FunClass/clsPubFun4Pdf';
  import { enumqa_QuestionsType } from '@/ts/L0Entity/InteractManage/clsqa_QuestionsTypeEN';
  import PageHeadCom from '@/ts/components/PageHead.vue';
  import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
  import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { File_IsHasImgFile } from '@/ts/FunClass/clsPubFun4Web';

  export default defineComponent({
    name: 'PaperSubViewpointPdf',
    components: {
      // 组件注册
      PaperSubViewpoint_EditCom,
      Paper_QACom,
      Paper_TagsCom,
      Tea_QACom,
      TeaTest_QACom,
      PageHeadCom,
    },
    setup() {
      const activeTabId = ref('Paper_SubViewpoint');
      const tabs = reactive([
        { id: 'Paper_SubViewpoint', label: '子观点' },
        { id: 'Paper_QA', label: '论文答疑' },
        { id: 'Paper_Tags', label: '论文标记' },
        { id: 'Tea_QA', label: '教师提问' },
        { id: 'TeaTest_QA', label: '教师测试提问' },
      ]);
      const readWriteTypeId = ref('01'); //默认阅读写作类型为01：阅读
      const paperId = ref(''); // 声明一个 ref 用于存储参数
      const literatureTypeId = ref('01');
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数

      const questionsTypeId = ref('');
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
      const Tea_QARef = ref();
      const TeaTest_QARef = ref();
      const refDivEditRegion = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const gsKnowledgeTypeId = ref();

      const subViewpointTypeId = ref('00000000');
      const fullName = ref('');
      const workUnit = ref('');
      const nationality = ref('');
      const major = ref('');
      const achievement = ref('');
      const conclusion = ref('');
      const levelId = ref('01');
      const operationTypeId = ref('01');
      const mySelectedFile = ref(null);
      onMounted(async () => {
        window.addEventListener('message', handleIframeMessage);
        // 检查路由参数是否存在且是字符串
        if (typeof route.query.paperId === 'string') {
          paperId.value = route.query.paperId;
        } else {
          // 如果不是字符串，可以在这里处理
          paperId.value = ''; // 或者设置默认值
        }

        if (typeof route.query.idCurrEduCls === 'string') {
          idCurrEduCls.value = route.query.idCurrEduCls;
        } else {
          // 如果不是字符串，可以在这里处理
          idCurrEduCls.value = ''; // 或者设置默认值
        }

        if (typeof route.query.topicId === 'string') {
          topicId.value = route.query.topicId;
        } else {
          // 如果不是字符串，可以在这里处理
          topicId.value = ''; // 或者设置默认值
        }

        if (typeof route.query.questionsTypeId === 'string') {
          questionsTypeId.value = route.query.questionsTypeId;
        } else {
          // 如果不是字符串，可以在这里处理
          questionsTypeId.value = ''; // 或者设置默认值
        }
        if (typeof route.query.gsKnowledgeTypeId === 'string') {
          gsKnowledgeTypeId.value = route.query.gsKnowledgeTypeId;
        } else {
          // 如果不是字符串，可以在这里处理
          gsKnowledgeTypeId.value = ''; // 或者设置默认值
        }

        PaperSubViewpoint_pdf.SetPaperQaPara = SetPaperQaPara;
        PaperSubViewpoint_pdf.SetPaperTagsPara = SetPaperTagsPara;
        PaperSubViewpoint_pdf.SetTeaQaPara = SetTeaQaPara;
        PaperSubViewpoint_pdf.SetTeaTestQaPara = SetTeaTestQaPara;
        PaperSubViewpoint_pdf.vuebtn_Click = btn_Click;
        PaperSubViewpoint_pdf.GetPropValue = GetPropValue;
        PaperSubViewpoint_EditEx.vuebtn_Click = btn_Click;
        PaperSubViewpoint_EditEx.GetPropValue = GetPropValue;
        await window_onload();
      });
      // 在组件卸载前移除事件监听器
      onUnmounted(() => {
        window.removeEventListener('message', handleIframeMessage);
      });
      function handleFileChange(event: any) {
        // 当文件选择框的值发生变化时触发
        mySelectedFile.value = event.target.files[0]; // 获取选择的文件
        console.log('selectedFile.value:', mySelectedFile.value);
      }
      const iframeFunction = (data: stuPdfData) => {
        console.log('从 iframe 接收到的数据：', data);
        // message.success('从 iframe 接收到的数据：', data);
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
              // AddQ(data.selectText);
              break;
            case 'AddTags':
              // AddTags('Add');
              break;
            case 'Add_ViewPoint':
              // btnAddNewRecord_Click();
              btn_Click('AddNewRecord', data);
              break;
            // case 'Showdiv_PdfTags_Click':
            //   Showdiv_PdfTags_Click();
            //   break;
            // case 'btnIndexesTags_Click':
            //   btnIndexesTags_Click(data.keyId);
            //   break;
            case 'btnUpdateTags_Click':
              btn_Click('UpdateTags', data.keyId);
              break;
          }
          iframeFunction(data);
        }
      };

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
        Tea_QARef.value.window_onload();
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
        // $('#h1idTabNum').val(1);
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

        // initPingFen({ divname: 'pingfen1', textTure: true, starnum: 10 });
        // initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin' });
      }
      async function GetPaperRWId_PageLoad() {
        // let Request = new Object();
        // Request = GetRequest();

        //var strPaperRWId = Request['PaperRWId'];
        let strPaperId = paperId.value; //Request['PaperId'];

        if (strPaperId == null) {
          if (typeof routeParams.paperId == 'string') strPaperId = routeParams.paperId;
          else strPaperId = routeParams.paperId[0];
        }
        console.log('strPaperId:', strPaperId);
        // clsPrivateSessionStorage.paperId = strPaperId;

        let strIdCurrEduCls = idCurrEduCls.value;
        if (strIdCurrEduCls == null) {
          if (typeof routeParams.idCurrEduCls == 'string')
            strIdCurrEduCls = routeParams.idCurrEduCls;
          else strIdCurrEduCls = routeParams.idCurrEduCls[0];
          if (IsNullOrEmpty(strIdCurrEduCls) == true)
            strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls; //Request['idCurrEduCls'];
        }

        let strQuestionsTypeId = questionsTypeId.value; //Request['QuestionsTypeId'];
        if (IsNullOrEmpty(strQuestionsTypeId) == true && routeParams.questionsTypeId != null) {
          if (typeof routeParams.questionsTypeId == 'string')
            strQuestionsTypeId = routeParams.questionsTypeId;
          else strQuestionsTypeId = routeParams.questionsTypeId[0];
          if (IsNullOrEmpty(strQuestionsTypeId) == true)
            strQuestionsTypeId = clsPrivateSessionStorage.questionsTypeId; //Request['QuestionsTypeId'];
        }

        const strType = '01'; // Request['Type'];
        const strQuestionsId = ''; //Request['QuestionsId'];

        const strPushId = ''; //Request['PushId'];
        const strTopicId = clsPrivateSessionStorage.topicIdInTree; //. Request['TopicId'];

        const objPaper = await Paper_GetObjByPaperIdAsync(strPaperId);
        if (objPaper == null) return;
        literatureTypeId.value = objPaper.literatureTypeId;
        paperName.value = objPaper.paperTitle;
        if (strPaperId != null) {
          clsPrivateSessionStorage.paperId = strPaperId;

          readWriteTypeId.value = strType;

          if (IsNullOrEmpty(strQuestionsTypeId) == false) {
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

          const objPage = new PaperSubViewpoint_pdf(refDivLayout.value);
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
          case 'topicId':
            return topicId.value;
          case 'literatureTypeId':
            return literatureTypeId.value;
          case 'readWriteTypeId':
            return readWriteTypeId.value;
          case 'operationTypeId':
            return operationTypeId.value;
          case 'levelId':
            return levelId.value;
          case 'conclusion':
            return conclusion.value;
          default:
            return '';
        }
        return '';
      }

      function btn_Click(strCommandName: string, strKeyId: any) {
        switch (strCommandName) {
          case 'setKnowledgeTypeId':
            gsKnowledgeTypeId.value = strKeyId;
            return;
          case 'AddNewRecord':
            PaperSubViewpoint_Edit.EditObj = refDivEditRegion.value;
            PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef = PaperSubViewpoint_EditRef;
            PaperSubViewpoint_pdf.btn_Click(strCommandName, strKeyId, refDivEditRegion.value);
            return;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'UpdateKnowledgeTypeId':
            // PaperSubViewpointCRUD.EditObj = PaperSubViewpoint_EditRef.value;
            // PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
            PaperSubViewpoint_Edit.EditObj = refDivEditRegion.value;
            PaperSubViewpoint_EditEx.EditKnowledgeTypeIdRef = PaperSubViewpoint_EditRef;
            PaperSubViewpoint_pdf.btn_Click(strCommandName, strKeyId, refDivEditRegion.value);
            return;
            break;
          default:
            break;
        }
        PaperSubViewpoint_pdf.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function btnAddNewRecord_Click() {
        PaperSubViewpoint_Edit.EditObj = refDivEditRegion.value;
        PaperSubViewpoint_pdf.btn_Click('AddNewRecord', '', refDivEditRegion.value);
      }
      watch(
        [fullName, workUnit, major, achievement, nationality, conclusion, levelId, operationTypeId],
        ([
          fullName1,
          workUnit1,
          major1,
          achievement1,
          nationality1,
          conclusion1,
          levelId1,
          operationTypeId1,
        ]) => {
          // 数据监听
          updateProps(
            fullName1,
            workUnit1,
            major1,
            achievement1,
            nationality1,
            conclusion1,
            levelId1,
            operationTypeId1,
          );
        },
      );

      return {
        paperId,
        paperName,
        strTitle,
        btn_Click,
        PaperSubViewpoint_EditRef,
        Paper_QARef,
        Paper_TagsRef,
        Tea_QARef,
        TeaTest_QARef,
        refDivEditRegion,
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
        gsKnowledgeTypeId,
        subViewpointTypeId,
        fullName,
        workUnit,
        nationality,
        major,
        achievement,
        conclusion,
        levelId,
        operationTypeId,
        mySelectedFile,
        handleFileChange,
        literatureTypeId,
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
      /**
       * 页面导入-在导入页面后运行的函数
       **/

      changeTab(tabId: string) {
        this.activeTabId = tabId;
        PaperSubViewpoint_pdf.btn_Click('changeTab', tabId, this.refDivLayout);
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
            // const cateIds = [];
            // $(this).html('&#xe623;');
            // $(this).attr('status', 'true');
            // // const cateId = $(this).parents('tr').attr('cate-id');
            // // this.getCateId(cateId);
            // for (const i in cateIds) {
            //   $(`tbody tr[cate-id=${cateIds[i]}]`)
            //     .hide()
            //     .find('.x-show')
            //     .html('&#xe623;')
            //     .attr('status', 'true');
            // }
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

        // const objPage = new PaperSubViewpoint_pdf();
        // objPage.btnAddNewRecord_Click();
      },

      /*
                  添加点赞
                 (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnAddNewRecord_Click)
                 */
      btnAddLikeLog_Click(strKeyId: string) {
        $('#hidSubViewpointId').val(strKeyId);

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnAddLikeLog_Click();
      },

      /*
                  修改排序号
                 */
      btnUpdateOrderNum_Click(strKeyId: number, strOrderNum: number) {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnUpdateOrderNum_Click(strKeyId, strOrderNum);
      },

      /**选择类型得到类型简称 */
      //   selectTitle_Click() {
      //     const objPage = new PaperSubViewpoint_pdf();
      //     objPage.selectTitle_Click();
      //   },

      /*
                   删除记录的事件函数
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnDelRecord_Click)
                  */
      btnDelRecord_Click() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnDelRecord_Click();
      },

      /*
                       记录上移
                      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnUpMove_Click)
                      */
      btnUpMove_Click(strKeyId: string, OrderNum: number, SubViewpointTypeId: string) {
        $('#hidKeyId').val(strKeyId);
        $('#hidOrderNum').val(OrderNum);
        $('#hidSubViewpointTypeId').val(SubViewpointTypeId);

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
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

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnDownMove_Click();
      },

      /*
                  记录重序
                 (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnReOrder_Click)
                 */
      btnReOrder_Click(SubViewpointTypeId: string) {
        $('#hidSubViewpointTypeId').val(SubViewpointTypeId);

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnReOrder_Click();
      },

      /*
                   记录移底
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnGoBottum_Click)
                  */
      btnGoBottum_Click() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnGoBottum_Click();
      },

      /*
                   记录置顶
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnGoTop_Click)
                  */
      btnGoTop_Click() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnGoTop_Click();
      },

      /*
                   查询记录
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
                  */
      btnQuery_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
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
      //     const objPage = new PaperSubViewpoint_pdf();
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

      btnCancel_Click() {
        $('#div_PaperDetail').show();
        $('#divQuery').show();
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();
      },

      /*
                  提交编辑
                 (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
                 */
      async SubmitSubViewpoint(pstrOp: string) {
        const divName = this.refDivEditRegion;
        // PaperSubViewpoint_EditEx.IsHasFile = File_IsHasImgFile(divName);
        PaperSubViewpoint_EditEx.mySelectedFile = this.mySelectedFile;
        PaperSubViewpoint_EditEx.btnEdit_Click('SubmitSubViewpoint', pstrOp);
      },
      //判断图片附件格式、以及文件附件格式
      async IsHasFile(): Promise<boolean> {
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
              //   const objPage = new PaperSubViewpoint_pdf();
              //   objPage.btnOKUpd_Click();

              $('#div_PaperDetail').show();
              $('#divQuery').show();
              $('#div_SubViewpointList').show();
              $('#divEditRegion').hide();

              // var aa = JSON.stringify(returndata);

              //alert(returndata.message);
            } else {
              alert('请选择正确图片格式(in PaperSubViewpoint_pdf)');
            }
          },
          error(returndata) {
            alert(returndata);
          },
        });
        return bolIsSuccess;
      },

      /*
                   分页修改记录
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_IndexPage)
                  */
      IndexPage(intPageIndex: number) {
        console.log(`跳转到${intPageIndex}页`);

        const objPage = new CitingPaper(this.refDivLayout);
        objPage.IndexPage(intPageIndex);
      },

      /*
                   分页修改记录
                  (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_JumpToPage)
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
        //   //PaperSubViewpoint_pdf.GetMaxStrId('#txtSubViewpointId');
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
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnIsDisplay_Click();
      },

      /*
                 添加点赞
                 (AutoGCLib.WA_ViewScript_TS4CSharp:btnAddVote_Click)
                 */
      btnAddVote_Click(strKeyId: number, strUserId: string) {
        //$('#hidSubViewpointId').val(strKeyId);

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.btnAddVote_Click(strKeyId, strUserId);

        message.success('已点赞!');
      },

      /*
                 添加收藏
                 (AutoGCLib.WA_ViewScript_TS4CSharp:btnAddCollection_Click)
                 */
      //   btnAddCollection_Click(strKeyId: string) {
      //     const objPage = new PaperSubViewpoint_pdf();
      //     objPage.btnAddCollection_Click(strKeyId);
      //     message.success('已收藏!');
      //   },

      //下载
      btnDownLoadFile_Click() {
        const objpage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objpage.btnDownLoadFile_Click();
      },

      //控制pdf页码
      btnUpdatePaperPageNum_Click(pageNum: number, ExplainContent: string) {
        //定位pdf页码

        pdf_LocationPdfPageNum(pageNum, ExplainContent);

        $('#hidExplainContent').val(ExplainContent);

        if (pageNum != 0) {
          const objpage = new PaperSubViewpoint_pdf(this.refDivLayout);
          objpage.btnUpdatePaperPageNum_Click();
        }
      },

      //刷新本页面观点
      Refresh_vPaperSubViewpoint() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.BindGv_vPaperSubViewpoint();
        if (objPage != null) {
          alert('objPage不为空！');
        }
      },

      //向左推移
      right_Click() {
        const divLeftPart = document.getElementById('leftPart') as HTMLDivElement;

        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidrightNum == null) return;
        const num = 5;
        hidleftNum.value = (parseInt(hidleftNum.value) - num).toString();
        hidrightNum.value = (parseInt(hidrightNum.value) + num).toString();

        divLeftPart.style.width = `${hidleftNum.value}%`;

        right_Content.style.width = `${hidrightNum.value}%`;

        message.success(`内容编辑区增宽到：${hidrightNum.value}%`);
        // alert('内容编辑区增宽到：');
      },

      //向右推移
      left_Click() {
        const divLeftPart = document.getElementById('leftPart') as HTMLDivElement;
        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        if (hidrightNum == null) return;
        const num = 5;
        hidleftNum.value = (parseInt(hidleftNum.value) + num).toString();
        hidrightNum.value = (parseInt(hidrightNum.value) - num).toString();
        divLeftPart.style.width = `${hidleftNum.value}%`;
        right_Content.style.width = `${hidrightNum.value}%`;
        message.success(`pdf增宽到：${hidleftNum.value}%`);
      },

      //最大化
      Maximize_Click() {
        const divLeftPart = document.getElementById('leftPart') as HTMLDivElement;
        const right_Content = document.getElementById('right_Content') as HTMLDivElement;

        const hidleftNum = document.getElementById('hidleftNum') as HTMLInputElement;
        const hidrightNum = document.getElementById('hidrightNum') as HTMLInputElement;
        if (hidleftNum == null) return;
        if (hidrightNum == null) return;
        if (hidleftNum != null && hidleftNum.value != '0') {
          hidleftNum.value = '0';
          hidrightNum.value = '100';

          divLeftPart.style.width = '0%';
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

          divLeftPart.style.width = '55%';
          right_Content.style.width = '45%';

          $('#i_Maximize').removeClass('layui-icon-screen-restore');
          $('#i_Maximize').addClass('layui-icon-screen-full');

          message.success('内容编辑区已经恢复！');
        }
      },

      li_PaperQA_Click() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.Bind_Paper_QA();
      },

      li_PaperTags_Click() {
        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
        objPage.Bind_Paper_Tags();
      },

      //点击tab事件；
      li_PaperMenu_Click(KeyId: string) {
        //存储点击的id
        // $('#h1idTabNum').val(KeyId);

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
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

        const objPage = new PaperSubViewpoint_pdf(this.refDivLayout);
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
      Refresh_vTea_QA() {
        // $('#iframe_Tea_QA')[0].contentWindow.Refresh_vTea_QA();
        const iframeElement = $('#iframe_Tea_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).Refresh_vTea_QA();
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
      ddlgsKnowledgeTypeId_ItemChange() {
        const divName = this.refDivLayout;
        // alert('ddlgsKnowledgeTypeId_ItemChange' + this.gsKnowledgeTypeId);
        switch (this.gsKnowledgeTypeId) {
          case enumgs_KnowledgeType.PersonalOpinion_01:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '观点内容');

            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '说明内容');
            break;
          case enumgs_KnowledgeType.ExpertOpinion_02:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '观点内容');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '说明内容');
            break;
          case enumgs_KnowledgeType.Concept_03:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '概念名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '概念内容');
            break;
          case enumgs_KnowledgeType.ObjectiveFact_04:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '事实标题');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '客观内容');
            break;
          case enumgs_KnowledgeType.ObjectiveData_05:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '事实标题');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '客观内容');
            break;
          case enumgs_KnowledgeType.Skill_06:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '技能名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '实施过程');

            break;
          case enumgs_KnowledgeType.SocialRelationships_07:
            // pobjPaperSubViewpointEN.SetSubViewpointContent(fullName); // 详情内容
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '全名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '详细说明');
            break;
        }
      },
    },
  });
</script>
<style scoped>
  .myInput {
    border: 2px;
    border-color: #0080ff;
  }

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

  #divHead {
    position: fixed;
    top: 1px;
    left: 1px;
    right: 1px;
    width: 55%;
    left: 1px;
    z-index: 997;
  }
  #leftPart {
    float: left;
    width: 55%;
    /* height: 100%; */
    position: fixed;
    top: 40px;
    left: 1px;
    z-index: 998;
    border-radius: 10px;
  }

  #right_Content {
    float: right;
    width: 45%;
    z-index: 999;
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

  .title-local {
    font-size: 18px; /* 自定义字号 */
    color: #0011ff; /* 自定义文本颜色 */
    font-weight: bold; /* 设置粗体 */
  }
</style>

<!-- 


    
    
    
    
    
     文件上传 
<script src="../lib/jquery-form.js"></script>
<script src="../lib/jquery.min.js"></script>


} -->
