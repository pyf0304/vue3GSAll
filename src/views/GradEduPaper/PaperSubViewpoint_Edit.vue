<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout_Viewpoint" ref="refDivEdit" class="tab_layout">
      <table
        id="tabwucPaperSubViewpoint"
        name="tabwucPaperSubViewpoint"
        style="width: 90%; padding: 1px; border: 0px"
        class="table table-bordered table-hover"
      >
        <tr>
          <td class="NameTD">
            <label
              id="lblSectionId"
              name="lblSectionId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              知识类型
            </label>
          </td>
          <td class="ValueTD">
            <select
              v-model="gsKnowledgeTypeId"
              id="ddlgsKnowledgeTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
              @change="ddlgsKnowledgeTypeId_ItemChange"
            />
          </td>
          <td class="NameTD"> </td>
          <td class="ValueTD"> </td>
        </tr>

        <tr>
          <td class="NameTD">
            <label
              id="lblSectionId"
              name="lblSectionId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              论文节
            </label>
          </td>
          <td class="ValueTD">
            <select
              id="ddlSectionId"
              name="ddlSectionId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="NameTD">
            <label
              id="lblShareId"
              name="lblShareId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              分享权限
            </label>
          </td>
          <td class="ValueTD">
            <select
              id="ddlShareId"
              name="ddlShareId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblSubViewpointTypeId"
              name="lblSubViewpointTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              区域类型
            </label>
          </td>
          <td class="ValueTD">
            <select
              v-model="subViewpointTypeId"
              id="ddlSubViewpointTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td v-show="gsKnowledgeTypeId != '03'" class="NameTD">
            <label
              id="lblAttitudesId"
              name="lblRWTitle"
              class="col-form-label text-right"
              style="width: 90px"
            >
              观点态度
            </label>
          </td>
          <td v-show="gsKnowledgeTypeId != '03'"
            ><select id="ddlAttitudesId" class="form-control form-control-sm" style="width: 200px"
          /></td>
          <td v-show="false" class="NameTD">
            <label id="lblRWTitle" class="col-form-label text-right" style="width: 90px">
              类型标题
            </label>
          </td>
          <td v-show="false"
            ><input id="txtRWTitle" class="form-control form-control-sm" style="width: 200px"
          /></td>
        </tr>

        <tr v-show="gsKnowledgeTypeId != '07'">
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              观点内容
            </label>
          </td>
          <td class="ValueTD" colspan="3">
            <textarea
              id="txtSubViewpointContent"
              class="form-control form-control-sm"
              style="width: 550px; height: 120px"
            ></textarea>
          </td>
        </tr>

        <tr v-if="gsKnowledgeTypeId == '07'">
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              姓名
            </label>
          </td>
          <td class="ValueTD">
            <input
              v-model="fullName"
              id="txtFullName"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              工作单位
            </label>
          </td>
          <td class="ValueTD">
            <input
              v-model="workUnit"
              id="txtWorkUnit"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr v-if="gsKnowledgeTypeId == '07'">
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              国籍
            </label>
          </td>
          <td class="ValueTD">
            <input
              v-model="nationality"
              id="txtNationality"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              专业
            </label>
          </td>
          <td class="ValueTD">
            <input
              v-model="major"
              id="txtMajor"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr v-if="gsKnowledgeTypeId == '07'">
          <td class="NameTD">
            <label
              id="lblSubViewpointContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              成就
            </label>
          </td>
          <td class="ValueTD" colspan="3">
            <textarea
              v-model="achievement"
              id="txtAchievement"
              class="form-control form-control-sm"
              style="width: 550px; height: 80px"
            ></textarea>
          </td>
        </tr>

        <tr>
          <td class="NameTD">
            <label id="lblExplainContent" class="col-form-label text-right" style="width: 90px">
              说明内容
            </label>
          </td>
          <td class="ValueTD" colspan="3">
            <textarea
              id="txtExplainContent"
              name="txtExplainContent"
              class="form-control form-control-sm"
              style="width: 550px; height: 80px"
            ></textarea>
          </td>
        </tr>
        <tr v-if="gsKnowledgeTypeId == '04' || gsKnowledgeTypeId == '05'">
          <td class="NameTD">
            <label id="lblConclusion" class="col-form-label text-right" style="width: 90px">
              结论
            </label>
          </td>
          <td class="ValueTD" colspan="3">
            <textarea
              v-model="conclusion"
              id="txtConclusion"
              class="form-control form-control-sm"
              style="width: 550px; height: 80px"
            ></textarea>
          </td>
        </tr>
        <tr v-show="gsKnowledgeTypeId == '06'">
          <td class="NameTD">
            <label id="lblOperationTypeId" class="col-form-label text-right" style="width: 90px">
              操作类型
            </label>
          </td>
          <td class="ValueTD">
            <select
              v-model="operationTypeId"
              id="ddlOperationTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td class="NameTD">
            <label id="lblLevelId" class="col-form-label text-right" style="width: 90px">
              级别
            </label>
          </td>
          <td class="ValueTD">
            <select
              v-model="levelId"
              id="ddlLevelId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr v-show="gsKnowledgeTypeId == '01' || gsKnowledgeTypeId == '02'">
          <td class="NameTD">
            <label
              id="lblExplainTypeId"
              name="lblExplainTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              说明类型
            </label>
          </td>
          <td class="ValueTD">
            <select
              id="ddlExplainTypeId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td></td>
          <td style="display: none">
            <span class="form-control form-control-sm" style="width: 200px">
              <input id="chkIsPublic" type="checkbox" checked="true" Text="是否公开" /><label
                for="chkIsPublic"
                >是否公开</label
              >
            </span>
          </td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblUploadfileUrl"
              name="lblUploadfileUrl"
              class="col-form-label text-right"
              style="width: 90px"
            >
              上传图片
            </label>
          </td>
          <td id="tdInputsWrapper" class="ValueTD" colspan="3">
            <input id="txtUploadImgFile" type="file" @change="handleFileChange($event)" />
            <button
              id="AddMoreFileBox"
              type="button"
              class="btn btn-info btn-sm"
              data-dismiss="modal"
              >添加更多图片</button
            >
          </td>
        </tr>

        <tr>
          <td class="NameTD">
            <label
              id="lblLiteratureSourcesId"
              name="lblLiteratureSourcesId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              文献来源
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtLiteratureSourcesId"
              disabled
              class="form-control form-control-sm"
              style="width: 100px"
            />
          </td>
          <td
            ><button
              id="btnselectPaper"
              type="button"
              class="btn btn-info btn-sm"
              style="margin-top: 2px; width: 100px"
              @click="selectPaper_Click()"
              >引用文献</button
            ></td
          >
          <td></td>
        </tr>
        <tr style="display: none">
          <td class="NameTD">
            <label
              id="lblPageNumber"
              name="lblPageNumber"
              class="col-form-label text-right"
              style="width: 90px"
            >
              页码
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtPageNumber"
              name="txtPageNumber"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
        </tr>
        <tr style="display: none">
          <td class="NameTD">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
            >
              序号
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtOrderNum"
              name="txtOrderNum"
              class="form-control form-control-sm"
              style="width: 200px"
              value="30"
            />
          </td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblMemo"
              name="lblMemo"
              class="col-form-label text-right"
              style="width: 90px"
            >
              备注
            </label>
          </td>
          <td class="ValueTD" colspan="3">
            <textarea
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 550px; height: 60px"
            ></textarea>
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hdnFileOne" type="hidden" />
      <input id="hdnFileTwo" type="hidden" />
      <input id="hdnFileThree" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelPaperSubViewpoint" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitPaperSubViewpoint"
        type="primary"
        @click="btnPaperSubViewpoint_Edit_Click('Submit_Dialog', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { PaperSubViewpointCRUDEx } from '@/views/GradEduPaper/PaperSubViewpointCRUDEx';
  import { PaperSubViewpoint_EditEx } from '@/views/GradEduPaper/PaperSubViewpoint_EditEx';
  import { SetLabelHtmlByIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { enumgs_KnowledgeType } from '@/ts/L0Entity/RT_Params/clsgs_KnowledgeTypeEN';
  import { CitingPaper } from '@/views/GradEduEx/CitingPaper';
  export default defineComponent({
    name: 'PaperSubViewpointEdit',
    components: {
      // 组件注册
    },
    setup() {
      const mySelectedFile = ref(null);
      const strTitle = ref('子观点表编辑');
      const refDivEdit = ref();
      const gsKnowledgeTypeId = ref();
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');

      const subViewpointTypeId = ref('00000000');
      const fullName = ref('');
      const workUnit = ref('');
      const nationality = ref('');
      const major = ref('');
      const achievement = ref('');
      const conclusion = ref('');
      const levelId = ref('01');
      const operationTypeId = ref('01');

      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaperSubViewpoint':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPaperSubViewpoint':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaperSubViewpoint':
            return strCancelButtonText.value;
          case 'btnSubmitPaperSubViewpoint':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      function handleFileChange(event: any) {
        // 当文件选择框的值发生变化时触发
        mySelectedFile.value = event.target.files[0]; // 获取选择的文件
        console.log('selectedFile.value:', mySelectedFile.value);
      }
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        gsKnowledgeTypeId,
        refDivEdit,
        subViewpointTypeId,
        fullName,
        workUnit,
        nationality,
        major,
        achievement,
        conclusion,
        levelId,
        operationTypeId,
        handleFileChange,

        mySelectedFile,
      };
    },

    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //PaperSubViewpoint_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPaperSubViewpoint_Edit_Click(strCommandName: string, strKeyId: string) {
        PaperSubViewpoint_EditEx.mySelectedFile = this.mySelectedFile;
        PaperSubViewpoint_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
      //选择文献
      selectPaper_Click() {
        const objPage = new CitingPaper(this.refDivEdit);
        objPage.PageLoad();

        // ShowDialog2();
      },

      ddlgsKnowledgeTypeId_ItemChange() {
        const divName = this.refDivEdit;
        // alert('ddlgsKnowledgeTypeId_ItemChange' + this.gsKnowledgeTypeId);
        switch (this.gsKnowledgeTypeId) {
          case enumgs_KnowledgeType.PersonalOpinion_01:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '观点内容');

            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '说明内容');
            break;
          case enumgs_KnowledgeType.ExpertOpinion_02:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '观点内容');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '说明内容');
            break;
          case enumgs_KnowledgeType.Concept_03:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '概念名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '概念内容');
            break;
          case enumgs_KnowledgeType.ObjectiveFact_04:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '事实标题');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '客观内容');
            break;
          case enumgs_KnowledgeType.ObjectiveData_05:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '事实标题');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '客观内容');
            break;
          case enumgs_KnowledgeType.Skill_06:
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '技能名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '实施过程');

            break;
          case enumgs_KnowledgeType.SocialRelationships_07:
            // pobjPaperSubViewpointEN.SetSubViewpointContent(fullName); // 详情内容
            SetLabelHtmlByIdInDivObj(divName, 'lblSubViewpointContent', '全名');
            SetLabelHtmlByIdInDivObj(divName, 'lblExplainContent', '详细说明');
            break;
        }
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
