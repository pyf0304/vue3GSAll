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
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>
      <div id="tabLayout" class="tab_layout">
        <div class="tab-header">
          <div
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: tab.id === activeTabId }"
            @click="changeTab(tab.id)"
          >
            {{ tab.label }}
          </div>
        </div>

        <form id="uploadForm" method="post" enctype="multipart/form-data">
          <div style="width: 98%; margin-left: 10px">
            <!-- <div class="tab-content"> -->
            <div v-show="activeTabId === 'SimpleEdit'" id="SimpleEdit">
              <table
                id="tabwucPaper"
                style="width: 100%; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr style="display: none">
                  <td class="NameTD">
                    <label id="lblPaperId" class="col-form-label text-right" style="width: 90px">
                      论文Id
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <input id="txtPaperId" type="text" class="form-control" style="width: 200px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblPaperTitle" class="col-form-label text-right" style="width: 90px">
                      论文标题
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtPaperTitle"
                      type="text"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
                  </td>
                  <td class="NameTD"></td>
                  <td class="ValueTD">
                    <span class="form-control" style="width: 200px">
                      <input id="chkIsQuotethesis" type="checkbox" Text="是否引用论文" /><label
                        for="chkIsQuotethesis"
                        >是否引用论文</label
                      >
                    </span>
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblLiteratureTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      文献类型
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      v-model="LiteratureTypeId"
                      id="ddlLiteratureTypeId"
                      class="form-control"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblPaperContent"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      主题内容
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <textarea
                      id="txtPaperContent"
                      class="form-control form-control-sm"
                      style="width: 100%; height: 300px"
                    ></textarea>
                  </td>
                </tr>
                <tr style="display: none">
                  <td class="NameTD">
                    <label
                      id="lblPaperTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      论文类型
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select
                      id="ddlPaperTypeId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                      onchange="ddlPaperTypeChange()"
                    />
                  </td>
                  <td class="NameTD">
                    <label
                      id="lblPaperStatusId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      论文状态
                    </label>
                  </td>
                  <td class="ValueTD">
                    <select id="ddlPaperStatusId" class="form-control" style="width: 200px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblPeriodical" class="col-form-label text-right" style="width: 90px">
                      期刊
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtPeriodical" class="form-control" style="width: 200px" />
                  </td>
                  <td class="NameTD">
                    <label id="lblAuthor" class="col-form-label text-right" style="width: 90px">
                      作者
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtAuthor" class="form-control" style="width: 200px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUploadfileUrl"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      上传附件
                    </label>
                  </td>
                  <td id="tdInputsWrapper" class="ValueTD" colspan="3">
                    <input id="txtUploadfile" type="file" @change="handleFileChange($event)" />
                    <button
                      id="AddMoreFileBox"
                      type="button"
                      class="btn btn-primary"
                      data-dismiss="modal"
                      >添加更多附件</button
                    >
                  </td>
                </tr>
              </table>
            </div>
            <div v-show="activeTabId === 'extendEdit'" id="extendEdit">
              <table
                id="tabwucPaper"
                style="width: 100%; padding: 1px; border: 0px"
                class="table table-bordered table-hover"
              >
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblResearchQuestion"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      研究问题
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtResearchQuestion" class="form-control" style="width: 400px" />
                  </td>
                  <td class="NameTD">
                    <label id="lblKeyword" class="col-form-label text-right" style="width: 90px">
                      关键字
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtKeyword" class="form-control" style="width: 400px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label
                      id="lblLiteratureSources"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      文献来源
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtLiteratureSources" class="form-control" style="width: 400px" />
                  </td>
                  <td class="NameTD">
                    <label
                      id="lblLiteratureLink"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      文献链接
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtLiteratureLink" class="form-control" style="width: 400px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblShareId" class="col-form-label text-right" style="width: 90px">
                      分享
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <select id="ddlShareId" class="form-control" style="width: 200px" />
                  </td>
                </tr>

                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUploadfileUrl"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      上传图片
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <input id="txtUploadfileUrl" type="file" />
                  </td>
                </tr>
                <tr style="display: none">
                  <td class="NameTD"></td>
                  <td class="ValueTD">
                    <span class="form-control" style="width: 200px">
                      <input id="chkIsChecked" type="checkbox" Text="是否检查" /><label
                        for="chkIsChecked"
                        >是否检查</label
                      >
                    </span>
                  </td>
                </tr>
                <tr style="display: none">
                  <td class="NameTD">
                    <label id="lblChecker" class="col-form-label text-right" style="width: 90px">
                      审核人
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input id="txtChecker" class="form-control" style="width: 200px" />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblMemo" class="col-form-label text-right" style="width: 90px">
                      备注
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <input id="txtMemo" class="form-control" style="width: 500px; height: 40px" />
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <!-- </div> -->
        </form>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortvPaperBy" type="hidden" value="" />

      <input id="hdnpic" type="hidden" />

      <input id="hdnFileOne" type="hidden" />
      <input id="hdnFileTwo" type="hidden" />
      <input id="hdnFileThree" type="hidden" />

      <input id="hidSortvXzMajorDirectionBy" type="hidden" value="" />

      <input id="hidMajorDirectionId" type="hidden" />
      <input id="hidUserId" type="hidden" />

      <!-- 主题Id  -->
      <input id="hidTopicId" type="hidden" />
      <!-- 论文Id  -->
      <input id="hidPaperId" type="hidden" />

      <!-- 教学班Id -->
      <input id="hidIdCurrEduCls" type="hidden" />

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
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
  import { defineComponent, reactive, ref } from 'vue';
  import $ from 'jquery';
  import { Format } from '@/ts/PubFun/clsString';
  import { PaperCRUDEx } from '@/views/GradEduPaper/PaperCRUDEx';
  import { Paper_EditEx } from '@/views/GradEduPaper/Paper_EditEx';
  import { P_Paper_EditV2Ex } from '@/views/GradEduPublicPage/P_Paper_EditV2Ex';
  import { GetInputObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { File_IsHasFile, File_UploadFile } from '@/ts/FunClass/clsPubFun4Web';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
  // import textboxio from 'textboxio';
  export default defineComponent({
    name: 'PaperEdit',
    components: {
      // 组件注册
    },
    setup() {
      const activeTabId = ref('SimpleEdit');
      const tabs = reactive([
        { id: 'SimpleEdit', label: '基本信息' },
        { id: 'extendEdit', label: '扩展信息' },
      ]);
      const LiteratureTypeId = ref('');
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
      const mySelectedFile = ref(null);
      const dialogVisible = ref(false);
      const refDivEdit = ref();
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
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
        activeTabId,
        tabs,
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
        refDivEdit,
        LiteratureTypeId,
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
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        // P_Paper_EditV2Ex.btnEdit_Click('changeTab', tabId);
      },
      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      async btnPaper_Edit_Click(strCommandName: string, strKeyId: string) {
        const objUploadResponseData = await this.mySubmit('');
        if (objUploadResponseData.errId != 0) return;
        P_Paper_EditV2Ex.uploadResponseData = objUploadResponseData;
        P_Paper_EditV2Ex.btnEdit_Click(strCommandName, strKeyId);
      },
      /*
           提交编辑
          (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
          */
      async mySubmit(pstrOp: string): Promise<UploadResponseData> {
        console.log(`提交${pstrOp}`);
        const objUploadResponseData = new UploadResponseData();
        objUploadResponseData.errId = -1;

        const divName = this.refDivEdit;
        if (divName == null) return objUploadResponseData;

        const strLiteratureTypeId = $('#ddlLiteratureTypeId').val();
        console.log(strLiteratureTypeId);
        if ($('#txtPaperTitle').val() == '') {
          alert('论文标题不能为空!');
        }
        const txtPaperTitle = $('#txtPaperTitle').val();
        const txtPeriodical = $('#txtPeriodical').val();
        const txtAuthor = $('#txtAuthor').val();
        const txtResearchQuestion = $('#txtResearchQuestion').val();
        const txtLiteratureSources = $('#txtLiteratureSources').val();
        const txtLiteratureLink = $('#txtLiteratureLink').val();
        if (typeof txtPaperTitle === 'string' && txtPaperTitle.length > 100) {
          alert('论文标题长度不能超过100');
        } else if ($('#txtPeriodical').val() == '') {
          alert('期刊不能为空!');
        } else if (typeof txtPeriodical === 'string' && txtPeriodical.length > 50) {
          alert('期刊长度不能超过50!');
        } else if ($('#txtAuthor').val() == '') {
          alert('论文作者不能为空!');
        } else if (typeof txtAuthor === 'string' && txtAuthor.length > 100) {
          alert('论文作者长度不能超过100!');
        } else if (typeof txtResearchQuestion === 'string' && txtResearchQuestion.length > 500) {
          alert('研究问题长度不能超过500!');
        } else if (typeof txtLiteratureSources === 'string' && txtLiteratureSources.length > 500) {
          alert('文献来源长度不能超过500!');
        } else if (typeof txtLiteratureLink === 'string' && txtLiteratureLink.length > 500) {
          alert('文献链接长度不能超过500!');
        } else if ($('#ddlLiteratureTypeId').val() == 0) {
          alert('文献类型(论文类型)不能为空!');
        } else {
          $('#divLoading').show();
          //防止重复提交
          $('#btnOKUpd').attr('disabled', 'true');
          //判断文件格式；
        }
        //判断图片附件格式、以及文件附件格式

        const bolIsHasFile = await File_IsHasFile(divName, '.pdf,.PDF');
        if (bolIsHasFile == true) {
          let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
          let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_Paper;
          const currHostname = window.location.hostname;

          if (currHostname == 'localhost') {
            strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
          }
          if (this.LiteratureTypeId == '05') {
            strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTraining;
          }
          // const divName = this.refDivEdit;
          const responseData = await File_UploadFile(
            strUploadWebMainDir,
            strUploadWebSubDir,
            this.mySelectedFile,
          );
          return responseData;
        }
        objUploadResponseData.errId = 0;

        return objUploadResponseData;
      },

      doUpload() {
        console.error('Enter doUpload');

        //       const formData = new FormData($('#uploadForm')[0]);
        const formElement = document.getElementById('uploadForm');
        let formData;
        if (formElement instanceof HTMLFormElement) {
          formData = new FormData(formElement);

          // Now you can work with the formData object
        } else {
          console.error('Element with id "uploadForm" is not an HTML form element.');
        }
        let strUrl = '@Url.Action("UploadFile", "testUploadPic")';
        console.log('strUrl1:', strUrl);

        if (strUrl == '') {
          //            strUrl = 'https://www.sh-tz.com/GS/ApitestUploadPic/';
          strUrl = 'http://localhost:49590/GraduateStudyWebApp/Api/testUploadPic/UploadFile/';
        }
        //const strUrl = getUploadPaperUrl();
        console.log('strUrl:', strUrl);
        $.ajax({
          url: strUrl,
          type: 'post',
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          processData: false,
          success: (returndata) => {
            console.error('returndata.status');
            //console.error(returndata);
            console.error(returndata.status);
            //成功/为空
            if (returndata.status == 0 || returndata.status == -1) {
              //如果图片地址为空，那么是修改 则不用存放地址；
              if (returndata.fileNamePic != '') {
                $('#hdnpic').val(returndata.fileNamePic);
              }
              //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
              if (returndata.fileNameOne != '') {
                $('#hdnFileOne').val(returndata.fileNameOne);
              }
              if (returndata.fileNameTwo != '') {
                $('#hdnFileTwo').val(returndata.fileNameTwo);
              }
              if (returndata.fileNameThree != '') {
                $('#hdnFileThree').val(returndata.fileNameThree);
              }

              P_Paper_EditV2Ex.btnEdit_Click('Submit', '');
            } else {
              alert('请选择正确文件!(in AddPaper.doUpload)');
            }
          },
          error: (returndata) => {
            alert(returndata);
          },
        });
      },
    },
  });
</script>
<style scoped>
  .form-control-sm {
    border-width: 1px; /* 自定义边框宽度 */
  }

  .tab-header {
    display: flex;
  }

  .tab-header div {
    padding: 10px;
    cursor: pointer;
  }

  .tab-header div.active {
    background-color: #ccc;
  }

  .tab-content {
    margin-top: 10px;
  }

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
