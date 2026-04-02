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
            <span id="spnMenuName_d" name="spnMenuName_d" CssClass="col-form-label text-right"
              >菜单名</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMenuName_d"
              name="lblMenuName_d"
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
            <span id="spnUpMenuId_d" name="spnUpMenuId_d" CssClass="col-form-label text-right"
              >上级菜单Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblUpMenuId_d"
              name="lblUpMenuId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnLinkFile_d" name="spnLinkFile_d" CssClass="col-form-label text-right"
              >链接文件</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblLinkFile_d"
              name="lblLinkFile_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnqsParameters_d"
              name="spnqsParameters_d"
              CssClass="col-form-label text-right"
              >qs参数</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblqsParameters_d"
              name="lblqsParameters_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnTabId_d" name="spnTabId_d" CssClass="col-form-label text-right">表ID</span>
          </td>
          <td class="text-left">
            <label id="lblTabId_d" name="lblTabId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnImgFile_d" name="spnImgFile_d" CssClass="col-form-label text-right"
              >图像文件</span
            >
          </td>
          <td class="text-left">
            <label id="lblImgFile_d" name="lblImgFile_d" class="text-primary" style="width: 150px">
            </label>
          </td>
          <td class="text-right">
            <span id="spnRoleId_d" name="spnRoleId_d" CssClass="col-form-label text-right"
              >角色Id</span
            >
          </td>
          <td class="text-left">
            <label id="lblRoleId_d" name="lblRoleId_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnOrderNum_d" name="spnOrderNum_d" CssClass="col-form-label text-right"
              >排序号</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblOrderNum_d"
              name="lblOrderNum_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnIsLeafNode_d" name="spnIsLeafNode_d" CssClass="col-form-label text-right"
              >是否叶子</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblIsLeafNode_d"
              name="lblIsLeafNode_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span id="spnMenuSetId_d" name="spnMenuSetId_d" CssClass="col-form-label text-right"
              >菜单集Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMenuSetId_d"
              name="lblMenuSetId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnMenuTitle_d" name="spnMenuTitle_d" CssClass="col-form-label text-right"
              >菜单标题</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMenuTitle_d"
              name="lblMenuTitle_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnPageDispModeId_d"
              name="spnPageDispModeId_d"
              CssClass="col-form-label text-right"
              >页面显示模式Id</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblPageDispModeId_d"
              name="lblPageDispModeId_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
              >是否在用</span
            >
          </td>
          <td class="text-left">
            <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
            </label>
          </td>
        </tr>
        <tr>
          <td class="text-right">
            <span
              id="spnMenuControlName_d"
              name="spnMenuControlName_d"
              CssClass="col-form-label text-right"
              >MenuControlName</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblMenuControlName_d"
              name="lblMenuControlName_d"
              class="text-primary"
              style="width: 150px"
            >
            </label>
          </td>
          <td class="text-right">
            <span
              id="spnApplicationTypeId_d"
              name="spnApplicationTypeId_d"
              CssClass="col-form-label text-right"
              >应用程序类型ID</span
            >
          </td>
          <td class="text-left">
            <label
              id="lblApplicationTypeId_d"
              name="lblApplicationTypeId_d"
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
      <el-button id="btnCancelQxPrjMenus" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { QxPrjMenus_DetailEx } from '@/viewsShare/MenuManage_GP/QxPrjMenus_DetailEx';
  export default defineComponent({
    name: 'QxPrjMenusDetail',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('工程菜单详细信息');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelQxPrjMenus':
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
          case 'btnCancelQxPrjMenus':
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
      btnQxPrjMenus_Detail_Click(strCommandName: string, strKeyId: string) {
        QxPrjMenus_DetailEx.btnDetail_Click(strCommandName, strKeyId);
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
