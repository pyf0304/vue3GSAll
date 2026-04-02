<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>

    <div id="tabLayout">
      <!-- 标题层 -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>数据统计</cite>
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

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 20%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td id="td_UserId">
              <select
                id="ddlUserId_q"
                name="ddlUserId_q"
                class="form-control"
                style="width: 170px"
              />
            </td>

            <td>
              <input
                class="layui-input"
                placeholder="起始日期"
                name="txtStartDate_q"
                id="txtStartDate_q"
                style="width: 150px"
              />
            </td>
            <td>
              <input
                class="layui-input"
                placeholder="结束日期"
                name="txtEndDate_q"
                id="txtEndDate_q"
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

      <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div class="layui-card">
              <!-- <ul id="myTab" class="nav nav-tabs">
                <li class="active">
                  <a
                    href="#PaperReadWriteStatistics"
                    data-toggle="tab"
                    @click="liPaperReadWriteStatistics_Click()"
                  >
                    论文读写数据统计
                  </a>
                </li>
                <li
                  ><a href="#PaperStatistics" data-toggle="tab" @click="liPaperStatistics_Click()"
                    >论文统计</a
                  ></li
                >
                <li
                  ><a
                    href="#PaperSubViewpointStatistics"
                    data-toggle="tab"
                    @click="liPaperSubViewpointStatistics_Click()"
                    >论文子观点统计</a
                  ></li
                >
              </ul> -->
              <div class="tab-header">
                <div
                  v-for="tab in tabs"
                  :key="tab.id"
                  :class="{ active: tab.id === activeTabId }"
                  @click="changeTab(tab.id)"
                >
                  {{ tab.label }}
                </div>
              </div>
              <div id="myTabContent" class="tab-content">
                <div
                  v-show="activeTabId === 'PaperReadWriteStatistics'"
                  id="PaperReadWriteStatistics"
                  style="padding: 5px"
                >
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="5">
                            <input type="checkbox" name="" lay-skin="primary" />
                          </th>
                          <th width="50">标识</th>
                          <td width="150">用户</td>
                          <td width="150">学院</td>

                          <th width="150">专业</th>
                          <th width="150">论文读写总数</th>
                          <th width="150">论文阅读数</th>
                          <th width="150">论文写作数</th>
                          <th width="150">观点数大于5阅读</th>
                          <th width="150">观点数大于5写作</th>
                        </tr></thead
                      >

                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>

                  <div id="div_Canvas1" style="width: 50%; padding: 15px; display: none">
                    <div style="height: 280px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >论文读写数据统计
                        </div>
                        <div class="panel-body">
                          <canvas id="Canvas1" style="height: 220px; width: 100%"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-show="activeTabId === 'PaperStatistics'" id="PaperStatistics">
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="5">
                            <input type="checkbox" name="" lay-skin="primary" />
                          </th>
                          <th width="50">标识</th>
                          <td width="150">用户</td>
                          <th width="150">论文总数</th>
                          <th width="150">获得点赞</th>
                          <th width="150">获得评论数</th>
                          <th width="150">给他人点赞数</th>
                          <th width="150">给他人评论数</th>
                        </tr></thead
                      >

                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>
                  <div id="div_Canvas2" style="width: 50%; padding: 15px; display: none">
                    <div style="height: 280px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >论文数据统计
                        </div>
                        <div class="panel-body">
                          <canvas id="Canvas2" style="height: 220px; width: 100%"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-show="activeTabId === 'PaperSubViewpointStatistics'"
                  id="PaperSubViewpointStatistics"
                >
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="5">
                            <input type="checkbox" name="" lay-skin="primary" />
                          </th>
                          <th width="50">标识</th>
                          <td width="150">用户</td>
                          <th width="150">子观点总数</th>
                          <th width="150">获得点赞</th>
                          <th width="150">获得评论数</th>
                          <th width="150">给他人点赞数</th>
                          <th width="150">给他人评论数</th>
                        </tr></thead
                      >

                      <tbody id="tbList" class="x-cate"></tbody>
                    </table>
                  </div>

                  <div id="div_Canvas3" style="width: 50%; padding: 15px; display: none">
                    <div style="height: 280px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >论文子观点数据统计
                        </div>
                        <div class="panel-body">
                          <canvas id="Canvas3" style="height: 220px; width: 100%"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- layui.use(['form'], function () {
        form = layui.form;

    }); -->

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" />
    <input id="hidRoleId" type="hidden" />

    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvPaperSubViewpointBy" type="hidden" value="" />

    <input id="hidPaperRWId" type="hidden" />

    <input id="hidQueryStata" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/site.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/public.css';

  import { defineComponent, onMounted, reactive, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import Paper_Statistics from '@/views/GradEduEx/Paper_Statistics';
  import { message } from '@/utils/myMessage';

  export default defineComponent({
    name: 'Paper_Statistics',
    components: {
      // 组件注册
      // SysScoreSummary_EditCom,
    },
    setup() {
      const activeTabId = ref('PaperReadWriteStatistics');
      const tabs = reactive([
        { id: 'PaperReadWriteStatistics', label: '论文读写数据统计' },
        { id: 'PaperStatistics', label: '论文统计' },
        { id: 'PaperSubViewpointStatistics', label: '论文子观点统计' },
      ]);
      const cateIds = ref<string[]>([]);
      const cateId = ref('');
      const strTitle = ref('论文读写统计表');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        Paper_Statistics.divLayout = refDivLayout.value;
        Paper_Statistics.divQuery = refDivQuery.value;
        Paper_Statistics.divFunction = refDivFunction.value;
        Paper_Statistics.divList = refDivList.value;
        Paper_Statistics.divDataLst = refDivDataLst.value;
        Paper_Statistics.vuebtn_Click = btn_Click;
        Paper_Statistics.GetPropValue = GetPropValue;
        const objPage = new Paper_Statistics();
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'activeTabId':
            return activeTabId.value;

          default:
            return '';
        }
        return '';
      }
      function tbody() {
        $("tbody.x-cate tr[fid!='0']").hide();
        // 栏目多级显示效果
        $('.x-show').click(function () {
          if ($(this).attr('status') == 'true') {
            $(this).html('&#xe625;');
            $(this).attr('status', 'false');
            cateId.value = $(this).parents('tr').attr('cate-id') ?? '';
            $('tbody tr[fid=' + cateId.value + ']').show();
          } else {
            cateIds.value = [];
            $(this).html('&#xe623;');
            $(this).attr('status', 'true');
            cateId.value = $(this).parents('tr').attr('cate-id') ?? '';
            getCateId(cateId.value);
            for (var i in cateIds.value) {
              $('tbody tr[cate-id=' + cateIds.value[i] + ']')
                .hide()
                .find('.x-show')
                .html('&#xe623;')
                .attr('status', 'true');
            }
          }
        });
      }

      function getCateId(cateId: string) {
        $('tbody tr[fid=' + cateId + ']').each(function (index, el) {
          const id = $(el).attr('cate-id') ?? '';
          cateIds.value.push(id);
          getCateId(id);
        });
      }

      /*
论文读写统计
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
*/
      function liPaperReadWriteStatistics_Click() {
        $('#hidQueryStata').val('1');
        $('#Text1').val('进入函数：liPaperReadWriteStatistics_Click');
        var objPage = new Paper_Statistics();
        objPage.liPaperReadWriteStatistics_Click();
      }

      /*
论文统计
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
*/
      function liPaperStatistics_Click() {
        $('#hidQueryStata').val('2');
        $('#Text1').val('进入函数：liPaperStatistics_Click');
        var objPage = new Paper_Statistics();
        objPage.liPaperStatistics_Click();
      }

      /*
论文子观点统计
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
*/
      function liPaperSubViewpointStatistics_Click() {
        $('#hidQueryStata').val('3');
        $('#Text1').val('进入函数：liPaperSubViewpointStatistics_Click');
        var objPage = new Paper_Statistics();
        objPage.liPaperSubViewpointStatistics_Click();
      }

      //论文读写
      function Canvas1(strJson: string) {
        var randomScalingFactor = function () {
          return Math.round(Math.random() * 100);
        };
        var lineChartData = {
          labels: [
            '论文读写总数',
            '论文阅读数',
            '论文写作数',
            '观点数大于5阅读',
            '观点数大于5写作',
          ],
          datasets: [
            {
              fillColor: '#2e9dbd',
              data: strJson,
            },
          ],
        };
        // var ctx = document.getElementById('Canvas1').getContext('2d');
        // window.myLine = new Chart(ctx).Bar(lineChartData, {
        //   bezierCurve: false,
        // });
      }

      //论文
      function Canvas2(strJson: string) {
        var randomScalingFactor = function () {
          return Math.round(Math.random() * 100);
        };
        var lineChartData = {
          labels: ['论文总数', '获得点赞', '获得评论数', '给他人点赞数', '给他人评论数'],
          datasets: [
            {
              fillColor: '#e57f4c',
              data: strJson,
            },
          ],
        };
        // var ctx = document.getElementById('Canvas2').getContext('2d');
        // window.myLine = new Chart(ctx).Bar(lineChartData, {
        //   bezierCurve: false,
        // });
      }

      //论文子观点
      function Canvas3(strJson: string) {
        var randomScalingFactor = function () {
          return Math.round(Math.random() * 100);
        };
        var lineChartData = {
          labels: ['子观点总数', '获得点赞', '获得评论数', '给他人点赞数', '给他人评论数'],
          datasets: [
            {
              fillColor: '#3474d9',
              data: strJson,
            },
          ],
        };
        // var ctx = document.getElementById('Canvas3').getContext('2d');
        // window.myLine = new Chart(ctx).Bar(lineChartData, {
        //   bezierCurve: false,
        // });
      }
      function getDivNameByActiveTabId() {
        let strMsg;
        switch (activeTabId.value) {
          case 'PaperReadWriteStatistics': // '小组成员' },
            return 'PaperReadWriteStatistics';
          case 'PaperStatistics': //, label: '计划' },
            return 'PaperStatistics';
          case 'PaperSubViewpointStatistics': //, label: '计划' },
            return 'PaperSubViewpointStatistics';
          default:
            strMsg = `在switch中${activeTabId.value}没有被处理.(in getDivNameByActiveTabId)`;
            message.warning(strMsg);
            console.error(strMsg);
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string): string {
        switch (strCommandName) {
          case 'getDivNameByActiveTabId':
            return getDivNameByActiveTabId();

          case 'tbody':
            tbody();
            return '';
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          default:
            break;
        }
        Paper_Statisticsbtn_Click(strCommandName, strKeyId, refDivLayout.value);
        return '';
      }
      return {
        activeTabId,
        tabs,
        strTitle,
        btn_Click,
        SysScoreSummary_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        liPaperSubViewpointStatistics_Click,
        liPaperReadWriteStatistics_Click,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        console.log('this.tabId:', tabId);
        Paper_Statistics.btn_Click('changeTab', this.activeTabId);
      },
    },
  });
</script>
<style scoped>
  .panel-default {
    border: none;
    border-radius: 0px;
    margin-bottom: 0px;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  .panel-default > .panel-heading {
    color: #777;
    background-color: #fff;
    border-color: #e6e6e6;
    padding: 10px 10px;
  }

  .panel-default > .panel-body {
    padding: 10px;
    padding-bottom: 0px;
  }

  .panel-default > .panel-body ul {
    overflow: hidden;
    padding: 0;
    margin: 0px;
    margin-top: -5px;
  }

  .panel-default > .panel-body ul li {
    line-height: 27px;
    list-style-type: none;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .panel-default > .panel-body ul li .time {
    color: #a1a1a1;
    float: right;
    padding-right: 5px;
  }
  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #0080ff;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
  }

  .divTree2 {
    /* position: fixed; */
    position: relative;
    /* top: 45px; */
    top: 5px;
    left: 10px;
    /* bottom: 5%; */
    z-index: 999;
  }

  li {
    line-height: 30px;
    text-align: left;
  }

  .tab-header {
    display: flex;
  }

  .tab-header div {
    padding: 10px;
    cursor: pointer;
  }

  .tab-header div.active {
    background-color: #ccc;
  }

  .tab-content {
    margin-top: 10px;
  }

  .selected-td {
    background-color: #e6c3c3; /* Set your desired background color */
  }
</style>

<!-- <script type="text/javascript" src="~/lib/Chart.js"></script> -->

<!--   
        layui.use(['laydate', 'form'],
            function () {
                var laydate = layui.laydate;

                //执行一个laydate实例
                laydate.render({
                    elem: '#txtStartDate_q' //指定元素
                });

                //执行一个laydate实例
                laydate.render({
                    elem: '#txtEndDate_q' //指定元素
                });
            });
   -->
