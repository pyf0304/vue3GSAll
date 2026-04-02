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
            <cite>用户关系图</cite>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: crimson; line-height: 40px"
            >(提示：如果需要定制个性化的关系图需要在“系统随机排列”的基础上进行保存，保存好以后可以在“用户保存关系图”内查看！)</span
          >
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

      <div class="layui-fluid">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md12">
            <div class="layui-card">
              <div style="height: 40px">
                <div class="btn-group" style="float: left">
                  <button
                    class="btn"
                    id="li_IntelligenceArray"
                    name="li_IntelligenceArray"
                    @click="li_Diagram_Click(1)"
                    ><i class="layui-icon">&#xe66c;</i>系统智能排列</button
                  >
                  <button
                    class="btn"
                    id="li_RandomArray"
                    name="li_RandomArray"
                    @click="li_Diagram_Click(2)"
                    ><i class="layui-icon">&#xe614;</i>系统随机排列</button
                  >

                  <button
                    class="btn"
                    id="li_UserArray"
                    name="li_UserArray"
                    @click="li_Diagram_Click(3)"
                    ><i class="layui-icon">&#xe770;</i>用户保存关系图</button
                  >
                  <button
                    class="btn"
                    id="li_Anonymous"
                    name="li_Anonymous"
                    @click="li_Diagram_Click(4)"
                    ><i class="layui-icon">&#xe612;</i>匿名保存关系图</button
                  >
                </div>

                <div class="btn-group" style="float: right">
                  <button
                    class="btn btn-danger"
                    id="btnSynUserRelaNum"
                    name="btnSynUserRelaNum"
                    @click="btnSynUserRelaNum_Click()"
                    ><i class="layui-icon">&#xe66c;</i>同步用户关系</button
                  >
                </div>
                <div class="btn-group" style="float: right; margin-right: 10px">
                  <button
                    style="display: none"
                    class="btn btn-warning"
                    id="btnSaveUserRela"
                    name="btnSaveUserRela"
                    @click="btnSaveUserRela_Click()"
                    ><i class="layui-icon">&#xe613;</i>保存当前排列关系图</button
                  >
                </div>
              </div>

              <div
                style="
                  width: 100%;
                  height: 790px;
                  padding: 10px;
                  border: 1px solid #e6e6e6;
                  background-color: #fff;
                "
              >
                <div id="main" style="width: 100%; height: 780px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <input id="hidQueryStata" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import gs_UserRela from '@/views/GradEduTools/gs_UserRela';
  import { message } from '@/utils/myMessage';
  export default defineComponent({
    name: 'gs_UserRela',
    components: {
      // 组件注册gs_UserConfigEx
      // SysScoreSummary_EditCom,
    },
    setup() {
      const nodeLength = 0;
      const strUserRelax_y = [];
      const strTitle = ref('用户关系图');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        gs_UserRela.divLayout = refDivLayout.value;
        gs_UserRela.divQuery = refDivQuery.value;
        gs_UserRela.divFunction = refDivFunction.value;
        gs_UserRela.divList = refDivList.value;
        gs_UserRela.divDataLst = refDivDataLst.value;
        const objPage = new gs_UserRela();
        objPage.PageLoad();
      });

      function window_onload() {
        $('#hidQueryStata').val('1');
        $('#li_IntelligenceArray').addClass('btn-info');
        var objPage = new gs_UserRela();
        objPage.PageLoad();
      }

      /*
查询记录
(AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_btnQuery_Click)
*/
      function btnQuery_Click() {
        // var objPage = new gs_UserRela();
        // objPage.Bind_AllData();
      }

      //同步回答统计记录
      function btnSynUserRelaNum_Click() {
        var objPage = new gs_UserRela();
        objPage.btnSynUserRelaNum_Click('');
      }

      function Alert_layer(strMsg: string) {
        message.success(strMsg);
      }

      // //同步回答统计记录
      // function UserRelaCanvas(strUserInfo1Json, strUserInfo2Json, strUserRelaJson, strUserId) {

      // var graph = {  //这是数据项目中一般都是获取到的
      // nodes: strUserInfo1Json,
      // links: strUserRelaJson

      // }
      // var myChart = echarts.init(document.getElementById('main'));
      // var categories = strUserInfo2Json;

      // var winWidth = document.body.clientWidth;
      // var winHeight = document.body.clientHeight;

      // nodeLength = 0;
      // graph.nodes.forEach(function (node) {
      // if ($("#hidQueryStata").val() == "2") {
      //     node.x = parseInt(Math.random() * 1000);  //这里是最重要的如果数据中有返回节点x,y位置这里就不用设置，如果没有这里一定要设置node.x和node.y，不然无法定位节点 也实现不了拖拽了；
      //     node.y = parseInt(Math.random() * 1000);
      // }
      // nodeLength++;
      // //if (node.attributes.modularity_class != 0) {
      // if (node.id != strUserId) {
      //     node.symbolSize = [42, 42];
      //     node.sizeFlag = [42, 42];
      // } else {
      //     node.symbolSize = [64, 64];
      //     node.sizeFlag = [64, 64];
      // }
      // node.category = node.attributes.modularity_class;
      // node.label = {
      //     normal: {
      //         show: true
      //     }
      // }
      // });
      // var option = {    //这里是option配置
      // legend: [{    //图例组件
      //     data: categories.map(function (a) {
      //         return a.name;
      //     }),
      //     top: 0,
      //     left: (winWidth - 1300) / 2,         //这里是图例组件定位使用的，自定义
      //     itemGap: 26,
      //     textStyle: {
      //         padding: [0, 12]
      //     },
      //     backgroundColor: '#f5f5f5'
      // }],
      // animationDurationUpdate: 1500,
      // animationEasingUpdate: 'quinticInOut',
      // series: [
      //     {
      //         type: 'graph',
      //         layout: 'none',           //因为节点的位置已经有了就不用在这里使用布局了
      //         circular: { rotateLabel: true },
      //         animation: false,
      //         data: graph.nodes,
      //         links: graph.links,
      //         categories: categories,   //节点分类的类目
      //         roam: true,   //添加缩放和移动
      //         draggable: false,   //注意这里设置为false，不然拖拽鼠标和节点有偏移
      //         label: {
      //             normal: {
      //                 position: 'bottom',
      //                 rich: {
      //                     bg: {
      //                         backgroundColor: '#f5f5f5'
      //                     }
      //                 }
      //             }
      //         }
      //     }
      // ]
      // };
      // myChart.setOption(option);
      // initInvisibleGraphic();
      // function initInvisibleGraphic() {
      // // Add shadow circles (which is not visible) to enable drag.
      // myChart.setOption({
      //     graphic: echarts.util.map(option.series[0].data, function (item, dataIndex) {
      //         //使用图形元素组件在节点上划出一个隐形的图形覆盖住节点
      //         var tmpPos = myChart.convertToPixel({ 'seriesIndex': 0 }, [item.x, item.y]);
      //         return {
      //             type: 'circle',
      //             id: dataIndex,
      //             position: tmpPos,
      //             shape: {
      //                 cx: 0,
      //                 cy: 0,
      //                 r: 20
      //             },
      //             // silent:true,
      //             invisible: true,
      //             draggable: true,
      //             ondrag: echarts.util.curry(onPointDragging, dataIndex),
      //             z: 100              //使图层在最高层
      //         };
      //     })
      // });
      // window.addEventListener('resize', updatePosition);
      // myChart.on('dataZoom', updatePosition);
      // }
      // myChart.on('graphRoam', updatePosition);
      // function updatePosition() {    //更新节点定位的函数
      // myChart.setOption({
      //     graphic: echarts.util.map(option.series[0].data, function (item, dataIndex) {
      //         var tmpPos = myChart.convertToPixel({ 'seriesIndex': 0 }, [item.x, item.y]);
      //         return {
      //             position: tmpPos
      //         };
      //     })
      // });

      // }

      // function onPointDragging(dataIndex) {      //节点上图层拖拽执行的函数
      // var tmpPos = myChart.convertFromPixel({ 'seriesIndex': 0 }, this.position);
      // option.series[0].data[dataIndex].x = tmpPos[0];
      // option.series[0].data[dataIndex].y = tmpPos[1];

      // strUserRelax_y = [];
      // for (i = 0; i < nodeLength; i++) {
      //     //for (i = 0; i < option.series[0].data.nodeLength; i++) {
      //     var strUserId = option.series[0].data[i].id;
      //     var strX = option.series[0].data[i].x;
      //     var strY = option.series[0].data[i].y;
      //     strUserRelax_y.push({ 'id': strUserId, 'x': strX, 'y': strY });
      // }
      // myChart.setOption(option);
      // updatePosition();
      // }

      // }

      //系统智能排列
      function li_Diagram_Click(strKey: number) {
        $('#hidQueryStata').val(strKey);
        switch (strKey) {
          case 1: //系统智能排列
            $('#btnSaveUserRela').hide();
            //先清除背景色
            //$("#li_IntelligenceArray").removeClass("btn-info");
            $('#li_RandomArray').removeClass('btn-info');
            $('#li_UserArray').removeClass('btn-info');
            $('#li_Anonymous').removeClass('btn-info');

            //添加背景色
            $('#li_IntelligenceArray').addClass('btn-info');
            break;
          case 2: //系统随机排列
            $('#btnSaveUserRela').show();
            //先清除背景色
            $('#li_IntelligenceArray').removeClass('btn-info');
            //$("#li_RandomArray").removeClass("btn-info");
            $('#li_UserArray').removeClass('btn-info');
            $('#li_Anonymous').removeClass('btn-info');
            //添加背景色
            $('#li_RandomArray').addClass('btn-info');
            break;
          case 3: //用户保存关系图
            $('#btnSaveUserRela').hide();
            //先清除背景色
            $('#li_IntelligenceArray').removeClass('btn-info');
            $('#li_RandomArray').removeClass('btn-info');
            //$("#li_UserArray").removeClass("btn-info");
            $('#li_Anonymous').removeClass('btn-info');
            //添加背景色
            $('#li_UserArray').addClass('btn-info');
            break;
          case 4: //匿名关系图
            $('#btnSaveUserRela').hide();
            //先清除背景色
            $('#li_IntelligenceArray').removeClass('btn-info');
            $('#li_RandomArray').removeClass('btn-info');
            $('#li_UserArray').removeClass('btn-info');
            //添加背景色
            $('#li_Anonymous').addClass('btn-info');

            break;
        }

        btn_Click('btnQuery', '');
      }

      //保存当前排列关系图
      function btnSaveUserRela_Click() {
        if (strUserRelax_y.length == 0) {
          Alert_layer('请修改拖动关系图然后再保存!');
        } else {
          var objPage = new gs_UserRela();
          // objPage.btnSaveUserRela_Click(strUserRelax_y);
        }
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
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
        gs_UserRelabtn_Click(strCommandName, strKeyId, refDivLayout.value);
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
        li_Diagram_Click,
        btnSaveUserRela_Click,
        btnSynUserRelaNum_Click,
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

<!-- <script src="~/lib/echarts.js"></script> -->
