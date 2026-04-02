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
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trFilePath">
          <td class="text-right">
            <label id="lblPaperSubResName" class="col-form-label text-right" style="width: 90px"
              >子资源名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPaperSubResName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="UploadFiles">
          <td class="text-right">
            <label id="lblPaperSubResTypeId" class="col-form-label text-right" style="width: 90px"
              >资源类型
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPaperSubResTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="UploadFiles">
          <td class="NameTD">
            <label id="lblUploadfileUrl" class="col-form-label text-right" style="width: 90px">
              上传附件
            </label>
          </td>
          <td id="tdInputsWrapper" class="ValueTD" colspan="3">
            <input id="txtUploadfile" type="file" @change="handleFileChange($event)" />
            <button id="AddMoreFileBox" type="button" class="btn btn-default" data-dismiss="modal"
              >添加更多附件</button
            >
          </td>
        </tr>
        <!-- <tr id="UploadFiles">
          <td class="text-right">
            <label
              id="lblFilePath"
              
              class="col-form-label text-right"
              style="width: 90px"
              >文件路径
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFilePath"
              
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr> -->
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" class="col-form-label text-right" style="width: 90px">备注 </label>
          </td>
          <td class="text-left">
            <input id="txtMemo" class="form-control form-control-sm" style="width: 400px" />
          </td>
        </tr>
        <tr
          ><td colspan="2">
            <span class="text-primary"
              >说明:如何要上传Word、Excel、ppt、text时，请把他们转换成pdf或者html文件。</span
            >
          </td></tr
        >
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hdnpic" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelPaperSubRes" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitPaperSubRes"
        type="primary"
        @click="btnPaperSubRes_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PaperSubRes_EditEx } from '@/views/GradEduPaper/PaperSubRes_EditEx';
  export default defineComponent({
    name: 'PaperSubResEdit',
    components: {
      // 组件注册
    },
    setup() {
      const mySelectedFile = ref(null);
      const refDivEdit = ref();
      const strTitle = ref('论文子资源编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelPaperSubRes':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitPaperSubRes':
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
          case 'btnCancelPaperSubRes':
            return strCancelButtonText.value;
          case 'btnSubmitPaperSubRes':
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
        refDivEdit,
        handleFileChange,
        mySelectedFile,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnPaperSubRes_Edit_Click(strCommandName: string, strKeyId: string) {
        PaperSubRes_EditEx.mySelectedFile = this.mySelectedFile;
        PaperSubRes_EditEx.btnEdit_Click(strCommandName, strKeyId, this.refDivEdit);
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
