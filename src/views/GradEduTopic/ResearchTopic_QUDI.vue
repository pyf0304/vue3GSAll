<template>
  <div id="divLayout_Topic" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->
      <div v-if="isShowHead == true" class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">首页</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">主题研究管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">主题维护</li>
              <li class="breadcrumb-item"><label id="lblMsg_List" style="width: 200px"></label></li>
            </ol>
          </nav>
        </div>
        <div class="col-md-3">
          <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
            <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
        ></div>
      </div>
      <div class="container-fluid">
        <!-- 栏目主题查询层 -->
        <div style="float: left; width: 25%">
          <div id="divQuery" ref="refDivQuery" class="div_query">
            <ul class="nav">
              <li class="nav-item ml-2">
                <input
                  id="txtTopicName_q"
                  placeholder="栏目主题"
                  class="form-control form-control-sm"
                  style="width: 300px"
                />
              </li>
              <li class="nav-item">
                <button
                  class="btn btn-info btn-sm"
                  style="white-space: nowrap"
                  @click="btn_Click('Query', '')"
                >
                  查询
                </button>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-sm btn-info"
                  title="刷新"
                  @click="btn_Click('location.reload', '')"
                >
                  <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
              ></li>
            </ul>
          </div>
          <div id="divFunction" ref="refDivFunction" class="layui-card-header">
            <div style="float: left"> 您参与的主题有: </div>
            <div style="float: left" class="btn-group btn-group-sm">
              <button
                id="btnAddNewRecord"
                class="btn btn-success"
                title="添加研究主题"
                @click="btn_Click('AddNewRecord', '')"
                ><font-awesome-icon :icon="['fas', 'plus']"
              /></button>
              <button
                id="btnDelRecord"
                class="btn btn-danger"
                title="删除研究主题"
                @click="btn_Click('DelResearchTopic', '')"
                ><font-awesome-icon :icon="['fas', 'trash']"
              /></button>
              <button
                id="btnUpdateRecord"
                class="btn btn-info"
                title="修改研究主题"
                @click="btn_Click('UpdateRecord', '')"
                ><font-awesome-icon :icon="['fas', 'pencil']"
              /></button>
              <button
                id="btnRoleTool"
                class="btn btn-warning"
                title="主题权限设置"
                @click="btn_Click('RoleTool', '')"
                ><font-awesome-icon icon="gear"
              /></button>
            </div>
            <div style="float: right" class="btn-group btn-group-sm">
              <button
                id="btnApplyAddNewRecord"
                class="btn btn-primary"
                title="主题申请"
                @click="btn_Click('ApplyAddNewRecord', '')"
                ><font-awesome-icon icon="file-lines" />主题申请
                <span id="ApplyTopicCount" class="badge text-bg-info">0</span></button
              >
            </div>
          </div>
          <div id="divTree" class="divTree divTree2">
            <ul id="TreeBind" class="st_tree"> </ul>
            <!-- <div
              id="divTree"
          ref="refDivTree"
          class="tree well"
          style="height: 749px; width: 400px; overflow: scroll"
        > -->
            <!-- <tree
                ref="treeRef"
            :tree-data="treeData"
            :selected-node="selectedNode"
            @on-node-click="NodeClick"
          /> -->
            <!-- </div> -->
          </div>
        </div>
        <div style="float: right; width: 74%; margin-right: 10px">
          <div>
            <div class="alert alert-info alert-dismissible">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>本界面功能：</strong
              >可以维护自己参与的主题，以及主题下面各个模块的操作，主要是把其他相关内容和主题建立联系！
            </div>
          </div>
          <div id="divContent" class="divContent divContent2">
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
              <!-- 上 用户 -->
              <div v-if="activeTabId === 'liUser'" id="liUser">
                <div id="divFunction" style="float: right; margin-right: 0px">
                  <ul class="nav">
                    <li class="nav-item">
                      <label id="lblThesisList" class="col-form-label text-info"> </label>
                    </li>
                    <li class="nav-item ml-3">
                      <button class="layui-btn" @click="btn_Click('AddRelaUsers', '')"
                        ><font-awesome-icon icon="square-plus" />选择用户</button
                      >
                    </li>
                  </ul>
                </div>
                <div id="divRtUserRela" class="div_List">
                  <div id="divRtUserRelaDataLst" class="div_DataList_Local"> </div>
                </div>
              </div>
              <!-- 计划 -->
              <div v-if="activeTabId === 'liResearchPlan'" id="liResearchPlan">
                <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                  <ul class="nav">
                    <li class="nav-item">
                      <label id="lblThesisList" class="col-form-label text-info"> </label>
                    </li>
                    <li class="nav-item ml-3">
                      <button
                        id="btnAddNewRecord"
                        class="layui-btn"
                        @click="btn_Click('AddResearchPlan', '')"
                        ><i class="layui-icon"></i>添加计划</button
                      >
                    </li>
                  </ul>
                </div>
                <div id="divResearchPlan" class="">
                  <div id="divDataLst4ResearchPlan" class="div_DataList_Local"> </div>
                  <div id="divPager4ResearchPlan" class="pager" value="1" style="display: none">
                  </div>
                </div> </div
              ><!-- 计划 -->
              <div v-if="activeTabId === 'liResearchTask'" id="liResearchTask">
                <div id="divFunction" style="float: right; margin-right: 0px">
                  <ul class="nav">
                    <li class="nav-item">
                      <label id="lblThesisList" class="col-form-label text-info"> </label>
                    </li>
                    <li class="nav-item ml-3">
                      <button
                        id="btnAddgs_TeacherTask"
                        class="layui-btn"
                        @click="btn_Click('Addgs_TeacherTask', '')"
                        ><i class="layui-icon"></i>布置任务</button
                      >
                    </li>
                  </ul>
                </div>
                <div id="divgs_TeacherTask" class="">
                  <div id="divDataLst4gs_TeacherTask" class="div_DataList_Local"> </div>
                  <div id="divPager4gs_TeacherTask" class="pager" value="1" style="display: none">
                  </div>
                </div>
                <br /><hr />
              </div>
              <!-- 反思 li_gsReflectLog -->
              <div v-if="activeTabId === 'ligs_ReflectLog'" id="ligs_ReflectLog">
                <div id="divFunction" style="float: right; margin-right: 0px">
                  <ul class="nav">
                    <li class="nav-item">
                      <label
                        id="lblThesisList"
                        class="col-form-label text-info"
                        style="width: 100%"
                      >
                      </label>
                    </li>
                    <li class="nav-item ml-3" style="float: right">
                      <button class="layui-btn" @click="btn_Click('Addgs_ReflectLog', '')"
                        ><font-awesome-icon icon="square-plus" />添加反思</button
                      >
                    </li>
                  </ul>
                </div>
                <div id="divgsReflectLog" class="div_List">
                  <div id="divDataLst4gsReflectLog" class="div_List"> </div>
                  <div id="divPager4gsReflectLog" class="pager" value="1" style="display: none">
                  </div>
                </div>
                <div id="divEdit" tabindex="-1"> </div>
              </div>
              <!-- 论文 -->
              <div v-if="activeTabId === 'liPaper'" id="liPaper">
                <RTPaperRelaListInCom ref="RTPaperRelaListInRef"></RTPaperRelaListInCom>
              </div>
              <!-- 论文子观点 -->
              <div v-if="activeTabId === 'liSubViewpoint'" id="liSubViewpoint">
                <div id="divFunction" style="margin-top: 10px">
                  <div style="float: left">
                    <table
                      id="tabQuery"
                      style="width: 50%"
                      class="table table-bordered table-hover table td table-sm"
                    >
                      <tr>
                        <td class="ValueTD">
                          <select
                            v-model="paperId_Sel"
                            id="ddlPaperId_q"
                            class="form-control form-control-sm"
                            style="width: 500px"
                            @change="SelectPaper()"
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div style="float: right">
                    <button class="layui-btn" @click="btn_Click('AddpdfPaperSubViewpoint', '')"
                      ><font-awesome-icon icon="square-plus" />添加维护论文子观点</button
                    >
                  </div>
                </div>
                <div id="div_SubViewpointList">
                  <div class="layui-row layui-col-space15">
                    <div class="layui-col-md12">
                      <div class="layui-card">
                        <div class="layui-card-body div_DataList_Local">
                          <table class="layui-table layui-form">
                            <thead>
                              <tr>
                                <th>观点内容</th>
                              </tr>
                            </thead>
                            <tbody id="tbList" class="x-cate"></tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 自研论文 -->
              <div v-if="activeTabId === 'liOriginalPaper'" id="liOriginalPaper">
                <div id="divFunction" style="float: right; margin-right: 0px">
                  <ul class="nav">
                    <li class="nav-item">
                      <label
                        id="lblThesisList"
                        class="col-form-label text-info"
                        style="width: 100%"
                      >
                      </label>
                    </li>
                    <li class="nav-item ml-3" style="float: right">
                      <button class="layui-btn" @click="btn_Click('AddNewgs_PaperRela', '')"
                        ><font-awesome-icon icon="square-plus" />添加小组论文写作</button
                      >
                    </li>
                  </ul>
                </div>
                <div id="divRtPaperRela_OriginalPaper">
                  <div id="divDataLst4RtOriginalPaperRela" class="div_List"> </div>
                  <div id="divPager" class="pager" value="1" style="display: none"> </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liViewpoint'" id="liViewpoint">
                <!-- 下 1个人观点 -->
                <div class="divTree divTree_Local" style="width: 20%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind1" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 77%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle1" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfViewPointRela', '')"
                          ><font-awesome-icon icon="square-plus" />添加个人观点</button
                        >
                      </li>
                      <!-- <li class="nav-item ml-3" style="float: right">
                    <button
                          class="layui-btn"
                      @click="btn_Click('AddViewPointRelaRecordInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用个人观点</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtViewPointRela" class="">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPagerViewpoint" class="pager" value="1" style="display: none">
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liExpertViewpoint'" id="liExpertViewpoint">
                <!-- 下 2专家观点  -->
                <div class="divTree divTree_Local" style="width: 20%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind2" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 77%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle2" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfExpertViewPointRel', '')"
                          ><font-awesome-icon icon="square-plus" />添加专家观点</button
                        >
                      </li>
                      <!-- <li class="nav-item ml-3" style="float: right">
                    <button
                          class="layui-btn"
                      @click="btn_Click('AddExpertViewPointRelaRecordInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用专家观点</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtViewPointRelaExpert" class="">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divExpertPagerViewpoint" class="pager" value="1" style="display: none">
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liConcept'" id="liConcept">
                <!-- 底 概念 -->
                <div class="divTree divTree_Local" style="width: 20%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind3" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 77%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle3" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfNewConceptRela', '')"
                          ><font-awesome-icon icon="square-plus" />添加概念</button
                        >
                      </li>
                      <!-- <li class="nav-item ml-3" style="float: right">
                    <button
                          class="layui-btn"
                      @click="btn_Click('AddConceptRelaRecordInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用概念</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtConceptRela" class="">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPager" class="pager" value="1" style="display: none"> </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liObjective'" id="liObjective">
                <!-- 底 客观事实 -->
                <div class="divTree divTree_Local" style="width: 20%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind4" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 77%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle4" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfObjectiveFact', '')"
                          ><font-awesome-icon icon="square-plus" />添加客观事实</button
                        >
                      </li>
                    </ul>
                  </div>
                  <div id="divRtTopicObjectiveRela" class="">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPagerObjective" class="pager" value="1" style="display: none">
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liObjectiveBasis'" id="liObjectiveBasis">
                <!-- 底 客观数据 -->
                <div class="divTree divTree_Local" style="width: 20%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind5" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 77%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle5" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfBasisObjective', '')"
                          ><font-awesome-icon icon="square-plus" />添加客观数据</button
                        >
                      </li>
                      <!-- <li class="nav-item ml-3" style="float: right">
                    <button
                          class="layui-btn"
                      @click="btn_Click('AddBasisObjectiveRelaInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用客观数据</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtTopicObjectiveRelaBasis" class="">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPagerBasis" class="pager" value="1" style="display: none"> </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liSysskill'" id="liSysskill" style="width: 100%">
                <!-- 技能 -->
                <div class="divTree divTree_Local" style="width: 18%">
                  <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind6" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="width: 81%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 400px">
                        <h3 id="ArrangeClassificationTitle6" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-3" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfSysskill', '')"
                          ><font-awesome-icon icon="square-plus" />添加技能</button
                        >
                      </li>
                      <!-- 
                  <li class="nav-item ml-3" style="float: right">
                    <button class="layui-btn" @click="btn_Click('AddSysskillInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用技能</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtSysskillRela1" style="width: 100%">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPagerSysskill" class="pager" value="1" style="display: none"> </div>
                  </div>
                </div>
              </div>
              <div
                v-if="activeTabId === 'liSysSocialRela'"
                id="liSysSocialRela"
                style="width: 100%"
              >
                <!-- 社会关系 -->
                <div class="divTree divTree_Local" style="width: 18%">
                  <div style="text-align: right" class="btn-group btn-group-sm">
                    <button
                      id="btnAddNewClassification"
                      class="btn btn-success"
                      title="添加分类"
                      @click="btn_Click('AddNewClassification', '')"
                      ><font-awesome-icon :icon="['fas', 'plus']" />添加分类</button
                    >
                  </div>
                  <div class="MeetingTree">
                    <ul id="Classification_TreeBind7" class="st_tree"></ul>
                  </div>
                </div>
                <div class="divContent divContent_Local" style="float: right; width: 81%">
                  <div id="divFunction" ref="refDivFunction" class="divFunction_Local">
                    <ul class="nav">
                      <li class="nav-item" style="float: left; width: 200px">
                        <h3 id="ArrangeClassificationTitle7" class="text-info"></h3>
                      </li>
                      <li class="nav-item ml-1">
                        <TopicPaperCom
                          v-model="paperId_Social"
                          :topic-id="topicId"
                          :title="''"
                          :paperId="paperId"
                        ></TopicPaperCom>
                      </li>
                      <li class="nav-item ml-1" style="float: right">
                        <button class="layui-btn" @click="btn_Click('AddpdfSysSocialRela', '')"
                          ><font-awesome-icon icon="square-plus" />添加社会关系</button
                        >
                      </li>
                      <!-- <li class="nav-item ml-3" style="float: right">
                    <button class="layui-btn" @click="btn_Click('AddRTSysSocialRelaInTab', '')"
                      ><font-awesome-icon icon="square-plus" />引用社会关系</button
                        >
                  </li> -->
                    </ul>
                  </div>
                  <div id="divRtSysSocialRelaRela" style="width: 100%">
                    <div id="divDataLst" class="div_DataList_Local"> </div>
                    <div id="divPagerSysSocialRela" class="pager" value="1" style="display: none">
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="activeTabId === 'liMeetingMinutes'" id="liMeetingMinutes" class="div_List">
                <!-- 会议纪要 li_MeetingMinutes -->
                <div id="divMeetingMinutes" class="">
                  <div id="MeetingMinutesTree" class="divTree divTree3" style="width: 15%">
                    <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                      <button
                        id="btnAddNewRecord"
                        class="btn btn-success"
                        title="添加会议纪要"
                        @click="btn_Click('AddNewMeetingMinutes', '')"
                        ><font-awesome-icon :icon="['fas', 'plus']" />添加会议纪要</button
                      >
                    </div>
                    <div class="MeetingTree">
                      <ul id="MeetingMinutesTreeBind" class="st_tree"></ul>
                    </div>
                  </div>
                  <div
                    id="MeetingMinutesContent"
                    class="divContent divContent_Local"
                    style="width: 82%"
                  >
                    <fieldset class="layui-elem-field layui-field-title">
                      <legend>会议纪要时间线</legend>
                    </fieldset>
                    <ul id="MeetingMinutesList" class="layui-timeline"></ul>
                  </div>
                </div>
                <div id="divMeetingMinutesEdit" tabindex="-1"> </div>
              </div>
              <div v-if="activeTabId === 'liPaperReport'" id="liPaperReport" class="div_List">
                <!-- 论文汇报 li_PaperReport -->
                <div id="divPaperReport" class="div_List">
                  <div id="PaperReportTree" class="divTree divTree3" style="width: 15%">
                    <div style="text-align: right; width: 100%" class="btn-group btn-group-sm">
                      <button
                        id="btnAddNewRecord"
                        class="btn btn-success"
                        title="添加论文汇报"
                        @click="btn_Click('AddNewPaperReport', '')"
                        ><font-awesome-icon :icon="['fas', 'plus']" />添加论文汇报</button
                      >
                    </div>
                    <div class="MeetingTree">
                      <ul id="PaperReportTreeBind" class="st_tree"></ul>
                    </div>
                  </div>
                  <div
                    id="PaperReportContent"
                    class="divContent divContent_Local"
                    style="width: 82%"
                  >
                    <fieldset class="layui-elem-field layui-field-title">
                      <legend>论文汇报时间线</legend>
                    </fieldset>
                    <ul id="PaperReportList" class="layui-timeline"></ul>
                  </div>
                </div>
                <div id="divPaperReportEdit" tabindex="-1"> </div>
              </div>
              <div
                v-if="activeTabId === 'liTobeStudiedProblem'"
                id="liTobeStudiedProblem"
                class="div_List"
              >
                <!-- 待研究问题 li_TobeStudiedProblem -->
                <div id="divTobeStudiedProblem" class="">
                  <div
                    id="TobeStudiedProblemContent"
                    class="divContent divContent_Local"
                    style="width: 99%"
                  >
                    <table
                      id="tabEdit"
                      style="width: 700px"
                      class="table table-bordered table-hover table td table-sm"
                    >
                      <tr>
                        <td class="text-left">
                          <input
                            id="txtProblemTitle_q"
                            placeholder="问题标题"
                            class="form-control form-control-sm"
                            style="width: 300px"
                          />
                        </td>
                        <td class="text-left">
                          <input
                            id="txtProblemDate_q"
                            placeholder="问题日期"
                            class="form-control form-control-sm"
                            style="width: 150px"
                          />
                        </td>
                        <td class="text-left">
                          <button
                            class="layui-btn"
                            lay-submit=""
                            lay-filter="sreach"
                            @click="btn_Click('liTobeStudiedProblemClick', '')"
                          >
                            <font-awesome-icon icon="search" />
                          </button>
                        </td>
                        <td class="text-left">
                          <button
                            class="btn btn-info btn-sm"
                            @click="btn_Click('AddNewTobeStudiedProblem', '')"
                            ><font-awesome-icon icon="square-plus" />添加待研究问题</button
                          >
                        </td>
                      </tr>
                    </table>
                    <ul id="TobeStudiedProblemList" class="layui-timeline"></ul>
                  </div>
                </div>
                <div id="divTobeStudiedProblemEdit" tabindex="-1"> </div>
              </div>
              <div v-if="activeTabId === 'liResearchResult'" id="liResearchResult" class="div_List">
                <!-- 研究成果 li_ResearchResult -->
                <div id="divResearchResult" class="">
                  <div
                    id="ResearchResultContent"
                    class="divContent divContent_Local"
                    style="width: 99%"
                  >
                    <table
                      id="tabEdit"
                      style="width: 700px"
                      class="table table-bordered table-hover table td table-sm"
                    >
                      <tr>
                        <td class="text-left">
                          <input
                            id="txtResultName_q"
                            placeholder="成果名称"
                            class="form-control form-control-sm"
                            style="width: 300px"
                          />
                        </td>
                        <td class="text-left">
                          <input
                            id="txtUpdDate_q"
                            placeholder="编辑日期"
                            class="form-control form-control-sm"
                            style="width: 150px"
                          />
                        </td>
                        <td class="text-left">
                          <button
                            class="layui-btn"
                            lay-submit=""
                            lay-filter="sreach"
                            @click="btn_Click('liResearchResultClick', '')"
                          >
                            <font-awesome-icon icon="search" />
                          </button>
                        </td>
                        <td class="text-left">
                          <button
                            class="btn btn-info btn-sm"
                            @click="btn_Click('AddNewResearchResult', '')"
                            ><font-awesome-icon icon="square-plus" />添加研究成果</button
                          >
                        </td>
                      </tr>
                    </table>
                    <ul id="ResearchResultList" class="layui-timeline"></ul>
                  </div>
                </div>
                <div id="divResearchResultEdit" tabindex="-1"> </div>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
      <!-- 主题编辑模块 -->
      <div
        id="divEditRegion"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucResearchTopic"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr style="display: none">
                  <td class="NameTD">
                    <label id="lblTopicId" class="col-form-label text-right" style="width: 90px">
                      主题编号
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtTopicId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblTopicName" class="col-form-label text-right" style="width: 90px">
                      栏目主题
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtTopicName"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblTopicContent"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      主题内容
                    </label>
                  </td>
                  <td class="ValueTD">
                    <textarea
                      id="txtTopicContent"
                      class="form-control form-control-sm"
                      style="width: 500px; height: 80px"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblShareId" class="col-form-label text-right" style="width: 90px">
                      分享
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlShareId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblOrderNum" class="col-form-label text-right" style="width: 90px">
                      序号
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtOrderNum"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblMemo" class="col-form-label text-right" style="width: 90px">
                      备注
                    </label>
                  </td>
                  <td class="ValueTD">
                    <textarea
                      id="txtMemo"
                      class="form-control form-control-sm"
                      style="width: 500px; height: 40px"
                    ></textarea>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary btn-sm"
                @click="btn_Click('mySubmit', '')"
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
      <!-- 论文列表 -->
      <div id="divEdit_Sel" value="1"></div>
      <!-- 用户列表  -->
      <!-- 观点列表 -->
      <div
        id="divViewpointList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">观点列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                style="width: 10%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <input
                      id="txtViewpointName_q"
                      placeholder="观点名称"
                      class="layui-input"
                      style="width: 300px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlViewUpdName_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlCurrEduCls_q1"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlPublicViewPoint"
                      class="form-control form-control-sm"
                      style="width: 200px; display: none"
                    >
                      <option value="1">本组成员观点</option>
                      <option value="2">用户公开观点</option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btnViewpointQuery_Click()"
                    >
                      <font-awesome-icon icon="search" />
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divViewpointDataLst" class="div_DataList"> </div>
              <div id="divPager1" class="pager" value="1" style="display: none"> </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeOne_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 概念列表 -->
      <div
        id="divConceptList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">概念列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 查询层  -->
            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                style="width: 10%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <input
                      id="txtConceptName_q"
                      placeholder="概念名称"
                      class="layui-input"
                      style="width: 300px"
                    />
                  </td>
                  <td>
                    <input
                      id="txtConceptUpdName_q"
                      placeholder="编辑用户"
                      class="layui-input"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlCurrEduCls_q2"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlPublicViewPoint"
                      class="form-control form-control-sm"
                      style="width: 200px; display: none"
                    >
                      <option value="1">本组成员观点</option>
                      <option value="2">用户公开观点</option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btnConceptQuery_Click()"
                    >
                      <font-awesome-icon icon="search" />
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divConceptDataLst" class="div_DataList"> </div>
              <div id="divPager2" class="pager" value="1" style="display: none"> </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeSeven_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 客观列表 -->
      <div
        id="divObjectiveList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">客观列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 客观列表查询层 -->
            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                style="width: 20%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <input
                      id="txtObjectiveName_q"
                      placeholder="客观名称"
                      class="layui-input"
                      style="width: 300px"
                    />
                  </td>
                  <td>
                    <input
                      id="txtObjUpdName_q"
                      placeholder="编辑用户"
                      class="layui-input"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlCurrEduCls_q3"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlPublicViewPoint"
                      class="form-control form-control-sm"
                      style="width: 200px; display: none"
                    >
                      <option value="1">本组成员观点</option>
                      <option value="2">用户公开观点</option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btnQueryObjective_Click()"
                    >
                      <font-awesome-icon icon="search" />
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divObjectiveDataLst" class="div_DataList"> </div>
                <div id="divPager3" class="pager" value="1" style="display: none"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeEight_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 技能列表 -->
      <div
        id="divSysSkillList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">技能列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 技能列表查询层 -->
            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                style="width: 50%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <input
                      id="txtSkillName_q"
                      placeholder="技能名称"
                      class="layui-input"
                      style="width: 180px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlOperationTypeId_q"
                      class="form-control form-control-sm"
                      style="width: 180px"
                    ></select>
                  </td>
                  <td>
                    <input
                      id="txtUpdUser_q"
                      placeholder="编辑人"
                      class="layui-input"
                      style="width: 120px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlCurrEduCls_q4"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlPublicViewPoint"
                      class="form-control form-control-sm"
                      style="width: 200px; display: none"
                    >
                      <option value="1">本组成员观点</option>
                      <option value="2">用户公开观点</option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btnQuerySysskill_Click()"
                    >
                      <font-awesome-icon icon="search" />
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divSysSkillDataLst" class="div_DataList"> </div>
                <div id="divPager3" class="pager" value="1" style="display: none"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeNine_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 社会关系 -->
      <div
        id="divSysSocialRelationsList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">社会关系列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 社会关系查询层 -->
            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                style="width: 50%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <input
                      id="txtFullName_q"
                      placeholder="姓名"
                      class="layui-input"
                      style="width: 120px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlLevelId_q"
                      class="form-control form-control-sm"
                      style="width: 180px"
                    ></select>
                  </td>
                  <td>
                    <select
                      id="ddlCurrEduCls_q5"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <select
                      id="ddlPublicViewPoint"
                      class="form-control form-control-sm"
                      style="width: 200px; display: none"
                    >
                      <option value="1">本组成员观点</option>
                      <option value="2">用户公开观点</option>
                    </select>
                  </td>
                  <td>
                    <button
                      class="layui-btn"
                      lay-submit=""
                      lay-filter="sreach"
                      @click="btnQuerySysSocialRelations_Click()"
                    >
                      <font-awesome-icon icon="search" />
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divSysSocialRelationsDataLst" class="divdiv_DataList_List"> </div>
                <div id="divPager3" class="pager" value="1" style="display: none"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeTen_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 主题论文 -->
      <div
        id="divTopicPaperUserList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 300px">
          <div class="modal-content" style="width: 1200px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">主题论文列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divTopicPaperDataLst" class="div_DataList"> </div>
                <div id="divPager_TopicPaperLst" class="pager" value="1"> </div>
              </div>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
      <!-- 用户色码 -->
      <el-dialog
        id="divUserColorList"
        v-model="dialogVisibleUserRolor"
        style="z-index: 1060"
        title="用户信息"
      >
        <div ref="editUserRolorRef">
          <label style="color: red"
            >提示:点击色码块更改用户背景色码;确定按钮用于修改下拉框用户角色;</label
          >
          <div id="divUserColorDataLst" class="div_DataList"> </div>
          <!-- /.modal-content -->
        </div>
      </el-dialog>
      <!-- 主题权限设置 -->
      <div
        id="editTopicRole"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
        style="margin-top: 200px"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- 模态框头部 -->
            <div class="modal-header">
              <h4 class="modal-title">主题权限设置</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- 模态框主体 -->
            <div class="modal-body">
              <div id="editTopicRoleList" class="TopicRole"> </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-group" style="display: none">
        <div class="col-sm-4">
          <!-- 老的带标签的数据 不更改 -->
          <textarea id="inpOldData" rows="2" cols="20" type="text"></textarea>
          <!-- 需要比对去标签的数据 -->
          <textarea id="inpLeft" rows="2" cols="20" type="text"></textarea>
        </div>
        <textarea id="inpRight" rows="2" cols="20" type="text"></textarea>
      </div>
      <!-- 各观点分类调整 -->
      <el-dialog
        id="editClassification"
        v-model="dialogVisibleClassification"
        :width="dialogWidth"
        style="margin-top: 200px"
        title="编辑观点分类"
      >
        <!-- 模态框主体 -->
        <div ref="editClassificationRef">
          <table>
            <tr>
              <td
                ><select
                  v-model="classificationId_Edit"
                  id="ddlClassificationId"
                  class="form-control form-control-sm"
                  style="width: 300px"
              /></td>
              <td
                ><button type="button" class="btn btn-primary" @click="SubmiClassification_Click()"
                  >提交更改</button
                ></td
              >
            </tr>
          </table>
        </div>
      </el-dialog>
      <div id="divEdit_ResearchTopic" tabindex="-1"> </div>
      <div id="divEdit_gs_ReflectLog" tabindex="-1"> </div>
      <div id="divEdit_gs_TobeStudiedProblem" tabindex="-1"></div>
      <div id="divEdit_gs_ResearchResult" tabindex="-1"> </div>
      <div id="divEdit_gs_PaperReport" tabindex="-1"> </div>
      <div id="divEdit_gs_MeetingMinutes" tabindex="-1"> </div>
      <div id="divEdit_gs_TeacherTask" tabindex="-1"> </div>
      <div id="divEdit_gs_VpClassification" tabindex="-1"> </div>
    </div>
    <div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortResearchTopicBy" type="hidden" value="" />
      <input id="hidTopicRelaId" type="hidden" value="" />
      <input id="hidUserId" type="hidden" value="" />
      <input id="hidRoleId" type="hidden" value="" />
      <input id="hidEduClsTypeId" type="hidden" value="" />
      <!-- 权限设置 -->
      <input id="hidMenuIsHide" type="hidden" />
      <input id="hidTopicRoleId" type="hidden" />
      <!-- 观点 个人 专家 -->
      <input id="hidSortvViewpointBy" type="hidden" value="" />
      <input id="hidViewpointId" type="hidden" value="" />
      <!-- 论文 -->
      <input id="hidSortvPaperBy" type="hidden" value="" />
      <input id="hidPaperId" type="hidden" value="" />
      <!-- 主题论文 -->
      <input id="hidTopicPaperId" type="hidden" value="" />
      <input id="hidSortQxUsersBy" type="hidden" value="" />
      <input id="hidUserIdKey" type="hidden" value="" />
      <!-- 主题用户关系 -->
      <input id="hidSortvRTUserRelaBy" type="hidden" value="" />
      <input id="hidCurrPageIndexUser" type="hidden" value="1" />
      <!-- 主题观点关系 -->
      <input id="hidSortvRTViewpointRelaBy" type="hidden" value="" />
      <input id="hidCurrPageIndexViewpoint" type="hidden" value="1" />
      <!-- 主题论文关系 -->
      <input id="hidSortvRTPaperRelaBy" type="hidden" value="" />
      <input id="hidCurrPageIndexPaper" type="hidden" value="1" />
      <!-- 主题概念关系 -->
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortvRTConceptRelaBy" type="hidden" value="" />
      <input id="hidConceptId" type="hidden" value="" />
      <!-- 主题客观关系 -->
      <input id="hidSortvTopicObjectiveBy" type="hidden" value="" />
      <input id="hidObjectiveId" type="hidden" value="" />
      <!-- 观点角色类型 -->
      <input id="hidUserTypeId" type="hidden" value="" />
      <!-- 客观类型 -->
      <input id="hidObjectiveTypeId" type="hidden" value="" />
      <!-- 用户列表 -->
      <input id="hidSortvUsersBy" type="hidden" value="" />
      <!-- 客观事实列表 -->
      <input id="hidSortvTopicObjectiveBy" type="hidden" value="" />
      <!-- 存放tab页顺序 -->
      <input id="hidTabNum" type="hidden" />
      <!-- 研究结果 -->
      <!-- 区分所有论文，和小组成员论文 -->
      <input id="hidstrType" type="hidden" />
      <!-- 区分个人专家观点  区分客观事实和客观数据 -->
      <input id="hidPageType" type="hidden" />
      <!-- 技能  -->
      <input id="hidSortvRTSysSkillBy" type="hidden" value="" />
      <input id="hidSkillId" type="hidden" value="" />
      <!-- 社会关系 -->
      <input id="hidSortvRTSysSocialRelaBy" type="hidden" value="" />
      <input id="hidSocialId" type="hidden" value="" />
      <!-- 研究计划 -->
      <input id="hidSortvgs_ResearchPlanBy" type="hidden" value="" />
      <!-- 研究计划 教师任务布置 -->
      <input id="hidSortgs_TeacherTaskBy" type="hidden" value="" />
      <!-- 当前教学班Id -->
      <input id="hidIdCurrEduCls" type="hidden" />
      <!-- 主题用户Id -->
      <input id="hidTopicUserId" type="hidden" />
      <!-- 小组答疑 -->
      <input id="hidSortvgs_RTqa_PaperRelaBy" type="hidden" />
      <!-- 会议纪要 -->
      <input id="hidYear" type="hidden" />
      <input id="hidMonth" type="hidden" />
      <input id="hidMeetingId" type="hidden" />
      <input id="hidColorCode" type="hidden" />
      <input id="hidOldColorCode" type="hidden" />
      <input id="hidNewColorCode" type="hidden" />
      <input id="hidUpdUserId" type="hidden" />
      <!-- 论文汇报 -->
      <input id="hidReportId" type="hidden" />
      <input id="hidppt" type="hidden" />
      <input id="hidpdf" type="hidden" />
      <!-- 待研究问题 -->
      <input id="hidProblemId" type="hidden" />
      <!-- 各观点分类 -->
      <input id="hidViewsTabNum" type="hidden" />
      <input id="hidViewsMId" type="hidden" />
      <!-- 编辑 -->
      <!-- 研究成果 -->
      <input id="hdnFileOne" type="hidden" />
      <input id="hdnFileTwo" type="hidden" />
      <input id="hdnFileThree" type="hidden" />
    </div>
    <UsersLstSelCom ref="UsersLst_EditRef"></UsersLstSelCom>

    <GsTeacherTaskEdit ref="gs_TeacherTask_EditRef"></GsTeacherTaskEdit>
    <GsResearchPlanEdit ref="gs_ResearchPlan_EditRef"></GsResearchPlanEdit>
    <GsReflectLogEdit ref="gs_ReflectLog_EditRef"></GsReflectLogEdit>

    <!--编辑层-->
    <ResearchTopic_EditCom ref="ResearchTopic_EditRef"></ResearchTopic_EditCom>
    <gs_VpClassification_EditCom ref="gs_VpClassification_EditRef"></gs_VpClassification_EditCom>
    <PaperSubViewpoint_EditCom ref="PaperSubViewpoint_EditRef"></PaperSubViewpoint_EditCom>
    <gs_MeetingMinutes_EditCom ref="gs_MeetingMinutes_EditRef"></gs_MeetingMinutes_EditCom>
    <gs_PaperReport_EditCom ref="gs_PaperReport_EditRef"></gs_PaperReport_EditCom>
    <gs_TobeStudiedProblem_EditCom
      ref="gs_TobeStudiedProblem_EditRef"
    ></gs_TobeStudiedProblem_EditCom>
    <gs_ResearchResult_EditCom ref="gs_ResearchResult_EditRef"></gs_ResearchResult_EditCom>
    <P_Paper_EditCom ref="P_Paper_EditRef"></P_Paper_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import ResearchTopicList from '@/views/GradEduTopic/ResearchTopicList.vue';

  import $ from 'jquery';
  import router from '@/router';
  import enumResearchTopicTabs from '@/ts/FunClass/enumResearchTopicTabs';
  import {
    ResearchTopic_QUDIExB,
    ResertchTopicQudiEx_PageLoad,
  } from '@/views/GradEduTopic/ResearchTopic_QUDIExB';
  import { ResearchTopic_QUDIEx_btnSelectResearchTopic } from '@/views/GradEduTopic/ResearchTopic_QUDIExC';
  import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
  // import tree from '@/ts/components/myTree.vue';
  import ResearchTopic_EditCom from '@/views/GradEduTopic/ResearchTopic_Edit.vue';
  import UsersLstSelCom from '@/views/GradEduTopic/UsersLstSel.vue';
  import { UsersLstSel } from '@/views/GradEduTopic/UsersLstSel';
  import { gs_TeacherTask_Edit } from '@/viewsBase/GradEduTopic/gs_TeacherTask_Edit';
  import GsTeacherTaskEdit from '@/views/GradEduTopic/gs_TeacherTask_Edit.vue';
  import GsResearchPlanEdit from '@/views/GradEduTopic/gs_ResearchPlan_Edit.vue';
  import { gs_ResearchPlan_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchPlan_Edit';
  import { gs_ReflectLog_Edit } from '@/viewsBase/GradEduTopic/gs_ReflectLog_Edit';
  import GsReflectLogEdit from '@/views/GradEduTopic/gs_ReflectLog_Edit.vue';
  import { PaperLstSel } from '@/views/GradEduTopic/PaperLstSel';

  import { Paper_Edit } from '@/viewsBase/GradEduPaper/Paper_Edit';
  import { ResearchTopic_Edit } from '@/viewsBase/GradEduTopic/ResearchTopic_Edit';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { GetDivObjInDivObj, GetLiObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import TopicPaperCom from '@/ts/components/TopicPaper.vue';
  import { Public_PaperSubViewpoint } from '@/views/GradEduPublicPage/Public_PaperSubViewpoint';
  import { ResearchTopicViewpointEx } from '@/views/GradEduTopic/ResearchTopicViewpointEx';
  import { ResearchTopicConceptEx } from '@/views/GradEduTopic/ResearchTopicConceptEx';
  import { ResearchTopicObjectiveEx } from '@/views/GradEduTopic/ResearchTopicObjectiveEx';
  import { ResearchTopicSysskillEx } from '@/views/GradEduTopic/ResearchTopicSysskillEx';
  import { ResearchTopicSysSocialRelaEx } from '@/views/GradEduTopic/ResearchTopicSysSocialRelaEx';
  import { gs_VpClassificationCRUDEx } from '@/views/GradEduTopic/gs_VpClassificationCRUDEx';
  import { message } from '@/utils/myMessage';
  import { gs_VpClassificationEx_BindDdl_ClassificationIdInDiv } from '@/ts/L3ForWApiEx/GradEduTopic/clsgs_VpClassificationExWApi';
  import { gs_VpClassification_Edit } from '@/viewsBase/GradEduTopic/gs_VpClassification_Edit';
  import gs_VpClassification_EditCom from '@/views/GradEduTopic/gs_VpClassification_Edit.vue';
  import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
  import PaperSubViewpoint_EditCom from '@/views/GradEduPaper/PaperSubViewpoint_Edit.vue';
  import { PaperSubViewpoint_Edit } from '@/viewsBase/GradEduPaper/PaperSubViewpoint_Edit';
  import { PaperSubViewpoint_EditEx } from '@/views/GradEduPaper/PaperSubViewpoint_EditEx';
  import gs_MeetingMinutes_EditCom from '@/views/GradEduTopic/gs_MeetingMinutes_Edit.vue';
  import { gs_MeetingMinutes_Edit } from '@/viewsBase/GradEduTopic/gs_MeetingMinutes_Edit';
  import { gs_MeetingMinutes_EditEx } from '@/views/GradEduTopic/gs_MeetingMinutes_EditEx';
  import { gs_MeetingMinutesCRUDEx } from '@/views/GradEduTopic/gs_MeetingMinutesCRUDEx';
  import gs_PaperReport_EditCom from '@/views/GradEduTopic/gs_PaperReport_Edit.vue';
  import { gs_PaperReport_Edit } from '@/viewsBase/GradEduTopic/gs_PaperReport_Edit';
  import { gs_PaperReport_EditEx } from '@/views/GradEduTopic/gs_PaperReport_EditEx';
  import { gs_PaperReportCRUDEx } from '@/views/GradEduTopic/gs_PaperReportCRUDEx';
  import gs_TobeStudiedProblem_EditCom from '@/views/GradEduTopic/gs_TobeStudiedProblem_Edit.vue';
  import { gs_TobeStudiedProblem_Edit } from '@/viewsBase/GradEduTopic/gs_TobeStudiedProblem_Edit';
  import { gs_TobeStudiedProblem_EditEx } from '@/views/GradEduTopic/gs_TobeStudiedProblem_EditEx';
  import { gs_TobeStudiedProblemCRUDEx } from '@/views/GradEduTopic/gs_TobeStudiedProblemCRUDEx';
  import gs_ResearchResult_EditCom from '@/views/GradEduTopic/gs_ResearchResult_Edit.vue';
  import RTPaperRelaListInCom from '@/views/GradEduTopic/RTPaperRelaListIn.vue';

  import { gs_ResearchResult_EditEx } from '@/views/GradEduTopic/gs_ResearchResult_EditEx';
  import { gs_ResearchResult_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchResult_Edit';
  import { gs_ResearchResultCRUDEx } from '@/views/GradEduTopic/gs_ResearchResultCRUDEx';
  import P_Paper_EditCom from '@/views/GradEduPublicPage/P_Paper_Edit.vue';
  import { P_Paper_EditEx } from '@/views/GradEduPublicPage/P_Paper_EditEx';
  import { paperStore } from '@/store/modules/paper';
  // import { ResearchTopic_QUDIEx } from '@/views/GradEduTopic/ResearchTopic_QUDIEx';
  export default defineComponent({
    name: 'ResearchTopicQudi1',
    components: {
      // 组件注册
      // tree,
      UsersLstSelCom,
      GsTeacherTaskEdit,
      GsResearchPlanEdit,
      GsReflectLogEdit,

      ResearchTopic_EditCom,
      gs_VpClassification_EditCom,
      TopicPaperCom,
      PaperSubViewpoint_EditCom,
      gs_MeetingMinutes_EditCom,
      gs_PaperReport_EditCom,
      gs_TobeStudiedProblem_EditCom,
      gs_ResearchResult_EditCom,
      RTPaperRelaListInCom,
      P_Paper_EditCom,
    },
    setup() {
      const activeTabId = ref('liUser');
      const tabs = reactive([
        { id: enumResearchTopicTabs.liUser, label: '小组成员' },
        { id: enumResearchTopicTabs.liResearchPlan, label: '计划' },
        { id: enumResearchTopicTabs.liResearchTask, label: '任务' },
        { id: enumResearchTopicTabs.ligs_ReflectLog, label: '反思' },
        { id: enumResearchTopicTabs.liPaper, label: '论文' },
        { id: enumResearchTopicTabs.liSubViewpoint, label: '论文子观点' },
        // { id: 'liAllViewpoint', label: '主题各观点' },
        { id: enumResearchTopicTabs.liViewpoint, label: '个人观点' },
        { id: enumResearchTopicTabs.liExpertViewpoint, label: '专家观点' },
        { id: enumResearchTopicTabs.liConcept, label: '概念' },
        { id: enumResearchTopicTabs.liObjective, label: '客观事实' },
        { id: enumResearchTopicTabs.liObjectiveBasis, label: '客观数据' },
        { id: enumResearchTopicTabs.liSysskill, label: '技能' },
        { id: enumResearchTopicTabs.liSysSocialRela, label: '社会关系' },
        { id: enumResearchTopicTabs.liOriginalPaper, label: '论文写作' },
        { id: enumResearchTopicTabs.liMeetingMinutes, label: '会议纪要' },
        { id: enumResearchTopicTabs.liPaperReport, label: '汇报' },
        { id: enumResearchTopicTabs.liTobeStudiedProblem, label: '待研究' },
        { id: enumResearchTopicTabs.liResearchResult, label: '成果' },
      ]);
      // const treeRef = ref();
      const selectedNode = ref(null);
      // const treeData = ref<TreeNode[]>([
      //   // Your data initialization here
      //   {
      //     id: '1',
      //     label: '学院A',
      //     type: '',
      //     expanded: true,
      //     parentNode: null,
      //     children: [],
      //   },
      // ]);
      // const refDivTree = ref();
      // Method to select a node in the Tree component
      // const selectNodeById = (type: string, nodeId: string) => {
      //   if (treeRef.value) {
      //     // Call the selectNode method in the Tree component
      //     treeRef.value.selectNode(type, nodeId);
      //   }
      // };
      // const selectNodeSim = (type: string, nodeId: string) => {
      //   if (treeRef.value) {
      //     // Call the selectNode method in the Tree component
      //     console.error('selectNodeSim:', type, nodeId);
      //     treeRef.value.selectNodeSim(type, nodeId);
      //   }
      // };
      const isShowHead = ref(false);
      const PaperSubViewpoint_EditRef = ref();
      const gs_MeetingMinutes_EditRef = ref();
      const gs_PaperReport_EditRef = ref();
      const gs_TobeStudiedProblem_EditRef = ref();
      const gs_ResearchResult_EditRef = ref();
      const RTPaperRelaListInRef = ref();
      const P_Paper_EditRef = ref();
      const dialogVisibleClassification = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialogClassification = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisibleClassification.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 500);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisibleClassification.value = false;
      };
      const hideDialogClassification = () => {
        dialogVisibleClassification.value = false;
      };
      const dialogVisibleUserRolor = ref(false);
      // const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialogUserRolor = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisibleUserRolor.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 500);
        });
      };
      const hideDialogUserRolor = () => {
        dialogVisibleUserRolor.value = false;
      };
      const readWriteTypeId = ref('01'); //默认阅读写作类型为01：阅读
      const TopicPaper_SocialRef = ref();
      const paperId_Social = ref();
      const paperId_Sel = ref('0');
      const refDivLayout = ref();
      const editClassificationRef = ref();
      const editUserRolorRef = ref();
      const Login_EditRef = ref();
      const UsersLst_EditRef = ref();

      const subViewpointId_Edit = ref('');
      const gs_TeacherTask_EditRef = ref();
      const gs_ResearchPlan_EditRef = ref();
      const gs_ReflectLog_EditRef = ref();

      const ResearchTopic_EditRef = ref();
      const gs_VpClassification_EditRef = ref();
      const idCurrEduCls = ref('');
      const topicId = ref('');
      const paperId = ref('');
      const classificationId = ref('');
      const classificationId_Edit = ref(0);
      const viewsId = ref('');
      const UserName = ref('pyf');
      const visitedTabs = ref('');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      // const strViewId = clsPrivateSessionStorage.viewId;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      onMounted(async () => {
        // ResearchTopic_QUDIExB.divTree = refDivTree.value;
        // GeneTabCodeEx.divCode = refDivCode.value;
        // ResearchTopic_QUDIExB.treeRef = treeRef;
        // ResearchTopic_QUDIExB.bindTreeData = bindTreeData;
        // ResearchTopic_QUDIExB.selectNodeById = selectNodeSim;

        // treeData.value = await ResearchTopic_QUDIEx_BindTr();
        ResearchTopic_QUDIExB.divLayout = refDivLayout.value;
        ResearchTopic_QUDIExB.vuebtn_Click = btn_Click;
        ResearchTopic_QUDIExB.GetPropValue = GetPropValue;
        gs_MeetingMinutesCRUDEx.vuebtn_Click = btn_Click;
        gs_PaperReportCRUDEx.vuebtn_Click = btn_Click;
        gs_TobeStudiedProblemCRUDEx.vuebtn_Click = btn_Click;
        gs_ResearchResultCRUDEx.vuebtn_Click = btn_Click;
        if (clsPrivateSessionStorage.topicIdInTree != '')
          topicId.value = clsPrivateSessionStorage.topicIdInTree;
        await ResertchTopicQudiEx_PageLoad(refDivLayout.value);

        // await allTabClick();
        setTimeout(() => {
          ClickCurrTopic(topicId.value);
        }, 200);
      });
      function ClickCurrTopic(strTopicId: string) {
        if (strTopicId == '') return;
        const liName = `li${strTopicId}`;
        if (refDivLayout.value == null) return;
        const objLi = GetLiObjInDivObj(refDivLayout.value, liName);
        if (objLi != null) {
          objLi.click();
        }
      }
      function delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
      async function allTabClick() {
        GetDivObjInDivObj(
          ResearchTopic_QUDIExB.divLayout,
          enumResearchTopicTabs.liResearchPlan,
        ).click();
        activeTabId.value = enumResearchTopicTabs.liResearchPlan;
        await delay(500);
        activeTabId.value = enumResearchTopicTabs.ligs_ReflectLog;
        await delay(500);
        activeTabId.value = enumResearchTopicTabs.liPaper;
        await delay(500);
      }
      // const bindTreeData = async () => {
      //   treeData.value = await ResearchTopic_QUDIEx_BindTr();
      // };
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return idCurrEduCls.value;
          case 'topicId':
            return topicId.value;
          case 'activeTabId':
            return activeTabId.value;
          case 'classificationId':
            return classificationId.value;
          case 'viewsId':
            return viewsId.value;
          case 'paperId_Social':
            return paperId_Social.value;
          case 'readWriteTypeId':
            return readWriteTypeId.value;
          default:
            return '';
        }
        return '';
      }
      //点击主题树菜单事件；
      function btnSelectResearchTopic(
        strKeyId: string,
        strIdCurrEduCls: string,
        strTopicName: string,
        strEduClsTypeId: string,
      ) {
        topicId.value = strKeyId;
        //存储教学班Id
        idCurrEduCls.value = strIdCurrEduCls;
        clsPrivateSessionStorage.topicIdInTree = strKeyId;
        //$("#divContent_list").show();
        //先清除背景色
        $('.submenu li a').removeClass('selected');
        //添加背景色
        $('#li' + strKeyId + ' a').addClass('selected');
        //存储点击的id
        $('#hidTopicRelaId').val(strKeyId);
        //把主题名称传递给父框架页
        $('#CurrTopicName', window.parent.document).html(strTopicName);
        //存储教学班Id
        $('#hidEduClsTypeId').val(strEduClsTypeId);
        //alert(strKeyId);
        //点击后调整关系表数据方法；
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.GetAllFunctionMethod(strKeyId);
      }
      /****************************************************************************************** */
      /************************************************各观点分类****************************** */
      function ClearClassificationTitle() {
        $('#hidEditClassificationId').val('0');
        $('#ArrangeClassificationTitle1').html('');
        $('#ArrangeClassificationTitle2').html('');
        $('#ArrangeClassificationTitle3').html('');
        $('#ArrangeClassificationTitle4').html('');
        $('#ArrangeClassificationTitle5').html('');
        $('#ArrangeClassificationTitle6').html('');
        $('#ArrangeClassificationTitle7').html('');
      }
      //选择分类文件夹
      function btnClassification_Click(
        strKey: string,
        strgsKnowledgeTypeId: string,
        strClassificationName: string,
      ) {
        ClearClassificationTitle();
        classificationId.value = strKey;
        switch (strgsKnowledgeTypeId) {
          case enumgs_KnowledgeType.PersonalOpinion_01:
            $('#ArrangeClassificationTitle1').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.ExpertOpinion_02:
            $('#ArrangeClassificationTitle2').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.Concept_03:
            $('#ArrangeClassificationTitle3').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.ObjectiveFact_04:
            $('#ArrangeClassificationTitle4').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.ObjectiveData_05:
            $('#ArrangeClassificationTitle5').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.Skill_06:
            $('#ArrangeClassificationTitle6').html('当前分类：' + strClassificationName);
            break;
          case enumgs_KnowledgeType.SocialRelationships_07:
            $('#ArrangeClassificationTitle7').html('当前分类：' + strClassificationName);
            break;
          default:
            $('#ArrangeClassificationTitle1').html('当前分类：' + strClassificationName);
        }
        viewsId.value = '';
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.GetAllFunctionMethod(topicId.value);
      }
      //分类观点树菜单事件；
      function btnSelectViews(strKeyId: string, strClassificationId: string) {
        //先清除背景色
        $('.submenu li a').removeClass('selected');
        //添加背景色
        $('#li' + strKeyId + ' a').addClass('selected');
        //存储点击的id
        viewsId.value = strKeyId;
        classificationId.value = strClassificationId;
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.GetAllFunctionMethod(topicId.value);
      }
      //清空分类
      function btnClearClassification_Click(ClassificationId: string) {
        if (ClassificationId == '0000000000') {
          viewsId.value = '';
          classificationId.value = '0000000000';
        } else {
          viewsId.value = '';
          classificationId.value = '';
        }
        ClearClassificationTitle();
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.GetAllFunctionMethod(topicId.value);
      }
      async function btnUpdateClassificationRecordInTab_Click(
        strKey: string,
        strClassificationId: string,
      ) {
        // $('#hidViewsMId').val(strKey);
        subViewpointId_Edit.value = strKey;
        $('#ddlClassificationId').val(strClassificationId);
        await ShowDialogClassification();
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        const divName = editClassificationRef.value;
        await gs_VpClassificationEx_BindDdl_ClassificationIdInDiv(
          divName,
          'ddlClassificationId',
          strTopicId,
        );
      }
      /*
      显示对话框
          */
      async function ShowDialogClassification() {
        // $('#editClassification').modal('show');
        // this.dialogVisibleClassification = true;
        await showDialogClassification();
      }
      //各个观点加入分类
      async function btnAddClassificationRecordInTab_Click(strKey: string) {
        // $('#hidViewsMId').val(strKey);
        subViewpointId_Edit.value = strKey;
        $('#ddlClassificationId').val('0');
        await ShowDialogClassification();
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        const divName = editClassificationRef.value;
        await gs_VpClassificationEx_BindDdl_ClassificationIdInDiv(
          divName,
          'ddlClassificationId',
          strTopicId,
        );
      }
      //参与答疑
      async function ParticipateQA_Click(strPaperId: string) {
        // var strTopicId = $('#hidTopicRelaId').val();
        // xadminOpen(
        //   '教师提问',
        //   '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&PaperId=' +
        //   strPaperId +
        //   '&TopicId=' +
        //   strTopicId +
        //   '&QuestionsTypeId=02',
        // );
        let myRouter;
        const strType = '01';
        const strQuestionsTypeId = '02';
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        const objPaper = await paperStore.getObj(strPaperId);
        if (objPaper == null) return;
        if (objPaper.literatureTypeId == '05') {
          myRouter = `/ReadTraining?paperId=${objPaper.paperId}&type=${strType}&QuestionsTypeId=${strQuestionsTypeId}&TopicId=${strTopicId}`;
        } else {
          myRouter = `/PaperSubViewpoint?paperId=${objPaper.paperId}&type=${strType}&QuestionsTypeId=${strQuestionsTypeId}&TopicId=${strTopicId}`;
        }

        router.push(myRouter);
      }

      /*
       * 各观点分类修改；
       */
      function btnUpdategs_VpClassification_Click(strKeyId: string) {
        ResearchTopic_QUDIExB.btn_Click(
          'UpdateRecordInTab_gs_VpClassification',
          strKeyId,
          refDivLayout.value,
        );
      }
      /*
       * 各观点分类删除操作
       */
      function btnDelgs_VpClassification_Click(objData: any) {
        if (objData.keyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        gs_VpClassificationCRUDEx.gsKnowledgeTypeId = objData.gsKnowledgeTypeId;
        const objPage = new gs_VpClassificationCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnDelRecordInTab_Click(objData.keyId);
      }
      ///修改个人观点
      function btnUpdViewPoint_Click(strSubViewpointId: number, strUserTypeId: string) {
        var strTopicId = $('#hidTopicRelaId').val();
        if (strTopicId == '') {
          alert('请选择需要添加关系的主题！');
          return;
        } else {
          //存放选择id
          //var strUserTypeId = "01";
          $('#hidUserTypeId').val(strUserTypeId);
          PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
          // this.divEdit = PaperSubViewpoint_EditRef.value;
          // xadminOpen_Width_Height(
          //   '修改观点',
          //   '../GraduateEduPublicPage/AddViewpoint?UserTypeId=' +
          //     strUserTypeId +
          //     '&TopicId=' +
          //     strTopicId +
          //     '&ViewpointId=' +
          //     strViewpointId,
          //   1200,
          //   800,
          // );
        }
      }
      //删除主题用户关系
      async function btnDelUserRelaInTab_Click(strTopicId: string, strUserId: string) {
        if (strUserId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        const bolResult = await objPage.btnDelUserRelaRecordInTab_Click(strTopicId, strUserId);
        if (bolResult == true)
          ResearchTopic_QUDIExB.btn_Click('changeTab', activeTabId.value, refDivLayout.value);
      }
      //修改主题用户色码块；
      function btnUpdateUserRelaInTab_Click(
        strTopicId: string,
        strUserId: string,
        strRoleId: string,
      ) {
        console.error('pyf-btnUpdateUserRelaInTab_Click');
        if (strUserId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        //ShowUserColor();
        $('#hidTopicUserId').val(strUserId);
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnUpdateUserRelaInTab_Click(strTopicId, strUserId, strRoleId);
      }
      //显示色码层
      function ShowUserColor() {
        // $('#divUserColorList').modal('show');
        showDialogUserRolor();
      }
      //隐藏色码层
      function HideUserColor() {
        // $('#divUserColorList').modal('hide');
        hideDialogUserRolor();
      }
      function btnOkUserColor_Click(strUserColor: string, strUserId: string) {
        var objPage = new ResearchTopic_QUDIExB(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnOkUserColor_Click(strUserColor, strUserId);
      }
      /*
       * 会议纪要修改；
       */
      function btnUpdategs_MeetingMinutes_Click(strKeyId: string) {
        ResearchTopic_QUDIExB.btn_Click(
          'UpdateRecordInTab_gs_MeetingMinutes',
          strKeyId,
          refDivLayout.value,
        );
      }
      /*
       * 会议纪要删除操作
       */
      function btnDelgs_MeetingMinutes_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_MeetingMinutesCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.divName4Query = 'divMeetingMinutes';
        objPage.btnDelRecordInTab_Click(strKeyId);
      }
      /*
       * 会议纪要提交操作
       */
      function Update_MeetingIsSubmit_Click(strKeyId: string, stata: number) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_MeetingMinutesCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.divName4Query = 'divMeetingMinutes';
        objPage.Update_MeetingIsSubmit_Click(strKeyId, stata);
      }
      /*
       * 论文汇报修改；
       */
      function btnUpdategs_PaperReport_Click(strKeyId: string) {
        ResearchTopic_QUDIExB.btn_Click(
          'UpdateRecordInTab_gs_PaperReport',
          strKeyId,
          refDivLayout.value,
        );
      }
      /*
       * 论文汇报删除操作
       */
      function btnDelgs_PaperReport_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_PaperReportCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnDelRecordInTab_Click(strKeyId);
      }
      /*
       * 论文汇报提交操作
       */
      function UpdateIsSubmit_Click(strKeyId: string, stata: number) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_PaperReportCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.UpdateIsSubmit_Click(strKeyId, stata);
      }
      /*
       * 待研究问题修改；
       */
      function btnUpdategs_TobeStudiedProblem_Click(strKeyId: string) {
        ResearchTopic_QUDIExB.btn_Click(
          'UpdateRecordInTab_gs_TobeStudiedProblem',
          strKeyId,
          refDivLayout.value,
        );
      }
      /*
       * 待研究问题删除操作
       */
      function btnDelgs_TobeStudiedProblem_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_TobeStudiedProblemCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.divName4Query = 'divTobeStudiedProblem';
        objPage.btnDelRecordInTab_Click(strKeyId);
      }
      /*
       * 待研究问题提交操作
       */
      function Update_ProblemIsSubmit_Click(strKeyId: string, stata: number) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_TobeStudiedProblemCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.divName4Query = 'divTobeStudiedProblem';
        objPage.Update_ProblemIsSubmit_Click(strKeyId, stata);
      }
      /*
       * 研究成果修改；
       */
      function btnUpdategs_ResearchResult_Click(strKeyId: string) {
        ResearchTopic_QUDIExB.btn_Click(
          'UpdateRecordInTab_gs_ResearchResult',
          strKeyId,
          refDivLayout.value,
        );
      }
      /*
       * 研究成果删除操作
       */
      function btnDelgs_ResearchResult_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_ResearchResultCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.divName4Query = 'ResearchResultContent';
        objPage.btnDelRecordInTab_Click(strKeyId);
      }
      /*
       * 研究成果提交操作
       */
      function UpdateResearchResultIsSubmit_Click(strKeyId: string, stata: number) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new gs_ResearchResultCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        // objPage.UpdateIsSubmit_Click(strKeyId, stata);
      }
      //删除主题个人观点关系
      function btnDelViewPointRelaRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new ResearchTopicViewpointEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnDelViewPointRelaRecordInTab_Click(strKeyId);
      }
      //删除主题专家观点关系
      function btnDelExpertViewPointRelaRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        var objPage = new ResearchTopicViewpointEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnDelExpertViewPointRelaRecordInTab_Click(strKeyId);
      }
      //选择观点方法
      function btnOkInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        var objPage = new ResearchTopicViewpointEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        objPage.btnOkInTab_Click(strKeyId);
      }
      function btn_Click(strCommandName: string, strKeyId: any) {
        console.log(strKeyId);
        if (strCommandName == 'AddNewRecord') strCommandName = 'AddResearchTopic';
        let objData = strKeyId;
        switch (strCommandName) {
          case 'AddNewgs_PaperRela':
            Paper_Edit.EditObj = P_Paper_EditRef.value;
            // this.divEdit = P_Paper_EditRef.value;
            P_Paper_EditEx.GetPropValue = GetPropValue;
            break;
          case 'AddNewResearchResult':
            gs_ResearchResult_Edit.EditObj = gs_ResearchResult_EditRef.value;
            // this.divEdit = gs_ResearchResult_EditRef.value;
            gs_ResearchResult_EditEx.GetPropValue = GetPropValue;
            break;
          case 'Delgs_ResearchResult':
            btnDelgs_ResearchResult_Click(strKeyId);
            return;
          case 'Updategs_ResearchResult':
            gs_ResearchResult_Edit.EditObj = gs_ResearchResult_EditRef.value;
            // this.divEdit = gs_ResearchResult_EditRef.value;
            gs_ResearchResult_EditEx.GetPropValue = GetPropValue;
            btnUpdategs_ResearchResult_Click(strKeyId);
            return;
          case 'AddNewTobeStudiedProblem':
            gs_TobeStudiedProblem_Edit.EditObj = gs_TobeStudiedProblem_EditRef.value;
            // this.divEdit = gs_TobeStudiedProblem_EditRef.value;
            gs_TobeStudiedProblem_EditEx.GetPropValue = GetPropValue;
            break;
          case 'Update_ProblemIsSubmit':
            Update_ProblemIsSubmit_Click(objData.keyId, objData.stata);
            return;
          case 'Delgs_TobeStudiedProblem':
            btnDelgs_TobeStudiedProblem_Click(strKeyId);
            return;
          case 'Updategs_TobeStudiedProblem':
            gs_TobeStudiedProblem_Edit.EditObj = gs_TobeStudiedProblem_EditRef.value;
            // this.divEdit = gs_TobeStudiedProblem_EditRef.value;
            gs_TobeStudiedProblem_EditEx.GetPropValue = GetPropValue;
            btnUpdategs_TobeStudiedProblem_Click(strKeyId);
            return;
          case 'AddNewPaperReport':
            gs_PaperReport_Edit.EditObj = gs_PaperReport_EditRef.value;
            // this.divEdit = gs_PaperReport_EditRef.value;
            gs_PaperReport_EditEx.GetPropValue = GetPropValue;
            break;
          case 'UpdateIsSubmit':
            UpdateIsSubmit_Click(objData.keyId, objData.stata);
            return;
          case 'Delgs_PaperReport':
            btnDelgs_PaperReport_Click(strKeyId);
            return;
          case 'Updategs_PaperReport':
            gs_PaperReport_Edit.EditObj = gs_PaperReport_EditRef.value;
            // this.divEdit = gs_PaperReport_EditRef.value;
            gs_PaperReport_EditEx.GetPropValue = GetPropValue;
            btnUpdategs_PaperReport_Click(strKeyId);
            return;
          case 'AddNewMeetingMinutes':
            // topicId.value = objData.topicId;
            gs_MeetingMinutes_Edit.EditObj = gs_MeetingMinutes_EditRef.value;
            // this.divEdit = gs_MeetingMinutes_EditRef.value;
            gs_MeetingMinutes_EditEx.GetPropValue = GetPropValue;
            break;
          case 'Update_MeetingIsSubmit':
            Update_MeetingIsSubmit_Click(objData.keyId, objData.stata);
            return;
          case 'Delgs_MeetingMinutes':
            btnDelgs_MeetingMinutes_Click(strKeyId);
            return;
          case 'Updategs_MeetingMinutes':
            gs_MeetingMinutes_Edit.EditObj = gs_MeetingMinutes_EditRef.value;
            // this.divEdit = gs_MeetingMinutes_EditRef.value;
            gs_MeetingMinutes_EditEx.GetPropValue = GetPropValue;
            btnUpdategs_MeetingMinutes_Click(strKeyId);
            return;
          case 'OkUserColor':
            btnOkUserColor_Click(objData.userColor, objData.userId);
            return;
          case 'ShowUserColor':
            ShowUserColor();
            return;
          case 'HideUserColor':
            HideUserColor();
            return;
          case 'UpdateUserRela':
            btnUpdateUserRelaInTab_Click(objData.topicId, objData.userId, objData.roleId);
            return;
          case 'DelUserRela':
            // const objData = { topicId: strTopicId, userId: strTopicUser };
            btnDelUserRelaInTab_Click(objData.topicId, objData.userId);
            return;
          case 'UpdSyssocial':
          case 'UpdSysskill':
          case 'UpdObjective':
          case 'UpdConcept':
          case 'UpdViewPoint':
            // btnUpdViewPoint_Click(strKeyId, '');
            topicId.value = objData.topicId;
            PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
            // this.divEdit = PaperSubViewpoint_EditRef.value;
            PaperSubViewpoint_EditEx.GetPropValue = GetPropValue;
            break;
          case 'ClearClassification':
            btnClearClassification_Click(objData.classificationId);
            return;
          case 'Classification':
            btnClassification_Click(
              objData.classificationId,
              objData.gsKnowledgeTypeId,
              objData.classificationName,
            );
            return;
          case 'Delgs_VpClassification':
            btnDelgs_VpClassification_Click(objData);
            return;
          case 'AddNewClassification':
          case 'UpdateRecordInTab_gs_VpClassification':
          case 'Updategs_VpClassification':
            gs_VpClassification_Edit.EditObj = gs_VpClassification_EditRef;
            break;
          case 'GetAllFunctionMethod':
            break;
          case 'AddClassificationRecordInTab':
            btnAddClassificationRecordInTab_Click(strKeyId);
            return;
          case 'UpdateClassificationRecordInTab':
            btnUpdateClassificationRecordInTab_Click(
              objData.subViewpointId,
              objData.strClassificationId,
            );
            return;
          case 'SelectResearchTopic':
            visitedTabs.value = '';
            btnSelectResearchTopic(
              objData.topicId,
              objData.idCurrEduCls,
              objData.topicName,
              objData.eduClsTypeId,
            );
            return;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecord':
          case 'AddResearchTopic':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            ResearchTopic_QUDIExB.EditObj = ResearchTopic_EditRef.value;
            ResearchTopic_Edit.EditObj = ResearchTopic_EditRef.value;
            break;
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          case 'AddRelaUsers':
            ResearchTopic_QUDIExB.EditRef_UserLst = UsersLst_EditRef;
            UsersLstSel.EditObj = UsersLst_EditRef.value;
            console.log('UsersLstSel.EditRef:', UsersLstSel.EditRef);
            break;
          case 'Addgs_TeacherTask':
            // ResearchTopic_QUDIExB.EditRef_UserLst = UsersLst_EditRef;
            gs_TeacherTask_Edit.EditObj = gs_TeacherTask_EditRef.value;
            console.log('gs_TeacherTask_Edit.EditObj:', gs_TeacherTask_Edit.EditObj);
            break;
          case 'Updategs_TeacherTask':
            gs_TeacherTask_Edit.EditObj = gs_TeacherTask_EditRef.value;
            console.log('gs_TeacherTask_Edit.EditRef:', gs_TeacherTask_Edit.EditObj);
            break;
          case 'AddResearchPlan':
            gs_ResearchPlan_Edit.EditObj = gs_ResearchPlan_EditRef.value;
            console.log('gs_ResearchPlan_Edit.EditRef:', gs_ResearchPlan_Edit.EditObj);
            break;
          case 'UpdResearchPlan':
            gs_ResearchPlan_Edit.EditObj = gs_ResearchPlan_EditRef.value;
            console.log('gs_ResearchPlan_Edit.EditRef:', gs_ResearchPlan_Edit.EditObj);
            break;
          case 'Addgs_ReflectLog':
            gs_ReflectLog_Edit.EditObj = gs_ReflectLog_EditRef.value;
            console.log('gs_ReflectLog_Edit.EditRef:', gs_ReflectLog_Edit.EditObj);
            break;
          case 'Updgs_ReflectLog':
          case 'Updategs_ReflectLog':
            gs_ReflectLog_Edit.EditObj = gs_ReflectLog_EditRef.value;
            console.log('gs_ReflectLog_Edit.EditRef:', gs_ReflectLog_Edit.EditObj);
            break;

          default:
            break;
        }
        ResearchTopic_QUDIExB.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      /**子观点_选择论文 */
      function SelectPaper() {
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        const strPaperId = paperId_Sel.value;
        const divLayout = refDivLayout.value;
        const div_SubViewpointList = GetDivObjInDivObj(divLayout, 'div_SubViewpointList');
        const objPage = new Public_PaperSubViewpoint(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;

        Public_PaperSubViewpoint.GetPropValue = GetPropValue;

        objPage.SelectPaperForViewpoint(divLayout, strTopicId, strPaperId);
      }
      return {
        isShowHead,
        activeTabId,
        tabs,
        refDivLayout,
        editClassificationRef,
        editUserRolorRef,
        Login_EditRef,
        UsersLst_EditRef,
        subViewpointId_Edit,

        gs_TeacherTask_EditRef,
        gs_ResearchPlan_EditRef,
        gs_ReflectLog_EditRef,

        ResearchTopic_EditRef,
        gs_VpClassification_EditRef,
        btn_Click,
        getUser,
        idCurrEduCls,
        UserName,
        ResearchTopicList,
        // treeData,
        // selectNodeById,
        selectedNode,
        // treeRef,
        topicId,
        paperId,
        paperId_Sel,
        visitedTabs,
        TopicPaper_SocialRef,
        paperId_Social,
        dialogVisibleClassification,
        PaperSubViewpoint_EditRef,
        gs_MeetingMinutes_EditRef,
        gs_PaperReport_EditRef,
        gs_TobeStudiedProblem_EditRef,
        gs_ResearchResult_EditRef,
        RTPaperRelaListInRef,
        P_Paper_EditRef,
        dialogWidth,
        showDialogClassification,
        handleSave,
        hideDialogClassification,
        classificationId,
        classificationId_Edit,
        dialogVisibleUserRolor,
        // PaperSubViewpoint_EditRef,
        showDialogUserRolor,
        hideDialogUserRolor,
        SelectPaper,
      };
    },
    methods: {
      // 方法定义
      setEvent4Tree() {
        const treeElements = document.querySelectorAll('.tree li:has(ul)');
        treeElements.forEach((element) => {
          element.classList.add('parent_li');
          const spanElement = element.querySelector(' > span');
          if (spanElement) {
            spanElement.setAttribute('title', 'Collapse this branch');
            spanElement.addEventListener('click', function (e: any) {
              const ulElement = spanElement.nextElementSibling as HTMLElement;
              if (ulElement.style.display === 'none') {
                ulElement.style.display = 'block';
                spanElement.classList.remove('icon-plus-sign');
                spanElement.classList.add('icon-minus-sign');
              } else {
                ulElement.style.display = 'none';
                spanElement.classList.remove('icon-minus-sign');
                spanElement.classList.add('icon-plus-sign');
              }
              e.stopPropagation();
            });
          }
        });
      },
      async NodeClick(data: any) {
        // if (data.type != 'FunctionName') return;
        let strMsg;
        // let strParentIdLst;
        let strIdCurrEduCls;
        let strTopicId;
        switch (data.type) {
          case 'ResearchTopic':
            // alert(`CodeType:${data.id}`);
            strIdCurrEduCls = data.parentId.replace('|', '');
            strTopicId = data.id;
            ResearchTopic_QUDIEx_btnSelectResearchTopic(
              strTopicId,
              strIdCurrEduCls,
              this.refDivLayout,
            );
            break;
          case 'CurrEduCls':
            // alert(`Function4GeneCode:${data.id}`);
            // strParentIdLst = data.parentId;
            // GeneTabCodeEx.Function4GeneCode_Click(
            //   strTabId,
            //   strFuncId4GC,
            //   strCodeTypeId,
            //   intApplicationTypeId,
            // );
            break;
          default:
            strMsg = `数据类型:${data.type}在switch中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        // console.log(strParentIdLst);
        // console.log('data:', data);
        // alert(`${data.type}:${data.id}`);
        // const strViewId = clsPrivateSessionStorage.viewId;
        // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
        // const arrRegionTypeId = await ViewInfoEx_GetRegionTypeIdLst(strViewId, strCmPrjId);
        // clsPrivateSessionStorage.regionTypeIdLst = arrRegionTypeId;
        // router.push({ name: 'account-editTabRelaInfo' });
      },
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        this.classificationId = '';
        // if (this.visitedTabs.indexOf(tabId) > -1) {
        //   return;
        // }
        // this.visitedTabs = this.visitedTabs + tabId;
        console.log('this.tabId:', tabId);
        ResearchTopic_QUDIExB.vuebtn_Click = this.btn_Click;
        ResearchTopic_QUDIExB.btn_Click('changeTab', this.activeTabId, this.refDivLayout);
      },

      /*
       * 查询记录 观点 列表
       */
      btnViewpointQuery_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        var objPage = new ResearchTopicViewpointEx(this.refDivLayout);
        objPage.btnViewpointQuery_Click();
      },
      //关闭观点列表
      closeOne_Click() {
        this.HideDialogTwo();
      },
      /*
       * 查询记录 概念列表  ResearchTopicConceptEx TS
       */
      btnConceptQuery_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        var objPage = new ResearchTopicConceptEx(this.refDivLayout);
        objPage.btnConceptQuery_Click();
      },
      closeSeven_Click() {
        this.HideDialogSeven();
      },
      /*
       * 查询记录 客观列表查询功能  ResearchTopicObjectiveEx TS
       */
      btnQueryObjective_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        var objPage = new ResearchTopicObjectiveEx(this.refDivLayout);
        objPage.btnQueryObjective_Click();
      },
      closeEight_Click() {
        this.HideDialogEight();
      },
      /*
      隐藏对话框
              */
      HideDialogEight() {
        // $('#divObjectiveList').modal('hide');
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        var objPage = new ResearchTopic_QUDIExB(this.refDivLayout);
        objPage.GetAllFunctionMethod(strTopicId);
      },
      //技能查询方法；
      btnQuerySysskill_Click() {
        var objPage = new ResearchTopicSysskillEx(this.refDivLayout);
        objPage.btnQuerySysskill_Click();
      },
      closeNine_Click() {
        this.HideDialogNine();
      },
      /*
      隐藏对话框

      */
      HideDialogNine() {
        // $('#divSysSkillList').modal('hide');
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        var objPage = new ResearchTopic_QUDIExB(this.refDivLayout);
        objPage.GetAllFunctionMethod(strTopicId);
      },
      //社会关系查询方法；
      btnQuerySysSocialRelations_Click() {
        var objPage = new ResearchTopicSysSocialRelaEx(this.refDivLayout);
        objPage.btnQuerySysSocialRelations_Click();
      },
      closeTen_Click() {
        this.HideDialogTen();
      },
      /*
       * 隐藏对话框
       */
      HideDialogTen() {
        // $('#divSysSocialRelationsList').modal('hide');
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        var objPage = new ResearchTopic_QUDIExB(this.refDivLayout);
        objPage.GetAllFunctionMethod(strTopicId);
      },
      //提交观点分类
      async SubmiClassification_Click() {
        const strSubViewpointId: number = Number(this.subViewpointId_Edit);
        const strClassificationId: number = this.classificationId_Edit;
        if (strClassificationId != 0) {
          gs_VpClassificationCRUDEx.vuebtn_Click = this.btn_Click;
          const objPage = new gs_VpClassificationCRUDEx(this.refDivLayout);
          if (
            (await objPage.SubmiClassification_Click(strSubViewpointId, strClassificationId)) ==
            true
          ) {
            this.HideDialogClassification();
          }
        } else {
          message.warning('请选择分类！');
        }
      },
      /*
       * 隐藏对话框
       */
      HideDialogTwo() {
        // $('#divViewpointList').modal('hide');
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        var objPage = new ResearchTopic_QUDIExB(this.refDivLayout);
        objPage.GetAllFunctionMethod(strTopicId);
      },
      /*
       * 隐藏对话框
       */
      HideDialogSeven() {
        // $('#divConceptList').modal('hide');
        const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        var objPage = new ResearchTopic_QUDIExB(this.refDivLayout);
        objPage.GetAllFunctionMethod(strTopicId);
      },
      //各个观点调整分类

      /*
       * 隐藏对话框
       */
      HideDialogClassification() {
        // $('#editClassification').modal('hide');
        // this.dialogVisibleClassification = false;
        this.hideDialogClassification();
      },
    },
  });
</script>
<style scoped>
  .div_List {
    font-size: 15px;
    overflow: auto;
    height: 700px;
  }
  .div_DataList_Local {
    font-size: 15px;
    overflow: auto;
    height: 600px;
    width: 100%;
  }
  .divFunction_Local {
    height: 60px;
    float: right;
    margin-right: 0px;
    width: 100%;
  }
  .divTree_Local {
    height: 660px;
    border: solid 1px #fff;
    /*margin: 10px;*/
    /*bottom: 5%;*/
    z-index: 999;
    background: whitesmoke;
    float: left;
  }
  .divContent_Local {
    height: 660px;
    background-color: #fff;
    float: right;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: red;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
  }
  .TopicRole {
    width: 100%;
    border-radius: 10px;
    background-color: white;
  }
  .TopicRole ul {
    margin-top: 5px;
    margin-left: 5px;
    overflow: hidden;
    width: 100%;
    list-style: none;
    padding: 0;
  }
  .TopicRole li {
    text-align: left;
    float: left;
    width: 45%;
    margin: 5px;
  }
  .tree {
    min-height: 20px;
    padding: 19px;
    margin-bottom: 20px;
    background-color: #fbfbfb;
    border: 1px solid #999;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  }
  .tree li {
    list-style-type: none;
    margin: 0;
    padding: 10px 5px 0 5px;
    position: relative;
  }
  .tree li::before,
  .tree li::after {
    content: '';
    left: -20px;
    position: absolute;
    right: auto;
  }
  .tree li::before {
    border-left: 1px solid #999;
    bottom: 50px;
    height: 100%;
    top: 0;
    width: 1px;
  }
  .tree li::after {
    border-top: 1px solid #999;
    height: 20px;
    top: 25px;
    width: 25px;
  }
  .tree li span {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border: 1px solid #999;
    border-radius: 5px;
    display: inline-block;
    padding: 3px 8px;
    text-decoration: none;
  }
  .tree li.parent_li > span {
    cursor: pointer;
  }
  .tree > ul > li::before,
  .tree > ul > li::after {
    border: 0;
  }
  .tree li:last-child::before {
    height: 30px;
  }
  .tree li.parent_li > span:hover,
  .tree li.parent_li > span:hover + ul li span {
    background: #eee;
    border: 1px solid #94a0b4;
    color: #000;
  }
  .a_subselected {
    color: #ffffff;
    background-color: cornflowerblue;
    font-size: 15px;
    font-weight: 200;
    text-align: left;
  }
  .a_subnoselected {
    color: dodgerblue;
    background-color: white;
    font-size: 15px;
    text-align: left;
  }
  .a_parentselected {
    color: dodgerblue;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  .span_subselected {
    color: #ffffff;
    background-color: cornflowerblue;
    font-size: 15px;
    font-weight: 200;
    text-align: left;
  }
  .span_parentselected {
    color: darkcyan;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }
  .span_subnoselected {
    color: darkcyan;
    background-color: white;
    font-size: 15px;
    text-align: left;
  }
  /*.li_parentselected {
color: #FFFFFF;
background-color: cornflowerblue;*/ /*: #0066FF;*/
  /*font-size: 15px;
text-align: left;
}*/
  /* .li_subselected {
color: white;
background-color: cornflowerblue;
font-size: 15px;
text-align: left;
  } */
  /* .li_subnoselected {
color: blue;
background-color: white;
font-size: 15px;
text-align: left;
  } */
  .icon-plus-sign {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('/src/assets/images/ToDown.png') left 0px no-repeat;
  }
  .icon-minus-sign {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url('/src/assets/images/ToRight1.png') left 0px no-repeat;
  }
  /* 完全可以自己建一个Css文件，将他们考入，引用。 */
  /* .tree li::before,
  .tree li::after {
  }
  .tree li::before {
  }
  .tree li::after {
  } */
  .TNStyle1 {
    color: red;
    font-size: 15px;
  }
  .TNStyle1 table {
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }
  .TNStyle1 table td {
    margin: 1px;
    padding: 2px;
    color: #ffffff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }
  .TNStyle1 table td a {
    color: #3366cc;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }
  .TNStyle1 div table {
    color: #3366ff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
  }
  .TNStyle1 div table td {
    margin: 1px;
    color: #3366ff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div table td a {
    margin: 1px;
    color: #0099cc;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div table {
    color: #ffffff;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div table td {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div table td a {
    margin: 1px;
    color: #00ccff;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div table td a:visited,
  a:active {
    color: #005eac;
  }
  .TNStyle1 div div table td a:hover {
    color: #ff5500;
  }
  .TNStyle1 div div div table {
    color: #ffffff;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div div table td {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div div table td a {
    margin: 1px;
    color: #006666;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    text-align: left;
  }
  .TNStyle1 div div div table td a:visited,
  a:active {
    color: #005eac;
  }
  .TNStyle1 div div div table td a:hover {
    color: #ff5500;
  }
  .selectedNode {
    color: #ffffff;
    background-color: #0066ff;
    font-size: 15px;
    text-align: left;
  }
  .rootNode {
    color: #003366;
    background-color: #ffffff;
    font-size: 16px;
    font-weight: bold;
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
  .divTree2 {
    /* position: fixed; */
    position: relative;
    /* top: 45px; */
    top: 5px;
    left: 10px;
    /* bottom: 5%; */
    z-index: 999;
  }
</style>
<!-- 

<script type="text/javascript" src="~/textboxio/textboxio.js"></script>
<script>
  layui.use(['laydate', 'form'], function () {
var laydate = layui.laydate;
//执行一个laydate实例
    laydate.render({
  elem: '#txtProblemDate_q', //指定元素
    });
//执行一个laydate实例
    laydate.render({
  elem: '#txtUpdDate_q', //指定元素
    });
  });
</script>
}
<script>
  /*
      按钮单击,用于调用Js函数中btn_Click
              */
  function btn_Click(strCommandName, strKeyId) {

  viewinfo.ResearchTopic_QUDIEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);

  }
  function stripscript(s:string) {
var pattern = new RegExp(
  "[`~!#$^&*()=|{}':;',\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]",
);
var rs = '';
for (var i = 0; i < s.length; i++) {
  rs = rs + s.substring(i, 1).replace(pattern, '');
}
return rs;
  }
  //通过返回的新的数据循环读取span 存放数组
  function GetSpanList() {
var ColorCode = $('#hidColorCode').val();
var strUserId = $('#hidUserId').val();
var array = new Array(); //声明一个新的数组
    $('#inpRight span').each(function (index, item) {
  var val = $(this).html();
  // alert(val);
  array.push($(this).html()); //往数组中存入值
    });
//循环数组数据，比对含有标签的修改数据；如果找到相同地方，取出然后替换增加背景标签插入到修改段落中；
    $.each(array, function (index, value) {
  var txt = $('#txtMeetingContent').val();
  console.log(txt);
  var strResult = stripscript(value);
  var tt = txt.replace(
    new RegExp(strResult, 'g'),
    '<span style="color:' + ColorCode + ';">' + strResult + '</span>',
  );
  $('#txtMeetingContent').val(tt);
});
  }
  function GetSpanList2() {
var ColorCode = $('#hidColorCode').val();
var strUserId = $('#hidUserId').val();
var array = new Array(); //声明一个新的数组
    $('#inpRight span').each(function (index, item) {
  var val = $(this).html();
  array.push($(this).html()); //往数组中存入值
    });
//循环数组数据，比对含有标签的修改数据；如果找到相同地方，取出然后替换增加背景标签插入到修改段落中；
    $.each(array, function (index, value) {
  var txt = $('#txtProblemContent').val();
  console.log(txt);
  var strResult = stripscript(value);
  var tt = txt.replace(
    new RegExp(strResult, 'g'),
    '<span style="color:' + ColorCode + ';">' + strResult + '</span>',
  );
  $('#txtProblemContent').val(tt);
});
  }
  //所有用户自定义的JS函数建议都放在这里
  function startCompare() {
var a = $.trim($('#inpLeft').val());
var stra = a.replace(/<[^<>]+>/g, '');
var stra1 = a.replace(/<\/?.+?>/g, '');
//var b = $.trim($("#inpRight").val());
var b = $.trim($('#txtMeetingContent').val());
var strb = b.replace(/<[^<>]+>/g, '');
var strb1 = b.replace(/<\/?.+?>/g, '');
var result = getHighLightDifferent(stra, strb);
//getHighLightDifferent("1000", "10012");
$('#show1').html(result[0]); //老的数据
    //$("#show2").html(result[1]);//返回新的数据
    $('#inpRight').html(result[1]); //返回新的数据存放div中

//把返回的比对后的不同高亮数据循环得到存入数组
    //   GetSpanList();
return false;
  }
  function startCompare2() {
var a = $.trim($('#inpLeft').val());
var stra = a.replace(/<[^<>]+>/g, '');
var stra1 = a.replace(/<\/?.+?>/g, '');
var b = $.trim($('#txtProblemContent').val());
var strb = b.replace(/<[^<>]+>/g, '');
var strb1 = b.replace(/<\/?.+?>/g, '');
var result = getHighLightDifferent(stra, strb);
$('#show1').html(result[0]); //老的数据
    $('#inpRight').html(result[1]); //返回新的数据存放div中

return false;
  }
  var flag = 1;
  function getHighLightDifferent(a:any, b:any): {
var temp = getDiffArray(a, b);
var a1 = getHighLight(a, temp[0]);

var a2 = getHighLight(b, temp[1]);
return new Array(a1, a2);
  }
  function getHighLight(source:string, temp:string) {
var ColorCode = $('#hidColorCode').val();
var strUserId = $('#hidUserId').val();
var result = new StringBuffer();
var sourceChars = source.split('');
var tempChars = temp.split('');
var flag = false;
for (var i = 0; i < sourceChars.length; i++) {
  if (tempChars[i] != ' ') {
    if (i == 0) {
      result.append("<span style='color:" + ColorCode + "' name='" + strUserId + "'>");
      result.append(sourceChars[i]);
    } else if (flag) {
      result.append(sourceChars[i]);
    } else {
      result.append("<span style='color:" + ColorCode + "' name='" + strUserId + "'>");
      result.append(sourceChars[i]);
    }
    flag = true;
    if (i == sourceChars.length - 1) {
      result.append('</span>');
    }
  } else if (flag == true) {
    result.append('</span>');
    result.append(sourceChars[i]);
    flag = false;
  } else {
    result.append(sourceChars[i]);
  }
}
return result.toString();
  }
  function getDiffArray(a:any, b:any): {
var result = new Array();
//选取长度较小的字符串用来穷举子串
    if (a.length < b.length) {
  var start = 0;
  var end = a.length;
  result = getDiff(a, b, start, end);
} else {
  var start = 0;
  var end = b.length;
  result = getDiff(b, a, 0, b.length);
  result = new Array(result[1], result[0]);
}
return result;
  }
  //将a的指定部分与b进行比较生成比对结果
  function getDiff(a, b, start, end) {
var result = new Array(a, b);
if (result == undefined) return result;
if (result.length == 0) return result;
var len = result[0].length;
while (len > 0) {
  for (var i = start; i < end - len + 1; i++) {
    var sub = result[0].substring(i, i + len);
    var idx = -1;
    if ((idx = result[1].indexOf(sub)) != -1) {
      result[0] = setEmpty(result[0], i, i + len);
      result[1] = setEmpty(result[1], idx, idx + len);
      if (i > 0) {
        //递归获取空白区域左边差异
            result = getDiff(result[0], result[1], start, i);
      }
      if (i + len < end) {
        //递归获取空白区域右边差异
            result = getDiff(result[0], result[1], i + len, end);
      }
      len = 0; //退出while循环
          break;
    }
  }
  len = parseInt(len / 2);
}
return result;
  }
  //将字符串s指定的区域设置成空格
  function setEmpty(s, start, end) {
var array = s.split('');
for (var i = start; i < end; i++) {
  array[i] = ' ';
}
return array.join('');
  }
  function StringBuffer() {
this.__strings__ = [];
  }
  StringBuffer.prototype.append = function (str) {
this.__strings__.push(str);
return this;
  };
  //格式化字符串
  StringBuffer.prototype.appendFormat = function (str) {
for (var i = 1; i < arguments.length; i++) {
  var parent = '\\{' + (i - 1) + '\\}';
  var reg = new RegExp(parent, 'g');
  str = str.replace(reg, arguments[i]);
}

this.__strings__.push(str);
return this;
  };
  StringBuffer.prototype.toString = function () {
return this.__strings__.join('');
  };
  StringBuffer.prototype.clear = function () {
this.__strings__ = [];
  };
  StringBuffer.prototype.size = (function () {
return this.__strings__.length;
  })(function ($) {
'use strict';
$.fn.extend({
  insertAtCaret: function (myValue) {
    var $t = $(this)[0];
    if (document.selection) {
      this.focus();
      var sel = document.selection.createRange();
      sel.text = myValue;
      this.focus();
    } else if ($t.selectionStart || $t.selectionStart == '0') {
      var startPos = $t.selectionStart;
      var endPos = $t.selectionEnd;
      var scrollTop = $t.scrollTop;
      $t.value =
        $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
      this.focus();
      $t.selectionStart = startPos + myValue.length;
      $t.selectionEnd = startPos + myValue.length;
      $t.scrollTop = scrollTop;
    } else {
      this.value += myValue;
      this.focus();
    }
  },
});
  })(jQuery);
  //把内容写入到编辑器内
  function setTextboxio() {
var editors1 = $('#txtMeetingContent').val();
var editors = textboxio.get('#txtMeetingContent');
var editor = editors[0];
if (editor != null) {
  editor.content.set(editors1);
}
  }
  //从编辑器内获取内容到控件
  function getTextboxio() {
var editors = textboxio.get('#txtMeetingContent');
var editor = editors[0];
if (editor != null) {
  $('#txtMeetingContent').val(editor.content.get());
}
  }
  //把内容写入到编辑器内
  function setTextboxio2() {
var editors1 = $('#txtProblemContent').val();
var editors = textboxio.get('#txtProblemContent');
var editor = editors[0];
if (editor != null) {
  editor.content.set(editors1);
}
  }
  //从编辑器内获取内容到控件
  function getTextboxio2() {
var editors = textboxio.get('#txtProblemContent');
var editor = editors[0];
if (editor != null) {
  $('#txtProblemContent').val(editor.content.get());
}
  }
  //所有用户自定义的JS函数建议都放在这里
  function instantiateTextbox() {
textboxio.replaceAll('textarea', {
  paste: {
    style: 'clean',
  },
  css: {
    stylesheets: ['../textboxio/example.css'],
  },
});
  }
  var flag = false;
  function main_Click(strKey:string) {
//var num = $('.main').index(this);
if (flag == true) {
  //$('.main').eq(num).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
  //$('.submenu').eq(num).show(100);
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
  }

  };
  /***获取所有tab的绑定信息***/
  function GetAllFunctionMethod() {
liViewsClassificationClick();

  var objPage = new researchtopic.ResearchTopic_QUDIEx();
  objPage.GetAllFunctionMethod();

  }
  
  /*
    隐藏对话框
            */
  function HideDialogPaperSubViewpoint() {
var strPaperId = $('#hidTopicPaperId').val();
var strTopicId = $('#hidTopicRelaId').val();
xadminOpen(
  '论文子观点',
  '../GraduateEduEx/PaperSubViewpoint_pdf?Type=01&TopicId=' +
    strTopicId +
    '&PaperId=' +
    strPaperId,
);


  $('#divTopicPaperUserList').modal('hide');

  }
  /**************************************************论文子观点相关***************************************** */
  //进入子观点
  function btnPaperSubViewpoint_Click(strKeyId: string) {

  var objPage = new researchtopic.Public_PaperSubViewpoint();
  objPage.btnPaperSubViewpoint_Click(strKeyId);

  }
  //刷新本页面子观点
  function Refresh_vPaperSubViewpoint() {

  var objPage = new researchtopic.Public_PaperSubViewpoint();
  objPage.BindListPaperSubViewpoint();

  }
  function xadminOpen(strTitle, strUrl) {
xadmin.open(strTitle, strUrl, '', '', true);
  }
  function xadminOpen_Width_Height(strTitle, strUrl, strWidth, strHeight) {
xadmin.open(strTitle, strUrl, strWidth, strHeight, true);
  }
  ///添加客观事实
  function btnAddObjectiveFactClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id客观事实
      var strObjectiveType = '01';
  $('#hidObjectiveTypeId').val(strObjectiveType);
  xadminOpen_Width_Height(
    '添加客观事实',
    '../GraduateEduPublicPage/AddObjectiveFact?ObjectiveTypeId=01&TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  ///添加客观数据按钮
  function btnAddBasisObjectiveClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id客观数据
      var strObjectiveType = '02';
  $('#hidObjectiveTypeId').val(strObjectiveType);
  xadminOpen_Width_Height(
    '添加客观数据',
    '../GraduateEduPublicPage/AddObjectiveFact?ObjectiveTypeId=02&TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  //修改客观
  function btnUpdObjective_ClickBak(strTopicObjectiveId) {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id客观数据
      var strObjectiveType = '02';
  $('#hidObjectiveTypeId').val(strObjectiveType);
  xadminOpen_Width_Height(
    '修改客观事实/数据',
    '../GraduateEduPublicPage/AddObjectiveFact?ObjectiveTypeId=02&TopicId=' +
      strKeyId +
      '&TopicObjectiveId=' +
      strTopicObjectiveId,
    1200,
    800,
  );
}
  }
  //确定选择客观数据
  function btnOkObjectiveInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  var objPage = new researchtopic.ResearchTopicObjectiveEx();
  objPage.btnOkObjectiveInTab_Click(strKeyId);

  }
  //添加主题概念
  function btnAddNewConceptRela_ClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen_Width_Height(
    '添加相关概念',
    '../GraduateEduPublicPage/AddConcept?TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  //修改主题概念
  function btnUpdConcept_ClickBak(strConceptId) {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen_Width_Height(
    '修改相关概念',
    '../GraduateEduPublicPage/AddConcept?TopicId=' + strKeyId + '&ConceptId=' + strConceptId,
    1200,
    800,
  );
}
  }
  /***************************************************添加主题用户关系*************************************************/
  //添加主题用户关系
  function btnAddUserRelaInTab_ClickBak() {

  var strKeyId = $('#hidTopicRelaId').val();
  if (strKeyId == '') {
    alert('请选择需要添加关系的主题！');
    return;
  } else {
    //存放选择id
        //  $('#hidTopicRelaId').val(strKeyId);
    //ShowDialogFour();
    //调用用户列表绑定；
        var objPage = new researchtopic.ResearchTopic_QUDIEx();
    objPage.btnAddUserRela_Click();
  }

  }
  ///添加个人观点
  function btnAddViewPointRela_ClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id
      var strUserTypeId = '01';
  $('#hidUserTypeId').val(strUserTypeId);
  console.error('pyf-btnAddViewPointRela_Click');
  xadminOpen_Width_Height(
    '添加个人观点',
    '../GraduateEduPublicPage/AddViewpoint?UserTypeId=01&TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  ///推荐个人观点
  function btnRecommendViewPoint_ClickBak(strViewpointId, strUserTypeId) {
var strTopicId = $('#hidTopicRelaId').val();

if (strTopicId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id
      //var strUserTypeId = "01";
  $('#hidUserTypeId').val(strUserTypeId);
  xadminOpen_Width_Height(
    '推荐观点',
    '../GraduateEduPublicPage/AddViewpoint?UserTypeId=' +
      strUserTypeId +
      '&TopicId=' +
      strTopicId +
      '&ViewpointId=' +
      strViewpointId +
      '&IsRecommend=1',
    1200,
    800,
  );
}
  }
  //添加专家观点
  function btnAddExpertViewPointRel_ClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  //存放选择id
      var strUserTypeId = '02';
  $('#hidUserTypeId').val(strUserTypeId);
  xadminOpen_Width_Height(
    '添加专家观点',
    '../GraduateEduPublicPage/AddViewpoint?UserTypeId=02&TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  //2.观点列表


  /*********************************************************************************/
  //选择主题论文关系
  function btnAddPaperRelaRecordInTab_ClickBak() {

  var strKeyId = $('#hidTopicRelaId').val();
  if (strKeyId == '') {
    alert('请选择需要添加关系的主题！');
    return;
  } else {
    //存放选择id
        //  $('#hidTopicRelaId').val(strKeyId);
    var strType = '01'; //代表没条件的查询
        ShowDialogThree();
    //调用
        var objPage = new researchtopic.RTPaperRela_QUDIEx();
    objPage.btnAddPaperRela_Click(strType);
  }

  }
  //选择研究结果
  function btnTwoAddPaperRelaRecordInTab_ClickBak() {

  var strKeyId = $('#hidTopicRelaId').val();
  if (strKeyId == '') {
    alert('请选择需要添加关系的主题！');
    return;
  } else {
    //存放选择id
        //  $('#hidTopicRelaId').val(strKeyId);
    var strType = '02'; //代表小组内的成员查看
        ShowDialogThree();
    //调用
        var objPage = new researchtopic.RTPaperRela_QUDIEx();
    objPage.btnAddPaperRela_Click(strType);
  }

  }
  //答疑添加论文
  function btnThreeAddPaperRelaRecordInTab_ClickBak() {

  var strKeyId = $('#hidTopicRelaId').val();
  if (strKeyId == '') {
    alert('请选择需要添加关系的主题！');
    return;
  } else {
    //存放选择id
        //  $('#hidTopicRelaId').val(strKeyId);
    var strType = '03'; //答疑添加论文
        ShowDialogThree();
    //调用
        var objPage = new researchtopic.RTPaperRela_QUDIEx();
    objPage.btnAddPaperRela_Click(strType);
  }

  }
  //删除主题论文关系
  function btnDelPaperRelaRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtpaperrela.RTPaperRela_QUDIEx();
  objPage.btnDelPaperRelaRecordInTab_Click(strKeyId);

  }
  ///添加论文观点
  function btnAddNewPaperViewpointRela_ClickBak(strPaperId) {
var strTopicId = $('#hidTopicRelaId').val();
if (strTopicId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen(
    '添加论文观点',
    '../GraduateEduPaper/OriginalPaperAddideas?PaperId=' +
      strPaperId +
      '&PaperLogTypeId=03&TopicId=' +
      strTopicId,
  );
}
  }
  /***************************************************研究主题维护**************************************************/
  function btnQueryViewpointRela_Click() {

  var strKeyId = commonfunc.GetFirstCheckedKeyId('divList');
  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  window.location.href = '../GraduateEduTopic/ResearchTopicAdd?TopicRelaId=' + strKeyId;

  }
  //修改主题权限
  function SubmitTopicRole_ClickBak(checkbox, keyId) {
$('#hidTopicRoleId').val(keyId);
if (checkbox.checked == true) {
  layui_Alert(1, '显示！');
  $('#hidMenuIsHide').val(checkbox.checked);
} else {
  layui_Alert(1, '隐藏！');
  $('#hidMenuIsHide').val(checkbox.checked);
}


  var objPage = new TopicRole.gs_TopicRoleCRUDEx();
  objPage.SubmitTopicRole_Click();

  }
  //主题菜单是否显示
  function TopicMenuIsHide() {

  var objPage = new TopicRole.gs_TopicRoleCRUDEx();
  objPage.TopicMenuIsHide();

  }
  /*
         提交编辑
        */
  function mySubmit(pstrOp: string) {
//先验证界面数据
    if ($('#txtTopicName').val() == '') {
  message.success('栏目不能为空!', {
    icon: 3,
    time: 1000,
  });
} else if ($('#txtTopicName').val().length > 100) {
  message.success('栏目不能超过100!', {
    icon: 3,
    time: 1000,
  });
} else if ($('#txtTopicContent').val() == '') {
  message.success('主题内容不能为空!', {
    icon: 3,
    time: 1000,
  });
} else if ($('#ddlShareId').val() == '' || $('#ddlShareId').val() == '0') {
  message.success('分享不能为空!', {
    icon: 3,
    time: 1000,
  });
} else {
  //    alert("提交" + strOp);
  
    var objPage = new researchtopic.ResearchTopic_QUDIEx();
    objPage.btnOKUpd_Click();
  
  //防止重复提交
      $('#btnOKUpd').attr('disabled', true);
  $('#divLoading').show();
}
  }
  //3.论文列表
  /*
    添加主题论文关系记录
        
    */
  function btnAddPaperRela_Click() {

  var strKeyId = commonfunc.GetFirstCheckedKeyId('divList');
  if (strKeyId == '') {
    alert('请选择需要添加关系的记录！');
    return;
  }
  //存放选择id
      $('#hidTopicRelaId').val(strKeyId);
  ShowDialogThree();
  //调用专业方向绑定；
      var objPage = new researchtopic.RTPaperRela_QUDIEx();
  objPage.btnAddPaperRela_Click();

  }
  /*
        确定选择论文数据
           
       */
  function btnPaperRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  //ShowDialogOne();
  var objPage = new researchtopic.RTPaperRela_QUDIEx();
  objPage.btnPaperRecordInTab_Click(strKeyId);

  }
  /*
      查询记录
         
     */
  function btnPaperQuery_Click() {

  $('#Text1').val('进入函数：btnPaperQuery_Click');
  var objPage = new paper.RTPaperRela_QUDIEx();
  objPage.btnPaperQuery_Click();

  }
  function closeTwo_Click() {
HideDialogThree();
  }
  //4.用户列表
  /*
    添加主题用户关系记录
        
    */
  function btnAddUserRela_Click() {

  var strKeyId = commonfunc.GetFirstCheckedKeyId('divList');
  if (strKeyId == '') {
    alert('请选择需要添加关系的记录！');
    return;
  }
  //存放选择id
      $('#hidTopicRelaId').val(strKeyId);
  ShowDialogFour();
  //调用用户列表绑定；
      var objPage = new researchtopic.ResearchTopic_QUDIEx();
  objPage.btnAddUserRela_Click();

  }
  /*
       确定选择用户数据
          
      */
  function btnUserRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  var objPage = new researchtopic.ResearchTopic_QUDIEx();
  objPage.btnUserRecordInTab_Click(strKeyId);

  }
  /*
     用户查询记录
        
    */
  function btnUserQuery_Click() {

  $('#Text1').val('进入函数：btnUserQuery_Click');
  var objPage = new paper.ResearchTopic_QUDIEx();
  objPage.btnUserQuery_Click();

  }


  ///////////////////////////////////////////////////////确定选择概念////////////////////////////////
  //选择概念方法
  function btnOkConceptInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  var objPage = new researchtopic.ResearchTopicConceptEx();
  objPage.btnOkConceptInTab_Click(strKeyId);

  }
  /*
     在数据表里删除记录的事件函数
        
    */
  function btnDelConceptRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtconceptrela.ResearchTopicConceptEx();
  objPage.btnDelConceptRecordInTab_Click(strKeyId);

  }
  /////////////////////////////////////////////////////主题客观关系

  
  //删除客观事实
  function btnDelObjectiveRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtconceptrela.ResearchTopicObjectiveEx();
  objPage.btnDelObjectiveRecordInTab_Click(strKeyId);

  }
  //删除客观数据
  function btnDelBasisObjectiveRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtconceptrela.ResearchTopicObjectiveEx();
  objPage.btnDelBasisObjectiveRecordInTab_Click(strKeyId);

  }
  //-----------------------------------------------------------------关于各个列表表头排序
  //用户表头排序
  function SortByUser(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopic_QUDIEx();
  objPage.SortByUser(strFldName);

  }
  //主题用户关系表头排序
  function SortByRTUser(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopic_QUDIEx();
  objPage.SortByRTUser(strFldName);

  }
  //论文表头排序
  function SortByPaper(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.RTPaperRela_QUDIEx();
  objPage.SortByPaper(strFldName);

  }
  //主题论文关系表头排序
  function SortByRTPaper(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.RTPaperRela_QUDIEx();
  objPage.SortByRTPaper(strFldName);

  }
  //个人观点 专家观点表头排序
  function SortByViewpoint(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicViewpointEx();
  objPage.SortByViewpoint(strFldName);

  }
  //主题个人观点关系 表头排序
  function SortByRTViewpoint(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicViewpointEx();
  objPage.SortByRTViewpoint(strFldName);

  }
  //主题专家观点 关系 表头排序
  function SortByRTExpertViewpoint(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicViewpointEx();
  objPage.SortByRTExpertViewpoint(strFldName);

  }
  //概念表头排序
  function SortByConcept(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicConceptEx();
  objPage.SortByConcept(strFldName);

  }
  //主题概念关系表头排序
  function SortByRTConcept(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicConceptEx();
  objPage.SortByRTConcept(strFldName);

  }
  //客观事实 数据表头排序
  function SortByObjectiveFact(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicObjectiveEx();
  objPage.SortByObjectiveFact(strFldName);

  }
  //主题客观事实关系 表头排序
  function SortByRTObjectiveFact(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicObjectiveEx();
  objPage.SortByRTObjectiveFact(strFldName);

  }
  //主题客观数据关系  表头排序
  function SortByRTObjectiveBasis(strFldName: string) {
console.log('按：' + strFldName + '排序');

  var objPage = new viewpoint.ResearchTopicObjectiveEx();
  objPage.SortByRTObjectiveBasis(strFldName);

  }
  
  /////////////////////////////////////////////////////////////////////tab页切换事件///////////////////////////////////////////////////////////
  
  /************************************************会议纪要****************************** */
  //会议纪要点击树菜单事件；
  function btnSelectMeetingMonth(strYear, strMonth) {
//先清除背景色
    $('.submenu li a').removeClass('selected');
//添加背景色
    $('#' + strYear + strMonth + ' a').addClass('selected');
//存储点击的id
    $('#hidYear').val(strYear);
$('#hidMonth').val(strMonth);
//点击后调整关系表数据方法；
    
  var objPage = new MeetingMinutes.gs_MeetingMinutesCRUDEx();
  objPage.Bind_MeetingMinutesList();

  }
  /************************************************论文汇报****************************** */
  //论文汇报点击树菜单事件；
  function btnSelectMonth(strYear, strMonth) {
//先清除背景色
    $('.submenu li a').removeClass('selected');
//添加背景色
    $('#' + strYear + strMonth + ' a').addClass('selected');
//存储点击的id
    $('#hidYear').val(strYear);
$('#hidMonth').val(strMonth);
//点击后调整关系表数据方法；
    
  var objPage = new PaperReport.gs_PaperReportCRUDEx();
  objPage.Bind_PaperReportList();

  }
  //下载方法
  function btnDownLoad_PaperReport_Click(filepath: string, filename: string) {
var aLink = document.createElement('a');
aLink.download = filename;
aLink.href = filepath;
document.body.appendChild(aLink);
aLink.click();
document.body.removeChild(aLink);
  }
  /****************************************************************************************** */
  /************************************************待研究问题****************************** */
  //添加 各观点分类
  function btnAddNewClassification_Click() {

  ViewsClassification.gs_VpClassificationCRUDEx.btn_Click('Create');

  }
  /****************************************************************************************** */
  /************************************************研究成果****************************** */
  //下载方法
  function btnDownLoad_ResearchResult_Click(filepath: string, filename: string) {
var aLink = document.createElement('a');
aLink.download = filename;
aLink.href = filepath;
document.body.appendChild(aLink);
aLink.click();
document.body.removeChild(aLink);
  }
  /****************************************************************************************** */
  
  //-------------------------------------------------------------------研究结果；
  
  //删除技能主题关系
  function btnDelSysskillRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtviewpointrela.ResearchTopicSysskillEx();
  objPage.btnDelSysskillRecordInTab_Click(strKeyId);

  }
  //确定选择技能方法
  function btnOkSysskillInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  var objPage = new researchtopic.ResearchTopicSysskillEx();
  objPage.btnOkSysskillInTab_Click(strKeyId);

  }
  ///添加技能数据按钮
  function btnAddSysskillClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen_Width_Height(
    '添加技能数据',
    '../GraduateEduPublicPage/AddSysskill?TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  ///修改技能
  function btnUpdSysskill_ClickBak(strSkillId) {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen_Width_Height(
    '修改技能',
    '../GraduateEduPublicPage/AddSysskill?TopicId=' + strKeyId + '&SkillId=' + strSkillId,
    1200,
    800,
  );
}
  }
  //-------------------------------------------------------------------社会关系；
  
  //删除社会关系
  function btnDelRTSysSocialRelaRecordInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new rtviewpointrela.ResearchTopicSysSocialRelaEx();
  objPage.btnDelRTSysSocialRelaRecordInTab_Click(strKeyId);

  }
  //确定选择社会关系方法
  function btnOkRTSysSocialRelaInTab_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要的记录！');
    return;
  }
  var objPage = new researchtopic.ResearchTopicSysSocialRelaEx();
  objPage.btnOkRTSysSocialRelaInTab_Click(strKeyId);

  }
  ///添加技能数据按钮
  function btnAddSysSocialRelaClickBak() {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen(
    '添加社会关系数据',
    '../GraduateEduPublicPage/AddSysSocialRelations?TopicId=' + strKeyId,
    1200,
    800,
  );
}
  }
  ///修改社会关系
  function btnUpdSyssocial_ClickBak(strSocialId) {
var strKeyId = $('#hidTopicRelaId').val();

if (strKeyId == '') {
  alert('请选择需要添加关系的主题！');
  return;
} else {
  xadminOpen_Width_Height(
    '修改社会关系',
    '../GraduateEduPublicPage/AddSysSocialRelations?TopicId=' +
      strKeyId +
      '&SocialId=' +
      strSocialId,
    1200,
    800,
  );
}
  }
  ///////////////////---------------------------------------------------------- 研究计划

  /*
     在数据表里修改记录
        
    */
  function btnUpdateResearchPlan_ClickBak(strPlanId) {
var strKeyId = $('#hidTopicRelaId').val();
if (strKeyId == '') {
  alert('请选择数据！');
  return;
}
xadminOpen_Width_Height(
  '修改研究计划',
  '../GraduateEduPublicPage/AddResearchPlan?TopicId=' + strKeyId + '&PlanId=' + strPlanId,
  1200,
  800,
);
//  });
  }
  
  /*
     教师任务布置 修改；
        
    */
  function btnUpdategs_TeacherTask_Click(mId: number) {
var strKeyId = $('#hidTopicRelaId').val();
var strIdCurrEduClsId =  clsPubLocate.idCurrEduCls;
if (strKeyId == '') {
  alert('请选择数据！');
  return;
}
xadminOpen_Width_Height(
  '修改任务',
  '../GraduateEduPublicPage/Addgs_TeacherTask?TopicId=' + strKeyId + '&mId=' + mId,
  1200,
  800,
);
  }
  /*
        在数据表里删除记录的事件函数
           
       */
  function btnDelResearchPlan_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new gs_researchplan.ResearchTopicPlanEx();
  objPage.btnDelResearchPlan_Click(strKeyId);

  }
  /*
     删除教师任务
         
     */
  function btnDelgs_TeacherTask_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new gs_researchplan.gs_TeacherTaskCRUDEx();
  objPage.divName4Query = 'li_ResearchPlan';
  objPage.btnDelgs_TeacherTask_Click(strKeyId);

  }
  /*
    反思删除操作
        
    */
  function btnDelgs_ReflectLog_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert(`请选择需要删除的记录！`);
    return;
  }
  var objPage = new gs_researchplan.gs_ReflectLogCRUDEx();
  objPage.btnDelRecordInTab_Click(strKeyId);

  }
  //研究计划提交
  function btnSubmitResearchPlan_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要提交的记录！');
    return;
  }
  //ShowDialog('Update');
  var objPage = new viewpoint.ResearchTopicPlanEx();
  objPage.btnSubmitResearchPlan_Click(strKeyId);

  }
  //小组写作论文 提交
  function btnIsSubmitPaper_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要提交的记录！');
    return;
  }
  //ShowDialog('Update');
  var objPage = new viewpoint.RTPaperRela_QUDIEx();
  objPage.btnIsSubmitPaper_Click(strKeyId);

  }
  //小组写作论文 公开
  function btnIsPublicPaper_Click(strKeyId: string) {

  if (strKeyId == '') {
    alert('请选择需要提交的记录！');
    return;
  }
  //ShowDialog('Update');
  var objPage = new viewpoint.RTPaperRela_QUDIEx();
  objPage.btnIsPublicPaper_Click(strKeyId);

  }
  /**************************************答疑相关事件***********************************/
  //自研论文
  function xadminopen(strFile) {
xadmin.open('小组论文答疑', strFile, '', '', true);
  }
  function xadminopen2(title, strFile, intWidth, intHeight) {
xadmin.open(title, strFile, intWidth, intHeight, true);
  }
  //跳转到主题PDF页面
  function btnTopicPdf_ClickBak() {
var strTopicId = $('#hidTopicRelaId').val();
var strIdCurrEduCls = clsPubLocate.idCurrEduCls;
var strUrl =
  '../InteractManage/Pdf_QA_Topic?idCurrEduCls=' + strIdCurrEduCls + '&TopicId=' + strTopicId;

xadminopen(strUrl);
  }
  //申请添加主题
  function btnApplyAddNewRecord_Click() {
xadminOpen('申请添加主题', '../GraduateEduTopic/ApplyTopic');
  }
  setInterval('Bind_ApplyTopicCount()', 300000); //指定300s刷新一次5分
  function Bind_ApplyTopicCount() {

  var objPage = new researchtopic.ResearchTopic_QUDIEx();
  objPage.Bind_ApplyTopicCount();

  }
  //其它主题
  function TopicList_Click() {
xadmin.open('主题查看', '../GraduateEduTopic/ResearchTopicList', '', '', true);
  }
  //参与答疑
  function btnParticipateQA_ClickBak(strKeyId: string) {

  var objPage = new researchtopic.RTPaperRela_QUDIEx();
  objPage.btnParticipateQA_Click(strKeyId);

  }

  }
  //信息提示
  function layui_Alert(iconKey, strMsg) {
message.success(strMsg, {
  icon: iconKey,
  time: 2000,
});
  }
</script> -->
