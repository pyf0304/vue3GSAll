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
        <tr id="trPotenceId">
          <td class="text-right">
            <label
              id="lblPotenceId"
              name="lblPotenceId"
              class="col-form-label text-right"
              style="width: 90px"
              >权限ID
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceId"
              name="txtPotenceId"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trPotenceName">
          <td class="text-right">
            <label
              id="lblPotenceName"
              name="lblPotenceName"
              class="col-form-label text-right"
              style="width: 90px"
              >权限名称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPotenceName"
              name="txtPotenceName"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
        <tr id="trPotenceTypeId">
          <td class="text-right">
            <label
              id="lblPotenceTypeId"
              name="lblPotenceTypeId"
              class="col-form-label text-right"
              style="width: 90px"
              >权限类型Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlPotenceTypeId"
              name="ddlPotenceTypeId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trFuncModuleId">
          <td class="text-right">
            <label
              id="lblFuncModuleId"
              name="lblFuncModuleId"
              class="col-form-label text-right"
              style="width: 90px"
              >模块Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlFuncModuleId"
              name="ddlFuncModuleId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trMenuId">
          <td class="text-right">
            <label
              id="lblMenuId"
              name="lblMenuId"
              class="col-form-label text-right"
              style="width: 90px"
              >菜单Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlMenuId"
              name="ddlMenuId"
              class="form-control form-control-sm"
              style="width: 400px"
            ></select>
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-right">
            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 400px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelQxPrjPotence" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxPrjPotence"
        type="primary"
        @click="btnQxPrjPotence_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxPrjPotenceCRUDEx } from '@/viewsShare/PotenceMan/QxPrjPotenceCRUDEx';
  import { QxPrjPotence_EditEx } from '@/viewsShare/PotenceMan/QxPrjPotence_EditEx';
  export default defineComponent({
    name: 'QxPrjPotenceEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('工程权限编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjPotence':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitQxPrjPotence':
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
          case 'btnCancelQxPrjPotence':
            return strCancelButtonText.value;
          case 'btnSubmitQxPrjPotence':
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
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //QxPrjPotence_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxPrjPotence_Edit_Click(strCommandName: string, strKeyId: string) {
        QxPrjPotence_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_QxPrjPotence(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new QxPrjPotence_EditEx('QxPrjPotence_EditEx', new QxPrjPotenceCRUDEx());
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
