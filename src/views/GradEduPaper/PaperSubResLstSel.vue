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
    <div id="divLayout_PaperSubResSel" ref="refDivLayout" class="tab_layout">
      <div id="tabLayout" class="tab_layout">
        <!-- 分左右2个区域  -->

        <!-- 查询层 -->

        <div id="divQuery" class="div_query">
          <table
            id="tabQuery"
            style="width: 70%"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr>
              <td>
                <input
                  id="txtPaperSubResTitle_q"
                  placeholder="论文标题"
                  class="layui-input"
                  style="width: 300px"
                />
              </td>

              <td class="ValueTD">
                <select
                  id="ddlLiteratureTypeId_q"
                  class="form-control form-control-sm"
                  style="width: 180px"
                />
              </td>
              <td>
                <select
                  id="ddlUserId_q"
                  class="form-control form-control-sm"
                  style="width: 180px"
                />
              </td>
              <td>
                <button id="btnQuery" class="layui-btn" lay-submit="" lay-filter="sreach">
                  <font-awesome-icon icon="search" />
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div>
          <div id="divList" ref="refDivList" class="div_List">
            <div id="divDataLst" class="div_DataList"> </div>
            <div id="divPager" class="pager" value="1"> </div>
          </div>
        </div>
      </div>

      <!-- 区分所有论文，和小组成员论文 -->
      <input id="hidstrType" type="hidden" />
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
  import { PaperSubResLstSel } from '@/views/GradEduPaper/PaperSubResLstSel';
  import { PaperSubResCRUD } from '@/viewsBase/GradEduPaper/PaperSubResCRUD';

  export default defineComponent({
    name: 'PaperSubResLstSel',
    components: {
      // 组件注册
    },
    props: {
      topicId: {
        type: String,
        default: false,
      },
    },
    setup(props) {
      const strTitle = ref('论文列表');
      const refDivLayout = ref();
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
          PaperSubResLstSel.vuebtn_Click = btn_Click;
          PaperSubResLstSel.GetPropValue = GetPropValue;

          setTimeout(() => {
            console.log('对话框已经显示!');
            PaperSubResLstSel.vuebtn_Click = btn_Click;
            PaperSubResLstSel.GetPropValue = GetPropValue;
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

      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'topicId':
            return props.topicId;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        PaperSubResLstSel.btn_Click(strCommandName, strKeyId, refDivLayout.value);
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
        refDivLayout,
      };
    },

    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnSysSocialRelations_Edit_Click(strCommandName: string, strKeyId: string) {
        PaperSubResLstSel.btnEdit_Click(strCommandName, strKeyId);
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
