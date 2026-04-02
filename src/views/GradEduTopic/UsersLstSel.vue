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
      <div id="tabLayout" class="tab_layout">
        <!-- 分左右2个区域  -->

        <!-- 查询层 -->

        <div id="divQuery" ref="refDivQuery" class="div_query">
          <table
            id="tabQuery"
            style="width: 50%"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr>
              <td>
                <input
                  id="txtUserId_q"
                  placeholder="用户ID"
                  class="layui-input"
                  style="width: 70px"
                />
              </td>

              <td>
                <input
                  id="txtUserName_q"
                  placeholder="用户名"
                  class="layui-input"
                  style="width: 80px"
                />
              </td>

              <td>
                <select
                  id="ddlidCurrEduCls"
                  class="form-control form-control-sm"
                  style="width: 150px"
                ></select>
              </td>
              <td>
                <button
                  id="btnQuery"
                  class="btn btn-outline-warning text-nowrap btn"
                  lay-submit=""
                  lay-filter="sreach"
                  @click="btn_Click('Query', '')"
                >
                  <font-awesome-icon icon="search" />
                </button>
              </td>

              <td>
                <label
                  id="lblTopicUserRole"
                  class="col-form-label"
                  style="color: red; width: 150px"
                >
                  请选择主题用户角色：
                </label>
              </td>
              <td>
                <select
                  id="ddlTopicUserRole_q"
                  class="form-control form-control-sm"
                  style="width: 100px"
                />
              </td>
              <td>
                <button
                  id="btnAddUsersToTopic"
                  type="submit"
                  class="btn btn-outline-warning text-nowrap btn"
                  @click="btn_Click('AddUsersToTopic', '')"
                  >添加</button
                >
              </td>
            </tr>
          </table>
        </div>

        <div class="modal-body">
          <div id="divList" ref="refDivList" class="div_List">
            <div id="divDataLst" class="div_DataList"> </div>
            <div id="divPager" class="pager" value="1"> </div>
          </div>
        </div>
      </div>
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
  import { defineComponent, onMounted, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { UsersLstSel } from '@/views/GradEduTopic/UsersLstSel';
  import { QxUsersCRUD } from '@/viewsBase/BaseInfo/QxUsersCRUD';

  export default defineComponent({
    name: 'UsersLstSel',
    components: {
      // 组件注册
    },
    setup() {
      const refDivEdit = ref();
      const strTitle = ref('用户列表');
      const refDivQuery = ref();
      const refDivList = ref();
      onMounted(() => {
        // QxUsersCRUD.divQuery = refDivQuery.value;
      });
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
      function btn_Click(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}

        UsersLstSel.btn_Click(strCommandName, strKeyId, refDivEdit.value);
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
        refDivQuery,
        refDivList,
        btn_Click,
        refDivEdit,
      };
    },

    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnSysSocialRelations_Edit_Click(strCommandName: string, strKeyId: string) {
        UsersLstSel.btn_Click(strCommandName, strKeyId, this.refDivEdit);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_SysSocialRelations(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new UsersLstSel(new UsersLstSel());
        // objPage.btnSubmit_Click();
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

<!-- 

      /*
          按钮单击,用于调用Js函数中btn_Click
         (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btn_Click)
         */
      function btnUsersLstSel_Click(strCommandName, strKeyId) {
        
          viewinfo.UsersLstSelbtn_Click(strCommandName, strKeyId, refDivLayout.value);
        
      }
      

    } -->
