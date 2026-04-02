<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
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
              <li class="breadcrumb-item active" aria-current="page">主题查看</li>
              <li class="breadcrumb-item"
                ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
              ></li>
            </ol>
          </nav>
        </div>
        <div class="col-md-3">
          <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
            <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
        ></div>
      </div>
      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtKeyword_q"
                placeholder="各观点关键字"
                class="layui-input"
                style="width: 180px"
              />
            </td>

            <td>
              <select
                id="ddlIsTeaComment_q"
                name="ddlIsTeaComment_q"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option value="0">是否教师打分</option>
                <option value="01">是</option>
                <option value="02">否</option>
              </select>
            </td>
            <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <font-awesome-icon icon="search" />
              </button>
            </td>
            <td>
              <label
                id="lblAppraiseContent"
                name="lblAppraiseContent"
                class="col-form-label text-right"
                style="width: 50px"
              >
                字体：
              </label>
            </td>

            <td>
              <button
                id="btnFontSizeJian"
                class="btn btn-info btn-sm"
                lay-submit=""
                lay-filter="sreach"
                @click="btnFontSizeJian_Click()"
              >
                <i class="layui-icon">一</i>
              </button>
            </td>

            <td>
              <input
                id="txtFontSizeNum"
                name="txtFontSizeNum"
                value="16"
                class="layui-input"
                style="width: 50px"
                disabled
              />
            </td>

            <td>
              <button
                id="btnFontSizeJia"
                class="btn btn-info btn-sm"
                lay-submit=""
                lay-filter="sreach"
                @click="btnFontSizeJia_Click()"
              >
                <!-- <i class="layui-icon">&#xe654</i> -->
              </button>
            </td>
            <td>
              <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
            ></td>
          </tr>
        </table>
      </div>
      <!-- 分左右2个区域 -->
      <div style="width: 100%">
        <div id="divTree" class="divTree myDivTree">
          <ul class="st_tree">
            <li class="li">
              <a id="Theme" href="javascript:void(0)" class="main">主题1</a>
              <ul id="TreeBind" class="submenu"></ul>
            </li>
          </ul>
        </div>
        <div id="divContent" class="divContent divContent1 myContent">
          <div id="divContent_menu1">
            <div class="btn-group-vertical btn-group-sm">
              <a id="liUser" href="javascript:void(0)" class="btn btn-success"
                ><i class="layui-icon">&#xe770;</i>小组成员</a
              >
              <a id="liResearchPlan" href="javascript:void(0)" class="btn btn-success"
                ><i class="layui-icon">&#xe637;</i>研究计划</a
              >
              <a id="ligs_ReflectLog" href="javascript:void(0)" class="btn btn-success"
                ><i class="layui-icon">&#xe637;</i>反思日志</a
              >
              <a id="liPaper" href="javascript:void(0)" class="btn btn-success"
                ><i class="layui-icon">&#xe705;</i>相关论文</a
              >
              <a id="liOriginalPaper" href="javascript:void(0)" class="btn btn-success"
                ><i class="layui-icon">&#xe655;</i>自研论文</a
              >
            </div>
          </div>
          <div id="divContent_menu2">
            <div class="btn-group-vertical btn-group-sm">
              <a id="liViewpoint" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe66f;</i>个人观点</a
              >
              <a id="liExpertViewpoint" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe612;</i>专家观点</a
              >
              <a id="liConcept" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe66a;</i>相关概念</a
              >
              <a id="liObjectiveFact" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe62c;</i>客观事实</a
              >
              <a id="liObjectiveBasis" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe62c;</i>客观数据</a
              >
              <a id="liSysskill" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe631;</i>操作技能</a
              >
              <a id="liSysSocialRela" href="javascript:void(0)" class="btn btn-primary"
                ><i class="layui-icon">&#xe770;</i>社会关系</a
              >
            </div>
          </div>
          <div id="divContent_list"> </div>

          <!-- 上 用户  -->
        </div>
      </div>

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
                name="tabwucResearchTopic"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr style="display: none">
                  <td class="NameTD">
                    <label
                      id="lblTopicId"
                      name="lblTopicId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      主题编号
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtTopicId"
                      name="txtTopicId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblTopicName"
                      name="lblTopicName"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      栏目主题
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtTopicName"
                      name="txtTopicName"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblTopicContent"
                      name="lblTopicContent"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      主题内容
                    </label>
                  </td>
                  <td class="ValueTD">
                    <textarea
                      id="txtTopicContent"
                      name="txtTopicContent"
                      class="form-control form-control-sm"
                      style="width: 500px; height: 80px"
                    ></textarea>
                  </td>
                </tr>

                <tr>
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
                  <td class="ValueTD">
                    <textarea
                      id="txtMemo"
                      name="txtMemo"
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
                @click="mySubmit('')"
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>

      <!-- 详细 -->
      <div
        id="divResearchTopicDetail"
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
              <h4 id="myModalLabel" class="modal-title">主题详细</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <table
                  id="tabwucResearchTopicDetail"
                  name="tabwucResearchTopicDetail"
                  style="width: 100%; padding: 1px; border: 0px"
                  class="table table-bordered table-hover"
                >
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblTopicName"
                        name="lblTopicName"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        栏目主题
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtTopicNameDetail"
                        name="txtTopicNameDetail"
                        class="col-form-label"
                        style="width: 400px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblTopicContent"
                        name="lblTopicContent"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        主题内容
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtTopicContentDetail"
                        name="txtTopicContentDetail"
                        class="col-form-label"
                        style="width: 500px; height: 80px"
                      ></label>
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
                    <td class="ValueTD">
                      <label
                        id="txtMemoDetail"
                        name="txtMemoDetail"
                        class="col-form-label"
                        style="width: 500px; height: 40px"
                      ></label>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="close_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>

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
          <div class="modal-content" style="width: 1000px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">观点列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divViewpointDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1"> </div>
              </div>
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

      <!-- 论文列表 -->
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
              <h4 id="myModalLabel" class="modal-title">论文列表</h4>
              <h4 class="modal-title" style="color: red">(当前只显示已提交的论文数据)</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>

            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                name="tabQuery"
                style="width: 70%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <label
                      id="lblPaperTitle_q"
                      name="lblPaperTitle_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      论文标题
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtPaperTitle_q"
                      name="txtPaperTitle_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>

                  <td class="NameTD">
                    <label
                      id="lblLiteratureTypeId_q"
                      name="lblLiteratureTypeId_q"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      文献类型
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlLiteratureTypeId_q"
                      name="ddlLiteratureTypeId_q"
                      class="form-control form-control-sm"
                      style="width: 180px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblReadUser_q"
                      name="lblReadUser_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      用户
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlUserId_q"
                      name="ddlUserId_q"
                      class="form-control form-control-sm"
                      style="width: 180px"
                    />
                  </td>
                  <td>
                    <button
                      id="btnPaperQuery"
                      type="submit"
                      name="btnPaperQuery"
                      class="btn btn-outline-warning text-nowrap btn-sm"
                      @click="btnPaperQuery_Click()"
                      >查询</button
                    >
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>

            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divPaperDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeTwo_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>

      <!-- 用户列表 -->
      <div
        id="divUserList"
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
              <h4 id="myModalLabel" class="modal-title">用户列表</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>

            <!-- 查询层 -->

            <div id="divQuery" ref="refDivQuery" class="div_query">
              <table
                id="tabQuery"
                name="tabQuery"
                style="width: 70%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <label
                      id="lblUserId_q"
                      name="lblUserId_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      用户ID
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUserId_q"
                      name="txtUserId_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblUserName_q"
                      name="lblUserName_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      用户名
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUserName_q"
                      name="txtUserName_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>

                  <td>
                    <button
                      id="btnUserQuery"
                      type="submit"
                      name="btnUserQuery"
                      class="btn btn-outline-warning text-nowrap btn-sm"
                      @click="btnUserQuery_Click()"
                      >查询</button
                    >
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblTopicUserRole"
                      name="lblTopicUserRole"
                      class="col-form-label"
                      style="width: 250px"
                    >
                      请选择主题用户角色：
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlTopicUserRole_q"
                      name="ddlTopicUserRole_q"
                      class="form-control form-control-sm"
                      style="width: 180px"
                    />
                  </td>
                </tr>
              </table>
            </div>

            <div class="modal-body">
              <div id="divList" ref="refDivList" class="div_List">
                <div id="divUserDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default btn-sm"
                data-dismiss="modal"
                @click="closeThree_Click()"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>

      <!-- 评论列表 -->
      <div
        id="divShowAppraise"
        style="z-index: 1061"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <el-dialog
          v-model="dialogVisible_ShowAppraise"
          :width="dialogWidth"
          :title="strTitle_ShowAppraise"
        >
          <div class="modal-header11" style="padding: 5px">
            <h4 id="myModalLabel" class="modal-title">全部评论</h4>

            <button
              id="btnOKUpd"
              type="button"
              class="btn btn-primary btn-sm"
              style="float: right; margin-left: 700px; width: 150px"
              @click="btnDetailAddAppraise_Click()"
              >添加评论1</button
            >
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          </div>
          <div class="modal-body11" style="height: 650px; overflow: auto">
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
                    @click="HottestComment_Click()"
                    >最热</span
                  >
                </p>
              </div>
              <div id="J_ShortComment_RTL"> </div>
            </div>
          </div>
          <!-- <div class="modal-footer"> </div> -->

          <!-- /.modal-content -->
        </el-dialog>
        <!-- /.modal -->
      </div>

      <!-- 添加评论 -->
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
              <h4 id="myModalLabel" class="modal-title">评论打分</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucPaperSubViewpointAppraise"
                name="tabwucPaperSubViewpointAppraise"
                style="width: 760px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr id="AppraiseScoreId">
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
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </div>

    <a
      id="backtop"
      class="back-top"
      href="javascript: scroll(0,0);"
      target="_self"
      title="返回顶部"
      style="display: block"
      ><i class="icon-backtop"></i
    ></a>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortResearchTopicBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />

    <input id="hidSortvViewpointBy" type="hidden" value="" />
    <input id="hidTopicRelaId" type="hidden" />
    <input id="hidTopicName" type="hidden" />

    <input id="hidViewpointId" type="hidden" />

    <input id="hidSortvPaperBy" type="hidden" value="" />
    <input id="hidPaperId" type="hidden" value="" />

    <input id="hidSortQxUsersBy" type="hidden" value="" />
    <input id="hidUserIdKey" type="hidden" />
    <!-- 主题用户关系 -->
    <input id="hidSortvRTUserRelaBy" type="hidden" value="" />

    <!-- 主题观点关系 -->
    <input id="hidSortvRTViewpointRelaBy" type="hidden" value="" />
    <!-- 主题论文关系 -->
    <input id="hidSortvRTPaperRelaBy" type="hidden" value="" />
    <input id="hidViewpointUserId" type="hidden" />

    <!-- 评论相关 -->
    <input id="hidParentId" type="hidden" />
    <input id="hidViewpointUserId" type="hidden" />
    <input id="hidCommentTypeId" type="hidden" />
    <input id="hidTableKey" type="hidden" />

    <input id="hidRoleId" type="hidden" />

    <!-- 设置字体大小 -->
    <input id="hidFontSize" type="hidden" />
    <SysCommentCom
      ref="SysCommentRef"
      :key-id="refKeyId"
      :comment-type-id="refCommentTypeId"
      :font-size="refFontSize"
      :pub-parent-id="refPubParentId"
      :score-type="refScoreType"
      :user="refUser"
    ></SysCommentCom>

    <PaperDetailCom ref="PaperDetailRef" :paperId="paperId"></PaperDetailCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';
  // import '@/assets/lib/Xadmin/lib/layui/layui.js';
  // import '@/assets/lib/Xadmin/js/x1admin.js';
  // import '@/assets/lib/zoomify/zooming.js';

  import { defineComponent, onMounted, ref } from 'vue';

  import $ from 'jquery';
  import router from '@/router';
  import { PaperIframe } from '@/views/web/PaperIframe';
  import { ResearchTopicListEx } from '@/views/GradEduTopic/ResearchTopicListEx';
  import { message } from '@/utils/myMessage';
  import { GetFirstCheckedKeyId } from '@/ts/PubFun/clsCommFunc4Web';
  import { gs_TopicRoleCRUDEx } from '@/views/GradEduTopic/gs_TopicRoleCRUDEx';
  import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
  import SysCommentCom from '@/views/GradEduTools/SysComment.vue';
  import PaperDetailCom from '@/views/GradEduEx/PaperDetail.vue';
  import { enumSysCommentType } from '@/ts/L0Entity/RT_Params/clsSysCommentTypeEN';
  import { CommQuestionAnswer } from '@/views/InteractManage/CommQuestionAnswer';
  import PaperDetail from '@/views/GradEduEx/PaperDetail';
  import { ResearchTopic_GetObjByTopicIdCache } from '@/ts/L3ForWApi/GradEduTopic/clsResearchTopicWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import { RTUserRelaEx_BindTabvRTUserRela } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApiB';
  import { RTUserRelaEx_UpdateLastVisitedDate } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
  import { userStore } from '@/store/modulesShare/user';

  export default defineComponent({
    name: 'ResearchTopicList',
    components: {
      // 组件注册
      SysCommentCom,
      PaperDetailCom,
    },
    setup() {
      const isShowHead = ref(false);
      const refDivLayout = ref();
      const refDivQuery = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      const topicId = ref('');
      const paperId = ref('');

      //与系统评价相关的变量
      const SysCommentRef = ref();
      const PaperDetailRef = ref();
      const refCommentTypeId = ref(enumSysCommentType.RTUserRela_14);
      const refPubParentId = ref('');
      const refTableKey = ref('');
      const refScoreType = ref('');
      const refUser = ref('');
      const refKeyId = ref('');
      const refFontSize = ref('');

      async function getUser(): Promise<void> {
        console.log(UserName);
      }

      onMounted(() => {
        ResearchTopicListEx.vuebtn_Click = btn_Click;
        ResearchTopicListEx.GetPropValue = GetPropValue;
        window_onload();
        //
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          // case 'idCurrEduCls':
          //   return idCurrEduCls.value;
          case 'topicId':
            return topicId.value;
          case 'commentTypeId':
            return refCommentTypeId.value;
          case 'tableKey':
            return refTableKey.value;

          // case 'activeTabId':
          //   return activeTabId.value;
          default:
            return '';
        }
        return '';
      }
      const strTitle_ShowAppraise = ref('全部评论');
      const dialogVisible_ShowAppraise = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
      const showDialog_ShowAppraise = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible_ShowAppraise.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible_ShowAppraise.value = false;
      };
      const hideDialog_ShowAppraise = () => {
        dialogVisible_ShowAppraise.value = false;
      };
      function btn_Click(strCommandName: string, strKeyId: any) {
        // console.log(strKeyId);
        let objData = strKeyId;
        switch (strCommandName) {
          case 'PdfDetail':
            paperId.value = strKeyId;
            PaperDetail.EditObj = PaperDetailRef.value;
            break;
          case 'SelectResearchTopic':
            btnSelectResearchTopic(objData.topicId, objData.topicName);
            return;
          case 'ShowAppraise':
            btnShowAppraise_Click(objData.keyId, objData.commentTypeId, objData.viewpointUserId);
            return;
          case 'TopicListMenuIsHide':
            TopicListMenuIsHide();
            return;
          case 'LoadTreeShow':
            LoadTreeShow();
            return;
          case 'HideDialogTwo':
            // HideDialogTwo();
            return;
          case 'HideDialog3':
            // HideDialog3();
            return;
          case 'SetFontSize':
            SetFontSize();
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
            // arr = strKeyId.split('|');
            // if (arr.length != 3) {
            //   strMsg = `在执行btnSysComment_Click过程中，参数数目不正确！`;
            //   console.error(strMsg);
            //   alert(strMsg);
            //   return;
            // }

            refKeyId.value = objData.keyId;
            refTableKey.value = objData.keyId;
            refUser.value = objData.viewpointUserId;
            if (objData.pubParentId == '') {
              refPubParentId.value = 'pyf';
            } else {
              refPubParentId.value = objData.pubParentId;
            }
            refCommentTypeId.value = objData.commentTypeId; // '08';

            refScoreType.value = '3';
            CommQuestionAnswer.SysCommentRef = SysCommentRef;

            break;

          default:
            break;
        }
        ResearchTopicListEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      /*
       *  提交编辑
       */
      function mySubmit(pstrOp: string) {
        //    alert("提交" + strOp);

        var objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        // objPage.btnOKUpd_Click();
      }
      //默认展开数据
      function LoadTreeShow() {
        //锚点标注显示；
        // const num = $('.main').index(this);
        // $('.main').eq(num).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
        // $('.submenu').eq(num).show(100);
        // const  flag = false;
      }
      /*
 页面导入-在导入页面后运行的函数
*/
      function window_onload() {
        // $('#h1idOrderbyId').val('1');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.PageLoad(enumCommentOrder.AllComment_01);
      }
      //增加字体
      function btnFontSizeJia_Click() {
        const txtFontSizeNum = document.getElementById('txtFontSizeNum') as HTMLInputElement;
        let num = Number(txtFontSizeNum.value); /*定义一个初始变量*/
        num++;
        txtFontSizeNum.value = num.toString();
        $('#hidFontSize').val(num);
        message.success('字体增大到：' + num + 'px');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.BindGv_AllTopicRela();
      }
      //减小字体
      function btnFontSizeJian_Click() {
        const txtFontSizeNum = document.getElementById('txtFontSizeNum') as HTMLInputElement;
        let num = Number(txtFontSizeNum.value); /*定义一个初始变量*/
        num--;
        txtFontSizeNum.value = num.toString();
        $('#hidFontSize').val(num);

        message.success('字体减小到：' + num + 'px');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.BindGv_AllTopicRela();
      }
      //设置全局字体
      function SetFontSize() {
        const ClassArtlist = document.getElementsByClassName('artlist');
        const txtFontSizeNum = document.getElementById('txtFontSizeNum') as HTMLInputElement;
        let i;
        for (i = 0; i < ClassArtlist.length; i++) {
          (ClassArtlist[i] as HTMLElement).style.fontSize = txtFontSizeNum.value + 'px';
        }
      }

      ///点击论文跳转到自研论文
      function btnNewPaper(strPaperId: string) {
        const strTopicId = $('#hidTopicRelaId').val();
        if (strTopicId == '') {
          alert('请选择主题！');
          return;
        } else {
          // xadmin.open('自研论文', '../GraduateEduTopic/OriginalPaperAllList?PaperId=' + strPaperId + '&TopicId=' + strTopicId, '', '', true)
        }
      }

      //点击树菜单事件；
      async function btnSelectResearchTopic(strKeyId: string, strName: string) {
        topicId.value = strKeyId;
        $('#divLoading').show();

        //先清除背景色
        $('#TreeBind li a').removeClass('selected');
        //添加背景色
        $('#li' + strKeyId + ' a').addClass('selected');
        //存储点击的id
        $('#hidTopicRelaId').val(strKeyId);
        $('#hidTopicName').val(strName);
        const bolIsSuecc = await RTUserRelaEx_UpdateLastVisitedDate(strKeyId, userStore.getUserId);

        //点击后调整关系表数据方法；

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.GetAllFunctionMethod();
      }

      /*
       *添加点赞
       */
      function btnAddLikeLog_Click(strKeyId: string) {
        $('#hidViewpointId').val(strKeyId);

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        // objPage.btnAddLikeLog_Click();

        message.success('已点赞!');
      }

      /*
       *添加点赞
       */
      function btnAddVote_Click(strKeyId: string, strUserId: string, strVoteTypeId: string) {
        $('#hidViewpointId').val(strKeyId);

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnAddVote_Click(strKeyId, strUserId, strVoteTypeId);

        message.success('已点赞!');
      }

      /*
       *显示评论
       */
      function btnShowAppraise_Click(
        strKeyId: string,
        strCommentTypeId: string,
        strViewpointUserId: string,
      ) {
        $('#hidViewpointId').val(strKeyId);
        $('#hidViewpointUserId').val(strViewpointUserId);
        $('#hidCommentTypeId').val(strCommentTypeId);
        $('#hidTableKey').val(strKeyId);

        showDialog_ShowAppraise();
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      }
      //删除主题用户关系
      function btnDelUserRelaInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnDelUserRelaRecordInTab_Click(strKeyId);
      }
      //添加主题观点关系
      function btnAddViewPointRelaRecordInTab_Click() {
        const strKeyId = $('#hidTopicRelaId').val();

        if (strKeyId == '') {
          alert('请选择需要添加关系的主题！');
          return;
        } else {
          //存放选择id
          // $('#hidTopicRelaId').val(strKeyId);

          // ShowDialogTwo();
          //调用专业方向绑定；
          const objPage = new ResearchTopicListEx(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.btnAddRela_Click();
        }
      }
      //删除主题观点关系
      function btnDelViewPointRelaRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnDelViewPointRelaRecordInTab_Click(strKeyId);
      }

      //添加主题论文关系
      function btnAddPaperRelaRecordInTab_Click() {
        const strKeyId = $('#hidTopicRelaId').val();

        if (strKeyId == '') {
          alert('请选择需要添加关系的主题！');
          return;
        } else {
          //存放选择id
          // ShowDialogThree();
          //调用专业方向绑定；
          const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

          objPage.btnAddPaperRela_Click();
        }
      }
      //删除主题论文关系
      function btnDelPaperRelaRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert(`请选择需要删除的记录！`);
          return;
        }
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnDelPaperRelaRecordInTab_Click(strKeyId);
      }

      /*
  删除记录的事件函数
 */
      function btnDelRecord_Click() {
        //得到选择的topicId
        const strKeyId = $('#hidTopicRelaId').val();

        if (strKeyId == '') {
          alert('请选择需要删除的主题！');
          return;
        } else {
          if (confirm('确定删除主题及所有关联数据吗？')) {
            const objPage = new ResearchTopicListEx(refDivLayout.value);
            objPage.divLayout = refDivLayout.value;
            objPage.divQuery = refDivQuery.value;

            // objPage.btnDelInRecord_Click(strKeyId);
            return true;
          }
          return false;
        }
      }

      /*
 添加主题观点关系记录
*/
      function btnAddRela_Click() {
        const strKeyId = GetFirstCheckedKeyId(); //'divList');
        if (strKeyId == '') {
          alert('请选择需要添加关系的记录！');
          return;
        }
        //存放选择id
        $('#hidTopicRelaId').val(strKeyId);

        // ShowDialogTwo();
        //调用专业方向绑定；
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnAddRela_Click();
      }

      //选择观点方法
      function btnOkInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnOkInTab_Click(strKeyId);
      }

      //查看主题观点关系
      function btnQueryViewpointRela_Click() {
        const strKeyId = GetFirstCheckedKeyId(); //'divList');
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }

        window.location.href = '../GraduateEduTopic/ResearchTopicAdd?TopicRelaId=' + strKeyId;
      }

      //1.主题详情

      /**
       *     在数据表里修改记录
       */

      function btnDetailInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        // ShowDialogOne();
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnDetailInTab_Click(strKeyId);
      }
      //关闭详情
      function close_Click() {
        // HideDialogOne();
      }

      //2.观点列表

      //关闭观点列表
      function closeOne_Click() {
        // HideDialogTwo();
      }

      //3.论文列表
      /**
       * 添加主题论文关系记录
       */
      function btnAddPaperRela_Click() {
        const strKeyId = GetFirstCheckedKeyId(); //'divList');
        if (strKeyId == '') {
          alert('请选择需要添加关系的记录！');
          return;
        }
        //存放选择id
        $('#hidTopicRelaId').val(strKeyId);

        // ShowDialogThree();
        //调用专业方向绑定；
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnAddPaperRela_Click();
      }

      /**
       *    确定选择论文数据
       */

      function btnPaperRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnPaperRecordInTab_Click(strKeyId);
      }

      /*
       * 查询记录
       */
      function btnPaperQuery_Click() {
        $('#Text1').val('进入函数：btnPaperQuery_Click');
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnPaperQuery_Click();
      }
      /////////////////////////////////////////////////////论文列表
      function closeTwo_Click() {
        // HideDialogThree();
      }
      /*
       * 添加主题用户关系记录
       */
      function btnAddUserRela_Click() {
        const strKeyId = GetFirstCheckedKeyId(); //'divList');
        if (strKeyId == '') {
          alert('请选择需要添加关系的记录！');
          return;
        }
        //存放选择id
        $('#hidTopicRelaId').val(strKeyId);

        // ShowDialogFour();
        //调用用户列表绑定；
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnAddUserRela_Click();
      }

      /*
       * 确定选择用户数据
       */
      function btnUserRecordInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnUserRecordInTab_Click(strKeyId);
      }

      /*
       * 用户查询记录
       */
      function btnUserQuery_Click() {
        $('#Text1').val('进入函数：btnUserQuery_Click');
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnUserQuery_Click();
      }

      function closeThree_Click() {
        // HideDialogFour();
      }

      //全部评论
      function AllComment_Click() {
        // $('#h1idOrderbyId').val('1');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
      }

      //我的评论
      function MyComment_Click() {
        // $('#h1idOrderbyId').val('2');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnShowAppraise_Click(enumCommentOrder.Personal_02);
      }

      //最新评论
      function NewComment_Click() {
        // $('#h1idOrderbyId').val('3');

        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.btnShowAppraise_Click(enumCommentOrder.LatestComments_03);
      }

      //刷新本页面绑定数据
      function Refresh_AllTopicRela() {
        const objPage = new ResearchTopicListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.BindGv_AllTopicRela();
      }

      //主题菜单是否显示
      function TopicListMenuIsHide() {
        const objPage = new gs_TopicRoleCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.TopicListMenuIsHide();
      }

      function HottestComment_Click() {}
      function SubmitAppraise_Click() {}
      function btnDetailAddAppraise_Click() {}

      return {
        isShowHead,
        refDivLayout,
        Login_EditRef,
        btn_Click,
        getUser,
        UserId,
        UserName,
        btnFontSizeJian_Click,
        btnFontSizeJia_Click,
        close_Click,
        closeOne_Click,
        closeTwo_Click,
        btnPaperQuery_Click,
        mySubmit,
        closeThree_Click,
        btnUserQuery_Click,

        AllComment_Click,
        MyComment_Click,
        NewComment_Click,
        HottestComment_Click,
        SubmitAppraise_Click,

        btnDetailAddAppraise_Click,
        dialogVisible_ShowAppraise,
        dialogWidth,
        strTitle_ShowAppraise,
        SysCommentRef,
        PaperDetailRef,
        refCommentTypeId,
        refKeyId,
        refPubParentId,
        refScoreType,
        refUser,
        refFontSize,
        paperId,
        // SysScoreSummaryNewTotal,
      };
    },
  });
</script>
<style scoped>
  .btnLeft {
    float: left;
  }

  .btnRight {
    float: right;
    margin-right: 50px;
  }
  .myDivTree {
    float: left;

    position: relative;
    /* top: 100px; */
    left: 10px;
    /*bottom: 5%;*/
    z-index: 1;
    max-height: 700px;
    width: 20%;
  }
  .myContent {
    width: 78%;
    float: right;
    max-height: 700px; /* 设置最大高度，当内容高度超过这个值时出现滚动条 */
    overflow-y: scroll; /* 垂直滚动条 */
  }
  .divTree a {
    font-size: 18px;
  }
  /*主题小标题*/
  .title {
    font-size: 18px;
  }

  /*主题内容*/
  .artlist {
    font-size: 16px;
  }

  .example img {
    max-width: 200px;
    margin-left: 10px;
  }
</style>
<!-- 
    const flag = true;
    $(function () {
        $('.main').click(function () {

            const num = $('.main').index(this);
            if (flag == true) {
                $('.main').eq(num).css('background', 'url(../images/st_folder_open.gif) no-repeat left');
                $('.submenu').eq(num).show(100);
                flag = false;



            } else {
                $('.main').eq(num).css('background', 'url(../images/st_folder.gif) no-repeat left');
                $('.submenu').eq(num).hide(100);
                flag = true;
            }
           
        });

    });
 -->
@/store/modulesShare/user
