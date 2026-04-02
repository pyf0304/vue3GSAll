<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层  -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">主题研究管理</a>
          <a>
            <cite>主题用户关系</cite>
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
          name="tabQuery"
          style="width: 20%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtUserId_q"
                name="txtUserId_q"
                placeholder="用户ID"
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
      <!-- 功能区  -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblRTUserRelaList"
              name="lblRTUserRelaList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnCancelOne"
              name="btnCancelOne"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="history_go(-1)"
            >
              返回上一页
            </button>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
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
                id="tabwucRTUserRela"
                name="tabwucRTUserRela"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr>
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
                    <select
                      id="ddlTopicId"
                      name="ddlTopicId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUserId"
                      name="lblUserId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户ID
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtUserId"
                      name="txtUserId"
                      class="form-control"
                      style="width: 200px"
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
                  <td class="ValueTD">
                    <input id="txtMemo" name="txtMemo" class="form-control" style="width: 200px" />
                  </td>
                  <td></td>
                  <td></td>
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

      <!-- 详细 -->
      <div
        class="modal fade"
        style="z-index: 1060"
        id="divRtUserRelaDetail"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModallabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1000px">
            <div class="modal-header">
              <h4 class="modal-title" id="myModallabel">主题用户关系详细</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <div id="divList" ref="refDivList0" class="div_List">
                <table
                  id="tabwucViewpointDetail"
                  name="tabwucViewpointDetail"
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
                        id="lblViewpointName"
                        name="lblViewpointName"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        主题提出人
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtTopicProposePeopleDetail"
                        name="txtTopicProposePeopleDetail"
                        class="col-form-label"
                        style="width: 400px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblViewpointTypeId"
                        name="lblViewpointTypeId"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        用户ID
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtUserIdDetail"
                        name="txtUserIdDetail"
                        class="col-form-label"
                        style="width: 200px"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblVPProposePeople"
                        name="lblVPProposePeople"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        用户名
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtUserNameDetail"
                        name="txtUserNameDetail"
                        class="col-form-label"
                        style="width: 200px"
                      />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblViewpointContent"
                        name="lblViewpointContent"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        学院
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtCollegeNameDetail"
                        name="txtCollegeNameDetail"
                        class="col-form-label"
                        style="width: 200px"
                      ></label>
                    </td>
                  </tr>
                  <tr>
                    <td class="NameTD">
                      <label
                        id="lblViewpointContent"
                        name="lblViewpointContent"
                        class="col-form-label text-right"
                        style="width: 90px"
                      >
                        专业
                      </label>
                    </td>
                    <td class="ValueTD">
                      <label
                        id="txtMajorNameDetail"
                        name="txtMajorNameDetail"
                        class="col-form-label"
                        style="width: 500px; height: 80px"
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
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvRTUserRelaBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />

    <input id="hidTopicRelaId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  // import '@/assets/lib/Xadmin/lib/layui/layui.js';
  // import '@/assets/lib/Xadmin/js/x1admin.js';
  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { RTUserRelaCRUDEx } from '@/views/GradEduTopic/RTUserRelaCRUDEx';
  import { RTUserRelaCRUD } from '@/viewsBase/GradEduTopic/RTUserRelaCRUD';
  import RTUserRela_EditCom from '@/views/GradEduTopic/RTUserRela_Edit.vue';
  import { RTUserRela_Edit } from '@/viewsBase/GradEduTopic/RTUserRela_Edit';
  import { RTUserRela_QUDIEx } from '@/views/GradEduTopic/RTUserRela_QUDIEx';
  export default defineComponent({
    name: 'RTUserRelaCRUD',
    components: {
      // 组件注册
      RTUserRela_EditCom,
    },
    setup() {
      const strTitle = ref('主题用户关系维护');
      const RTUserRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivList0 = ref();

      onMounted(() => {
        window_onload();
      });
      function GetTopicRelaId() {
        var str1;
        str1 = ''; //Request['TopicRelaId'];
        $('#hidTopicRelaId').val(str1);
      }

      function GetTopicRelaId_load() {
        var Request = new Object();

        var str1;
        str1 = ''; //Request['TopicRelaId'];

        if (str1 != null) {
          $('#hidTopicRelaId').val(str1);

          var objPage = new RTUserRela_QUDIEx(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;
          objPage.divFunction = refDivFunction.value;
          objPage.divList = refDivList.value;
          objPage.PageLoad();
        } else {
          var objPage = new RTUserRela_QUDIEx(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;
          objPage.divFunction = refDivFunction.value;
          objPage.divList = refDivList.value;
          objPage.PageLoad();
        }
      }

      /*
 页面导入-在导入页面后运行的函数
*/
      function window_onload() {
        GetTopicRelaId_load();
      }

      /*
     在数据表里修改记录
       */

      function btnDetailInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        // ShowDialogOne();
        // var objPage = new RTUserRela_QUDIEx();
        // objPage.RtUserRelaDetailRecord(strKeyId);
      }
      //关闭详情
      function close_Click() {
        // HideDialogOne();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            RTUserRelaCRUD.EditObj = RTUserRela_EditRef.value;
            RTUserRela_Edit.EditObj = RTUserRela_EditRef.value;
            break;
          default:
            break;
        }
        RTUserRelaCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTUserRela_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivList0,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
      history_go(intStep: number) {
        history.go(intStep);
      },
      close_Click() {
        return;
      },
    },
  });
</script>
<style scoped></style>
