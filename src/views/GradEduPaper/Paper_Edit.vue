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
                    <input
                      id="txtPaperId"
                      type="text"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
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
                    <span class="form-control form-control-sm" style="width: 200px">
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
                      id="ddlLiteratureTypeId"
                      v-model="LiteratureTypeId"
                      class="form-control form-control-sm"
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
                    <select
                      id="ddlPaperStatusId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblPeriodical" class="col-form-label text-right" style="width: 90px">
                      期刊
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtPeriodical"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td class="NameTD">
                    <label id="lblAuthor" class="col-form-label text-right" style="width: 90px">
                      作者
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtAuthor"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
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
                    >
                      添加更多附件
                    </button>
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
                    <input
                      id="txtResearchQuestion"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
                  </td>
                  <td class="NameTD">
                    <label id="lblKeyword" class="col-form-label text-right" style="width: 90px">
                      关键字
                    </label>
                  </td>
                  <td class="ValueTD">
                    <input
                      id="txtKeyword"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
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
                    <input
                      id="txtLiteratureSources"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
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
                    <input
                      id="txtLiteratureLink"
                      class="form-control form-control-sm"
                      style="width: 400px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblShareId" class="col-form-label text-right" style="width: 90px">
                      分享
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <select
                      id="ddlShareId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>

                <tr>
                  <td class="NameTD">
                    <label
                      id="lblUploadImgFile"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      上传图片
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <input id="txtUploadImgFile" type="file" />
                  </td>
                </tr>
                <tr style="display: none">
                  <td class="NameTD"></td>
                  <td class="ValueTD">
                    <span class="form-control form-control-sm" style="width: 200px">
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
                    <input
                      id="txtChecker"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="NameTD">
                    <label id="lblMemo" class="col-form-label text-right" style="width: 90px">
                      备注
                    </label>
                  </td>
                  <td class="ValueTD" colspan="3">
                    <input
                      id="txtMemo"
                      class="form-control form-control-sm"
                      style="width: 500px; height: 40px"
                    />
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
  import { Format } from '@/ts/PubFun/clsString';
  import { Paper_EditEx } from '@/views/GradEduPaper/Paper_EditEx';
  // import textboxio from 'textboxio';
  export default defineComponent({
    name: 'PaperEdit',
    components: {
      // 组件注册
    },
    setup() {
      const refDivEdit = ref();
      const LiteratureTypeId = ref('');
      const activeTabId = ref('SimpleEdit');
      const tabs = reactive([
        { id: 'SimpleEdit', label: '基本信息' },
        { id: 'extendEdit', label: '扩展信息' },
      ]);

      const strTitle = ref('论文表编辑1');
      const mySelectedFile = ref(null);
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
      const dialogWidth = ref('1100px'); // 设置对话框的宽度
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
        refDivEdit,
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
        handleFileChange,

        mySelectedFile,
        LiteratureTypeId,
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
        Paper_EditEx.mySelectedFile = this.mySelectedFile;
        Paper_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      //判断图片附件格式、以及文件附件格式
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
