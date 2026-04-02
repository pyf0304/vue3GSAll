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
              id="lblTopicId_q"
              name="lblTopicId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >主题
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTopicId_q"
              name="ddlTopicId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblProposePeople_q"
              name="lblProposePeople_q"
              class="col-form-label text-right"
              style="width: 90px"
              >提出人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProposePeople_q"
              name="txtProposePeople_q"
              class="form-control form-control-sm"
              style="width: 120px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblgsKnowledgeTypeId_q"
              name="lblgsKnowledgeTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >知识类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlgsKnowledgeTypeId_q"
              name="ddlgsKnowledgeTypeId_q"
              class="form-control form-control-sm"
              style="width: 120px"
            ></select>
          </td>

          <td class="text-right">
            <label
              id="lblClassificationId_q"
              name="lblClassificationId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >分类
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlClassificationId_q"
              name="ddlClassificationId_q"
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
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblRTViewpointList"
            name="lblRTViewpointList"
            class="col-form-label text-info"
            style="width: 250px"
            >主题观点关系列表
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
      <div id="divDataLst" class="div_List"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortRTViewpointBy" type="hidden" />
    </div>
    <!--编辑层-->
    <RTViewpoint_EditCom ref="RTViewpoint_EditRef"></RTViewpoint_EditCom>
    <!--详细信息层-->
    <RTViewpoint_DetailCom ref="RTViewpoint_DetailRef"></RTViewpoint_DetailCom>
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
  import { RTViewpointCRUDEx } from '@/views/GradEduTopic/RTViewpointCRUDEx';
  import { RTViewpointCRUD } from '@/viewsBase/GradEduTopic/RTViewpointCRUD';
  import RTViewpoint_EditCom from '@/views/GradEduTopic/RTViewpoint_Edit.vue';
  import RTViewpoint_DetailCom from '@/views/GradEduTopic/RTViewpoint_Detail.vue';
  import { RTViewpoint_Edit } from '@/viewsBase/GradEduTopic/RTViewpoint_Edit';
  import { RTViewpoint_Detail } from '@/viewsBase/GradEduTopic/RTViewpoint_Detail';
  export default defineComponent({
    name: 'RTViewpointCRUD',
    components: {
      // 组件注册
      RTViewpoint_EditCom,
      RTViewpoint_DetailCom,
    },
    props: {
      gsKnowledgeTypeId: {
        type: String,
        required: false,
      },
      paras: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const strTitle = ref('主题观点关系维护');
      const RTViewpoint_EditRef = ref();
      const RTViewpoint_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      onMounted(() => {
        RTViewpointCRUDEx.vuebtn_Click = btn_Click;
        RTViewpointCRUDEx.GetPropValue = GetPropValue;
        const objPage = new RTViewpointCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });

      function GetPropValue(strPropName: string): string {
        let arr;
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'gsKnowledgeTypeId':
            if (props.gsKnowledgeTypeId != null) return props.gsKnowledgeTypeId;
            if (props.paras != null && props.paras != '') {
              arr = props.paras.split('=');
              if (arr.length == 2) return arr[1];
            }
            return '';
          // case 'paperId':
          //   return paperId.value;

          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            RTViewpointCRUD.DetailObj = RTViewpoint_DetailRef.value;
            RTViewpoint_Detail.DetailObj = RTViewpoint_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            RTViewpointCRUD.EditObj = RTViewpoint_EditRef.value;
            RTViewpoint_Edit.EditObj = RTViewpoint_EditRef.value;
            break;
          default:
            break;
        }
        RTViewpointCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTViewpoint_EditRef,
        RTViewpoint_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
