<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>配置权限</cite>
          </a>
          <label id="lblMsg_List" name="lblMsg_List"></label>
        </span>
        <a
          class="layui-btn layui-btn-small"
          style="line-height: 1.6em; margin-top: 3px; float: right"
          @click="location_reload()"
          title="刷新"
        >
          <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
        </a>
      </div>

      <!-- 查询层 -->

      <!-- 列表层 -->
      <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div class="layui-card">
              <div id="myTabContent" class="tab-content">
                <!-- 分配权限  -->
                <div class="tab-pane fade in active show" id="PaperComment" style="padding: 5px">
                  <div class="layui-card-body">
                    <table class="layui-table">
                      <thead>
                        <tr>
                          <th width="300">配置类型Id</th>
                          <th width="300">配置类型名称</th>
                          <th width="300">分享名称Id</th>

                          <th width="300">数据表Id</th>
                          <th width="25">数据表</th>
                          <th width="30">修改人</th>
                          <th width="90">修改时间</th>
                        </tr>
                      </thead>
                      <tbody id="tbList1" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="divPager" class="pager" value="1" style="display: none"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvgs_UserConfigBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />

    <input id="hidConfigId" type="hidden" />
    <input id="hidshardId" type="hidden" />
    <input id="hidShardName" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/site.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';
  import '@/assets/css/paperlist.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { gs_UserConfigEx } from '@/views/GradEduTools/gs_UserConfigEx';
  import { message } from '@/utils/myMessage';
  import { gs_UserConfigCRUD } from '@/viewsBase/ExamMan/gs_UserConfigCRUD';
  export default defineComponent({
    name: 'gs_UserConfigCRUD',
    components: {
      // 组件注册
      // SysScoreSummary_EditCom,
    },
    setup() {
      const strTitle = ref('用户权限配置');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new gs_UserConfigEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      let vs;

      function ShardIdfunc(strKeyId: string, strShardId: string) {
        $('#ddlShardId' + strKeyId).show();
        //默认选中当前项；
        $('#ddlShardId' + strKeyId)
          .find("option[value='" + strShardId + "']")
          .prop('selected', true);
        //$("#id").find("option[value='"+value+"']").prop("selected",true);
      }

      //function BtnShardName_Click(strShardId, strkey, strName) {
      function BtnShardName_Click(strKeyId: string, strShardId: string) {
        $('#hidshardId').val(strShardId);
        $('#hidConfigId').val(strKeyId);

        // $("#hidshardId").val($('#ddlShardId' + strKeyId).val());
        // var test = $("#hidshardIdId").val();

        var objPage = new gs_UserConfigEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;

        //  $("#hidShardName").val(strName);
        objPage.BtnShardName_Click(strKeyId, strShardId);

        message.success('已切换!');

        $('#ddlShardId' + strKeyId).hide();

        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_UserConfigCRUD.EditObj = SysScoreSummary_EditRef.value;

            break;
          default:
            break;
        }
        gs_UserConfigEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SysScoreSummary_EditRef,
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

<style>
  /* 四个半径值分别是左上角、右上角、右下角和左下角 */

  .divleft {
    width: 54%;
    height: 100%;
    padding: 10px;
    float: left;
    /*background: #fff;*/
    font-family: 'Microsoft YaHei';
    /*top: 40px;*/
    /*left: 10px;*/
    /*bottom: 5%;*/
    z-index: 999;
  }

  /*右边内容区*/
  .divComment {
    margin-right: 10px;
    padding: 20px;
    width: 100%;
    float: right;
    overflow: hidden;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: azure;
    font-weight: bold;
    border-color: #dee2e6 #dee2e6 #fff;
  }
</style>
