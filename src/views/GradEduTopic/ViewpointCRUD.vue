<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <!--查询层-->

    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabEdit"
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblViewpointName_q"
              name="lblViewpointName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >观点名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtViewpointName_q"
              name="txtViewpointName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblViewpointTypeId_q"
              name="lblViewpointTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >观点类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlViewpointTypeId_q"
              name="ddlViewpointTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblReason_q"
              name="lblReason_q"
              class="col-form-label text-right"
              style="width: 90px"
              >理由
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtReason_q"
              name="txtReason_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblVPProposePeople_q"
              name="lblVPProposePeople_q"
              class="col-form-label text-right"
              style="width: 90px"
              >观点提出人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVPProposePeople_q"
              name="txtVPProposePeople_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblViewpointList"
            name="lblViewpointList"
            class="col-form-label text-info"
            style="width: 250px"
            >观点表列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnQuery"
            name="btnQuery"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Query', '')"
            >查询</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnCreateWithMaxId"
            name="btnCreateWithMaxId"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('CreateWithMaxId', '')"
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
        <li class="nav-item ml-3">
          <button
            id="btnExportExcel"
            name="btnExportExcel"
            class="btn btn-outline-warning btn-sm text-nowrap"
            @click="btn_Click('ExportExcel', '')"
            >导出Excel</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvViewpointBy" type="hidden" />
    </div>
    <!--编辑层-->
    <Viewpoint_EditCom ref="Viewpoint_EditRef"></Viewpoint_EditCom>
    <!--详细信息层-->
    <Viewpoint_DetailCom ref="Viewpoint_DetailRef"></Viewpoint_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { ViewpointCRUDEx } from '@/views/GradEduTopic/ViewpointCRUDEx';
  import { ViewpointCRUD } from '@/viewsBase/GradEduTopic/ViewpointCRUD';
  import Viewpoint_EditCom from '@/views/GradEduTopic/Viewpoint_Edit.vue';
  import Viewpoint_DetailCom from '@/views/GradEduTopic/Viewpoint_Detail.vue';
  import { Viewpoint_Edit } from '@/viewsBase/GradEduTopic/Viewpoint_Edit';
  import { Viewpoint_Detail } from '@/viewsBase/GradEduTopic/Viewpoint_Detail';
  export default defineComponent({
    name: 'ViewpointCRUD',
    components: {
      // 组件注册
      Viewpoint_EditCom,
      Viewpoint_DetailCom,
    },
    setup() {
      const strTitle = ref('观点表维护');
      const Viewpoint_EditRef = ref();
      const Viewpoint_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
       
        const objPage = new ViewpointCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            ViewpointCRUD.DetailObj = Viewpoint_DetailRef.value;
            Viewpoint_Detail.DetailObj = Viewpoint_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            ViewpointCRUD.EditObj = Viewpoint_EditRef.value;
            Viewpoint_Edit.EditObj = Viewpoint_EditRef.value;
            break;
          default:
            break;
        }
        ViewpointCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        Viewpoint_EditRef,
        Viewpoint_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
