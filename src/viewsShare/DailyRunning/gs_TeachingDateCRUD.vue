<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <!--标题层-->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">个人中心</a>
        <a>
          <cite>教学班</cite>
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
    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblStartDate_q"
              name="lblStartDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >开始日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtStartDate_q"
              name="txtStartDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEndDate_q"
              name="lblEndDate_q"
              class="col-form-label text-right"
              style="width: 90px"
              >截止日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEndDate_q"
              name="txtEndDate_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              type="submit"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('ExportExcel', '')"
              >导出Excel</button
            >
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblgs_TeachingDateList"
            name="lblgs_TeachingDateList"
            class="col-form-label text-info"
            style="width: 250px"
            >教学班日期范围列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreate"
            name="btnCreate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelete"
            name="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvgs_TeachingDateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <gs_TeachingDate_EditCom ref="gs_TeachingDate_EditRef"></gs_TeachingDate_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/public.css';
  import '@/assets/css/SimpleTree.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { gs_TeachingDateCRUDEx } from '@/viewsShare/DailyRunning/gs_TeachingDateCRUDEx';
  import { gs_TeachingDateCRUD } from '@/viewsBase/DailyRunning/gs_TeachingDateCRUD';
  import gs_TeachingDate_EditCom from '@/viewsShare/DailyRunning/gs_TeachingDate_Edit.vue';
  import { gs_TeachingDate_Edit } from '@/viewsBase/DailyRunning/gs_TeachingDate_Edit';

  export default defineComponent({
    name: 'GsTeachingDateCRUD',
    components: {
      // 组件注册
      gs_TeachingDate_EditCom,
    },
    setup() {
      const strTitle = ref('教学班日期范围维护');
      const gs_TeachingDate_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_TeachingDateCRUDEx(refDivLayout.value);
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
            gs_TeachingDateCRUD.EditObj = gs_TeachingDate_EditRef.value;
            gs_TeachingDate_Edit.EditObj = gs_TeachingDate_EditRef.value;
            break;
          default:
            break;
        }
        gs_TeachingDateCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      return {
        strTitle,
        btn_Click,
        gs_TeachingDate_EditRef,
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
<!-- 
layui.use(['laydate', 'form'],
function () {
    var laydate = layui.laydate;
    //执行一个laydate实例
        laydate.render({
        elem: '#txtStartDate' //指定元素
        });
    //执行一个laydate实例
        laydate.render({
        elem: '#txtEndDate' //指定元素
        });
}); -->
@/viewsShare/DailyRunning/gs_TeachingDateCRUDEx
