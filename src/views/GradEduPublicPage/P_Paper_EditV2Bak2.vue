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
        <ul class="nav nav-pills" role="tablist">
          <li class="nav-item" li="liSimpleEdit">
            <a class="nav-link active" data-toggle="pill" href="#SimpleEdit">基本信息</a>
          </li>
          <li id="liextendEdit" class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#extendEdit">扩展信息</a>
          </li>
        </ul>

        <div id="divEditRegion" tabindex="-1">
          <form id="uploadForm" method="post" enctype="multipart/form-data">
            <div style="width: 98%; margin-left: 10px">
              <div class="tab-content">
                <div id="SimpleEdit" class="tab-pane active">
                  <table
                    id="tabwucPaper"
                    name="tabwucPaper"
                    style="width: 100%; padding: 1px; border: 0px"
                    class="table table-bordered table-hover"
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
                      <td class="ValueTD" colspan="3">
                        <input
                          id="txtPaperId"
                          name="txtPaperId"
                          class="form-control form-control-sm"
                          style="width: 200px"
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
                          style="width: 400px"
                        />
                      </td>
                      <td class="NameTD"></td>
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
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblLiteratureTypeId"
                          name="lblLiteratureTypeId"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          文献类型
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
                    </tr>
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblPaperContent"
                          name="lblPaperContent"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          主题内容
                        </label>
                      </td>
                      <td class="ValueTD" colspan="3">
                        <textarea
                          id="txtPaperContent"
                          name="txtPaperContent"
                          class="form-control form-control-sm"
                          style="width: 100%; height: 300px"
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
                    <tr>
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
                          style="width: 200px"
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
                          style="width: 200px"
                        />
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
                          上传附件
                        </label>
                      </td>
                      <td id="tdInputsWrapper" class="ValueTD" colspan="3">
                        <input id="txtUploadfile" type="file" name="txtUploadfile" />
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

                <div id="extendEdit" class="tab-pane fade">
                  <table
                    id="tabwucPaper"
                    name="tabwucPaper"
                    style="width: 100%; padding: 1px; border: 0px"
                    class="table table-bordered table-hover"
                  >
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
                          style="width: 400px"
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
                          style="width: 400px"
                        />
                      </td>
                    </tr>
                    <tr>
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
                      <td class="ValueTD">
                        <input
                          id="txtLiteratureLink"
                          name="txtLiteratureLink"
                          class="form-control form-control-sm"
                          style="width: 400px"
                        />
                      </td>
                    </tr>
                    <tr>
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
                      <td class="ValueTD" colspan="3">
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
                          style="width: 500px; height: 40px"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.modal-content -->
            <!-- /.modal -->
          </form>
        </div>
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
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { PaperCRUDEx } from '@/views/GradEduPaper/PaperCRUDEx';
  import { Paper_EditEx } from '@/views/GradEduPaper/Paper_EditEx';
  import { P_Paper_EditV2Ex } from '@/views/GradEduPublicPage/P_Paper_EditV2Ex';
  import { GetInputObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  // import textboxio from 'textboxio';
  export default defineComponent({
    name: 'PaperEdit',
    components: {
      // 组件注册
    },
    setup() {
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
        refDivEdit,
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
        this.mySubmit('');
        Paper_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
      /*
           提交编辑
          (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_mySubmit)
          */
      mySubmit(pstrOp: string) {
        const divName = this.refDivEdit.value;
        if (divName == null) return;
        console.log(`提交${pstrOp}`);

        const strLiteratureTypeId = $('#ddlLiteratureTypeId').val();
        console.error(strLiteratureTypeId);
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
          this.IsHasFile(divName);
        }
      },
      //判断图片附件格式、以及文件附件格式
      IsHasFile(divName: HTMLDivElement) {
        console.error('Enter IsFile');

        const txtUploadfileUrl = GetInputObjInDivObj(divName, 'txtUploadfileUrl');
        const pic1 = txtUploadfileUrl.value;

        if (pic1 == undefined) return;
        if (pic1 != '') {
          const strs = pic1.split('.');
          const suffix = strs[strs.length - 1];

          if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
            alert('请选择图片格式！');
            const obj = document.getElementById('txtUploadfileUrl');
            if (obj == null) return;
            // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
            return;
            //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
          }
        }
        //文件
        const tdInputsWrapper = $('#tdInputsWrapper');
        //var MaxInputs = 2;
        const y = tdInputsWrapper.length;

        //循环得到的个数
        for (let i = 0; i < y; i++) {
          if (i == 0) {
            const txtUploadImgFile = GetInputObjInDivObj(divName, 'txtUploadfile');
            const file1 = txtUploadImgFile.value;

            console.error('file1');
            console.error(file1);
            if (file1 != undefined && file1 != '') {
              const strs = file1.split('.');
              const suffix = strs[strs.length - 1];
              if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                alert('请选择word或pdf格式文件！');
                const obj = document.getElementById('txtUploadfile');
                if (obj == null) return;
                //  obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            } else {
              return false;
            }
          } else if (i == 1) {
            const txtUploadfile2 = GetInputObjInDivObj(divName, 'txtUploadfile2');
            const file2 = txtUploadfile2.value;

            if (file2 != undefined && file2 != '') {
              const strs = file2.split('.');
              const suffix = strs[strs.length - 1];

              if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                alert('请选择word或pdf格式文件！');
                const obj = document.getElementById('txtUploadfile2');
                if (obj == null) return;
                // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            }
          } else if (i == 2) {
            const txtUploadfile3 = GetInputObjInDivObj(divName, 'txtUploadfile3');
            const file3 = txtUploadfile3.value;

            if (file3 != undefined && file3 != '') {
              const strs = file3.split('.');
              const suffix = strs[strs.length - 1];

              if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                alert('请选择word或pdf格式文件！');
                const obj = document.getElementById('txtUploadfile3');
                if (obj == null) return;
                // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                return;
                //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
              }
            }
          }
        }
        //上传
        this.doUpload();
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

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Paper(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new Paper_EditEx('', new PaperCRUDEx());
        objPage.btnSubmit_Click();
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
