<template>
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
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr>
          <td class="text-right">
            <span
              id="spnPotenceTypeName_d"
              name="spnPotenceTypeName_d"
              CssClass="col-form-label text-right"
              >权限类型名</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPotenceTypeName_d"
              name="lblPotenceTypeName_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnQxPrjId_d" name="spnQxPrjId_d" CssClass="col-form-label text-right"
              >项目Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblQxPrjId_d" name="lblQxPrjId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnFuncModuleId_d"
              name="spnFuncModuleId_d"
              CssClass="col-form-label text-right"
              >模块Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblFuncModuleId_d"
              name="lblFuncModuleId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnMenuId_d" name="spnMenuId_d" CssClass="col-form-label text-right"
              >菜单Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblMenuId_d" name="lblMenuId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnViewId_d" name="spnViewId_d" CssClass="col-form-label text-right"
              >界面编号</span
            >
          </td>
          <td class="text-left">
            <label id="lblViewId_d" name="lblViewId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsVisible_d" name="spnIsVisible_d" CssClass="col-form-label text-right"
              >是否显示</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsVisible_d"
              name="lblIsVisible_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">备注</span>
          </td>
          <td class="text-left">
            <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxPotenceType" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { Format } from '@/ts/PubFun/clsString';
  import { QxPotenceType_DetailEx } from '@/viewsShare/PotenceMan/QxPotenceType_DetailEx';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'QxPotenceTypeDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('权限类型详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPotenceType':
            strCancelButtonText.value = strNewValue;
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
          case 'btnCancelQxPotenceType':
            return strCancelButtonText.value;
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
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
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
      },

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnQxPotenceType_Detail_Click(strCommandName: string, strKeyId: string) {
        QxPotenceType_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
