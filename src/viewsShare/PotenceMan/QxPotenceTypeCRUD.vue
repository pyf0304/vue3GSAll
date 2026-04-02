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
              id="lblPotenceTypeId_q"
              name="lblPotenceTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >权限类型Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceTypeId_q"
              name="txtPotenceTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPotenceTypeName_q"
              name="lblPotenceTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >权限类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceTypeName_q"
              name="txtPotenceTypeName_q"
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
              >模块
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
              id="lblIsVisible_q"
              name="lblIsVisible_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否显示
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbIsVisible_q"
              name="ddlbIsVisible_q"
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
            id="lblQxPotenceTypeList"
            name="lblQxPotenceTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >权限类型列表
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
              id="ddlFuncModuleId_SetFldValue"
              name="ddlFuncModuleId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetFuncModuleId"
              name="btnSetFuncModuleId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetFuncModuleId', '')"
              >设置模块Id</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <span class="form-control form-control-sm" style="width: 100px">
              <input id="chkIsVisible_SetFldValue" type="checkbox" Text="是否显示" /><label
                for="chkIsVisible_SetFldValue"
                >是否显示</label
              ></span
            >
            <button
              id="btnSetIsVisible"
              name="btnSetIsVisible"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetIsVisible', '')"
              >设置是否显示</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortQxPotenceTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPotenceType_EditCom ref="QxPotenceType_EditRef"></QxPotenceType_EditCom>
    <!--详细信息层-->
    <QxPotenceType_DetailCom ref="QxPotenceType_DetailRef"></QxPotenceType_DetailCom>
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
  import { QxPotenceTypeCRUDEx } from '@/viewsShare/PotenceMan/QxPotenceTypeCRUDEx';
  import { QxPotenceTypeCRUD } from '@/viewsBase/PotenceMan/QxPotenceTypeCRUD';
  import QxPotenceType_EditCom from '@/viewsShare/PotenceMan/QxPotenceType_Edit.vue';
  import QxPotenceType_DetailCom from '@/viewsShare/PotenceMan/QxPotenceType_Detail.vue';
  import { QxPotenceType_Edit } from '@/viewsBase/PotenceMan/QxPotenceType_Edit';
  import { QxPotenceType_Detail } from '@/viewsBase/PotenceMan/QxPotenceType_Detail';
  export default defineComponent({
    name: 'QxPotenceTypeCRUD',
    components: {
      // 组件注册
      QxPotenceType_EditCom,
      QxPotenceType_DetailCom,
    },
    setup() {
      const strTitle = ref('权限类型维护');
      const QxPotenceType_EditRef = ref();
      const QxPotenceType_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        QxPotenceTypeCRUDEx.vuebtn_Click = btn_Click;
        QxPotenceTypeCRUDEx.GetPropValue = GetPropValue;
        const objPage = new QxPotenceTypeCRUDEx(refDivLayout.value);
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
            QxPotenceTypeCRUD.DetailObj = QxPotenceType_DetailRef.value;
            QxPotenceType_Detail.DetailObj = QxPotenceType_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            QxPotenceTypeCRUD.EditObj = QxPotenceType_EditRef.value;
            QxPotenceType_Edit.EditObj = QxPotenceType_EditRef.value;
            break;
          default:
            break;
        }
        QxPotenceTypeCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        QxPotenceType_EditRef,
        QxPotenceType_DetailRef,
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
@/viewsShare/PotenceMan/QxPotenceTypeCRUDEx
