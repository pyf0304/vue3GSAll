<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">答疑管理</a>
          <a>
            <cite>论文标注查看</cite>
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
                id="txtTags_q"
                name="txtTags_q"
                placeholder="标注内容"
                class="layui-input"
                style="width: 200px"
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

      <div id="FunInfo" class="alert alert-info" style="display: none">
        <strong>本界面功能：</strong>
        可以接受其他同学的提问邀请回答或者忽略，处理完的可以在历史邀请内重新处理！
      </div>

      <div id="divList" ref="refDivList" class="div_List">
        <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
        <div id="divPager" class="pager" value="1"> </div>
      </div>

      <div id="divDetail" value="1"></div>

      <div id="divEdit" value="1"></div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />

    <input id="hidSortvgs_TagsBy" type="hidden" value="" />

    <input id="hidTypeId" type="hidden" />

    <input id="hidIsReceive" type="hidden" />

    <input id="hidQuestionsCount" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  // import '@/assets/lib/Xadmin/lib/layui/layui.js';
  // import '@/assets/lib/Xadmin/js/x1admin.js';
  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { gs_TagsCRUDEx } from '@/views/InteractManage/gs_TagsCRUDEx';
  import { gs_TagsCRUD } from '@/viewsBase/InteractManage/gs_TagsCRUD';
  import gs_Tags_EditCom from '@/views/InteractManage/gs_Tags_Edit.vue';
  import { gs_Tags_Edit } from '@/viewsBase/InteractManage/gs_Tags_Edit';
  import { message } from '@/utils/myMessage';
  export default defineComponent({
    name: 'GsTagsCRUD',
    components: {
      // 组件注册
      gs_Tags_EditCom,
    },
    props: {
      typeId: {
        type: String,
        default: '01',
      },
    },
    setup(props) {
      const strTitle = ref('标注维护');
      const gs_Tags_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        gs_TagsCRUDEx.GetPropValue = GetPropValue;
        const objPage = new gs_TagsCRUDEx(refDivLayout.value);
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

      /*
       *    答疑列表进入pdf答疑
       */
      function btnQARecord_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要修改的记录！');
          return;
        }
        // var objPage = new gs_TagsCRUDEx();
        // objPage.btnQARecord_Click(strKeyId);
      }

      function Alert1(strMsg: string) {
        message.success(strMsg);
      }

      /*
       *    回复邀请
       */

      function btnQA_PushRecord_Click(
        PaperId: string,
        QuestionsId: string,
        PushId: string,
        idCurrEduCls: string,
      ) {
        // xadmin.open('pdf论文答疑回复', '../GraduateEduEx/PaperSubViewpoint_pdf?Type=02&QuestionsTypeId=01&PaperId=' + PaperId + '&QuestionsId=' + QuestionsId + '&PushId=' + PushId + '&idCurrEduCls=' + idCurrEduCls, '', '', true);
      }

      /*
       *    忽略邀请
       */
      function btnUpdQA_Push_Click(strKey: string) {
        // var objPage = new gs_TagsCRUDEx();
        // objPage.btnUpdQA_Push_Click(strKey);
      }

      //我的论文

      //function MyPA_Click() {
      //    //xadmin.open('申请添加主题', '../GraduateEduTopic/ApplyTopic', '', '', true);
      //    xadmin.open('我的答疑', '../InteractManage/gs_TagsCRUD?typeid=2', '', '', true);
      //}

      function btnAnswer_Click(strKey: string) {
        var objPage = new gs_TagsCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnAnswer_Click(strKey);
      }

      //跳转弹出页
      function xadminopen(strTitle: string, strUrl: string) {
        // xadmin.open(strTitle, strUrl, '', '', true)
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_TagsCRUD.EditObj = gs_Tags_EditRef.value;
            gs_Tags_Edit.EditObj = gs_Tags_EditRef.value;
            break;
          default:
            break;
        }
        gs_TagsCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        gs_Tags_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped>
  .tab-pane {
    padding: 20px;
  }
</style>

<!-- layui.use(['laydate', 'form'], function () { var laydate = layui.laydate; //执行一个laydate实例
laydate.render({ elem: '#txtUpdDate_q' //指定元素 }); }); -->
