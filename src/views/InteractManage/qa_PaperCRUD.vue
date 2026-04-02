<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">答疑管理</a>
        <a>
          <cite>论文答疑维护</cite>
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
    <!-- 查询层  -->

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
              placeholder="问题内容"
              class="layui-input"
              style="width: 200px"
            />
          </td>
          <td>
            <input
              id="txtUserName_q"
              name="txtUserName_q"
              placeholder="提问用户"
              class="layui-input"
              style="width: 150px"
            />
          </td>
          <td>
            <input
              id="txtUpdDate_q"
              name="txtUpdDate_q"
              placeholder="编辑日期"
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
    <div id="FunInfo" class="alert alert-info" style="display: none">
      <strong>本界面功能：</strong>
      可以接受其他同学的提问邀请回答或者忽略，处理完的可以在历史邀请内重新处理！
    </div>
    <!--  列表层  -->

    <div class="layui-collapse" lay-accordion>
      <div class="layui-colla-item">
        <h2 class="layui-colla-title">论文答疑列表</h2>
        <div id="divtab1" class="layui-colla-content layui-show">
          <div id="divList" ref="refDivList" class="div_List">
            <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
            <div id="divPager" class="pager" value="1"> </div>
          </div>
        </div>
      </div>

      <div class="layui-colla-item">
        <h2 class="layui-colla-title"
          >您有<span class="layui-badge" id="QuestionsCount">0</span>个问题邀请未回复</h2
        >

        <div id="divtab2" class="layui-colla-content">
          <ul class="nav nav-pills" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#home">现有邀请</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#menu1">历史邀请</a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div id="home" class="tab-pane active"> </div>
            <div id="menu1" class="tab-pane fade"> </div>
          </div>
        </div>
      </div>
      <div class="layui-colla-item">
        <h2 class="layui-colla-title">您的同学都没有未解决的问题</h2>
        <div id="divtab3" class="layui-colla-content"> </div>
      </div>
    </div>

    <!-- 详细信息层  -->
    <div id="divDetail" value="1"></div>
    <!-- 编辑层  -->
    <div id="divEdit" value="1"></div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />

    <input id="hidSortvqa_PaperBy" type="hidden" value="" />

    <!-- //类型用于区分是查看的还是个人维护的 -->
    <input id="hidTypeId" type="hidden" />

    <!-- //类型用于区分是查看的还是个人维护的 -->
    <input id="hidIsReceive" type="hidden" />

    <!-- 被邀请数  -->
    <input id="hidQuestionsCount" type="hidden" />
  </div>

  <!-- </div>
</div> -->
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { qa_PaperCRUDEx } from '@/views/InteractManage/qa_PaperCRUDEx';
  import { qa_PaperCRUD } from '@/viewsBase/InteractManage/qa_PaperCRUD';
  import qa_Paper_EditCom from '@/views/InteractManage/qa_Paper_Edit.vue';
  import qa_Paper_DetailCom from '@/views/InteractManage/qa_Paper_Detail.vue';
  import { qa_Paper_Edit } from '@/viewsBase/InteractManage/qa_Paper_Edit';
  import { qa_Paper_Detail } from '@/viewsBase/InteractManage/qa_Paper_Detail';
  export default defineComponent({
    name: 'QaPaperCRUD',
    components: {
      // 组件注册
      qa_Paper_EditCom,
      qa_Paper_DetailCom,
    },
    props: {
      typeId: {
        type: String,
        default: '01',
      },
    },
    setup(props) {
      const strTitle = ref('论文答疑表维护');
      const qa_Paper_EditRef = ref();
      const qa_Paper_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        qa_PaperCRUDEx.GetPropValue = GetPropValue;
        const objPage = new qa_PaperCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'typeId':
            return props.typeId;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Detail':
            qa_PaperCRUD.DetailObj = qa_Paper_DetailRef.value;
            qa_Paper_Detail.DetailObj = qa_Paper_DetailRef.value;
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            qa_PaperCRUD.EditObj = qa_Paper_EditRef.value;
            qa_Paper_Edit.EditObj = qa_Paper_EditRef.value;
            break;
          default:
            break;
        }
        qa_PaperCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        qa_Paper_EditRef,
        qa_Paper_DetailRef,
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
