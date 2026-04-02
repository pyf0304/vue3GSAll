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
            <label id="lblPaperId_q" class="col-form-label text-right" style="width: 90px"
              >论文
            </label>
          </td>
          <td class="text-left">
            <select
              v-model="paperId_Sel"
              id="ddlPaperId_q"
              class="form-control form-control-sm"
              style="width: 500px"
              @change="SelectPaper()"
            />
          </td>
          <td class="text-right">
            <label
              id="lblSectionId_q"
              name="lblSectionId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >节Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSectionId_q"
              name="ddlSectionId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblSubViewpointTypeId_q"
              name="lblSubViewpointTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlSubViewpointTypeId_q"
              name="ddlSubViewpointTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblExplainTypeId_q"
              name="lblExplainTypeId_q"
              class="col-form-label text-right"
              style="width: 90px"
              >说明类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlExplainTypeId_q"
              name="ddlExplainTypeId_q"
              class="form-control form-control-sm"
              style="width: 200px"
            ></select>
          </td>
        </tr>
      </table>
    </div>
    <!--功能区-->

    <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblPaperSubViewpointList"
            name="lblPaperSubViewpointList"
            class="col-form-label text-info"
            style="width: 250px"
            >子观点表列表
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
        <li class="nav-item ml-3">
          <div class="btn-group" role="group" aria-label="Basic example">
            <select
              id="ddlSubViewpointTypeId_OrderNum"
              name="ddlSubViewpointTypeId_OrderNum"
              class="form-control form-control-sm"
              style="width: 60px"
            ></select>
            <button
              id="btnGoTop"
              name="btnGoTop"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoTop', '')"
              >移顶</button
            >
            <button
              id="btnUpMove"
              name="btnUpMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('UpMove', '')"
              >上移</button
            >
            <button
              id="btnDownMove"
              name="btnDownMove"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('DownMove', '')"
              >下移</button
            >
            <button
              id="btnGoBottum"
              name="btnGoBottum"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('GoBottum', '')"
              >移底</button
            >
            <button
              id="btnReOrder"
              name="btnReOrder"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('ReOrder', '')"
              >重序</button
            >
          </div>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>

      <div id="divPager" class="pager"> </div>
      <input id="hidSortvPaperSubViewpointBy" type="hidden" />
    </div>
    <!--编辑层-->
    <PaperSubViewpoint_EditCom ref="PaperSubViewpoint_EditRef"></PaperSubViewpoint_EditCom>
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
  import { PaperSubViewpointCRUDEx } from '@/views/GradEduPaper/PaperSubViewpointCRUDEx';
  import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
  import PaperSubViewpoint_EditCom from '@/views/GradEduPaper/PaperSubViewpoint_Edit.vue';
  import { PaperSubViewpoint_Edit } from '@/viewsBase/GradEduPaper/PaperSubViewpoint_Edit';
  export default defineComponent({
    name: 'PaperSubViewpointCRUD',
    components: {
      // 组件注册
      PaperSubViewpoint_EditCom,
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
      const paperId_Sel = ref('0');
      const strTitle = ref('子观点表维护');
      const PaperSubViewpoint_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        PaperSubViewpointCRUDEx.GetPropValue = GetPropValue;
        const objPage = new PaperSubViewpointCRUDEx(refDivLayout.value);
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
            PaperSubViewpointCRUD.EditObj = PaperSubViewpoint_EditRef.value;
            PaperSubViewpoint_Edit.EditObj = PaperSubViewpoint_EditRef.value;
            break;
          default:
            break;
        }
        PaperSubViewpointCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function GetPropValue(strPropName: string): string {
        let arr;
        switch (strPropName) {
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
      return {
        strTitle,
        btn_Click,
        PaperSubViewpoint_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        paperId_Sel,
      };
    },

    methods: {
      // 方法定义
      /**子观点_选择论文 */
      SelectPaper() {
        // const strTopicId = clsPrivateSessionStorage.topicIdInTree;
        // const strPaperId = this.paperId_Sel;
        // const divLayout = this.refDivLayout;
        // const div_SubViewpointList = GetDivObjInDivObj(divLayout, 'div_SubViewpointList');
        // objPage.SelectPaperForViewpoint(divLayout, strTopicId, strPaperId);
      },
    },
  });
</script>
<style scoped></style>
