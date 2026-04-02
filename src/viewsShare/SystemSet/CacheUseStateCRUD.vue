<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->
    <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
      <label id="lblViewTitle" name="lblViewTitle" class="h5">{{ strTitle }} </label>
      <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px"> </label>
    </div>
    <div style="width: 100%; height: 50px" class="mt-2">
      <ul class="nav">
        <li class="nav-item">
          <label id="lbllocalStorage" class="col-form-label-sm text-right"> localStorage: </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtlocalStorage" class="form-control-sm" style="width: 200px"
        /></li>
        <li class="nav-item ml-2">
          <label id="lblsessionStorage" class="col-form-label-sm text-right">
            sessionStorage:
          </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtsessionStorage" class="form-control-sm" style="width: 200px" />
        </li>
        <li class="nav-item ml-2">
          <label id="lblClientCache" class="col-form-label-sm text-right"> 客户端缓存: </label>
        </li>
        <li class="nav-item ml-1">
          <input id="txtClientCache" class="form-control-sm" style="width: 200px"
        /></li>
      </ul>
    </div>
    <!--查询层-->
    <div id="divQuery" ref="refDivQuery" class="div_query">
      <table
        id="tabQuery"
        style="width: 900px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-left">
            <label
              id="lblCacheModeId_q"
              name="lblCacheModeId_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              缓存方式
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlCacheModeId_q"
              name="ddlCacheModeId_q"
              class="form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-left">
            <label
              id="lblCacheKey_q"
              name="lblCacheKey_q"
              class="col-form-label-sm text-right"
              style="width: 90px"
            >
              缓存关键字
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtCacheKey_q"
              name="txtCacheKey_q"
              class="form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-left">
            <button
              id="btnQuery"
              type="submit"
              name="btnQuery"
              class="btn btn-outline-warning text-nowrap"
              @click="btn_Click('Query', '')"
              >查询</button
            >
          </td>
          <td class="text-left">
            <button
              id="btnExportExcel"
              type="submit"
              name="btnExportExcel"
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
            id="lblCacheUseStateList"
            name="lblCacheUseStateList"
            class="col-form-label-sm text-info"
            style="width: 250px"
          >
            缓存使用状态列表
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnAddNewRecord"
            name="btnAddNewRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Create', '')"
            >添加</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnUpdateRecord"
            name="btnUpdateRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnDelRecord"
            name="btnDelRecord"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Delete', '')"
            >删除</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnGetCacheUseState"
            name="btnGetCacheUseState"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('GetCacheUseState', '')"
            >获取缓存状态</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnRemoveLocalCache"
            name="btnRemoveLocalCache"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ClearLocalStorage', '')"
            >删除本地缓存</button
          >
        </li>
        <li class="nav-item ml-3">
          <button
            id="btnRemoveSessionCache"
            name="btnRemoveSessionCache"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('ClearSessionStorage', '')"
            >删除Session缓存</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortCacheUseStateBy" type="hidden" />
    </div>
    <!--编辑层-->
    <CacheUseState_EditCom ref="CacheUseState_EditRef"></CacheUseState_EditCom>
    <!--详细信息层-->
    <CacheUseState_DetailCom ref="CacheUseState_DetailRef"></CacheUseState_DetailCom>
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
  import { CacheUseStateCRUDEx } from '@/viewsShare/SystemSet/CacheUseStateCRUDEx';
  import { CacheUseStateCRUD } from '@/viewsBase/SystemSet/CacheUseStateCRUD';
  import CacheUseState_EditCom from '@/viewsShare/SystemSet/CacheUseState_Edit.vue';
  import CacheUseState_DetailCom from '@/viewsShare/SystemSet/CacheUseState_Detail.vue';
  import { CacheUseState_Edit } from '@/viewsBase/SystemSet/CacheUseState_Edit';
  import { CacheUseState_Detail } from '@/viewsBase/SystemSet/CacheUseState_Detail';
  export default defineComponent({
    name: 'CacheUseStateCRUD',
    components: {
      // 组件注册
      CacheUseState_EditCom,
      CacheUseState_DetailCom,
    },
    setup() {
      const strTitle = ref('缓存使用状态维护');
      const CacheUseState_EditRef = ref();
      const CacheUseState_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new CacheUseStateCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            CacheUseStateCRUD.DetailObj = CacheUseState_DetailRef.value;
            CacheUseState_Detail.DetailObj = CacheUseState_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            CacheUseStateCRUD.EditObj = CacheUseState_EditRef.value;
            CacheUseState_Edit.EditObj = CacheUseState_EditRef.value;
            break;
          default:
            break;
        }
        CacheUseStateCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        CacheUseState_EditRef,
        CacheUseState_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    mounted() {
      const objPage = new CacheUseStateCRUDEx(this.refDivLayout);
      objPage.PageLoadCache();
    },
    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/SystemSet/CacheUseStateCRUDEx
