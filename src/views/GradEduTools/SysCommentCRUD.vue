<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>评论管理</cite>
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
      <!-- 查询层 -->
      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 20%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtUserId_q"
                class="layui-input"
                placeholder="用户Id"
                style="width: 100px"
              />
            </td>
            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                class="layui-input"
                placeholder="用户名"
                style="width: 200px"
              />
            </td>
            <td>
              <select
                id="ddlScoreType"
                name="ddlScoreType"
                class="form-control"
                style="width: 170px"
              >
                <option value="0">选评分类型</option>
                <option value="1">学生</option>
                <option value="2">教师</option>
              </select>
            </td>
            <td>
              <input
                class="layui-input"
                placeholder="起始日期"
                name="txtStartDate_q"
                id="txtStartDate_q"
                style="width: 150px"
              />
            </td>
            <td>
              <input
                class="layui-input"
                placeholder="结束日期"
                name="txtEndDate_q"
                id="txtEndDate_q"
                style="width: 150px"
              />
            </td>

            <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <i class="layui-icon">&#xe615;</i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区 -->
      <!-- 列表层 -->
      <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div class="layui-card">
              <!-- <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                  <a href="#PaperComment" data-toggle="tab" @click="li_PaperComment_Click()">
                    论文评论
                  </a>
                </li>
                <li
                  ><a
                    href="#PaperSubViewpointComment"
                    data-toggle="tab"
                    @click="li_PaperSubViewpointComment_Click()"
                    >论文子观点评论</a
                  ></li
                >
                <li
                  ><a
                    href="#ViewpointComment"
                    data-toggle="tab"
                    @click="li_ViewpointComment_Click()"
                    >个人观点评论</a
                  ></li
                >
                <li
                  ><a
                    href="#ExpertViewpointComment"
                    data-toggle="tab"
                    @click="li_ExpertViewpointComment_Click()"
                    >专家观点评论</a
                  ></li
                >
                <li
                  ><a href="#ConceptComment" data-toggle="tab" @click="li_ConceptComment_Click()"
                    >概念评论</a
                  ></li
                >
                <li
                  ><a
                    href="#ObjectiveFactComment"
                    data-toggle="tab"
                    @click="li_ObjectiveFactComment_Click()"
                    >客观事实评论</a
                  ></li
                >
                <li
                  ><a
                    href="#ObjectiveBasisComment"
                    data-toggle="tab"
                    @click="li_ObjectiveBasisComment_Click()"
                    >客观数据评论</a
                  ></li
                >
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
              <div id="myTabContent" class="tab-content">
                <!-- 论文  -->
                <div v-show="activeTabId === 'PaperComment'" id="PaperComment" style="padding: 5px">
                  <div class="layui-card-body">
                    <table class="layui-table layui-form" id="divDataLst_PaperComment">
                      <thead>
                        <tr>
                          <th width="300">评论内容1</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">论文标题</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 论文子观点  -->
                <div
                  v-show="activeTabId === 'PaperSubViewpointComment'"
                  id="PaperSubViewpointComment"
                >
                  <div class="layui-card-body" id="divDataLst_PaperSubViewpointComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">子观点</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 个人观点  -->
                <div v-show="activeTabId === 'ViewpointComment'" id="ViewpointComment">
                  <div class="layui-card-body" id="divDataLst_ViewpointComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">个人观点</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 专家观点  -->
                <div v-show="activeTabId === 'ExpertViewpointComment'" id="ExpertViewpointComment">
                  <div class="layui-card-body" id="divDataLst_ExpertViewpointComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">专家观点</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 概念  -->
                <div v-show="activeTabId === 'ConceptComment'" id="ConceptComment">
                  <div class="layui-card-body" id="divDataLst_ConceptComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">概念</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 客观事实  -->
                <div v-show="activeTabId === 'ObjectiveFactComment'" id="ObjectiveFactComment">
                  <div class="layui-card-body" id="divDataLst_ObjectiveFactComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">客观事实</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
                <!-- 客观数据  -->
                <div v-show="activeTabId === 'ObjectiveBasisComment'" id="ObjectiveBasisComment">
                  <div class="layui-card-body" id="divDataLst_ObjectiveBasisComment">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="300">评论内容</th>
                          <th width="10">打分</th>
                          <th width="25">评分类型</th>
                          <th width="300">客观数据</th>
                          <th width="30">被评论人</th>
                          <th width="90">评论时间</th>
                          <th width="30">评论人</th>
                          <th width="10">回复数</th>
                          <th width="20">删除</th>
                        </tr>
                      </thead>
                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 编辑层 -->
      <div
        class="modal fade"
        id="divEditRegion"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModallabel">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                >&times;</button
              >
            </div>
            <div class="modal-body">
              <table
                id="tabEdit"
                style="width: 70%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr style="display: none">
                  <td>
                    <label
                      id="lblCommentId"
                      name="lblCommentId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评论Id
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtCommentId"
                      name="txtCommentId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblComment"
                      name="lblComment"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评论
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtComment"
                      name="txtComment"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblscore"
                      name="lblscore"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评分
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtscore"
                      name="txtscore"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblCommentTypeId"
                      name="lblCommentTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评论类型Id
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtCommentTypeId"
                      name="txtCommentTypeId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblScoreType"
                      name="lblScoreType"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      评分类型
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtScoreType"
                      name="txtScoreType"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblParentId"
                      name="lblParentId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      父Id
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtParentId"
                      name="txtParentId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblTableKey"
                      name="lblTableKey"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      表主键
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtTableKey"
                      name="txtTableKey"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblUpdUser"
                      name="lblUpdUser"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      修改人
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUpdUser"
                      name="txtUpdUser"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblMemo"
                      name="lblMemo"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      备注
                    </label>
                  </td>
                  <td>
                    <input id="txtMemo" name="txtMemo" class="form-control" style="width: 200px" />
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button id="btnCancel" type="button" class="btn btn-default" data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary"
                @click="btn_Click('mySubmit', '')"
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
    <input id="hidKeyId" type="hidden" />

    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvSysCommentBy" type="hidden" value="" />
    <!-- 表Id  -->
    <input id="hidCommentId" type="hidden" />

    <input id="hidUserId" type="hidden" />
    <!-- 用来区分不同tab  -->
    <input id="hidQueryStata" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import $ from 'jquery';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { SysCommentCRUDEx } from '@/views/GradEduTools/SysCommentCRUDEx';
  import { SysCommentCRUD } from '@/viewsBase/GradEduTools/SysCommentCRUD';
  import SysComment_EditCom from '@/views/GradEduTools/SysComment_Edit.vue';
  import { SysComment_Edit } from '@/viewsBase/GradEduTools/SysComment_Edit';
  import enumCommentType from '@/ts/FunClass/enumCommentType';
  import { message } from '@/utils/myMessage';
  export default defineComponent({
    name: 'SysCommentCRUD',
    components: {
      // 组件注册
      SysComment_EditCom,
    },
    setup() {
      const activeTabId = ref('PaperComment');
      const tabs = reactive([
        { id: 'PaperComment', label: '论文评论' },
        { id: 'PaperSubViewpointComment', label: '论文子观点评论' },
        { id: 'ViewpointComment', label: '个人观点评论' },
        { id: 'ExpertViewpointComment', label: '专家观点评论' },
        { id: 'ConceptComment', label: '概念评论' },
        { id: 'ObjectiveFactComment', label: '客观事实评论' },
        { id: 'ObjectiveBasisComment', label: '客观数据评论' },
      ]);
      const cateIds = ref<string[]>([]);
      const cateId = ref('');
      const strTitle = ref('系统评论表维护');
      const SysComment_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        SysCommentCRUDEx.GetPropValue = GetPropValue;
        SysCommentCRUDEx.vuebtn_Click = btn_Click;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'activeTabId':
            return activeTabId.value;

          default:
            return '';
        }
        return '';
      }
      //删除；

      function btnDelSysComment(strKeyId: string) {
        //存储点击的id
        $('#hidCommentId').val(strKeyId);

        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnDelSysComment(strKeyId);
      }
      ///////////////////////----------tab评价点击事件
      /*
    论文评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_PaperComment_Click() {
        $('#hidQueryStata').val('1');
        $('#Text1').val('进入函数：li_PaperComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_PaperComment_Click('');
      }
      /*
    论文子观点评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_PaperSubViewpointComment_Click() {
        $('#hidQueryStata').val('2');
        $('#Text1').val('进入函数：li_PaperSubViewpointComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_PaperSubViewpointComment_Click('');
      }
      /*
    个人观点评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_ViewpointComment_Click() {
        $('#hidQueryStata').val('3');
        $('#Text1').val('进入函数：li_ViewpointComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_ViewpointComment_Click('');
      }
      /*
    专家观点评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_ExpertViewpointComment_Click() {
        $('#hidQueryStata').val('4');
        $('#Text1').val('进入函数：li_ExpertViewpointComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_ExpertViewpointComment_Click(refDivLayout.value);
      }
      /*
    概念评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_ConceptComment_Click() {
        $('#hidQueryStata').val('5');
        $('#Text1').val('进入函数：li_ConceptComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_ConceptComment_Click('');
      }
      /*
    客观事实评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_ObjectiveFactComment_Click() {
        $('#hidQueryStata').val('6');
        $('#Text1').val('进入函数：li_ObjectiveFactComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_ObjectiveFactComment_Click('');
      }
      /*
    客观数据评论
    (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
    */
      function li_ObjectiveBasisComment_Click() {
        $('#hidQueryStata').val('7');
        $('#Text1').val('进入函数：li_ObjectiveBasisComment_Click');
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.li_ObjectiveBasisComment_Click('');
      }

      function tbody() {
        $("tbody.x-cate tr[fid!='0']").hide();
        // 栏目多级显示效果
        $('.x-show').click(function () {
          if ($(this).attr('status') == 'true') {
            $(this).html('&#xe625;');
            $(this).attr('status', 'false');
            cateId.value = $(this).parents('tr').attr('cate-id') ?? '';
            $('tbody tr[fid=' + cateId.value + ']').show();
          } else {
            cateIds.value = [];
            $(this).html('&#xe623;');
            $(this).attr('status', 'true');
            cateId.value = $(this).parents('tr').attr('cate-id') ?? '';
            getCateId(cateId.value);
            for (var i in cateIds.value) {
              $('tbody tr[cate-id=' + cateIds.value[i] + ']')
                .hide()
                .find('.x-show')
                .html('&#xe623;')
                .attr('status', 'true');
            }
          }
        });
      }

      function getCateId(cateId: string) {
        $('tbody tr[fid=' + cateId + ']').each(function (index, el) {
          const id = $(el).attr('cate-id') ?? '';
          cateIds.value.push(id);
          getCateId(id ?? '');
        });
      }
      /*
    页面导入-在导入页面后运行的函数
   (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
   */
      function window_onload() {
        var objPage = new SysCommentCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        $('#hidQueryStata').val('1');
        objPage.PageLoad();
      }
      function getDivNameByActiveTabId() {
        let strMsg;
        switch (activeTabId.value) {
          case enumCommentType.PaperComment: // '小组成员' },
            return 'PaperComment';

          case enumCommentType.PaperSubViewpointComment: //, label: '计划' },
            return 'PaperSubViewpointComment';
          case enumCommentType.ViewpointComment: //, label: '计划' },
            return 'ViewpointComment';
          case enumCommentType.ExpertViewpointComment: //, label: '反思' },
            return 'ExpertViewpointComment';
          case enumCommentType.ConceptComment: //, label: '反思' },
            return 'ConceptComment';
          case enumCommentType.ObjectiveFactComment: //, label: '论文' },
            return 'ObjectiveFactComment';
          case enumCommentType.ObjectiveBasisComment: // 'liAllViewpoint': //, label: '主题各观点' },
            return 'ObjectiveBasisComment';
          default:
            strMsg = `在switch中${activeTabId.value}没有被处理.(in getDivNameByActiveTabId)`;
            message.warning(strMsg);
            console.error(strMsg);
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string): string {
        switch (strCommandName) {
          case 'getDivNameByActiveTabId':
            return getDivNameByActiveTabId();

          case 'tbody':
            tbody();
            return '';
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            SysCommentCRUD.EditObj = SysComment_EditRef.value;
            SysComment_Edit.EditObj = SysComment_EditRef.value;
            break;
          default:
            break;
        }
        SysCommentCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        return '';
      }
      return {
        activeTabId,
        tabs,
        strTitle,
        btn_Click,
        SysComment_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        li_PaperComment_Click,
        li_PaperSubViewpointComment_Click,
        li_ViewpointComment_Click,
        li_ExpertViewpointComment_Click,
        li_ConceptComment_Click,
        li_ObjectiveFactComment_Click,
        li_ObjectiveBasisComment_Click,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        console.log('this.tabId:', tabId);
        SysCommentCRUDEx.btn_Click('changeTab', this.activeTabId, this.refDivLayout);
      },
    },
  });
</script>
<style scoped>
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
</style>

<!-- layui.use(['laydate', 'form'],
        function () {
            var laydate = layui.laydate;
            //执行一个laydate实例
                laydate.render({
                elem: '#txtStartDate_q' //指定元素
                });
            //执行一个laydate实例
                laydate.render({
                elem: '#txtEndDate_q' //指定元素
                });
        }); -->
