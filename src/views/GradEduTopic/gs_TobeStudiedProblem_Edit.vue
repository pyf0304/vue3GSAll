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
        style="width: 800px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trTopicId" style="display: none">
          <td class="text-right">
            <label
              id="lblTopicId"
              name="lblTopicId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              主题编号
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlTopicId"
              name="ddlTopicId"
              class="form-control"
              style="width: 150px"
            ></select>
          </td>
          <td class="text-right">
            <label
              id="lblProblemId"
              name="lblProblemId"
              class="col-form-label text-right"
              style="width: 90px"
            >
              问题Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtProblemId"
              name="txtProblemId"
              class="form-control"
              style="width: 150px"
            />
          </td>
          <td class="text-left" ColSpan="2">
            <span class="form-control" style="width: 150px">
              <input type="checkbox" id="chkIsSubmit" name="chkIsSubmit" Text="是否提交" /><label
                for="chkIsSubmit"
                >是否提交</label
              >
            </span>
          </td>
          <td class="text-right">
            <label
              id="lblVersionCount"
              name="lblVersionCount"
              class="col-form-label text-right"
              style="width: 90px"
            >
              版本统计
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtVersionCount"
              name="txtVersionCount"
              class="form-control"
              style="width: 150px"
            />
          </td>
        </tr>

        <tr id="trUpdUser" style="display: none">
          <td class="text-right">
            <label
              id="lblUpdDate"
              name="lblUpdDate"
              class="col-form-label text-right"
              style="width: 150px"
            >
              修改日期
            </label>
          </td>
          <td class="text-left">
            <input id="txtUpdDate" name="txtUpdDate" class="form-control" style="width: 150px" />
          </td>
          <td class="text-right">
            <label
              id="lblUpdUser"
              name="lblUpdUser"
              class="col-form-label text-right"
              style="width: 90px"
            >
              修改人
            </label>
          </td>
          <td class="text-left">
            <input id="txtUpdUser" name="txtUpdUser" class="form-control" style="width: 150px" />
          </td>
        </tr>
        <tr id="trMonth" style="display: none">
          <td class="text-right">
            <label
              id="lblYear"
              name="lblYear"
              class="col-form-label text-right"
              style="width: 90px"
            >
              年
            </label>
          </td>
          <td class="text-left">
            <input id="txtYear" name="txtYear" class="form-control" style="width: 150px" />
          </td>
          <td class="text-right">
            <label
              id="lblMonth"
              name="lblMonth"
              class="col-form-label text-right"
              style="width: 90px"
            >
              月
            </label>
          </td>
          <td class="text-left">
            <input id="txtMonth" name="txtMonth" class="form-control" style="width: 150px" />
          </td>
        </tr>

        <tr id="trProblemTitle">
          <td class="text-left" colspan="2">
            <input
              id="txtProblemTitle"
              name="txtProblemTitle"
              placeholder="问题标题"
              class="form-control"
              style="width: 500px"
            />
          </td>
        </tr>
        <tr id="trProblemContent">
          <td class="text-left" colspan="2">
            <textarea
              id="txtProblemContent"
              name="txtProblemContent"
              placeholder="问题内容"
              class="form-control"
              style="width: 100%; height: 200px"
            />
          </td>
        </tr>
        <tr id="trProblemDate">
          <td class="text-left">
            <input
              id="txtProblemDate"
              name="txtProblemDate"
              placeholder="问题日期"
              class="form-control"
              style="width: 150px"
            />
          </td>

          <td class="text-left">
            <input
              id="txtParticipant"
              name="txtParticipant"
              placeholder="参与者"
              class="form-control"
              style="width: 300px"
            />
          </td>
        </tr>

        <tr id="trMemo">
          <td class="text-left" colspan="2">
            <input
              id="txtMemo"
              name="txtMemo"
              placeholder="备注"
              class="form-control"
              style="width: 550px"
            />
          </td>
        </tr>
      </table>
      <div class="col-sm-4">
        <!-- 老的带标签的数据 不更改 -->
        <textarea id="inpOldData" rows="2" cols="20" type="text"></textarea>
        <!-- 需要比对去标签的数据 -->
        <textarea id="inpLeft" rows="2" cols="20" type="text"></textarea>
      </div>

      <textarea id="inpRight" rows="2" cols="20" type="text"></textarea>

      <input id="hidColorCode" type="hidden" />

      <input id="hidOldColorCode" type="hidden" />
      <input id="hidNewColorCode" type="hidden" />
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelgs_TobeStudiedProblem" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitgs_TobeStudiedProblem"
        type="primary"
        @click="btngs_TobeStudiedProblem_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { gs_TobeStudiedProblemCRUDEx } from '@/views/GradEduTopic/gs_TobeStudiedProblemCRUDEx';
  import { gs_TobeStudiedProblem_EditEx } from '@/views/GradEduTopic/gs_TobeStudiedProblem_EditEx';
  export default defineComponent({
    name: 'GsTobeStudiedProblemEdit',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('待研究问题编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_TobeStudiedProblem':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_TobeStudiedProblem':
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
          case 'btnCancelgs_TobeStudiedProblem':
            return strCancelButtonText.value;
          case 'btnSubmitgs_TobeStudiedProblem':
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
        //gs_TobeStudiedProblem_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btngs_TobeStudiedProblem_Edit_Click(strCommandName: string, strKeyId: string) {
        gs_TobeStudiedProblem_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_gs_TobeStudiedProblem(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new gs_TobeStudiedProblem_EditEx('', new gs_TobeStudiedProblemCRUDEx());
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
