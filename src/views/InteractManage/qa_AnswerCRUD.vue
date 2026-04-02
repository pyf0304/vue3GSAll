<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层  -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">答疑管理</a>
          <a>
            <cite>我的回答</cite>
          </a>
          <label id="lblMsg_List" name="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin: 0px 0px 0px 5px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>
      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 60%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
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
              <input
                id="txtQuestionsContent_q"
                name="txtQuestionsContent_q"
                placeholder="问题"
                class="layui-input"
                style="width: 200px"
              />
            </td>
            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                placeholder="提问人"
                class="layui-input"
                style="width: 150px"
              />
            </td>
            <td>
              <input
                id="txtUpdDate_q"
                name="txtUpdDate_q"
                placeholder="回答日期"
                class="layui-input"
                style="width: 150px"
              />
            </td>
            <td>
              <button
                class="layui-btn"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
              >
                <i class="layui-icon">&#xe615;</i>
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区  -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblqa_AnswerList"
              name="lblqa_AnswerList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              我的回答列表
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Delete', '')"
              >删除</button
            >
          </li>
        </ul>
      </div>
      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>
      <!-- 详细信息层 -->
      <div id="divDetail" value="1"></div>
      <!-- 编辑层 -->
      <div id="divEdit" value="1"></div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvqa_AnswerBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { qa_AnswerCRUDEx } from '@/views/InteractManage/qa_AnswerCRUDEx';
  import { qa_AnswerCRUD } from '@/viewsBase/InteractManage/qa_AnswerCRUD';
  import qa_Answer_EditCom from '@/views/InteractManage/qa_Answer_Edit.vue';
  import vqa_Answer_DetailCom from '@/views/InteractManage/vqa_Answer_Detail.vue';
  import { qa_Answer_Edit } from '@/viewsBase/InteractManage/qa_Answer_Edit';
  import { vqa_Answer_Detail } from '@/viewsBase/InteractManage/vqa_Answer_Detail';
  export default defineComponent({
    name: 'QaAnswerCRUD',
    components: {
      // 组件注册
      qa_Answer_EditCom,
      vqa_Answer_DetailCom,
    },
    props: {
      typeId: {
        type: String,
        default: '01',
      },
    },
    setup(props) {
      const strTitle = ref('答疑回答维护');
      const qa_Answer_EditRef = ref();
      const vqa_Answer_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        qa_AnswerCRUDEx.GetPropValue = GetPropValue;
        const objPage = new qa_AnswerCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'typeId':
            return props.typeId;
          default:
            return '';
        }
      }

      function btnAnswer_Click(strKey: string) {
        var objPage = new qa_AnswerCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnAnswer_Click(strKey);
      }

      //跳转弹出页
      function xadminopen(strTitle: string, strUrl: string) {
        // xadmin.open(strTitle, strUrl, '', '', true);
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            qa_AnswerCRUD.DetailObj = vqa_Answer_DetailRef.value;
            vqa_Answer_Detail.DetailObj = vqa_Answer_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            qa_AnswerCRUD.EditObj = qa_Answer_EditRef.value;
            qa_Answer_Edit.EditObj = qa_Answer_EditRef.value;
            break;
          default:
            break;
        }
        qa_AnswerCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        qa_Answer_EditRef,
        vqa_Answer_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped></style>
