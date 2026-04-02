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
        id="tabwucSection"
        name="tabwucSection"
        style="width: 600px; padding: 1px; border: 0px"
        class="table table-bordered table-hover"
      >
        <tr style="display: none">
          <td class="NameTD">
            <label
              id="lblSectionId"
              name="lblSectionId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              节Id
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtSectionId"
              name="txtSectionId"
              class="form-control form-control-sm"
              style="width: 200px"
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblSectionName"
              name="lblSectionName"
              class="col-form-label text-right"
              style="width: 90px"
            >
              节名
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtSectionName"
              name="txtSectionName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr style="display: none">
          <td class="NameTD">
            <label
              id="lblPaperId"
              name="lblPaperId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              论文
            </label>
          </td>
          <td class="ValueTD">
            <input id="txtPaperId" name="txtPaperId" class="form-control" style="width: 200px" />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="NameTD">
            <label
              id="lblOrderNum"
              name="lblOrderNum"
              class="col-form-label text-right"
              style="width: 90px"
            >
              排序号
            </label>
          </td>
          <td class="ValueTD">
            <input
              id="txtOrderNum"
              name="txtOrderNum"
              class="form-control form-control-sm"
              style="width: 200px"
              value="0"
            />
          </td>
          <td></td>
          <td></td>
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
              style="width: 500px; height: 80px"
            ></textarea>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidOrderNum" type="hidden" />
      <input id="hidPaperId" type="hidden" />
      <input id="hidParentId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelSection" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitSection"
        type="primary"
        @click="btnSection_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { SectionCRUDEx } from '@/views/GradEduPaper/SectionCRUDEx';
  import { Section_EditEx } from '@/views/GradEduPaper/Section_EditEx';
  export default defineComponent({
    name: 'SectionEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('论文节表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelSection':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitSection':
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
          case 'btnCancelSection':
            return strCancelButtonText.value;
          case 'btnSubmitSection':
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
        //Section_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnSection_Edit_Click(strCommandName: string, strKeyId: string) {
        Section_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
