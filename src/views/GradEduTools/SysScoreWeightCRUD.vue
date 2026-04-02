<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>系统分数权重表</cite>
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
          style="width: 50%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <label
                id="lblid_CurrEduCls_q"
                name="lblid_CurrEduCls_q"
                class="col-form-label text-right"
                style="width: 80px; width: 90px"
              >
                当前教学班
              </label>
            </td>
            <td>
              <select id="ddlIdCurrEduCls_q" class="form-control" style="width: 200px"></select>
            </td>
            <td>
              <button
                type="submit"
                id="btnQuery"
                name="btnQuery"
                class="btn btn-outline-warning text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区 -->
      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblSysScoreWeightList"
              name="lblSysScoreWeightList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              系统分数权重表列表
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('AddNewRecord', '')"
              >添加</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpdateRecord', '')"
              >修改</button
            >
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
                      id="lblScoreWeightId"
                      name="lblScoreWeightId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      分数权重Id
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtScoreWeightId"
                      name="txtScoreWeightId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblScoreTypeId"
                      name="lblScoreTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      成绩类型代号
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
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblScoreWeightValue"
                      name="lblScoreWeightValue"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      权重分值
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtScoreWeightValue"
                      name="txtScoreWeightValue"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblid_CurrEduCls"
                      name="lblid_CurrEduCls"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      当前教学班流水号
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlid_CurrEduCls"
                      name="ddlid_CurrEduCls"
                      class="form-control"
                      style="width: 200px"
                    ></select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span class="form-control" style="width: 200px">
                      <input
                        type="checkbox"
                        id="chkIsPublic"
                        name="chkIsPublic"
                        Text="是否公开"
                      /><label for="chkIsPublic">是否公开</label>
                    </span>
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
    <input id="hidUserId" type="hidden" value="@Model.seUserId" />
    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvSysScoreWeightBy" type="hidden" value="" />
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
  import { SysScoreWeightCRUDEx } from '@/views/GradEduTools/SysScoreWeightCRUDEx';
  import { SysScoreWeightCRUD } from '@/viewsBase/GradEduTools/SysScoreWeightCRUD';
  import SysScoreWeight_EditCom from '@/views/GradEduTools/SysScoreWeight_Edit.vue';
  import { SysScoreWeight_Edit } from '@/viewsBase/GradEduTools/SysScoreWeight_Edit';
  export default defineComponent({
    name: 'SysScoreWeightCRUD',
    components: {
      // 组件注册
      SysScoreWeight_EditCom,
    },
    setup() {
      const strTitle = ref('系统分数权重表维护');
      const SysScoreWeight_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SysScoreWeightCRUDEx(refDivLayout.value);
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
            SysScoreWeightCRUD.EditObj = SysScoreWeight_EditRef.value;
            SysScoreWeight_Edit.EditObj = SysScoreWeight_EditRef.value;
            break;
          default:
            break;
        }
        SysScoreWeightCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SysScoreWeight_EditRef,
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
