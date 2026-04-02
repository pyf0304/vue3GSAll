<template>
  <div id="divLayout" ref="refDivLayout">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层  -->
      <div v-if="showHeader" class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="javascript:void(0)">首页</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">个人中心</a></li>
              <li class="breadcrumb-item active" aria-current="page">系统分数汇总表</li>
              <li class="breadcrumb-item"
                ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
              ></li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabQuery"
          style="width: 30%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtUserName_q"
                name="txtUserName_q"
                class="layui-input"
                placeholder="用户名"
                style="width: 150px"
              />
            </td>

            <td>
              <select
                id="ddlSchoolYear_q"
                name="ddlSchoolYear_q"
                class="form-control form-control-sm"
                style="width: 200px"
              ></select>
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
            <td>
              <button
                id="btnExportWord"
                class="btn btn-outline-info text-nowrap"
                name="btnExportWord"
                title="导出数据"
                >导出数据</button
              >
            </td>

            <td>
              <button
                id="btnTotalRevalidation"
                name="btnDelRecord"
                class="btn btn-outline-info text-nowrap"
                @click="btnTotalRevalidation_Click()"
                style="display: none"
                >学生总分核算</button
              >
            </td>
            <td>
              <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']" /> </a
            ></td>
            <td>
              <button type="button" @click="CloseWindow()" class="btn btn-outline-info text-nowrap"
                >返回</button
              >
            </td>
          </tr>
        </table>
      </div>

      <!-- 列表层 -->

      <div id="PaperPreview" class="layui-fluid div_Page_Local">
        <div style="text-align: center"
          ><h3><label id="UpWord">教学班所有学生成长档案</label></h3></div
        >
        <div id="CurrEduClsPic" ref="refDivList" class="layui-card-body layui-fluid">
          <div
            ><span class="text-info title-text font-weight-bold">当前教学班:</span>
            <span id="spnEduClsName" style="font-weight: bold"></span>&nbsp;&nbsp;&nbsp;<span
              id="MajorName"
              style="font-weight: bold"
            ></span>
            <span class="ml-2 text-info title-text font-weight-bold">学年:</span
            ><span id="ShoolYear" style="font-weight: bold"></span>
            <span class="ml-2 text-info title-text font-weight-bold">开始时间:</span
            ><span id="spnStartDate" style="font-weight: bold"></span>
            <span class="ml-2 text-info title-text font-weight-bold">结束时间:</span
            ><span id="spnEndDate" style="font-weight: bold"></span>
            <button
              class="btn btn-outline-success"
              type="submit"
              @click="btn_Click('ResetEduClsDate', '')"
              >重置</button
            >
          </div>
          <table id="tableList" class="TablePaper layui-table">
            <thead>
              <tr>
                <th width="100" style="font-weight: bold">用户</th>

                <th width="150" style="font-weight: bold">论文子观点<br />/名次</th>
                <th width="150" style="font-weight: bold">个人观点<br />/名次</th>
                <th width="150" style="font-weight: bold">专家观点<br />/名次</th>
                <th width="150" style="font-weight: bold">主题概念<br />/名次</th>
                <th width="150" style="font-weight: bold">客观事实<br />/名次</th>
                <th width="150" style="font-weight: bold">客观数据<br />/名次</th>
                <th width="150" style="font-weight: bold">技能<br />/名次</th>
                <th width="150" style="font-weight: bold">社会关系<br />/名次</th>
                <th width="150" style="font-weight: bold">问题回答<br />/名次</th>
                <th width="150" style="font-weight: bold">给他人评论</th>
                <th width="150" style="font-weight: bold">讨论打分</th>
                <th width="150" style="font-weight: bold">评价打分</th>
                <th width="150" style="font-weight: bold">标志打分</th>
                <th width="180" style="font-weight: bold">各观点总分</th>
                <th width="150" style="font-weight: bold">总分名次</th>
                <th width="150" style="font-weight: bold">详情</th>
              </tr>
            </thead>
            <tbody id="divDataLst" ref="refDivDataList" class="x-cate"></tbody>
          </table>
        </div>

        <!-- 教学班用户关系图 -->
        <div id="UserRelaAll" class="info">
          <div class="layui-row layui-col-space15">
            <div class="layui-col-md12">
              <div class="layui-card">
                <div style="height: 40px">
                  <div class="panel-heading title btn-1" style="float: left">
                    <div>
                      <i class="fa fa-bar-chart fa-lg" style="padding-right: 5px"> </i
                      >用户成员关系图 &nbsp;&nbsp;<span
                        style="color: crimson; line-height: 40px; font-size: 14px"
                        >(提示：如果需要定制个性化的关系图需要在“系统随机排列”的基础上进行保存，保存好以后可以在“用户保存关系图”内查看！)</span
                      >
                    </div>
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
                  <button
                    id="li_IntelligenceArray"
                    class="btn"
                    name="li_IntelligenceArray"
                    @click="li_IntelligenceArray_Click()"
                    ><i class="layui-icon">&#xe66c;</i>系统智能排列</button
                  >
                  <button
                    id="li_RandomArray"
                    class="btn"
                    name="li_RandomArray"
                    @click="li_RandomArray_Click()"
                    ><font-awesome-icon icon="gear" />系统随机排列</button
                  >
                  <button
                    id="li_UserArray"
                    class="btn"
                    name="li_UserArray"
                    @click="li_UserArray_Click()"
                    ><i class="layui-icon">&#xe612;</i>用户保存关系图</button
                  >

                  <div class="btn-group" style="float: right">
                    <button
                      id="btnSynUserRelaNum"
                      class="btn btn-danger"
                      name="btnSynUserRelaNum"
                      @click="btnSynUserRelaNum_Click()"
                      ><i class="layui-icon">&#xe66c;</i>同步用户关系</button
                    >
                  </div>
                  <div class="btn-group" style="float: right; margin-right: 10px">
                    <button
                      id="btnSaveUserRela"
                      style="display: none"
                      class="btn btn-warning"
                      name="btnSaveUserRela"
                      @click="btnSaveUserRela_Click()"
                      ><font-awesome-icon icon="user-plus" />保存当前排列关系图</button
                    >
                  </div>

                  <div id="divMainUserRela" style="width: 100%; height: 780px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 教学班周观点统计 -->
        <div id="CurrEduclsUserRela"></div>

        <hr />
        <br />
        <!-- 教学班用户详细观点数据 -->

        <!-- <div id="ExportDetail" class="div_List" style="position: fixed"> </div> -->
        <div id="ExportDetail" class="div_List"> </div>

        <!-- 得到Canvas图片 -->
        <form id="uploadForm" method="post" enctype="multipart/form-data">
          <div id="div_Canvas3" class="panel-body" style="padding-bottom: 0px; position: fixed">
            <div id="divUserRela" style="width: 100%; height: 750px; position: fixed"></div>
          </div>
        </form>
      </div>
      <!-- 编辑层 -->

      <div
        id="divEditRegion"
        class="modal fade"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content" style="width: 800px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">模态框（Modal）标题</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                >&times;</button
              >
            </div>
            <div class="modal-body">
              <table
                id="tabEdit"
                style="width: 70%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <label
                      id="lblUserId"
                      name="lblUserId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      用户ID
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUserId"
                      name="txtUserId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblSchoolYear"
                      name="lblSchoolYear"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      学年
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlSchoolYear"
                      name="ddlSchoolYear"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    ></select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblScoreTypeId"
                      name="lblScoreTypeId"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      分数类型Id
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlScoreTypeId"
                      name="ddlScoreTypeId"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    ></select>
                  </td>
                  <td>
                    <label
                      id="lblUpdUser"
                      name="lblUpdUser"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      修改人
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtUpdUser"
                      name="txtUpdUser"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      id="lblMemo"
                      name="lblMemo"
                      class="col-form-label text-right"
                      style="width: 90px"
                    >
                      备注
                    </label>
                  </td>
                  <td>
                    <input id="txtMemo" name="txtMemo" class="form-control" style="width: 200px" />
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button id="btnCancel" type="button" class="btn btn-default" data-dismiss="modal"
                >关闭</button
              >
              <button
                id="btnOKUpd"
                type="button"
                class="btn btn-primary"
                @click="btn_Click('mySubmit', '')"
                >添加</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal -->
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidUserId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvSysScoreSummaryBy" type="hidden" value="" />
    <!-- 教学班Id传递参数 -->
    <input id="hidIdCurrEduClspara" type="hidden" />
    <!-- 数据用户 -->
    <input id="hidDataUserId" type="hidden" />
    <!-- 图片类型、是单个用户图片，还是整个教学班图片 1代表个人、 2代表教学班 -->
    <input id="hidPicType" type="hidden" />

    <input id="hidQueryStata" type="hidden" />
    <!--编辑层-->
    <gs_TeachingDate_EditCom ref="gs_TeachingDate_EditRef"></gs_TeachingDate_EditCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import '@/assets/css/SimpleTree.css';
  // import '@/assets/css/font-awesome.min.css';
  import '@/assets/css/public.css';

  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import $ from 'jquery';
  import router from '@/router';

  import { SysScoreSummaryCRUD } from '@/viewsBase/GradEduTools/SysScoreSummaryCRUD';
  import * as echarts from 'echarts';
  import ECharts from 'vue-echarts';
  import { ECBasicOption } from 'echarts/types/dist/shared';
  import { GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';
  import Chart, { ChartConfiguration } from 'chart.js/auto';
  import { message } from '@/utils/myMessage';
  import { clsTooltips, clsTooltips6 } from '@/views/GradEduTools/clsTooltips';
  import { OnlyShowDiv } from '@/ts/PubFun/tzPubFun';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import SysScoreSummaryNewTotal from '@/views/GradEduTools/SysScoreSummaryNewTotal';
  import gs_UserRela from '@/views/GradEduTools/gs_UserRela';
  import { GetInputValueInDivObj, SetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { Canvas_UploadFile } from '@/ts/FunClass/clsPubFun4Web';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import TotalDataStatisticsEx from '@/views/GradEduTools/TotalDataStatisticsEx';
  import gs_TeachingDate_EditCom from '@/viewsShare/DailyRunning/gs_TeachingDate_Edit.vue';
  import { gs_TeachingDate_Edit } from '@/viewsBase/DailyRunning/gs_TeachingDate_Edit';

  let myChart0: echarts.ECharts | null; // 外部定义的 chart 变量
  let graphData: any = null; // 全局定义的 graphData 变量
  let nodeLength = 0;
  let strUserRelax_y: any[];

  export default defineComponent({
    name: 'SysScoreSummaryNewTotal',

    components: {
      gs_TeachingDate_EditCom,
      'vue-echarts': ECharts,
    },
    props: {
      showHeader: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const activeTabId = ref('Paper_SubViewpoint');
      const tabs = reactive([
        { id: 'Paper_SubViewpoint', label: '子观点' },
        { id: 'Paper_QA', label: '论文答疑' },
        { id: 'Paper_Tags', label: '论文标记' },
        { id: 'Tea_QA', label: '教师提问' },
      ]);
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数gs_UserRela
      const gs_TeachingDate_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivList = ref();
      const refDivDataList = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        SysScoreSummaryNewTotal.vuebtn_Click = btn_Click;
        SysScoreSummaryNewTotal.GetPropValue = GetPropValue;
        gs_UserRela.UserRelaCanvas = UserRelaCanvas;
        SysScoreSummaryNewTotal.UserRelaCanvasUpload = UserRelaCanvasUpload;
        SysScoreSummaryNewTotal.Canvas3 = Canvas3;
        SysScoreSummaryNewTotal.GetExportCurrEduclsID = GetExportCurrEduclsID;

        // TotalDataStatisticsEx.Canvas1 = Canvas1;
        TotalDataStatisticsEx.Canvas2 = Canvas2;
        TotalDataStatisticsEx.Canvas4 = Canvas4;
        TotalDataStatisticsEx.Canvas5 = Canvas5;
        TotalDataStatisticsEx.Canvas6 = Canvas6;
        TotalDataStatisticsEx.Canvas7 = Canvas7;

        const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return idCurrEduCls.value;
          // case 'paperId':
          //   return paperId.value;
          case 'activeTabId':
            return activeTabId.value;
          default:
            return '';
        }
        return '';
      }
      // function btnResetEduClsDate() {}
      function btn_Click(strCommandName: string, strKeyId: any) {
        console.log(strKeyId);
        const objData = strKeyId;
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          case 'StuDetail':
            btnStuDetail(objData.userId, objData.idCurrEduCls);
            return;
          case 'ResetEduClsDate':
            gs_TeachingDate_Edit.EditObj = gs_TeachingDate_EditRef.value;
            break;
          default:
            break;
        }
        SysScoreSummaryNewTotal.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      return {
        Login_EditRef,
        gs_TeachingDate_EditRef,
        btn_Click,
        getUser,
        UserId,
        UserName,
        refDivLayout,
        refDivQuery,
        refDivList,
        refDivDataList,
        btnTotalRevalidation_Click,
        CloseWindow,
        li_IntelligenceArray_Click,
        li_RandomArray_Click,
        li_UserArray_Click,
        btnSynUserRelaNum_Click,
        btnSaveUserRela_Click,
      };

      //同步回答统计记录
      function UserRelaCanvas(
        strUserInfo1Json: any,
        strUserInfo2Json: any,
        strUserRelaJson: any,
        strUserId: string,
      ) {
        console.log('into UserRelaCanvas');
        graphData = {
          //这是数据项目中一般都是获取到的
          nodes: strUserInfo1Json,
          links: strUserRelaJson,
        };

        myChart0 = echarts.init(document.getElementById('divMainUserRela'));

        const categories = strUserInfo2Json;

        const winWidth = document.body.clientWidth;
        const winHeight = document.body.clientHeight;

        nodeLength = 0;
        graphData.nodes.forEach(function (node: any) {
          if ($('#hidQueryStata').val() == '2') {
            node.x = parseInt((Math.random() * 1000).toString()); //这里是最重要的如果数据中有返回节点x,y位置这里就不用设置，如果没有这里一定要设置node.x和node.y，不然无法定位节点 也实现不了拖拽了；
            node.y = parseInt((Math.random() * 1000).toString());
          }
          nodeLength++;
          //if (node.attributes.modularity_class != 0) {
          if (node.id != strUserId) {
            node.symbolSize = [42, 42];
            node.sizeFlag = [42, 42];
          } else {
            node.symbolSize = [64, 64];
            node.sizeFlag = [64, 64];
          }
          node.category = node.attributes.modularity_class;
          node.label = {
            // normal: {
            //   show: true,
            // },
            show: true,
          };
        });
        const option: ECBasicOption = {
          //这里是option配置
          legend: [
            {
              //图例组件
              data: categories.map(function (a: any) {
                return a.name;
              }),
              top: 0,
              left: (winWidth - 1300) / 2, //这里是图例组件定位使用的，自定义
              itemGap: 26,
              textStyle: {
                padding: [0, 12],
              },
              backgroundColor: '#f5f5f5',
            },
          ],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none', //因为节点的位置已经有了就不用在这里使用布局了
              circular: { rotateLabel: true },
              animation: false,
              data: graphData.nodes,
              links: graphData.links,
              categories: categories, //节点分类的类目
              roam: true, //添加缩放和移动
              draggable: false, //注意这里设置为false，不然拖拽鼠标和节点有偏移
              label: {
                // normal: {
                //   position: 'bottom',
                //   rich: {
                //     bg: {
                //       backgroundColor: '#f5f5f5',
                //     },
                //   },
                // },

                position: 'bottom',
                rich: {
                  bg: {
                    backgroundColor: '#f5f5f5',
                  },
                },
              },
            },
          ],
        };
        myChart0.setOption(option);
        initInvisibleGraphic();
        function initInvisibleGraphic() {
          if (myChart0 == null) return;
          // Add shadow circles (which is not visible) to enable drag.
          myChart0.setOption({
            graphic: echarts.util.map(
              graphData.nodes,
              function (item: any, dataIndex: number | undefined) {
                if (myChart0 == null) return;
                //使用图形元素组件在节点上划出一个隐形的图形覆盖住节点
                const tmpPos = myChart0.convertToPixel({ seriesIndex: 0 }, [item.x, item.y]);
                return {
                  type: 'circle',
                  id: dataIndex,
                  position: tmpPos,
                  shape: {
                    cx: 0,
                    cy: 0,
                    r: 20,
                  },
                  // silent:true,
                  invisible: true,
                  draggable: true,
                  ondrag: echarts.util.curry(onPointDragging, dataIndex ?? 0),
                  z: 100, //使图层在最高层
                };
              },
            ),
          });
          window.addEventListener('resize', updatePosition);
          myChart0.on('dataZoom', updatePosition);
        }
        myChart0.on('graphRoam', updatePosition);
        function updatePosition() {
          if (myChart0 == null) return;
          //更新节点定位的函数
          myChart0.setOption({
            graphic: echarts.util.map(
              graphData.nodes,
              function (item: any, dataIndex: number | undefined) {
                if (myChart0 == null) return;
                const tmpPos = myChart0.convertToPixel({ seriesIndex: 0 }, [item.x, item.y]);
                return {
                  position: tmpPos,
                };
              },
            ),
          });
        }

        function onPointDragging(dataIndex: number) {
          //节点上图层拖拽执行的函数
          // const tmpPos = myChart.convertFromPixel({ seriesIndex: 0 }, this.position);
          // console.log(typeof tmpPos);
          // graphData.nodes[dataIndex].x = tmpPos[0];
          // graphData.nodes[dataIndex].y = tmpPos[1];
          // strUserRelax_y = [];
          // for (let i = 0; i < nodeLength; i++) {
          //   //for (i = 0; i < option.series[0].data.nodeLength; i++) {
          //   const strUserId = graphData.nodes[i].id;
          //   const strX = graphData.nodes[i].x;
          //   const strY = graphData.nodes[i].y;
          //   strUserRelax_y.push({ id: strUserId, x: strX, y: strY });
          // }
          // myChart.setOption(option);
          // updatePosition();
        }
      }

      /*
         查询记录
        (AutoGCLib.WA_ViewScript_TS4CSharp:btnGetUserRela_Click)
        */
      function btnGetUserRela_Click() {
        const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.GetUserRela();
      }
      //系统智能排列
      function li_IntelligenceArray_Click() {
        $('#hidQueryStata').val('1');
        $('#btnSaveUserRela').hide();

        //先清除背景色
        //$("#li_IntelligenceArray").removeClass("btn-info");
        $('#li_RandomArray').removeClass('btn-info');
        $('#li_UserArray').removeClass('btn-info');

        //添加背景色
        $('#li_IntelligenceArray').addClass('btn-info');

        btnGetUserRela_Click();
      }
      //系统随机排列
      function li_RandomArray_Click() {
        $('#hidQueryStata').val('2');
        $('#btnSaveUserRela').show();

        //先清除背景色
        $('#li_IntelligenceArray').removeClass('btn-info');
        //$("#li_RandomArray").removeClass("btn-info");
        $('#li_UserArray').removeClass('btn-info');

        //添加背景色
        $('#li_RandomArray').addClass('btn-info');

        btnGetUserRela_Click();
      }

      //用户保存关系图
      function li_UserArray_Click() {
        $('#hidQueryStata').val('3');
        $('#btnSaveUserRela').hide();

        //先清除背景色
        $('#li_IntelligenceArray').removeClass('btn-info');
        $('#li_RandomArray').removeClass('btn-info');
        //$("#li_UserArray").removeClass("btn-info");

        //添加背景色
        $('#li_UserArray').addClass('btn-info');

        btnGetUserRela_Click();
      }
      //同步回答统计记录
      function btnSynUserRelaNum_Click() {
        const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.btnSynUserRelaNum_Click();
      }
      //保存当前排列关系图
      function btnSaveUserRela_Click() {
        //const strJson = "";
        //for (i = 0; i < strUserRelax_y.le; i++) {

        //}
        if (strUserRelax_y.length == 0) {
          message.warning('请修改拖动关系图然后再保存!');
        } else {
          const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.divList = refDivList.value;
          objPage.btnSaveUserRela_Click(strUserRelax_y);
        }
      }

      // function Alert_layer(strIcon, strMsg) {
      //   message.success(strMsg, {
      //     icon: strIcon,
      //     time: 2000,
      //   });
      // }

      //教学班用户观点数排序统计
      //在clsTooltips.ts定义以下内容

      function customTooltips(tooltip: any) {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip');

        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table></table>';
          // this._chart.canvas.parentNode.appendChild(tooltipEl);
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = '0';
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltip.yAlign) {
          tooltipEl.classList.add(tooltip.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem: any) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltip.body) {
          const titleLines = tooltip.title || [];
          const bodyLines = tooltip.body.map(getBody);
          let arrBodyLines = new Array();
          bodyLines.forEach(function (body: any, i: number) {
            const objTooltips = new clsTooltips();
            objTooltips.colors = tooltip.labelColors[i];
            objTooltips.body = body;
            const arr = body[0].split(':');
            if (arr.length == 2) {
              objTooltips.Text = arr[0];
              objTooltips.value = Number(arr[1]);
            }
            arrBodyLines.push(objTooltips);
          });
          arrBodyLines = arrBodyLines.sort(function (x, y) {
            return y.value - x.value;
          });
          let innerHtml = '<thead>';

          titleLines.forEach(function (title: string) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';
          console.log('bodyLines', bodyLines);

          arrBodyLines.forEach(function (objInFor, i) {
            console.log('objInFor', objInFor);
            //const colors = tooltip.labelColors[i];
            let style = 'background:' + objInFor.colors.backgroundColor;
            style += '; border-color:' + objInFor.colors.borderColor;
            style += '; border-width: 2px';
            const span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + objInFor.body + '</td></tr>';
          });

          innerHtml += '</tbody>';

          const tableRoot = tooltipEl.querySelector('table');
          if (tableRoot) {
            tableRoot.innerHTML = innerHtml;
          }
        }

        const positionY = 0; // this._chart.canvas.offsetTop;
        const positionX = 0; //this._chart.canvas.offsetLeft;

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.left = positionX + tooltip.caretX + 'px';
        tooltipEl.style.top = positionY + tooltip.caretY + 'px';
        tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
        tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
        tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      }

      //所有学生各观点统计
      function Canvas3(
        strlabelsJson: string[],
        strdatasetsJson: any,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: strdatasetsJson,
          },
          options: {
            responsive: true,

            //tooltips: {
            //    mode: 'index',
            //    intersect: false,
            //},

            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              // x: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Week',
              //     },
              //   },
              // ],
              // y: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Value',
              //     },
              //   },
              // ],
              x: {
                type: 'category',
                title: {
                  display: true, // 显示标题
                  text: 'Week', // 标题文本
                },
                // 设置最小值和最大值
                min: 'Jan',
                max: 'May',
              },
              y: {
                title: {
                  display: true, // 显示标题
                  text: 'Value', // 标题文本
                },
                // 设置最小值
                min: 0,
              },
            },
            plugins: {
              title: {
                display: true,
                text: '',
                //text: '当前教学班所有用户周期统计'
              },
              tooltip: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                // custom: customTooltips,
                callbacks: {
                  label: customTooltips,
                },
              },
            },
          },
        };

        $(`#divCanvas${strCanvasNo}`).append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 1900px; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          try {
            const myChart = new Chart(ctx, config);
          } catch (e) {
            console.error(e);
          }
        }
      }

      //各观点教学班统计 ---教学班周观点数统计图Canvas2
      function Canvas2(
        strlabelsJson: any,
        strdatasetsJson: any,
        strColorJson: string,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
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
              // yAxes: [
              //   {
              //     ticks: { beginAtZero: true },
              //   },
              // ],
              y: {
                // 设置最小值
                min: 0,
              },
            },
          },
        };

        $('#divCanvas02').append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          const myChart = new Chart(ctx, config);
        }
      }

      //教学班周教师打分平均分 --- 教学班周均分趋势图 Canvas4
      function Canvas4(
        strlabelsJson: any,
        strdatasetsJson: any,
        strColorJson: any,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: [
              {
                label: '周均分',
                data: strdatasetsJson,
                fill: false,
                borderWidth: 1,
                backgroundColor: strColorJson,
              },
            ],
          },
          options: {
            responsive: true,

            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              // xAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Week',
              //     },
              //   },
              // ],
              // yAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Value',
              //     },
              //   },
              // ],
              x: {
                type: 'category',
                title: {
                  display: true, // 显示标题
                  text: 'Week', // 标题文本
                },
                // 设置最小值和最大值
                min: 'Jan',
                max: 'May',
              },
              y: {
                title: {
                  display: true, // 显示标题
                  text: 'Value', // 标题文本
                },
                // 设置最小值
                min: 0,
              },
            },
            plugins: {
              title: {
                display: true,
                text: '',
                //text: '当前教学班所有用户周期统计'
              },
              tooltip: {
                mode: 'index',
                intersect: false,
              },
            },
          },
        };

        $('#divCanvas04').append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          const myChart = new Chart(ctx, config);
        }
      }

      //教学班周评论数统计图 Canvas5
      //教学班评论统计
      function Canvas5(
        strlabelsJson: any[],
        strdatasetsJson: any[],
        strColorJson: string,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
          type: 'bar',
          data: {
            labels: strlabelsJson,
            datasets: [
              {
                label: '周评论',
                data: strdatasetsJson,
                fill: false,
                borderWidth: 1,
                backgroundColor: strColorJson,
              },
            ],
          },
          options: {
            scales: {
              // yAxes: [
              //   {
              //     ticks: { beginAtZero: true },
              //   },
              // ],
              y: {
                // 设置最小值
                min: 0,
              },
            },
          },
        };
        $('#divCanvas05').append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          const myChart = new Chart(ctx, config);
        }
      }

      //Chart.defaults.global.pointHitDetectionRadius = 1;

      function customTooltips6(tooltip: any) {
        // Tooltip Element
        let tooltipEl = document.getElementById('chartjs-tooltip6');

        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip6';
          tooltipEl.innerHTML = '<table></table>';
          // this._chart.canvas.parentNode.appendChild(tooltipEl);
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltip.opacity === 0) {
          tooltipEl.style.opacity = '0';
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltip.yAlign) {
          tooltipEl.classList.add(tooltip.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem: any) {
          return bodyItem.lines;
        }

        // Set Text
        if (tooltip.body) {
          const titleLines = tooltip.title || [];
          const bodyLines = tooltip.body.map(getBody);
          let arrBodyLines = new Array();
          bodyLines.forEach(function (body: any, i: number) {
            const objTooltips = new clsTooltips6();
            objTooltips.colors = tooltip.labelColors[i];
            objTooltips.body = body;
            const arr = body[0].split(':');
            if (arr.length == 2) {
              objTooltips.Text = arr[0];
              objTooltips.value = Number(arr[1]);
            }
            arrBodyLines.push(objTooltips);
          });
          arrBodyLines = arrBodyLines.sort(function (x, y) {
            return y.value - x.value;
          });
          let innerHtml = '<thead>';

          titleLines.forEach(function (title: string) {
            innerHtml += '<tr><th>' + title + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';
          console.log('bodyLines', bodyLines);

          arrBodyLines.forEach(function (objInFor, i) {
            console.log('objInFor', objInFor);
            //const colors = tooltip.labelColors[i];
            let style = 'background:' + objInFor.colors.backgroundColor;
            style += '; border-color:' + objInFor.colors.borderColor;
            style += '; border-width: 2px';
            const span = '<span class="chartjs-tooltip-key6" style="' + style + '"></span>';
            innerHtml += '<tr><td>' + span + objInFor.body + '</td></tr>';
          });

          innerHtml += '</tbody>';

          const tableRoot = tooltipEl.querySelector('table');
          if (tableRoot) {
            tableRoot.innerHTML = innerHtml;
          }
        }

        const positionY = 0; //this._chart.canvas.offsetTop;
        const positionX = 0; //this._chart.canvas.offsetLeft;

        // Display, position, and set styles for font
        tooltipEl.style.opacity = '1';
        tooltipEl.style.left = positionX + tooltip.caretX + 'px';
        tooltipEl.style.top = positionY + tooltip.caretY + 'px';
        tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
        tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
        tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
        tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      }
      //用户周评论数统计图 canvas06
      //所有学生各观点统计
      function Canvas6(
        strlabelsJson: any,
        strdatasetsJson: any,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: strdatasetsJson,
          },
          options: {
            responsive: true,

            //tooltips: {
            //    mode: 'index',
            //    intersect: false,
            //},

            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              // xAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Week',
              //     },
              //   },
              // ],
              // yAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Value',
              //     },
              //   },
              // ],
              x: {
                type: 'category',
                title: {
                  display: true, // 显示标题
                  text: 'Week', // 标题文本
                },
                // 设置最小值和最大值
                min: 'Jan',
                max: 'May',
              },
              y: {
                title: {
                  display: true, // 显示标题
                  text: 'Value', // 标题文本
                },
                // 设置最小值
                min: 0,
              },
            },
            plugins: {
              title: {
                display: true,
                text: '',
                //text: '当前教学班所有用户周期统计'
              },
              tooltip: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                  label: customTooltips6,
                },
              },
            },
          },
        };

        $('#divCanvas06').append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          const myChart = new Chart(ctx, config);
        }
      }

      //用户周讨论回答统计图canvas07
      //所有学生各观点统计
      function Canvas7(
        strlabelsJson: any,
        strdatasetsJson: any,
        strCanvasNo: string,
        strUserIdorCurrEduClsId: string,
      ) {
        const config: ChartConfiguration = {
          type: 'line',
          data: {
            labels: strlabelsJson,
            datasets: strdatasetsJson,
          },
          options: {
            responsive: true,

            hover: {
              mode: 'nearest',
              intersect: true,
            },
            scales: {
              // xAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Week',
              //     },
              //   },
              // ],
              // yAxes: [
              //   {
              //     display: true,
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Value',
              //     },
              //   },
              // ],
              x: {
                type: 'category',
                title: {
                  display: true, // 显示标题
                  text: 'Week', // 标题文本
                },
                // 设置最小值和最大值
                min: 'Jan',
                max: 'May',
              },
              y: {
                title: {
                  display: true, // 显示标题
                  text: 'Value', // 标题文本
                },
                // 设置最小值
                min: 0,
              },
            },
            plugins: {
              title: {
                display: true,
                text: '',
                //text: '当前教学班所有用户周期统计'
              },
              tooltip: {
                enabled: false,
                mode: 'index',
                position: 'nearest',
                callbacks: {
                  label: customTooltips6,
                },
              },
            },
          },
        };

        $('#divCanvas07').append(
          '<canvas id="Canvas' +
            strCanvasNo +
            '" typename="' +
            strUserIdorCurrEduClsId +
            '" style="height: 550px; width: 100%; padding-right: 10px;"></canvas>',
        );
        const myCanvas = document.getElementById('Canvas' + strCanvasNo) as HTMLCanvasElement;
        let ctx;
        if (myCanvas != null) {
          ctx = myCanvas.getContext('2d');
        }
        if (ctx != null && ctx != undefined) {
          // window.myLine = new Chart(ctx, config);
          const myChart = new Chart(ctx, config);
        }
      }

      //转码为文件
      function dataURLtoBlob(dataurl: string) {
        let arr = dataurl.split(',');
        // let mime = arr[0].match(/:(.*?);/)[1];
        let mime = '';
        if (arr[0] !== null) {
          let mimeMatch = arr[0].match(/:(.*?);/);
          if (mimeMatch !== null) {
            mime = mimeMatch[1];
            // 继续处理 mime
          } else {
            // 未找到匹配的 mime，可以处理这种情况
          }
        } else {
          // arr[0] 是 null，可以处理这种情况
        }

        let bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      }

      //测试根据Canvas画布生成图片 把图片存放指定文件夹到；
      function btnExportWord_Click() {
        let oCanvas: HTMLCanvasElement | null;

        oCanvas = document.getElementById('canvas03') as HTMLCanvasElement;

        if (oCanvas != null) {
          //得到图片64位字符串
          const Base64Data = oCanvas.toDataURL('image/png').toString();
          //转码为文件；
          if (Base64Data.length > 20) {
            const myBlob = dataURLtoBlob(Base64Data);

            //执行文件上传到指定文件夹；
            const strPicPath = uploadFile(myBlob);
          }
        }
      }

      async function uploadFile(blob: any) {
        const divName = refDivLayout.value;
        const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls; // $('#hidIdCurrEduClspara').val();
        const strDataUserId = GetInputValueInDivObj(divName, 'hidDataUserId');
        const strPicType = GetInputValueInDivObj(divName, 'hidPicType');
        const strPicPath = ''; //声明一个接受的返回参数；
        //将blob存储在FormData中
        const formData = new FormData();
        formData.append('filename', blob); //形成键值对应，伪装成表单的数据
        formData.append('DataUserId', strDataUserId);
        formData.append('IdCurrEduCls', strIdCurrEduCls);
        formData.append('PicType', strPicType);
        const strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
        const strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_UserCanvasPic;

        const IsSuccess = await Canvas_UploadFile(
          strUploadWebMainDir,
          strUploadWebSubDir,
          formData,
        );

        //成功/为空
        if (IsSuccess == true) {
          //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
          // if (returndata.fileNamePic != "") {
          //     $("#hidfileNamePic").val(returndata.fileNamePic);
          //     strPicPath = returndata.fileNamePic;
          //     //显示图片
          //   //  CallBackExportWord();
          //     return strPicPath;
          // }
          // }
          // else {
          //     alert('请选择正确图片格式(in SysScoreSummaryNewTotal)')
          // }
        } else {
          alert('出现错误啦。');
        }

        // 发起ajax请求
        //     $.ajax({
        //         url: "@Url.Action("UpLoadUserCanvasPic", "testUploadPic")",//服务器地址
        //         type: "post", //请求方法

        //     data: formData,//向服务器传输的数据
        //     contentType: false,//避免ajax操作请求头部从而丢分界符，造成服务器无法正确识别请求的数据类型
        //     processData: false,//告诉ajax不要把将传输的数据给序列化了。
        //     cache: false,//不从浏览器缓存中加载请求头部信息
        //     success: function (returndata) {
        //         //成功/为空
        //         if (returndata.status == 0 || returndata.status == -1) {

        //             //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
        //             if (returndata.fileNamePic != "") {
        //                 $("#hidfileNamePic").val(returndata.fileNamePic);
        //                 strPicPath = returndata.fileNamePic;

        //                 //显示图片
        //               //  CallBackExportWord();
        //                 return strPicPath;
        //             }
        //         }
        //         else {

        //             alert('请选择正确图片格式(in SysScoreSummaryNewTotal)')
        //         }

        //     },
        //     error: (error) => {
        //         alert("出现错误啦。");
        //     }
        // });
      }

      //同步回答统计记录
      function UserRelaCanvasUpload(
        strUserInfo1Json: any,
        strUserInfo2Json: any,
        strUserRelaJson: any,
        strUserId: string,
      ) {
        graphData = {
          //这是数据项目中一般都是获取到的
          nodes: strUserInfo1Json,
          links: strUserRelaJson,
        };
        //读取加载div；
        const myChart = echarts.init(document.getElementById('divMainUserRela'));
        const categories = strUserInfo2Json;

        const winWidth = document.body.clientWidth;
        const winHeight = document.body.clientHeight;

        graphData.nodes.forEach(function (node: any) {
          node.x = parseInt((Math.random() * 1000).toString()); //这里是最重要的如果数据中有返回节点x,y位置这里就不用设置，如果没有这里一定要设置node.x和node.y，不然无法定位节点 也实现不了拖拽了；
          node.y = parseInt((Math.random() * 1000).toString());

          //if (node.attributes.modularity_class != 0) {
          if (node.id != strUserId) {
            node.symbolSize = [42, 42];
            node.sizeFlag = [42, 42];
          } else {
            node.symbolSize = [64, 64];
            node.sizeFlag = [64, 64];
          }
          node.category = node.attributes.modularity_class;
          node.label = {
            normal: {
              show: true,
            },
          };
        });
        const option: ECBasicOption = {
          //这里是option配置
          legend: [
            {
              //图例组件
              data: categories.map(function (a: any) {
                return a.name;
              }),
              top: 0,
              left: (winWidth - 1300) / 2, //这里是图例组件定位使用的，自定义
              itemGap: 26,
              textStyle: {
                padding: [0, 12],
              },
              backgroundColor: '#f5f5f5',
            },
          ],
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none', //因为节点的位置已经有了就不用在这里使用布局了
              circular: { rotateLabel: true },
              animation: false,
              data: graphData.nodes,
              links: graphData.links,
              categories: categories, //节点分类的类目
              roam: true, //添加缩放和移动
              draggable: false, //注意这里设置为false，不然拖拽鼠标和节点有偏移
              label: {
                normal: {
                  position: 'bottom',
                  rich: {
                    bg: {
                      backgroundColor: '#f5f5f5',
                    },
                  },
                },
              },
            },
          ],
        };
        myChart.setOption(option);
        initInvisibleGraphic();
        function initInvisibleGraphic() {
          // Add shadow circles (which is not visible) to enable drag.
          myChart.setOption({
            graphic: echarts.util.map(
              graphData.nodes,
              function (item: any, dataIndex: number | undefined) {
                //使用图形元素组件在节点上划出一个隐形的图形覆盖住节点
                const tmpPos = myChart.convertToPixel({ seriesIndex: 0 }, [item.x, item.y]);
                if (dataIndex == undefined) return null;
                return {
                  type: 'circle',
                  id: dataIndex,
                  position: tmpPos,
                  shape: {
                    cx: 0,
                    cy: 0,
                    r: 20,
                  },
                  // silent:true,
                  invisible: true,
                  draggable: true,
                  ondrag: echarts.util.curry(onPointDragging, dataIndex),
                  z: 100, //使图层在最高层
                };
              },
            ),
          });
          window.addEventListener('resize', updatePosition);
          myChart.on('dataZoom', updatePosition);
        }
        myChart.on('graphRoam', updatePosition);
        function updatePosition() {
          //更新节点定位的函数
          myChart.setOption({
            graphic: echarts.util.map(
              graphData.nodes,
              function (item: any, dataIndex: number | undefined) {
                const tmpPos = myChart.convertToPixel({ seriesIndex: 0 }, [item.x, item.y]);
                return {
                  position: tmpPos,
                };
              },
            ),
          });
        }
        function onPointDragging(dataIndex: number) {
          //节点上图层拖拽执行的函数
          // const tmpPos = myChart.convertFromPixel({ seriesIndex: 0 }, this.position);
          // option.series[0].data[dataIndex].x = tmpPos[0];
          // option.series[0].data[dataIndex].y = tmpPos[1];
          // myChart.setOption(option);
          // updatePosition();
        }
      }

      function GetRequest() {
        // const url = location.search; //获取url中"?"符后的字串
        // const theRequest = new Object();
        // if (url.indexOf('?') != -1) {
        //   const str = url.substring(1);
        //   const strs = str.split('&');
        //   for (let i = 0; i < strs.length; i++) {
        //     theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
        //   }
        // }
        // return theRequest;
      }

      function GetCurrEduclsID() {
        let Request = new Object();
        // Request = GetRequest();
        let str1;
        str1 = clsPubLocalStorage.idCurrEduCls; // Request['IdCurrEduCls'];

        if (str1 != null) {
          $('#hidIdCurrEduClspara').val(str1);

          const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.divList = refDivList.value;
          objPage.PageLoad();
        } else {
          const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.divList = refDivList.value;
          objPage.PageLoad();
        }
      }

      /**
       * 页面导入-在导入页面后运行的函数
       */
      function window_onload() {
        GetCurrEduclsID();
      }
      async function exportToWord() {
        // 创建一个新的Blob对象
        const blob = new Blob(['Your Word Document Content'], {
          type: 'application/msword',
        });

        // 创建一个下载链接
        const url = window.URL.createObjectURL(blob);

        // 创建一个下载按钮
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.doc'; // 文件名

        // 模拟点击下载按钮
        a.click();

        // 释放URL对象
        window.URL.revokeObjectURL(url);
      }
      function GetExportCurrEduclsID(strIdCurrEduCls: string) {
        const divName = refDivLayout.value;
        if (strIdCurrEduCls != '') {
          SetInputValueInDivObj(divName, 'hidIdCurrEduClspara', strIdCurrEduCls);

          const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.divList = refDivList.value;
          objPage.PageLoad();
          // $('#PaperPreview').wordExport('数据统计', '^');
          exportToWord();
        } else {
          const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
          objPage.divLayout = refDivLayout.value;
          objPage.divQuery = refDivQuery.value;

          objPage.divList = refDivList.value;
          objPage.PageLoad();
        }
      }

      function jQuery_ready() {
        const btn = document.getElementById('btn');
        // const Preview = $('#PaperPreview').attr('id');

        // if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        //   $('#btnExportWord').onclick = function () {
        //     const Preview = $('#PaperPreview').attr('id');
        //     //AllAreaWordTwo(document.getElementById('test'), '^')
        //     AllAreaWordTwo(Preview, '^');
        //   };
        // } else {
        {
          $('#btnExportWord').click(function () {
            //用户导出时候 把动态用户关系设置 隐藏
            $('#UserRelaAll').css('display', 'none');
            //用户单个关系图
            $('#UserRelaSingle').css('display', 'block');

            // $("#div_Canvas3").show();
            //循环页面Canvas标签
            $('#div_Canvas3 canvas').each(function (index, item) {
              const strId = $(this).attr('id');
              const strUserIdOrCurrId = $(this).attr('typename')?.toString();
              $('#hidDataUserId').val(strUserIdOrCurrId ?? ''); //存放隐藏字段
              if (strId == 'Canvas0') {
                //当等于Canvas0 带表是教学班图； 2带表教学班
                $('#hidPicType').val('2');
              } else if (strId == 'canvas03') {
                //这个代表教学班用户关系图

                $('#hidPicType').val('3');
              } else {
                //带表学生canvas图 1带表学生；
                $('#hidPicType').val('1');
              }
              let oCanvas: HTMLCanvasElement | null;
              const PicType = $('#hidPicType').val();
              if (PicType == '3') {
                oCanvas = document.getElementById('canvas03') as HTMLCanvasElement;
              } else {
                oCanvas = document.getElementById('' + strId) as HTMLCanvasElement;
              }

              //const oCanvas = strId;
              if (oCanvas != null) {
                //得到图片64位字符串
                const Base64Data = oCanvas.toDataURL('image/png').toString();
                //转码为文件；
                if (Base64Data.length > 20) {
                  const myBlob = dataURLtoBlob(Base64Data);

                  //执行文件上传到指定文件夹；
                  const strPicPath = uploadFile(myBlob);
                }
              }
            });

            // $("#ExportDetail").show();
            // $('#PaperPreview').wordExport('全班成长档案');
            exportToWord();
            $('#UserRelaAll').css('display', 'block');
            //用户单个关系图
            $('#UserRelaSingle').css('display', 'none');
            //  $("#ExportDetail").hide();
            // $("#div_Canvas3").hide();
          });
        }
      }

      //  {Object} cont  要导出的html元素内容的id,注意不要加双引号@param {Object} key   分页关键字
      function AllAreaWordTwo(cont: any, key: string) {
        // const oWD = new ActiveXObject('Word.Application');
        // //默认为页面视图
        // const oDC = oWD.Documents.Add('', 0, 0);
        // const oRange = oDC.Range(0, 1);
        // //const oRange1 = oDC.Range(0,2);
        // const sel = document.body.createTextRange();
        // //参数为html元素id
        // sel.moveToElementText(cont);
        // sel.select();
        // sel.execCommand('Copy');
        // oRange.Paste();
        // oWD.Application.Visible = true;
        // //得到打开后word的selection对象
        // const selection = oWD.Selection;
        // //设置字体大小
        // selection.Font.Size = 10;
        // //ctrl+A 全选操作
        // selection.WholeStory();
        // //清除格式
        // selection.Find.ClearFormatting();
        // //指定查找关键字
        // selection.Find.Text = key;
        // //^m为手动分页符标记
        // //向下查找
        // selection.Find.Forward = true;
        // selection.Find.Wrap = 1;
        // //不区分大小写
        // selection.Find.MatchCase = false;
        // //不匹配整个单词
        // selection.Find.MatchWholeWord = false;
        // //如果找到指定字符串返回真,否则返回false
        // while (selection.Find.Execute()) {
        //   //插入分页符,分页符常量为7,具体可查word api
        //   selection.InsertBreak(7);
        // }
      }

      function btnStuDetail(strUserId: string, strIdCurrEduCls: string) {
        // xadmin.open('个人成长档案', '../GraduateEduTools/TotalDataStatisticsDetail?UserId=' + strUserId + '&IdCurrEduCls=' + strIdCurrEduCls, '', '', true);
        const strRouter = `/TotalDataStatisticsDetail?userId=${strUserId}&idCurrEduCls=${strIdCurrEduCls}`;
        console.log(strRouter);
        // router.push('/about');
        // console.log("router.push('/about');");
        router.push(strRouter);
      }

      /*
           总分核算
          (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_btnQuery_Click)
          */
      function btnTotalRevalidation_Click() {
        $('#Text1').val('进入函数：btnQuery_Click');
        const objPage = new SysScoreSummaryNewTotal(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.btnTotalRevalidation_Click();
      }

      function CloseWindow() {
        // try {
        //   const index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        //   parent.layer.close(index); //再执行关闭
        // } catch (e) {
        //   window.opener.location = '父页面地址';
        //   window.opener = null;
        //   window.close();
        // }
      }
    },
    methods: {},
  });
</script>
<style scoped>
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 使 body 高度至少占满视窗的高度 */
    margin: 0;
  }
  .div_Page_Local {
    overflow: auto;
    height: 800px;
    width: 100%;
    flex: 1; /* 使内容区域占据剩余的可用空间 */
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

  .layui-table td,
  .layui-table th {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 15px;
  }

  #tbList img {
    max-width: 600px;
  }

  .TablePaper {
    border: 1px solid #666;
    border-collapse: collapse;
    margin: auto;
  }

  .TablePaper tr td {
    border: 1px solid #666;
  }

  .TablePaper tr th {
    border: 1px solid #666;
    border-radius: 10px;
  }

  .layui-table {
    width: 100%;
    background-color: #fff;
    color: #666;
  }

  .title-text {
    font-size: 1.2rem; /* 设置字体大小为 1.5rem（根据需要调整大小） */
  }
</style>
