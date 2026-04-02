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
        id="tabwucResearchTopic"
        name="tabwucResearchTopic"
        style="width: 600px; padding: 1px; border: 0px"
        class="table table-bordered table-hover"
      >
        <tr style="display: none">
          <td class="NameTD">
            <label
              id="lblTopicId"
              name="lblTopicId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              主题编号
            </label>
          </td>
          <td class="ValueTD">
            <input id="txtTopicId" name="txtTopicId" class="form-control" style="width: 200px" />
          </td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblTopicName"
              name="lblTopicName"
              class="col-form-label text-right"
              style="width: 90px"
            >
              栏目主题
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtTopicName"
              name="txtTopicName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblTopicContent"
              name="lblTopicContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              主题内容
            </label>
          </td>
          <td class="ValueTD">
            <textarea
              id="txtTopicContent"
              name="txtTopicContent"
              class="form-control form-control-sm"
              style="width: 500px; height: 80px"
            ></textarea>
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
          <td class="ValueTD">
            <select id="ddlShareId" name="ddlShareId" class="form-control" style="width: 200px" />
          </td>
        </tr>

        <tr>
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
            <input id="txtOrderNum" name="txtOrderNum" class="form-control" style="width: 200px" />
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
          <td class="ValueTD">
            <textarea
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 500px; height: 40px"
            ></textarea>
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelResearchTopic" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitResearchTopic"
        type="primary"
        @click="btnResearchTopic_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { ResearchTopicCRUDEx } from '@/views/GradEduTopic/ResearchTopicCRUDEx';
  import { ResearchTopic_EditEx } from '@/views/GradEduTopic/ResearchTopic_EditEx';
  export default defineComponent({
    name: 'ResearchTopicEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('研究主题编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelResearchTopic':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitResearchTopic':
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
          case 'btnCancelResearchTopic':
            return strCancelButtonText.value;
          case 'btnSubmitResearchTopic':
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
        //ResearchTopic_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnResearchTopic_Edit_Click(strCommandName: string, strKeyId: string) {
        ResearchTopic_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_ResearchTopic(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new ResearchTopic_EditEx('', new ResearchTopicCRUDEx());
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
