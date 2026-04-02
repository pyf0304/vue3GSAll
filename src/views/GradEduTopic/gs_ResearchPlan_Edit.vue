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
        style="width: 100%"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr style="display: none">
          <td class="text-right">
            <label
              id="lblPlanId"
              name="lblPlanId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              计划Id
            </label>
          </td>
          <td class="text-left">
            <input id="txtPlanId" name="txtPlanId" class="form-control" style="width: 150px" />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblStatusId"
              name="lblStatusId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              状态
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlStatusId"
              name="ddlStatusId"
              class="form-control form-control-sm"
              style="width: 180px"
            ></select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblTypeId"
              name="lblTypeId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              计划类型
            </label>
          </td>
          <td>
            <select
              id="ddlPlanTypeId"
              name="ddlPlanTypeId"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option value="0">计划类型</option>
              <option value="01">个人计划</option>
              <option value="02">小组计划</option>
            </select>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblPlanContent"
              name="lblPlanContent"
              class="col-form-label text-right"
              style="width: 90px"
            >
              计划内容
            </label>
          </td>
          <td class="text-left">
            <textarea
              id="txtPlanContent"
              name="txtPlanContent"
              class="form-control form-control-sm"
              style="width: 650px; height: 80px"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblResponsibleUser"
              name="lblResponsibleUser"
              class="col-form-label text-right"
              style="width: 90px"
            >
              负责人/小组
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtResponsibleUser"
              name="txtResponsibleUser"
              class="form-control form-control-sm"
              style="width: 300px"
            />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label id="lblStartDate" class="col-form-label text-right" style="width: 90px">
              开始日期
            </label>
          </td>
          <td class="text-left">
            <input id="txtStartDate" class="layui-input" style="width: 150px" />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblEndDate"
              name="lblEndDate"
              class="col-form-label text-right"
              style="width: 90px"
            >
              截止日期
            </label>
          </td>
          <td class="text-left">
            <input id="txtEndDate" class="layui-input" style="width: 150px" />
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <label
              id="lblMemo"
              name="lblMemo"
              class="col-form-label text-right"
              style="width: 90px"
            >
              备注
            </label>
          </td>
          <td class="text-left">
            <textarea
              id="txtMemo"
              name="txtMemo"
              class="form-control form-control-sm"
              style="width: 350px; height: 80px"
            ></textarea>
          </td>
        </tr>
      </table>

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_ResearchPlan" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_ResearchPlan"
        type="primary"
        @click="btngs_ResearchPlan_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_ResearchPlanCRUDEx } from '@/views/GradEduTopic/gs_ResearchPlanCRUDEx';
  import { gs_ResearchPlan_EditEx } from '@/views/GradEduTopic/gs_ResearchPlan_EditEx';
  import { gs_ResearchPlan_Edit } from '@/viewsBase/GradEduTopic/gs_ResearchPlan_Edit';

  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'GsResearchPlanEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('主题研究计划编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_ResearchPlan':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_ResearchPlan':
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
          case 'btnCancelgs_ResearchPlan':
            return strCancelButtonText.value;
          case 'btnSubmitgs_ResearchPlan':
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
        //gs_ResearchPlan_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_ResearchPlan_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_ResearchPlan_Edit.IdCurrEduClsCache = clsPubLocalStorage.idCurrEduCls;
        gs_ResearchPlan_EditEx.btnEdit_Click(strCommandName, strKeyId);
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
