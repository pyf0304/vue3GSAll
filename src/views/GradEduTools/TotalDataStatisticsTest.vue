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
          style="width: 50%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td id="td_UserId" style="display: none">
              <select
                id="ddlUserId_q"
                name="ddlUserId_q"
                class="form-control"
                style="width: 170px"
              />
            </td>
            <td id="td_TotalDataTypeId">
              <select
                id="ddlTotalDataTypeId_q"
                name="ddlTotalDataTypeId_q"
                class="form-control"
                style="width: 200px"
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
            <td>
              <button
                class="btn btn-primary"
                style="width: 120px"
                id="btnSynTotalDataStatistics"
                name="btnDelRecord"
                @click="btnSynTotalDataStatistics_Click()"
                ><i class="layui-icon">&#xe605;</i>同步刷新</button
              >
            </td>
            <td>
              <button
                id="btnAddNewRecord"
                name="btnAddNewRecord"
                class="btn btn-outline-info text-nowrap"
                @click="btnSetUpDateRecord_Click()"
                >设置教学班日期</button
              >
            </td>
          </tr>
        </table>
      </div>

      <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div class="layui-card">
              <div>
                <div class="btn-group">
                  <button
                    class="btn btn-primary"
                    id="btnTotalDataNum"
                    name="btnDelRecord"
                    @click="liTotalDataNum_Click()"
                    ><i class="layui-icon">&#xe612;</i>用户周观点数统计图</button
                  >

                  <button
                    class="btn btn-success"
                    id="btnUserNum"
                    name="btnDelRecord"
                    @click="liUserNum_Click()"
                    ><i class="layui-icon">&#xe613;</i>单个用户周观点统计图</button
                  >

                  <button
                    class="btn btn-info"
                    id="btnTeaClassNum"
                    name="btnDelRecord"
                    @click="liTeaClassNum_Click()"
                    ><i class="layui-icon">&#xe66c;</i>教学班周观点数统计图</button
                  >

                  <button
                    class="btn btn-secondary"
                    id="btnTeaClassAverage"
                    name="btnDelRecord"
                    @click="TeaClassAverage_Click()"
                    ><i class="layui-icon">&#xe67a;</i>教学班周均分趋势图</button
                  >
                </div>
              </div>
              <div>
                <div id="TotalDataNum">
                  <div style="width: 99%; padding: 15px">
                    <div style="height: 650px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-area-chart fa-lg" style="padding-right: 5px"></i
                          >当前教学班所有用户周期统计
                        </div>
                        <div id="div_Canvas3" class="panel-body" style="padding-bottom: 0px"> </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="150">周</th>
                          <th width="150">周日期范围(开始---结束)</th>
                          <th width="100">用户</th>
                          <th width="50">观点数</th>
                        </tr>
                      </thead>
                      <tbody id="tbListTotalDataNum" class="x-cate"></tbody>
                    </table>
                  </div>
                </div>
                <div id="UserNum" style="padding: 5px; display: none">
                  <div style="width: 99%; padding: 15px">
                    <div style="height: 380px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >学生数据统计
                        </div>
                        <div id="div_Canvas1" class="panel-body"> </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="150">周</th>
                          <th width="150">周日期范围(开始---结束)</th>
                          <th width="50">观点数</th>
                        </tr>
                      </thead>
                      <tbody id="tbListUserNum" class="x-cate"></tbody>
                    </table>
                  </div>
                </div>
                <div id="TeaClassNum" style="padding: 5px; display: none">
                  <div style="width: 99%; padding: 15px">
                    <div style="height: 380px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >教学班周观点数统计图
                        </div>
                        <div id="div_Canvas2" class="panel-body"> </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="150">周</th>
                          <th width="150">周日期范围(开始---结束)</th>
                          <th width="50">观点数</th>
                        </tr>
                      </thead>
                      <tbody id="tbListTeaClassNum" class="x-cate"></tbody>
                    </table>
                  </div>
                </div>
                <div id="TeaClassAverage" style="padding: 5px; display: none">
                  <div style="width: 99%; padding: 15px">
                    <div style="height: 380px; border: 1px solid #e6e6e6; background-color: #fff">
                      <div class="panel panel-default">
                        <div class="panel-heading">
                          <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"></i
                          >教学班周均分趋势图
                        </div>
                        <div id="div_Canvas4" class="panel-body"> </div>
                      </div>
                    </div>
                  </div>
                  <div class="layui-card-body">
                    <table class="layui-table layui-form">
                      <thead>
                        <tr>
                          <th width="150">周</th>
                          <th width="150">周日期范围(开始---结束)</th>
                          <th width="50">平均分(已打分数/观点数)</th>
                        </tr>
                      </thead>
                      <tbody id="tbListClassAverage" class="x-cate"></tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="divEdit"></div>
    </div>
    <input id="hidQueryStata" type="hidden" />

    <input id="hidId_CurrEduCls" type="hidden" />
    <!-- 当前教学班日期范围Id -->
    <input id="hidgs_DateId" type="hidden" />
    <input id="hidStartDate" type="hidden" />
    <input id="hiEndDate" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/public.css';
  import $ from 'jquery';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
  import { gs_TeachingDateCRUDEx } from '@/viewsShare/DailyRunning/gs_TeachingDateCRUDEx';
  import TotalDataStatisticsEx from '@/views/GradEduTools/TotalDataStatisticsEx';
  import { message } from '@/utils/myMessage';
  import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  export default defineComponent({
    name: 'TotalDataStatisticsTest',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('系统分数汇总表维护');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const cateIds = ref(['']);
      const id = ref('');
      onMounted(() => {
        TotalDataStatisticsEx.vuebtn_Click = btn_Click;
        TotalDataStatisticsEx.GetPropValue = GetPropValue;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return '';

          default:
            return '';
        }
      }
      //设置教学班时间
      function btnSetUpDateRecord_Click() {
        var objPage = new TotalDataStatisticsEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnSetUpDateRecord_Click();
      }

      function tbody() {
        $("tbody.x-cate tr[fid!='0']").hide();
        // 栏目多级显示效果
        $('.x-show').click(function () {
          if ($(this).attr('status') == 'true') {
            $(this).html('&#xe625;');
            $(this).attr('status', 'false');
            const cateId = $(this).parents('tr').attr('cate-id');
            $('tbody tr[fid=' + cateId + ']').show();
          } else {
            cateIds.value = [];
            $(this).html('&#xe623;');
            $(this).attr('status', 'true');
            const cateId = $(this).parents('tr').attr('cate-id');
            getCateId(cateId ?? '');
            for (let i in cateIds) {
              $('tbody tr[cate-id=' + i + ']')
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
          id.value = $(el).attr('cate-id') ?? '';
          cateIds.value.push(id.value);
          getCateId(id.value);
        });
      }

      function window_onload() {
        var objPage = new TotalDataStatisticsEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        $('#hidQueryStata').val('3');
        objPage.PageLoad();
      }

      /*
  li1
     (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
     */
      function liUserNum_Click() {
        $('#TotalDataNum').hide();
        $('#UserNum').show();
        $('#TeaClassNum').hide();
        $('#TeaClassAverage').hide();
        $('#hidQueryStata').val('1');
        $('#td_UserId').show();

        btn_Click('btnQuery', '');
      }
      /*
  li2
     (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
     */
      function liTeaClassNum_Click() {
        $('#TotalDataNum').hide();
        $('#UserNum').hide();
        $('#TeaClassNum').show();
        $('#TeaClassAverage').hide();
        $('#hidQueryStata').val('2');
        $('#td_UserId').hide();
        //
        btn_Click('btnQuery', '');
      }
      /*
   li3
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
  */
      function liTotalDataNum_Click() {
        $('#TotalDataNum').show();
        $('#UserNum').hide();
        $('#TeaClassNum').hide();
        $('#TeaClassAverage').hide();
        $('#hidQueryStata').val('3');
        $('#td_UserId').hide();
        //
        btn_Click('btnQuery', '');
      }
      //li4教学班平均分
      function TeaClassAverage_Click() {
        $('#TotalDataNum').hide();
        $('#UserNum').hide();
        $('#TeaClassNum').hide();
        $('#TeaClassAverage').show();
        $('#hidQueryStata').val('4');
        $('#td_UserId').hide();
        //
        btn_Click('btnQuery', '');
      }

      function btnSynTotalDataStatistics_Click() {
        var objPage = new TotalDataStatisticsEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnSynTotalDataStatistics_Click();
      }
      //各观点学生统计
      function Canvas1(strlabelsJson: string, strDatasetsJson: string) {
        var config = {
          type: 'bar',
          data: {
            labels: strlabelsJson,
            datasets: [
              {
                label: '每周记录',
                data: strDatasetsJson,
                fill: false,
                backgroundColor: '#2e9dbd',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          },
        };
        $('#div_Canvas1').html(
          '<canvas id="Canvas1" style="height: 320px; width: 100%;"></canvas>',
        );
        // var ctx = document.getElementById('Canvas1').getContext('2d');

        // window.myLine = new Chart(ctx, config);
      }
      //各观点教学班统计
      function Canvas2(strlabelsJson: string, strdatasetsJson: string, strColorJson: string) {
        var config = {
          type: 'bar',
          data: {
            labels: strlabelsJson,
            datasets: [
              {
                label: '周记录',
                data: strdatasetsJson,
                fill: false,
                borderWidth: 1,
                backgroundColor: strColorJson,
              },
            ],
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                },
              ],
            },
          },
        };
        $('#div_Canvas2').html(
          '<canvas id="Canvas2" style="height: 320px; width: 100%;"></canvas>',
        );
        // var ctx = document.getElementById('Canvas2');
        // ctx.getContext('2d');

        // ctx.style.height = '320px';
        // window.myLine = new Chart(ctx, config);
      }
      //教学班周教师打分平均分
      function Canvas4(strlabelsJson: string, strdatasetsJson: string, strColorJson: string) {
        var config = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: [
              {
                label: '周记录',
                data: strdatasetsJson,
                fill: false,
                borderWidth: 1,
                backgroundColor: strColorJson,
              },
            ],
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: '',
              //text: '当前教学班所有用户周期统计'
            },
            tooltips: {
              mode: 'index',
              intersect: false,
            },
            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  scalelabel: {
                    display: true,
                    labelString: 'Week',
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scalelabel: {
                    display: true,
                    labelString: 'Value',
                  },
                },
              ],
            },
          },
        };
        $('#div_Canvas4').html(
          '<canvas id="Canvas4" height="350" style="height: 350px; width: 100%;"></canvas>',
        );
        // var ctx = document.getElementById('Canvas4');
        // ctx.getContext('2d');
        // window.myLine = new Chart(ctx, config);
      }

      var clsTooltips = function () {
        // this.colors = [];
        // this.Text = '';
        // this.value = 0.0;
        // this.body = [];
      };

      var customTooltips = function (tooltip: any) {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table></table>';
          // this._chart.canvas.parentNode.appendChild(tooltipEl);
        }
        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          // tooltipEl.style.opacity = 0;
          return;
        }
        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltip.yAlign) {
          tooltipEl.classList.add(tooltip.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }
        // function getBody(bodyItem) {
        //   return bodyItem.lines;
        // }
        // // Set Text
        // if (tooltip.body) {
        //   var titleLines = tooltip.title || [];
        //   var bodyLines = tooltip.body.map(getBody);
        //   var arrBodyLines = new Array();
        //   bodyLines.forEach(function (body, i) {
        //     var objTooltips = new clsTooltips();
        //     objTooltips.colors = tooltip.labelColors[i];
        //     objTooltips.body = body;
        //     var arr = body[0].split(':');
        //     if (arr.length == 2) {
        //       objTooltips.Text = arr[0];
        //       objTooltips.value = Number(arr[1]);
        //     }
        //     arrBodyLines.push(objTooltips);
        //   });
        //   arrBodyLines = arrBodyLines.sort(function (x, y) {
        //     return y.value - x.value;
        //   });
        //   var innerHtml = '<thead>';
        //   titleLines.forEach(function (title) {
        //     innerHtml += '<tr><th>' + title + '</th></tr>';
        //   });
        //   innerHtml += '</thead><tbody>';
        //   console.log('bodyLines', bodyLines);

        //   arrBodyLines.forEach(function (objInFor, i) {
        //     console.log('objInFor', objInFor);
        //     //var colors = tooltip.labelColors[i];
        //     var style = 'background:' + objInFor.colors.backgroundColor;
        //     style += '; border-color:' + objInFor.colors.borderColor;
        //     style += '; border-width: 2px';
        //     var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
        //     innerHtml += '<tr><td>' + span + objInFor.body + '</td></tr>';
        //   });
        //   innerHtml += '</tbody>';
        //   var tableRoot = tooltipEl.querySelector('table');
        //   tableRoot.innerHTML = innerHtml;
        // }
        // var positionY = this._chart.canvas.offsetTop;
        // var positionX = this._chart.canvas.offsetLeft;
        // // Display, position, and set styles for font
        // tooltipEl.style.opacity = 1;
        // tooltipEl.style.left = positionX + tooltip.caretX + 'px';
        // tooltipEl.style.top = positionY + tooltip.caretY + 'px';
        // tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
        // tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
        // tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
        // tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      };
      //所有学生各观点统计
      function Canvas3(strlabelsJson: string, strdatasetsJson: string) {
        var config = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: strdatasetsJson,
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: '',
              //text: '当前教学班所有用户周期统计'
            },

            tooltips: {
              enabled: false,
              mode: 'index',
              position: 'nearest',
              custom: customTooltips,
            },
            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  scalelabel: {
                    display: true,
                    labelString: 'Week',
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scalelabel: {
                    display: true,
                    labelString: 'Value',
                  },
                },
              ],
            },
          },
        };

        $('#div_Canvas3').html(
          '<canvas id="Canvas3" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        // var ctx = document.getElementById('Canvas3').getContext('2d');

        // window.myLine = new Chart(ctx, config);
      }

      function Alert1(strMsg: string) {
        message.success(strMsg);
      }

      function Alert2(strMsg: string) {
        message.success(strMsg);
      }

      function Alert3(strMsg: string) {
        message.success(strMsg);
      }
      function Alert4(strMsg: string) {
        message.success(strMsg);
      }

      function btn_Click(strCommandName: string, strKeyId: string): string {
        if (strCommandName == '') {
          var strKeyId0 = GetInputValueInDivObj(refDivLayout.value, 'hidgs_DateId');
          if (strKeyId0 == '') {
            gs_TeachingDateCRUDEx.btn_Click('Create', strKeyId0, refDivLayout.value);
          } else {
            gs_TeachingDateCRUDEx.btn_Click('UpdateRecordInTab', strKeyId0, refDivLayout.value);
          }
        }

        switch (strCommandName) {
          case 'tbody':
            tbody();
            return '';
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            gs_TotalDataStatisticsCRUD.EditObj = SysScoreSummary_EditRef.value;

            break;
          default:
            break;
        }
        TotalDataStatisticsEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
        return '';
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
        liTotalDataNum_Click,
        liUserNum_Click,
        liTeaClassNum_Click,
        btnSynTotalDataStatistics_Click,
        btnSetUpDateRecord_Click,
        TeaClassAverage_Click,
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
<style scoped>
  /* canvas {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  } */
  #chartjs-tooltip {
    opacity: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 3px;
    -webkit-transition: all 0.1s ease;
    transition: all 0.1s ease;
    pointer-events: none;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
  .chartjs-tooltip-key {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }

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
</style>

<!-- <script type="text/javascript" src="~/lib/charts/Chart.min.js"></script>
<script type="text/javascript" src="~/lib/charts/utils.js"></script> -->
<!-- 
  layui.use(['laydate', 'form'], function () {
    var laydate = layui.laydate;
    //执行一个laydate实例
    laydate.render({
      elem: '#txtStartDate_q', //指定元素
    });
    //执行一个laydate实例
    laydate.render({
      elem: '#txtEndDate_q', //指定元素
    });
  }); -->
@/viewsShare/DailyRunning/gs_TeachingDateCRUDEx
