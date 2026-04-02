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
              id="lblTopicName_q"
              name="lblTopicName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >栏目主题
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtTopicName_q"
              name="txtTopicName_q"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblConceptName_q"
              name="lblConceptName_q"
              class="col-form-label text-right"
              style="width: 90px"
              >概念名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtConceptName_q"
              name="txtConceptName_q"
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
            id="lblRTConceptRelaList"
            name="lblRTConceptRelaList"
            class="col-form-label text-info"
            style="width: 250px"
            >主题概念关系表列表
          </label>
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList" ref="refDivList" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvRTConceptRelaBy" type="hidden" />
    </div>
    <!--编辑层-->
    <RTConceptRela_EditCom ref="RTConceptRela_EditRef"></RTConceptRela_EditCom>
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
  import { RTConceptRelaCRUDEx } from '@/views/GradEduTopic/RTConceptRelaCRUDEx';
  import { RTConceptRelaCRUD } from '@/viewsBase/GradEduTopic/RTConceptRelaCRUD';
  import RTConceptRela_EditCom from '@/views/GradEduTopic/RTConceptRela_Edit.vue';
  import { RTConceptRela_Edit } from '@/viewsBase/GradEduTopic/RTConceptRela_Edit';
  export default defineComponent({
    name: 'RTConceptRelaCRUD1',
    components: {
      // 组件注册
      RTConceptRela_EditCom,
    },
    setup() {
      const strTitle = ref('主题概念关系表维护');
      const RTConceptRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new RTConceptRelaCRUDEx(refDivLayout.value);
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
            RTConceptRelaCRUD.EditObj = RTConceptRela_EditRef.value;
            RTConceptRela_Edit.EditObj = RTConceptRela_EditRef.value;
            break;
          default:
            break;
        }
        RTConceptRelaCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        RTConceptRela_EditRef,
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
