<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">主题研究管理</a>
          <a>
            <cite><label id="lbltitle" name="lbltitle">主题任务状态</label></cite>
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
          style="width: 900px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td class="text-left">
              <label
                id="lblStatusName_q"
                name="lblStatusName_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                状态名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtStatusName_q"
                name="txtStatusName_q"
                class="form-control"
                style="width: 120px"
              />
            </td>
            <td class="text-left">
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
              id="lblgs_TopicTaskStatusList"
              name="lblgs_TopicTaskStatusList"
              class="col-form-label text-info"
              style="width: 250px"
            >
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('CreateWithMaxId', '')"
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
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层 -->
      <div id="divEdit" value="1"></div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" value="" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortgs_TopicTaskStatusBy" type="hidden" value="" />
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
  import '@/assets/css/SimpleTree.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { gs_TopicTaskStatusCRUDEx } from '@/views/RT_Params/gs_TopicTaskStatusCRUDEx';
  import { gs_TopicTaskStatusCRUD } from '@/viewsBase/RT_Params/gs_TopicTaskStatusCRUD';
  import gs_TopicTaskStatus_EditCom from '@/views/RT_Params/gs_TopicTaskStatus_Edit.vue';
  import { gs_TopicTaskStatus_Edit } from '@/viewsBase/RT_Params/gs_TopicTaskStatus_Edit';
  export default defineComponent({
    name: 'GsTopicTaskStatusCRUD',
    components: {
      // 组件注册
      gs_TopicTaskStatus_EditCom,
    },
    setup() {
      const strTitle = ref('主题任务状态维护');
      const gs_TopicTaskStatus_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_TopicTaskStatusCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_TopicTaskStatusCRUD.EditObj = gs_TopicTaskStatus_EditRef.value;
            gs_TopicTaskStatus_Edit.EditObj = gs_TopicTaskStatus_EditRef.value;
            break;
          default:
            break;
        }
        gs_TopicTaskStatusCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_TopicTaskStatus_EditRef,
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
