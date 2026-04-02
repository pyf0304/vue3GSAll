<template>
  <div id="divLayout" ref="refDivLayout" class="div_layout">
    <!--标题层-->

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
              id="lblMyRoleId_q"
              name="lblMyRoleId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主角色
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMyRoleId_q"
              name="ddlMyRoleId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblRoleId_q"
              name="lblRoleId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >角色Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlRoleId_q"
              name="ddlRoleId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblQxPrjId_q"
              name="lblQxPrjId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >工程
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlQxPrjId_q"
              name="ddlQxPrjId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              name="btnExportExcel"
              class="btn btn-outline-warning btn-sm text-nowrap"
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
            id="lblQxRoleRightRelationList"
            name="lblQxRoleRightRelationList"
            class="col-form-label text-info"
            style="width: 250px"
            >角色赋权关系列表
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxRoleRightRelationBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxRoleRightRelation_EditCom ref="QxRoleRightRelation_EditRef"></QxRoleRightRelation_EditCom>
    <!--详细信息层-->
    <QxRoleRightRelation_DetailCom
      ref="QxRoleRightRelation_DetailRef"
    ></QxRoleRightRelation_DetailCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { QxRoleRightRelationCRUDEx } from '@/viewsShare/UserManage/QxRoleRightRelationCRUDEx';
  import { QxRoleRightRelationCRUD } from '@/viewsBase/UserManage/QxRoleRightRelationCRUD';
  import QxRoleRightRelation_EditCom from '@/viewsShare/UserManage/QxRoleRightRelation_Edit.vue';
  import QxRoleRightRelation_DetailCom from '@/viewsShare/UserManage/QxRoleRightRelation_Detail.vue';
  import { QxRoleRightRelation_Edit } from '@/viewsBase/UserManage/QxRoleRightRelation_Edit';
  import { QxRoleRightRelation_Detail } from '@/viewsBase/UserManage/QxRoleRightRelation_Detail';
  export default defineComponent({
    name: 'QxRoleRightRelationCRUD',
    components: {
      // 组件注册
      QxRoleRightRelation_EditCom,
      QxRoleRightRelation_DetailCom,
    },
    setup() {
      const strTitle = ref('角色赋权关系维护');
      const QxRoleRightRelation_EditRef = ref();
      const QxRoleRightRelation_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        QxRoleRightRelationCRUDEx.vuebtn_Click = btn_Click;
        QxRoleRightRelationCRUDEx.GetPropValue = GetPropValue;
        const objPage = new QxRoleRightRelationCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            QxRoleRightRelationCRUD.DetailObj = QxRoleRightRelation_DetailRef.value;
            QxRoleRightRelation_Detail.DetailObj = QxRoleRightRelation_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            QxRoleRightRelationCRUD.EditObj = QxRoleRightRelation_EditRef.value;
            QxRoleRightRelation_Edit.EditObj = QxRoleRightRelation_EditRef.value;
            break;
          default:
            break;
        }
        QxRoleRightRelationCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        QxRoleRightRelation_EditRef,
        QxRoleRightRelation_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {},
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/UserManage/QxRoleRightRelationCRUDEx
