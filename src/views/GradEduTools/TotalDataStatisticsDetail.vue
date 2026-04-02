<template>
  <div id="divLayout" ref="refDivLayout">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout">
      <!-- 标题层 -->
      <div class="x-nav" id="topTitle">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>各类型分数查看</cite>
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

      <div id="divQuery" ref="refDivQuery" class="layui-fluid">
        <button
          type="button"
          @click="CloseWindow()"
          style="float: right"
          class="btn btn-outline-info btn-sm text-nowrap"
          >返回</button
        >&nbsp;&nbsp;&nbsp;
        <button
          class="btn btn-outline-info btn-sm text-nowrap"
          style="float: right"
          id="btnExportWord"
          name="btnExportWord"
          title="导出word"
          >导出word</button
        >
      </div>

      <!--  列表层总分列表  -->

      <div id="PaperPreview" class="layui-fluid">
        <div style="text-align: center"
          ><h3><label id="UpWord">个人成长档案</label></h3></div
        >
        <div></div>
        <div class="layui-card-body layui-fluid">
          <table class="TablePaper layui-table" id="tableList">
            <thead>
              <tr>
                <th width="100">用户/学年</th>
                <th width="180">专业/教学班</th>

                <th width="150">论文子观点<br />/名次</th>
                <th width="150">个人观点<br />/名次</th>
                <th width="150">专家观点<br />/名次</th>
                <th width="150">主题概念<br />/名次</th>
                <th width="150">客观事实<br />/名次</th>
                <th width="150">客观数据<br />/名次</th>
                <th width="150">技能<br />/名次</th>
                <th width="150">社会关系<br />/名次</th>
                <th width="150">问题回答<br />/名次</th>
                <th width="150">给他人评论</th>
                <th width="150">讨论打分</th>
                <th width="150">评价打分</th>
                <th width="150">标志打分</th>
                <th width="180">各观点总分</th>
                <th width="150">总分名次</th>
              </tr>
            </thead>
            <tbody id="divScoreTotalDataLst" class="x-cate"></tbody>
          </table>
        </div>

        <hr />
        <br />
        <!-- 导出详细层  -->
        <div id="ExportDetail" class="div_List" style="display: none"> </div>
      </div>

      <!-- 列表层  -->
      <div id="divList" ref="refDivList" class="div_DataList_Local">
        <div style="height: 100%; width: 100%" class="layui-card-body">
          <!-- <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a
                class="nav-link active"
                data-toggle="tab"
                id="li_Paper"
                href="javascript:void(0)"
                @click="li_Paper_Click('01')"
                >论文<span id="PaperCount" class="badge badge-pill badge-success">0</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_PaperViewpoint"
                href="javascript:void(0)"
                @click="li_PaperViewpoint_Click('03')"
                >论文子观点<span id="PaperViewpointCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_Viewpoint"
                href="javascript:void(0)"
                @click="li_Viewpoint_Click('04')"
                >个人观点<span id="ViewpointCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_ExpertViewpoint"
                href="javascript:void(0)"
                @click="li_ExpertViewpoint_Click('05')"
                >专家观点<span id="ExpertViewpointCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_Concept"
                href="javascript:void(0)"
                @click="li_Concept_Click('06')"
                >主题概念<span id="ConceptCount" class="badge badge-pill badge-success">0</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_TopicObjective"
                href="javascript:void(0)"
                
                @click="li_TopicObjective_Click('07')"
                >客观事实<span id="TopicObjectiveCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_ObjectiveBasis"
                href="javascript:void(0)"
                @click="li_ObjectiveBasis_Click('08')"
                >客观数据<span id="ObjectiveBasisCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" 
              id="li_Skill" 
              href="javascript:void(0)"
              @click="li_Skill_Click('09')"
                >技能<span id="SkillCount" class="badge badge-pill badge-success">0</span></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_SysSocialRelations"
                href="javascript:void(0)"
                @click="li_SysSocialRelations_Click('10')"
                >社会关系<span id="SysSocialCount" class="badge badge-pill badge-success"
                  >0</span
                ></a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="tab"
                id="li_QaAnswer"
                href="javascript:void(0)"
                @click="li_QaAnswer_Click('11')"
                >问题回答<span id="QaAnswerCount" class="badge badge-pill badge-success">0</span></a
              >
            </li>
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
            <!-- 论文 -->

            <div v-show="activeTabId === 'li_Paper'" id="li_Paper">
              <div id="divli_Paper" class="div_List">
                <div id="divli_PaperDataLst" class="div_List"> </div>
              </div>
            </div>
            <!-- 论文子观点 -->

            <div v-show="activeTabId === 'li_PaperViewpoint'" id="li_PaperViewpoint">
              <div id="divli_PaperViewpoint" class="div_List">
                <div id="divli_PaperViewpointDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 个人观点 -->

            <div v-show="activeTabId === 'li_Viewpoint'" id="li_Viewpoint">
              <div id="divli_Viewpoint" class="div_List">
                <div id="divli_ViewpointDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 专家观点 -->

            <div v-show="activeTabId === 'li_ExpertViewpoint'" id="li_ExpertViewpoint">
              <div id="divli_ExpertViewpoint" class="div_List">
                <div id="divli_ExpertViewpointDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 主题概念 -->

            <div v-show="activeTabId === 'li_Concept'" id="li_Concept">
              <div id="divli_Concept" class="div_List">
                <div id="divli_ConceptDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 客观事实 -->

            <div v-show="activeTabId === 'li_TopicObjective'" id="li_TopicObjective">
              <div id="divli_TopicObjective" class="div_List">
                <div id="divli_TopicObjectiveDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 客观数据 -->
            <div v-show="activeTabId === 'li_ObjectiveBasis2'" id="li_ObjectiveBasis2">
              <div id="divli_ObjectiveBasis" class="div_List">
                <div id="divli_ObjectiveBasisDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 技能 -->
            <div v-show="activeTabId === 'li_Skill'" id="li_Skill">
              <div id="divli_Skill" class="div_List">
                <div id="divli_SkillDataLst" class="div_List"> </div>
              </div>
            </div>

            <!-- 社会关系 -->
            <div v-show="activeTabId === 'li_SysSocialRelations'" id="li_SysSocialRelations">
              <div id="divli_SysSocialRelations" class="div_List">
                <div id="divli_SysSocialRelationsDataLst" class="div_List"> </div>
              </div>
            </div>

            <!--  问题回答 -->
            <div v-show="activeTabId === 'li_QaAnswer'" id="li_QaAnswer">
              <div id="divli_QaAnswer" class="div_List">
                <div id="divli_QaAnswerDataLst" class="div_List"> </div>
              </div>
            </div>

            <div id="divPager" class="pager" value="1"> </div>
          </div>
        </div>
      </div>

      <div id="divEdit"></div>
    </div>
    <input id="hidQueryStata" type="hidden" />

    <input id="hidSortTotalBy" type="hidden" value="" />
    <!-- 当前教学班Id  -->
    <input id="hidIdCurrEduCls" type="hidden" />
    <!-- 教学班Id传递参数 -->
    <input id="hidIdCurrEduClspara" type="hidden" />
    <!-- 用户Id传递参数  -->
    <input id="hidUserId" type="hidden" />

    <!-- 当前教学班日期范围Id -->
    <input id="hidgs_DateId" type="hidden" />
    <input id="hidStartDate" type="hidden" />
    <input id="hiEndDate" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />

    <!-- 存放tab页顺序 -->
    <input id="hidTabNum" type="hidden" />
    <input id="hidSortvSysScoreSummaryBy" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';
  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';
  // import '@/assets/lib/Xadmin/css/font.css';
  // import '@/assets/lib/Xadmin/css/xadmin.css';
  // import '@/assets/css/theme5.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';
  import $ from 'jquery';
  import router from '@/router';
  import { gs_TotalDataStatisticsCRUD } from '@/viewsBase/GradEduTools/gs_TotalDataStatisticsCRUD';
  import * as echarts from 'echarts';
  import ECharts from 'vue-echarts';
  import TotalDataStatisticsDetail from '@/views/GradEduTools/TotalDataStatisticsDetail';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { useRoute } from 'vue-router';
  import { userStore } from '@/store/modulesShare/user';

  // let myChart0: echarts.ECharts | null; // 外部定义的 chart 变量
  // let graphData: any = null; // 全局定义的 graphData 变量
  // let nodeLength = 0;
  // let strUserRelax_y: any[];

  export default defineComponent({
    name: 'TotalDataStatisticsDetail',
    components: {
      'vue-echarts': ECharts,
    },
    props: {
      showHeader: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const activeTabId = ref('li_Paper');
      const tabs = reactive([
        { id: 'li_Paper', label: '论文' },
        { id: 'li_PaperViewpoint', label: '论文子观点' },
        { id: 'li_Viewpoint', label: '个人观点' },
        { id: 'li_ExpertViewpoint', label: '专家观点' },
        { id: 'li_Concept', label: '主题概念' },
        { id: 'li_TopicObjective', label: '客观事实' },
        { id: 'li_ObjectiveBasis', label: '客观数据' },
        { id: 'li_Skill', label: '技能' },
        { id: 'li_SysSocialRelations', label: '社会关系' },
        { id: 'li_QaAnswer', label: '问题回答' },
      ]);

      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivList = ref();
      const refDivDataList = ref();
      const Login_EditRef = ref();
      const userId = ref('0001');

      const route = useRoute(); // 获取当前路由信息

      onMounted(() => {
        if (typeof route.query.userId === 'string') {
          userId.value = route.query.userId;
        } else {
          // 如果不是字符串，可以在这里处理
          userId.value = ''; // 或者设置默认值
        }

        if (typeof route.query.idCurrEduCls === 'string') {
          idCurrEduCls.value = route.query.idCurrEduCls;
        } else {
          // 如果不是字符串，可以在这里处理
          idCurrEduCls.value = ''; // 或者设置默认值
        }

        TotalDataStatisticsDetail.vuebtn_Click = btn_Click;
        TotalDataStatisticsDetail.GetPropValue = GetPropValue;
        // gs_UserRela.UserRelaCanvas = UserRelaCanvas;
        // TotalDataStatisticsDetail.UserRelaCanvasUpload = UserRelaCanvasUpload;
        // TotalDataStatisticsDetail.Canvas3 = Canvas3;
        // TotalDataStatisticsDetail.GetExportCurrEduclsID = GetExportCurrEduclsID;
        // TotalDataStatisticsEx.Canvas2 = Canvas2;
        // TotalDataStatisticsEx.Canvas4 = Canvas4;
        // TotalDataStatisticsEx.Canvas5 = Canvas5;
        // TotalDataStatisticsEx.Canvas6 = Canvas6;
        // TotalDataStatisticsEx.Canvas7 = Canvas7;

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'idCurrEduCls':
            return idCurrEduCls.value;
          case 'userId':
            return userId.value;
          case 'activeTabId':
            return activeTabId.value;
          default:
            return '';
        }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
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
          default:
            break;
        }
        TotalDataStatisticsDetail.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      return {
        activeTabId,
        tabs,
        Login_EditRef,
        btn_Click,

        userId,

        refDivLayout,
        refDivQuery,
        refDivList,
        refDivDataList,
        li_SysSocialRelations_Click,
        CloseWindow,
        li_Paper_Click,
        li_ExpertViewpoint_Click,
        li_Concept_Click,
        location_reload,
        li_PaperViewpoint_Click,
        li_Viewpoint_Click,
        li_TopicObjective_Click,
        li_ObjectiveBasis_Click,
        li_Skill_Click,
        li_QaAnswer_Click,
      };

      // function GetRequest() {
      //   const url = location.search; //获取url中"?"符后的字串
      //   const theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //     const str = url.substring(1);
      //   const  strs = str.split('&');
      //     for (let i = 0; i < strs.length; i++) {
      //       theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //     }
      //   }
      //   return theRequest;
      // }

      function GetCurrEduclsID() {
        let Request = new Object();
        // Request = GetRequest();
        let str1;
        str1 = clsPubLocalStorage.idCurrEduCls; // Request['IdCurrEduCls'];
        const str2 = userStore.getUserId; // Request['UserId'];

        if (str1 != null) {
          $('#hidIdCurrEduClspara').val(str1);
          $('#hidUserId').val(str2);

          const objPage = new TotalDataStatisticsDetail(refDivLayout.value);

          objPage.PageLoad();
        } else {
          const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
          objPage.PageLoad();
        }
      }
      function location_reload() {
        window.location.reload();
      }
      function window_onload() {
        $('#hidTabNum').val('01');
        GetCurrEduclsID();
      }

      function jQuery_ready() {
        const btn = document.getElementById('btn');
        const Preview = $('#PaperPreview').attr('id');
        // if (!!window.ActiveXObject || 'ActiveXObject' in window) {
        //   $('#btnExportWord').onclick = function () {
        //     const Preview = $('#PaperPreview').attr('id');
        //     //AllAreaWordTwo(document.getElementById('test'), '^')
        //     AllAreaWordTwo(Preview, '^');
        //   };
        // } else {
        // {
        // $('#btnExportWord').click(function () {
        //   $('#ExportDetail').show();
        //   // $('#PaperPreview').wordExport('个人成长档案');
        //   $('#ExportDetail').hide();
        // });

        //$("#btnExportWord").onclick = function () {
        //    $("#PaperPreview").wordExport("论文预览");
        //}
        // }
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
        // selection.InsertBreak(7);
        //}
      }

      /////////////////////////////////////////////////////////////////////tab页切换事件///////////////////////////////////////////////////////////
      //论文
      function li_Paper_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_Paper_Click();
      }
      //论文子观点
      function li_PaperViewpoint_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_PaperViewpoint_Click();
      }
      //个人观点
      function li_Viewpoint_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_Viewpoint_Click();
      }
      //专家观点
      function li_ExpertViewpoint_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_ExpertViewpoint_Click();
      }
      //主题概念
      function li_Concept_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_Concept_Click();
      }
      //客观事实
      function li_TopicObjective_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_TopicObjective_Click();
      }
      //客观数据
      function li_ObjectiveBasis_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_ObjectiveBasis_Click();
      }
      //技能
      function li_Skill_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_Skill_Click();
      }
      //社会关系
      function li_SysSocialRelations_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_SysSocialRelations_Click();
      }
      //问题回答
      function li_QaAnswer_Click(tabKeyId: string) {
        $('#hidTabNum').val(tabKeyId);

        const objPage = new TotalDataStatisticsDetail(refDivLayout.value);
        objPage.li_QaAnswer_Click();
      }

      function CloseWindow() {
        try {
          // const index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
          // parent.layer.close(index); //再执行关闭
        } catch (e) {
          window.opener.location = '父页面地址';
          window.opener = null;

          window.close();
        }
      }
    },
    methods: {
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        TotalDataStatisticsDetail.btn_Click('changeTab', tabId, this.refDivLayout);
      },
    },
  });
</script>

<style scoped>
  .div_DataList_Local {
    font-size: 15px;
    overflow: auto;
    height: 600px;
    width: 100%;
  }
  .title {
    /* float: left; */
    padding-top: 10px;
    text-indent: 10px;
    font-size: 16px;
    font-weight: bold;
    /* -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none; */
  }

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

  #chartjs-tooltip6 {
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

  .chartjs-tooltip-key6 {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 10px;
  }

  .layui-table td,
  .layui-table th {
    position: relative;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 12px;
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

  /*#divScoreTotalDataLst tr td {
            border: 1px solid #666;
        }*/
  /*.color3 {
            color: #e57f4c;
            font-weight: bold;
            font-size: 14px;
        }*/

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #0080ff;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
    font-weight: bold;
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

  .page-content {
    position: absolute;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 1;
  }

  #TopicName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
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

<!-- 
  layui.use(['laydate', 'form'], function () {
    const laydate = layui.laydate;

    //日期
    laydate.render({
      elem: '#txtStartDate_q', //指定元素
    });

    //日期
    laydate.render({
      elem: '#txtEndDate_q', //指定元素
    });


  });
 -->
@/store/modulesShare/user
