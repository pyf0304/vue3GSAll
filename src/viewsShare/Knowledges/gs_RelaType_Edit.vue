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
        <tr id="trRelaTypeENName">
          <td class="text-right">
            <label
              id="lblRelaTypeName"
              name="lblRelaTypeName"
              class="col-form-label text-right"
              style="width: 90px"
              >关系类型名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRelaTypeName"
              name="txtRelaTypeName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblRelaTypeENName"
              name="lblRelaTypeENName"
              class="col-form-label text-right"
              style="width: 90px"
              >关系类型英文名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtRelaTypeENName"
              name="txtRelaTypeENName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUpdUser">
          <td class="text-right">
            <label
              id="lblUpdUser"
              name="lblUpdUser"
              class="col-form-label text-right"
              style="width: 90px"
              >修改人
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdUser"
              name="txtUpdUser"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left" ColSpan="3">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 350px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_RelaType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_RelaType"
        type="primary"
        @click="btngs_RelaType_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_RelaTypeCRUDEx } from '@/viewsShare/Knowledges/gs_RelaTypeCRUDEx';
  import { gs_RelaType_EditEx } from '@/viewsShare/Knowledges/gs_RelaType_EditEx';
  export default defineComponent({
    name: 'GsRelaTypeEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('知识点关系类型表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_RelaType':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_RelaType':
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
          case 'btnCancelgs_RelaType':
            return strCancelButtonText.value;
          case 'btnSubmitgs_RelaType':
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
        //gs_RelaType_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_RelaType_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_RelaType_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_RelaType(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_RelaType_EditEx('', new gs_RelaTypeCRUDEx());
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
