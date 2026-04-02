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
        <tr id="trFullName">
          <td class="text-right">
            <label
              id="lblSocialId"
              name="lblSocialId"
              class="col-form-label text-right"
              style="width: 90px"
              >社会Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtSocialId"
              name="txtSocialId"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblFullName"
              name="lblFullName"
              class="col-form-label text-right"
              style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtFullName"
              name="txtFullName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trLevelId">
          <td class="text-right">
            <label
              id="lblNationality"
              name="lblNationality"
              class="col-form-label text-right"
              style="width: 90px"
              >国籍
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtNationality"
              name="txtNationality"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblLevelId"
              name="lblLevelId"
              class="col-form-label text-right"
              style="width: 90px"
              >级别Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlLevelId"
              name="ddlLevelId"
              class="form-control form-control-sm"
              style="width: 150px"
            ></select>
          </td>
        </tr>
        <tr id="trMajor">
          <td class="text-right">
            <label
              id="lblWorkUnit"
              name="lblWorkUnit"
              class="col-form-label text-right"
              style="width: 90px"
              >工作单位
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtWorkUnit"
              name="txtWorkUnit"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblMajor"
              name="lblMajor"
              class="col-form-label text-right"
              style="width: 90px"
              >专业
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtMajor"
              name="txtMajor"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trDetailedDescription">
          <td class="text-right">
            <label
              id="lblAchievement"
              name="lblAchievement"
              class="col-form-label text-right"
              style="width: 90px"
              >成就
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtAchievement"
              name="txtAchievement"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblDetailedDescription"
              name="lblDetailedDescription"
              class="col-form-label text-right"
              style="width: 90px"
              >详细说明
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtDetailedDescription"
              name="txtDetailedDescription"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trUpdDate">
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
          <td class="text-right">
            <label
              id="lblUpdDate"
              name="lblUpdDate"
              class="col-form-label text-right"
              style="width: 90px"
              >修改日期
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUpdDate"
              name="txtUpdDate"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trMemo">
          <td class="text-left" ColSpan="2">
            <span class="form-control form-control-sm" style="width: 150px">
              <input id="chkIsSubmit" name="chkIsSubmit" type="checkbox" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              ></span
            >
          </td>
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
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelSysSocialRelations" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitSysSocialRelations"
        type="primary"
        @click="btnSysSocialRelations_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { SysSocialRelationsCRUDEx } from '@/views/GradEduTopic/SysSocialRelationsCRUDEx';
  import { SysSocialRelations_EditEx } from '@/views/GradEduTopic/SysSocialRelations_EditEx';
  export default defineComponent({
    name: 'SysSocialRelationsEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('社会关系表编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelSysSocialRelations':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitSysSocialRelations':
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
          case 'btnCancelSysSocialRelations':
            return strCancelButtonText.value;
          case 'btnSubmitSysSocialRelations':
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
        //SysSocialRelations_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnSysSocialRelations_Edit_Click(strCommandName: string, strKeyId: string) {
        SysSocialRelations_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_SysSocialRelations(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new SysSocialRelations_EditEx(new SysSocialRelationsCRUDEx());
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
