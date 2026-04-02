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
          <a href="">主题研究管理</a>
          <a>
            <cite> 研究结果关系</cite>
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
          style="width: 35%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtPaperTitle_q"
                name="txtPaperTitle_q"
                placeholder="论文标题"
                class="layui-input"
                style="width: 200px"
              />
            </td>

            <td>
              <input
                id="txtTopicName_q"
                name="txtTopicName_q"
                placeholder="栏目主题"
                class="layui-input"
                style="width: 200px"
              />
            </td>

            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                placeholder="用户"
                class="layui-input"
                style="width: 200px"
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
      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblRTResearchResultList"
              name="lblRTResearchResultList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DelRecord', '')"
              >删除</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
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
                      id="lblTopicId"
                      name="lblTopicId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      主题编号
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlTopicId"
                      name="ddlTopicId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblPaperId"
                      name="lblPaperId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      论文Id
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlPaperId"
                      name="ddlPaperId"
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
    <input id="hidSortvRTResearchResultBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />
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
  import { RTResearchResultCRUDEx } from '@/views/GradEduTopic/RTResearchResultCRUDEx';
  import { RTResearchResultCRUD } from '@/viewsBase/GradEduTopic/RTResearchResultCRUD';
  import RTResearchResult_EditCom from '@/views/GradEduTopic/RTResearchResult_Edit.vue';
  import { RTResearchResult_Edit } from '@/viewsBase/GradEduTopic/RTResearchResult_Edit';
  export default defineComponent({
    name: 'RTResearchResultCRUD',
    components: {
      // 组件注册
      RTResearchResult_EditCom,
    },
    setup() {
      const strTitle = ref('研究结果维护');
      const RTResearchResult_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new RTResearchResultCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            RTResearchResultCRUD.EditObj = RTResearchResult_EditRef.value;
            RTResearchResult_Edit.EditObj = RTResearchResult_EditRef.value;
            break;
          default:
            break;
        }
        RTResearchResultCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTResearchResult_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
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
<style scoped></style>
