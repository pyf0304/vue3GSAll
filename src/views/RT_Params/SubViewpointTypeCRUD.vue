<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->
    <!-- 标题层 -->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">主题研究管理</a>
        <a>
          <cite>观点说明类型</cite>
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
        style="width: 200px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <label
              id="lblSubViewpointTypeName_q"
              name="lblSubViewpointTypeName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >类型名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSubViewpointTypeName_q"
              name="txtSubViewpointTypeName_q"
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
            id="lblSubViewpointTypeList"
            name="lblSubViewpointTypeList"
            class="col-form-label text-info"
            style="width: 250px"
            >子观点类型表列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortSubViewpointTypeBy" type="hidden" />
    </div>
    <!--编辑层-->
    <SubViewpointType_EditCom ref="SubViewpointType_EditRef"></SubViewpointType_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
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
  import { SubViewpointTypeCRUDEx } from '@/views/RT_Params/SubViewpointTypeCRUDEx';
  import { SubViewpointTypeCRUD } from '@/viewsBase/RT_Params/SubViewpointTypeCRUD';
  import SubViewpointType_EditCom from '@/views/RT_Params/SubViewpointType_Edit.vue';
  import { SubViewpointType_Edit } from '@/viewsBase/RT_Params/SubViewpointType_Edit';
  export default defineComponent({
    name: 'SubViewpointTypeCRUD',
    components: {
      // 组件注册
      SubViewpointType_EditCom,
    },
    setup() {
      const strTitle = ref('子观点类型表维护');
      const SubViewpointType_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new SubViewpointTypeCRUDEx(refDivLayout.value);
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
            SubViewpointTypeCRUD.EditObj = SubViewpointType_EditRef.value;
            SubViewpointType_Edit.EditObj = SubViewpointType_EditRef.value;
            break;
          default:
            break;
        }
        SubViewpointTypeCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SubViewpointType_EditRef,
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
