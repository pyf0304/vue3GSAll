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
              id="lblPotenceId_q"
              name="lblPotenceId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >权限ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceId_q"
              name="txtPotenceId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPotenceName_q"
              name="lblPotenceName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >权限名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceName_q"
              name="txtPotenceName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFuncModuleId_q"
              name="lblFuncModuleId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >模块Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncModuleId_q"
              name="ddlFuncModuleId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblPotenceTypeId_q"
              name="lblPotenceTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >权限类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPotenceTypeId_q"
              name="ddlPotenceTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <button
              id="btnQuery"
              name="btnQuery"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-right">
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
            id="lblQxPrjPotenceList"
            name="lblQxPrjPotenceList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程权限列表
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
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              name="ddlRoleId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 80px"
            ></select>
            <button
              id="btnSetRoleId"
              name="btnSetRoleId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetRoleId', '')"
              >设置角色</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPrjPotenceBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjPotence_EditCom ref="QxPrjPotence_EditRef"></QxPrjPotence_EditCom>
    <!--详细信息层-->
    <QxPrjPotence_DetailCom ref="QxPrjPotence_DetailRef"></QxPrjPotence_DetailCom>
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
  import { QxPrjPotenceCRUDEx } from '@/viewsShare/PotenceMan/QxPrjPotenceCRUDEx';
  import { QxPrjPotenceCRUD } from '@/viewsBase/PotenceMan/QxPrjPotenceCRUD';
  import QxPrjPotence_EditCom from '@/viewsShare/PotenceMan/QxPrjPotence_Edit.vue';
  import QxPrjPotence_DetailCom from '@/viewsShare/PotenceMan/QxPrjPotence_Detail.vue';
  import { QxPrjPotence_Edit } from '@/viewsBase/PotenceMan/QxPrjPotence_Edit';
  import { QxPrjPotence_Detail } from '@/viewsBase/PotenceMan/QxPrjPotence_Detail';
  export default defineComponent({
    name: 'QxPrjPotenceCRUD',
    components: {
      // 组件注册
      QxPrjPotence_EditCom,
      QxPrjPotence_DetailCom,
    },
    setup() {
      const strTitle = ref('工程权限维护');
      const QxPrjPotence_EditRef = ref();
      const QxPrjPotence_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        QxPrjPotenceCRUDEx.vuebtn_Click = btn_Click;
        QxPrjPotenceCRUDEx.GetPropValue = GetPropValue;
        const objPage = new QxPrjPotenceCRUDEx(refDivLayout.value);
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
            QxPrjPotenceCRUD.DetailObj = QxPrjPotence_DetailRef.value;
            QxPrjPotence_Detail.DetailObj = QxPrjPotence_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            QxPrjPotenceCRUD.EditObj = QxPrjPotence_EditRef.value;
            QxPrjPotence_Edit.EditObj = QxPrjPotence_EditRef.value;
            break;
          default:
            break;
        }
        QxPrjPotenceCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        QxPrjPotence_EditRef,
        QxPrjPotence_DetailRef,
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
@/viewsShare/PotenceMan/QxPrjPotenceCRUDEx
