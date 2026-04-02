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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <div id="tabLayout">
        <div id="divEditRegion" tabindex="-1">
          <form id="uploadForm" method="post" enctype="multipart/form-data">
            <div>
              <div style="width: 98%; margin-left: 10px">
                <div>
                  <table
                    id="tabwucPaper"
                    name="tabwucPaper"
                    class="table table-bordered table-hover table td table-sm"
                  >
                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblPaperId"
                          name="lblPaperId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          论文Id
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtPaperId"
                          name="txtPaperId"
                          class="form-control form-control-sm"
                          style="width: 300px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblPaperTitle"
                          name="lblPaperTitle"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          论文标题
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtPaperTitle"
                          name="txtPaperTitle"
                          class="form-control form-control-sm"
                          style="width: 300px"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblPaperContent"
                          name="lblPaperContent"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          论文摘要
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtPaperContent"
                          name="txtPaperContent"
                          class="form-control form-control-sm"
                          style="width: 100%; height: 260px"
                        ></textarea>
                      </td>
                    </tr>
                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblPaperTypeId"
                          name="lblPaperTypeId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          论文类型
                        </label>
                      </td>
                      <td class="ValueTD">
                        <select
                          id="ddlPaperTypeId"
                          name="ddlPaperTypeId"
                          class="form-control form-control-sm"
                          style="width: 200px"
                          onchange="ddlPaperTypeChange()"
                        />
                      </td>
                      <td class="NameTD">
                        <label
                          id="lblPaperStatusId"
                          name="lblPaperStatusId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          论文状态
                        </label>
                      </td>
                      <td class="ValueTD">
                        <select
                          id="ddlPaperStatusId"
                          name="ddlPaperStatusId"
                          class="form-control form-control-sm"
                          style="width: 200px"
                        />
                      </td>
                    </tr>
                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblPeriodical"
                          name="lblPeriodical"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          期刊
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtPeriodical"
                          name="txtPeriodical"
                          class="form-control form-control-sm"
                          style="width: 180px"
                        />
                      </td>
                      <td class="NameTD">
                        <label
                          id="lblAuthor"
                          name="lblAuthor"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          作者
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtAuthor"
                          name="txtAuthor"
                          class="form-control form-control-sm"
                          style="width: 180px"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblResearchQuestion"
                          name="lblResearchQuestion"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          研究问题
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtResearchQuestion"
                          name="txtResearchQuestion"
                          class="form-control form-control-sm"
                          style="width: 300px"
                        />
                      </td>
                      <td class="NameTD">
                        <label
                          id="lblKeyword"
                          name="lblKeyword"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          关键字
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtKeyword"
                          name="txtKeyword"
                          class="form-control form-control-sm"
                          style="width: 300px"
                        />
                      </td>
                    </tr>
                    <tr id="trAskQuestion">
                      <td class="NameTD">
                        <label
                          id="lblAskQuestion"
                          name="lblAskQuestion"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          问题提出
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtAskQuestion"
                          name="txtAskQuestion"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 55px"
                        ></textarea>
                      </td>
                    </tr>
                    <tr id="trResearchStatus">
                      <td class="NameTD">
                        <label
                          id="lblResearchStatus"
                          name="lblResearchStatus"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          目前研究的现状
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtResearchStatus"
                          name="txtResearchStatus"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 55px"
                        ></textarea>
                      </td>
                    </tr>

                    <tr id="trInnovationPoints">
                      <td class="NameTD">
                        <label
                          id="lblInnovationPoints"
                          name="lblInnovationPoints"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          创新点
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtInnovationPoints"
                          name="txtInnovationPoints"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 150px"
                        ></textarea>
                      </td>
                    </tr>
                    <tr id="trResearchDesign">
                      <td class="NameTD">
                        <label
                          id="lblResearchDesign"
                          name="lblResearchDesign"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          研究设计
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtResearchDesign"
                          name="txtResearchDesign"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 150px"
                        ></textarea>
                      </td>
                    </tr>
                    <tr id="trDimensionDataProcess">
                      <td class="NameTD">
                        <label
                          id="lblDimensionDataProcess"
                          name="lblDimensionDataProcess"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          数据处理的维度
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtDimensionDataProcess"
                          name="txtDimensionDataProcess"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 150px"
                        ></textarea>
                      </td>
                    </tr>
                    <tr id="trExpectedConclusion">
                      <td class="NameTD">
                        <label
                          id="lblExpectedConclusion"
                          name="lblExpectedConclusion"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          预期结论
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtExpectedConclusion"
                          name="txtExpectedConclusion"
                          class="form-control form-control-sm"
                          style="width: 98%; height: 150px"
                        ></textarea>
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblLiteratureTypeId"
                          name="lblLiteratureTypeId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          文献类型(架构)
                        </label>
                      </td>
                      <td class="ValueTD">
                        <select
                          id="ddlLiteratureTypeId"
                          name="ddlLiteratureTypeId"
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
                          分享
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

                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblLiteratureSources"
                          name="lblLiteratureSources"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          文献来源
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtLiteratureSources"
                          name="txtLiteratureSources"
                          class="form-control form-control-sm"
                          style="width: 400px"
                        />
                      </td>
                      <td class="NameTD">
                        <label
                          id="lblLiteratureLink"
                          name="lblLiteratureLink"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          文献链接
                        </label>
                      </td>
                      <td class="ValueTD" colspan="2">
                        <input
                          id="txtLiteratureLink"
                          name="txtLiteratureLink"
                          class="form-control form-control-sm"
                          style="width: 400px"
                        />
                      </td>

                      <td class="ValueTD">
                        <span class="form-control" style="width: 200px">
                          <input
                            id="chkIsQuotethesis"
                            type="checkbox"
                            name="chkIsQuotethesis"
                            Text="是否引用论文"
                          /><label for="chkIsQuotethesis">是否引用论文</label>
                        </span>
                      </td>
                    </tr>
                    <tr style="display: none">
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
                      <td class="ValueTD" colspan="3">
                        <input id="txtUploadfileUrl" type="file" name="txtUploadfileUrl" />
                      </td>
                    </tr>
                    <tr id="UploadFiles">
                      <td class="NameTD">
                        <label
                          id="lblUploadfileUrl"
                          name="lblUploadfileUrl"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          上传附件
                        </label>
                      </td>
                      <td id="tdInputsWrapper" class="ValueTD" colspan="3">
                        <input
                          id="txtUploadfile"
                          type="file"
                          name="txtUploadfile"
                          @change="handleFileChange($event)"
                        />
                        <button
                          id="AddMoreFileBox"
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                          >添加更多附件</button
                        >
                      </td>
                    </tr>

                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblQuoteId"
                          name="lblQuoteId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          引用Id
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtQuoteId"
                          name="txtQuoteId"
                          class="form-control form-control-sm"
                          style="width: 200px"
                        />
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr style="display: none">
                      <td class="NameTD"></td>
                      <td class="ValueTD">
                        <span class="form-control" style="width: 200px">
                          <input
                            id="chkIsChecked"
                            type="checkbox"
                            name="chkIsChecked"
                            Text="是否检查"
                          /><label for="chkIsChecked">是否检查</label>
                        </span>
                      </td>
                    </tr>
                    <tr style="display: none">
                      <td class="NameTD">
                        <label
                          id="lblChecker"
                          name="lblChecker"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          审核人
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          id="txtChecker"
                          name="txtChecker"
                          class="form-control form-control-sm"
                          style="width: 200px"
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
                        <input
                          id="txtMemo"
                          name="txtMemo"
                          class="form-control form-control-sm"
                          style="width: 400px; height: 55px"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    id="btnCancel_Paper"
                    type="button"
                    class="btn btn-default btn-sm"
                    @click="CloseWindow()"
                    >关闭</button
                  >
                  <button
                    id="btnSubmit_Paper"
                    type="button"
                    class="btn btn-primary"
                    @click="btnPaper_Edit_Click('mySubmit', '')"
                    >添加</button
                  >
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal -->
          </form>
        </div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidPaperRWId" type="hidden" />
      <input id="hidPaperId" type="hidden" />
      <input id="hidUserId" type="hidden" />
      <input id="hidPaperLogTypeId" type="hidden" />
      <input id="hdnpic" type="hidden" />
      <!-- 研究成果 -->
      <input id="hdnFileOne" type="hidden" />
      <input id="hdnFileTwo" type="hidden" />
      <input id="hdnFileThree" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelPaper" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button id="btnSubmitPaper" type="primary" @click="btnPaper_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { PaperCRUDEx } from '@/views/GradEduPaper/PaperCRUDEx';
  import { Paper_EditEx } from '@/views/GradEduPaper/Paper_EditEx';
  import { P_Paper_EditEx } from '@/views/GradEduPublicPage/P_Paper_EditEx';
  export default defineComponent({
    name: 'PaperEdit',
    components: {
      // 组件注册
    },
    setup() {
      const mySelectedFile = ref(null);
      const strTitle = ref('论文表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaper':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPaper':
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
          case 'btnCancelPaper':
            return strCancelButtonText.value;
          case 'btnSubmitPaper':
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
        mySelectedFile,
        handleFileChange,
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
        //Paper_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPaper_Edit_Click(strCommandName: string, strKeyId: string) {
        P_Paper_EditEx.mySelectedFile = this.mySelectedFile;
        P_Paper_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      CloseWindow() {
        return;
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
