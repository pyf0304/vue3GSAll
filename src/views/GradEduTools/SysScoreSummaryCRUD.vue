<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>系统分数汇总表</cite>
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
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                class="layui-input"
                placeholder="用户名"
                style="width: 150px"
              />
            </td>
            <td>
              <select
                id="ddlSchoolYear_q"
                name="ddlSchoolYear_q"
                class="form-control"
                style="width: 200px"
              ></select>
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
      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblSysScoreSummaryList"
              name="lblSysScoreSummaryList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              系统分数汇总表列表
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnTotalRevalidation"
              name="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btnTotalRevalidation_Click()"
              style="display: none"
              >总分核算</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div class="layui-card-body">
          <table class="layui-table layui-form">
            <thead>
              <tr>
                <td width="100">用户/学年</td>
                <th width="180">专业/教学班</th>
                <th width="150">论文子观点</th>
                <th width="150">个人观点</th>
                <th width="150">专家观点</th>
                <th width="150">主题概念</th>
                <th width="150">客观事实</th>
                <th width="150">客观数据</th>
                <th width="150">技能</th>
                <th width="150">社会关系</th>
                <th width="150">给他人评论</th>
                <th width="180">各观点总分</th>
                <th width="150">教师评分</th>
                <th width="200" style="font-weight: bold; color: red">百分比折算总分%</th>
              </tr>
            </thead>
            <tbody id="divDataLst" class="x-cate"></tbody>
          </table>
        </div>

        <div id="divPager" class="pager" value="1" style="display: none"> </div>
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
                <tr>
                  <td>
                    <label
                      id="lblUserId"
                      name="lblUserId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户ID
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUserId"
                      name="txtUserId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblSchoolYear"
                      name="lblSchoolYear"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      学年
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlSchoolYear"
                      name="ddlSchoolYear"
                      class="form-control"
                      style="width: 200px"
                    ></select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblScoreTypeId"
                      name="lblScoreTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      分数类型Id
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlScoreTypeId"
                      name="ddlScoreTypeId"
                      class="form-control"
                      style="width: 200px"
                    ></select>
                  </td>
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
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvSysScoreSummaryBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/site.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/public.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { SysScoreSummaryCRUDEx } from '@/views/GradEduTools/SysScoreSummaryCRUDEx';
  import { SysScoreSummaryCRUD } from '@/viewsBase/GradEduTools/SysScoreSummaryCRUD';
  import SysScoreSummary_EditCom from '@/views/GradEduTools/SysScoreSummary_Edit.vue';
  import { SysScoreSummary_Edit } from '@/viewsBase/GradEduTools/SysScoreSummary_Edit';

  export default defineComponent({
    name: 'SysScoreSummaryCRUD',
    components: {
      // 组件注册
      SysScoreSummary_EditCom,
    },
    setup() {
      const strTitle = ref('系统分数汇总表维护');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SysScoreSummaryCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      /*
 总分核算
    (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btnQuery_Click)
*/
      function btnTotalRevalidation_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        var objPage = new SysScoreSummaryCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnTotalRevalidation_Click();
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            SysScoreSummaryCRUD.EditObj = SysScoreSummary_EditRef.value;
            SysScoreSummary_Edit.EditObj = SysScoreSummary_EditRef.value;
            break;
          default:
            break;
        }
        SysScoreSummaryCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SysScoreSummary_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        btnTotalRevalidation_Click,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped>
  .layui-table td,
  .layui-table th {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 15px;
  }
  #tbList img {
    max-width: 600px;
  }
</style>
