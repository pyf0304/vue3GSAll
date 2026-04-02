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
            <cite>主题观点类型</cite>
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
          style="width: 10%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtViewpointTypeName_q"
                name="txtViewpointTypeName_q"
                placeholder="观点类型"
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
          <li class="nav-item" style="width: 100%">
            <label
              id="lblViewpointTypeList"
              name="lblViewpointTypeList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('AddNewRecord', '')"
              >添加观点类型</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('UpdateRecord', '')"
              >修改观点类型</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('DelRecord', '')"
              >删除观点类型</button
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
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabwucViewpointType"
                name="tabwucViewpointType"
                style="width: 600px; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr style="display: none">
                  <td class="NameTD">
                    <label
                      id="lblViewpointTypeId"
                      name="lblViewpointTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      观点类型Id
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtViewpointTypeId"
                      name="txtViewpointTypeId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblViewpointTypeName"
                      name="lblViewpointTypeName"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      观点类型名
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtViewpointTypeName"
                      name="txtViewpointTypeName"
                      class="form-control"
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
    <input id="hidSortViewpointTypeBy" type="hidden" value="" />

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
  import { ViewpointTypeCRUDEx } from '@/views/RT_Params/ViewpointTypeCRUDEx';
  import { ViewpointTypeCRUD } from '@/viewsBase/RT_Params/ViewpointTypeCRUD';
  import ViewpointType_EditCom from '@/views/RT_Params/ViewpointType_Edit.vue';
  import { ViewpointType_Edit } from '@/viewsBase/RT_Params/ViewpointType_Edit';
  export default defineComponent({
    name: 'ViewpointTypeCRUD',
    components: {
      // 组件注册
      ViewpointType_EditCom,
    },
    setup() {
      const strTitle = ref('观点类型维护');
      const ViewpointType_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new ViewpointTypeCRUDEx(refDivLayout.value);
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
            ViewpointTypeCRUD.EditObj = ViewpointType_EditRef.value;
            ViewpointType_Edit.EditObj = ViewpointType_EditRef.value;
            break;
          default:
            break;
        }
        ViewpointTypeCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        ViewpointType_EditRef,
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
