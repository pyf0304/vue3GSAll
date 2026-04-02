<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->

    <div
      id="divFunction"
      style="margin-right: 0px; margin-top: 10px; display: flex; justify-content: flex-end"
    >
      <ul class="nav">
        <li class="nav-item">
          <label id="lblThesisList" class="col-form-label text-info" style="width: 30%"> </label>
        </li>
        <li class="nav-item ml-3" style="float: right">
          <button
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddNewPaperRela', '')"
            ><font-awesome-icon icon="square-plus" />添加论文子资源</button
          >
        </li>
        <li class="nav-item ml-3" style="float: right">
          <button
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('AddRelaPaper', '')"
            ><font-awesome-icon icon="square-plus" />选择引用论文子资源</button
          >
        </li>
      </ul>
    </div>
    <div id="divRtPaperRela" class="div_List mt-2" style="width: 100%">
      <table class="table table-bordered table-hover table td table-sm">
        <thead>
          <tr>
            <th width="50">标识</th>
            <th width="320">资源名</th>
            <th width="160">资源类型</th>
            <th width="110">编辑日期</th>
            <th width="80">编辑用户</th>
            <th width="100">统计</th>
            <th width="80">操作</th>
          </tr>
        </thead>
        <tbody id="tbPaperRelaDataLst" class="x-cate"></tbody>
      </table>
      <div id="divPager" class="pager" value="1"> </div>
    </div>
    <PaperSubRes_EditCom ref="PaperSubRes_EditRef"></PaperSubRes_EditCom>
    <PaperSubResLstSelCom ref="PaperSubResLstSelRef" :paperId="paperId"></PaperSubResLstSelCom>
    <PdfViewerE ref="refPdfViewer" :filePath="filePath"></PdfViewerE>
    <Mp4Player ref="refMp4Player" :filePath="filePath"></Mp4Player>
    <PicShower ref="refPicShower" :filePath="filePath"></PicShower>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { PaperResRelaListInEx } from '@/views/GradEduPaper/PaperResRelaListInEx';
  import { PaperResRelaCRUD } from '@/viewsBase/GradEduPaper/PaperResRelaCRUD';
  import PaperResRela_EditCom from '@/views/GradEduPaper/PaperResRela_Edit.vue';
  import { PaperResRela_Edit } from '@/viewsBase/GradEduPaper/PaperResRela_Edit';

  import PaperSubRes_EditCom from '@/views/GradEduPaper/PaperSubRes_Edit.vue';
  import PaperSubResLstSelCom from '@/views/GradEduPaper/PaperSubResLstSel.vue';
  import PdfViewerE from '@/viewsShare/Components/PdfViewerE.vue';
  import Mp4Player from '@/viewsShare/Components/Mp4Player.vue';
  import PicShower from '@/viewsShare/Components/PicShower.vue';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { PaperSubRes_Edit } from '@/viewsBase/GradEduPaper/PaperSubRes_Edit';
  import { PaperSubResLstSel } from '@/views/GradEduPaper/PaperSubResLstSel';
  export default defineComponent({
    name: 'PaperResRelaListIn',
    components: {
      // 组件注册
      PaperResRela_EditCom,
      PaperSubRes_EditCom,
      PaperSubResLstSelCom,
      PdfViewerE,
      Mp4Player,
      PicShower,
    },
    props: {
      paperId: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const filePath = ref('测试文件名');
      const refPdfViewer = ref();
      const refMp4Player = ref();
      const refPicShower = ref();
      const topicId = ref('');
      const PaperSubRes_EditRef = ref();
      const PaperSubResLstSelRef = ref();
      const strTitle = ref('PaperResRela维护');
      const PaperResRela_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        if (clsPrivateSessionStorage.topicIdInTree != '')
          topicId.value = clsPrivateSessionStorage.topicIdInTree;
        PaperResRelaCRUD.vuebtn_Click = btn_Click;
        PaperResRelaCRUD.GetPropValue = GetPropValue;
        const objPage = new PaperResRelaListInEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function showPdfViewer(strFilePath: string) {
        filePath.value = strFilePath;
        refPdfViewer.value.showDialog();
      }
      function showMp4Player(strFilePath: string) {
        filePath.value = strFilePath;
        refMp4Player.value.showDialog();
      }
      function showPicShower(strFilePath: string) {
        filePath.value = strFilePath;
        refPicShower.value.showDialog();
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'showPdfViewer':
            showPdfViewer(strKeyId);
            return;
          case 'showMp4Player':
            showMp4Player(strKeyId);
            return;
          case 'showPicShower':
            showPicShower(strKeyId);
            return;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            PaperResRelaCRUD.EditObj = PaperResRela_EditRef.value;
            PaperResRela_Edit.EditObj = PaperResRela_EditRef.value;
            break;
          case 'AddNewPaperRela':
            PaperSubRes_Edit.EditObj = PaperSubRes_EditRef.value;
            console.log('PaperSubRes_Edit.EditRef:', PaperSubRes_Edit.EditObj);
            break;
          case 'AddRelaPaper':
            PaperSubResLstSel.EditObj = PaperResRela_EditRef.value;
            console.log('PaperSubResLstSel.EditRef:', PaperSubResLstSel.EditRef);
            break;
          default:
            break;
        }
        PaperResRelaListInEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return ''; //idCurrEduCls.value;
          case 'paperId':
            return props.paperId;
          default:
            return '';
        }
        return '';
      }
      return {
        strTitle,
        btn_Click,
        PaperResRela_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        PaperSubRes_EditRef,
        PaperSubResLstSelRef,
        topicId,
        filePath,
        refPdfViewer,
        showPdfViewer,
        refMp4Player,
        refPicShower,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
