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
            <label id="lblMenuSetId_q" class="col-form-label text-right" style="width: 90px"
              >菜单集(*)
            </label>
          </td>
          <td class="text-left">
            <select
              v-model="menuSetId"
              id="ddlMenuSetId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblMenuId_q"
              name="lblMenuId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuId_q"
              name="txtMenuId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMenuName_q"
              name="lblMenuName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuName_q"
              name="txtMenuName_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblUpMenuId_q"
              name="lblUpMenuId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >上级菜单
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlUpMenuId_q"
              name="ddlUpMenuId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblMenuTitle_q"
              name="lblMenuTitle_q"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单标题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMenuTitle_q"
              name="txtMenuTitle_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblIsLeafNode_q"
              name="lblIsLeafNode_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否叶子
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbIsLeafNode_q"
              name="ddlbIsLeafNode_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblInUse_q"
              name="lblInUse_q"
              class="col-form-label text-right"
              style="width: 90px"
              >是否在用
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlbInUse_q"
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
            id="lblQxPrjMenusList"
            name="lblQxPrjMenusList"
            class="col-form-label text-info"
            style="width: 250px"
            >工程菜单列表
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
              id="ddlInUse_SetFldValue"
              name="ddlInUse_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetInUse"
              name="btnSetInUse"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetInUse', '')"
              >设置是否在用</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlMenuSetId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnSetMenuSetId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('SetMenuSetId', '')"
              >设置菜单集</button
            >
          </div>
        </li>
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlRoleId_SetFldValue"
              name="ddlRoleId_SetFldValue"
              class="form-control form-control-sm"
              style="width: 60px"
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
      <input id="hidSortQxPrjMenusBy" type="hidden" />
    </div>
    <!--编辑层-->
    <QxPrjMenus_EditCom ref="QxPrjMenus_EditRef"></QxPrjMenus_EditCom>
    <!--详细信息层-->
    <QxPrjMenus_DetailCom ref="QxPrjMenus_DetailRef"></QxPrjMenus_DetailCom>
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
  import { QxRoleMenusCRUDEx } from '@/viewsShare/MenuManage_GP/QxRoleMenusCRUDEx';
  import { QxPrjMenusCRUD } from '@/viewsBase/MenuManage_GP/QxPrjMenusCRUD';
  import QxPrjMenus_EditCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Edit.vue';
  import QxPrjMenus_DetailCom from '@/viewsShare/MenuManage_GP/QxPrjMenus_Detail.vue';
  import { QxPrjMenus_Edit } from '@/viewsBase/MenuManage_GP/QxPrjMenus_Edit';
  import { QxPrjMenus_Detail } from '@/viewsBase/MenuManage_GP/QxPrjMenus_Detail';
  import { extractValues } from '@/ts/PubFun/clsString';
  export default defineComponent({
    name: 'QxPrjMenusCRUD',
    components: {
      // 组件注册
      QxPrjMenus_EditCom,
      QxPrjMenus_DetailCom,
    },
    props: {
      paras: {
        type: String,
        default: false,
      },
    },

    setup(props) {
      const menuSetId = ref('');
      const editTabName = ref('QxPrjMenus');
      const strTitle = ref('工程菜单维护');
      const QxPrjMenus_EditRef = ref();
      const QxPrjMenus_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        QxRoleMenusCRUDEx.vuebtn_Click = btn_Click;
        QxRoleMenusCRUDEx.GetPropValue = GetPropValue;
        const strEditTabName = extractValues(props.paras, 'EditTabName');
        if (strEditTabName != '') editTabName.value = strEditTabName;
        if (editTabName.value == 'QxRoleMenus') strTitle.value = '角色菜单维护';
        const objPage = new QxRoleMenusCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
        // alert(`当前表:${editTabName.value}`);
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'editTabName':
            return editTabName.value;
          case 'menuSetId':
            return menuSetId.value;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'setMenuSetId':
            menuSetId.value = strKeyId;
            return;
          case 'Detail':
            QxPrjMenusCRUD.DetailObj = QxPrjMenus_DetailRef.value;
            QxPrjMenus_Detail.DetailObj = QxPrjMenus_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            QxPrjMenusCRUD.EditObj = QxPrjMenus_EditRef.value;
            QxPrjMenus_Edit.EditObj = QxPrjMenus_EditRef.value;
            break;
          default:
            break;
        }
        QxRoleMenusCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        QxPrjMenus_EditRef,
        QxPrjMenus_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        menuSetId,
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
@/viewsShare/MenuManage_GP/QxRoleMenusCRUDEx
