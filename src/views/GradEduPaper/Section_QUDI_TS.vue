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

    <div id="divLayout" ref="refDivLayout" class="divComContainer">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>
      <!-- 标题层 -->
      <div class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#/index">首页</a></li>
              <li class="breadcrumb-item"><a href="#/PaperIframe/">论文管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">论文节点维护</li>
              <li class="breadcrumb-item"
                ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
              ></li>
            </ol>
          </nav>
        </div>
        <div class="col-md-3">
          <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
            <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
        ></div>
      </div>

      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtSectionName_q"
                name="txtSectionName_q"
                placeholder="节名"
                class="layui-input"
                style="width: 200px"
              />
            </td>

            <td>
              <input
                id="txtPaperTitle_q"
                name="txtPaperTitle_q"
                placeholder="论文标题"
                class="layui-input"
                style="width: 200px"
              />
            </td>

            <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <font-awesome-icon icon="search" />
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区 -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item" style="width: 10%">
            <label
              id="lblSectionList"
              name="lblSectionList"
              class="col-form-label text-info"
              style="width: 50px"
            >
            </label>
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecord"
              name="btnAddNewRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('AddNewRecord', '')"
              >添加论文节</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('UpdateRecord', '')"
              >修改论文节</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info text-nowrap btn-sm"
              @click="btn_Click('DelRecord', '')"
              >删除论文节</button
            >
          </li>
          <li class="nav-item ml-3">
            <a href="javascript:history.back(-1)" class="btn btn-outline-info text-nowrap btn-sm"
              >返回上一页</a
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 编辑层 -->

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidUserId" type="hidden" />
      <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortvSectionBy" type="hidden" value="" />

      <!-- <input id="hidUserInfo" type="hidden" value="@Model.GetSession("objvUserRoleRelation")" /> -->
      <Section_EditCom ref="Section_EditRef"></Section_EditCom>
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  // import { SectionCRUD_EditEx } from '@/views/GradEduPaper/SectionCRUD_EditEx';
  import { SectionCRUD } from '@/viewsBase/GradEduPaper/SectionCRUD';
  // import Section_EditCom from '@/views/GradEduPaper/Section_Edit.vue';
  import { Section_Edit } from '@/viewsBase/GradEduPaper/Section_Edit';
  import { Section_QUDI_TSEx } from '@/views/GradEduPaper/Section_QUDI_TSEx';
  import Section_EditCom from '@/views/GradEduPaper/Section_Edit.vue';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  export default defineComponent({
    name: 'SectionQUDITs',
    components: {
      // 组件注册
      Section_EditCom,
    },
    props: {
      paperId: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const paperId = ref(props.paperId);
      const strTitle = ref('论文节表维护');
      const Section_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        SectionCRUD.GetPropValue = GetPropValue;
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'paperId':
            return props.paperId;

          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'AddNewRecord':
            SectionCRUD.EditObj = Section_EditRef.value;
            Section_Edit.EditObj = Section_EditRef.value;
            break;
          default:
            break;
        }
        Section_QUDI_TSEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      const dialogVisible = ref(false);
      const dialogWidth = ref('1200px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
            const objPage = new Section_QUDI_TSEx(refDivLayout.value);
            objPage.divList = refDivList.value;
            objPage.divQuery = refDivQuery.value;
            objPage.divFunction = refDivFunction.value;
            objPage.PageLoad();
          }, 1000);
        });
      };

      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        strTitle,
        btn_Click,
        Section_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        showDialog,
        dialogVisible,
        hideDialog,
        dialogWidth,
        paperId,
      };
    },

    methods: {
      // 方法定义

      // GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //     const str = url.substring(1);
      //     const strs = str.split('&');
      //     for (let i = 0; i < strs.length; i++) {
      //       theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //     }
      //   }
      //   return theRequest;
      // },
      GetSectionByID() {
        // let Request = new Object();
        // Request = this.GetRequest();
        const str1 = clsPrivateSessionStorage.paperId; // Request['PaperId'];

        if (str1 != null) {
          clsPrivateSessionStorage.paperId = str1;

          const objPage = new Section_QUDI_TSEx(this.refDivLayout);

          objPage.PageLoad();
        } else {
          const objPage = new Section_QUDI_TSEx(this.refDivLayout);
          objPage.PageLoad();
        }
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
