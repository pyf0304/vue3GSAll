<template>
  <div id="divLayout" ref="refDivLayout" class="app-container">
    <!-- 顶部开始 -->
    <header>
      <PageHeadCom
        ref="PageHeadRef"
        :title="strTitle"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :is-show-topic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-attention="'true'"
        :paper-id="''"
      ></PageHeadCom>
    </header>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <div class="main-content">
      <!-- 左侧菜单开始 -->
      <aside class="sidebar">
        <!-- 菜单内容 -->
        <!-- <ul>
          <li v-for="module in menu" :key="module.name">
            {{ module.name }}
            <ul>
              <li v-for="item in module.items" :key="item.name">
                <button @click="addTab(module.name, item.name)">
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </li>
        </ul> -->
        <!-- 菜单内容 -->
        <!-- <div> -->
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">论文阅读系统</a>
          </div>
        </nav>
        <div class="container-fluid">
          <ul class="nav flex-column">
            <li class="nav-item" v-for="(module, index) in menu" :key="index">
              <a
                class="nav-link module-name"
                :class="{ active: module.active }"
                href="javascript:void"
                @click="toggleActive(module)"
              >
                {{ module.name }}
              </a>
              <ul class="nav flex-column ml-1" v-if="module.active">
                <li class="nav-item" v-for="(item, idx) in module.items" :key="idx">
                  <a
                    class="nav-link item-name"
                    :class="{ item_active: item.active }"
                    href="javascript:void"
                    @click="addTab(module.name, item.name)"
                    >{{ item.name }}
                  </a>
                </li>
              </ul>
              <!-- 分隔底纹 -->
              <!-- <hr class="module-divider mt-1" v-if="index !== menu.length - 1" /> -->
            </li>
          </ul>
        </div>
        <!-- </div> -->
      </aside>
      <!-- <div class="x-slide_left"></div> -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <main class="content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"> <font-awesome-icon icon="fa-regular fa-heart" />我的桌面 </li>
          </ul>
          <div id="tab_right" class="layui-unselect layui-form-select layui-form-selected">
            <dl>
              <dd data-type="this">关闭当前</dd>
              <dd data-type="other">关闭其它</dd>
              <dd data-type="all">关闭全部</dd>
            </dl>
          </div>
          <!-- <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <iframe
                id="Index_iframe"
                src="../Web/Welcome"
                frameborder="0"
                scrolling="yes"
                class="x-iframe"
              ></iframe>
            </div>
          </div> -->

          <el-tabs v-model="currentTab">
            <el-tab-pane v-for="tab in tabs" :key="tab.name">
              <template v-slot:label>
                <span class="mr-2">{{ tab.label }}</span>
                <span>&nbsp;&nbsp;</span>

                <a href="javascript:void(0)" class="ml-2" title="移除该页面" @click="closeTab(tab)">
                  <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
                </a>
              </template>
              <component :is="tab.component" :paras="tab.paras"></component>
            </el-tab-pane>
          </el-tabs>

          <div id="tab_show"></div>
        </div>
      </main>
      <div class="page-content-bg"></div>
    </div>
    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { markRaw, defineComponent, onMounted, ref } from 'vue';
  import Paper_QUDI0 from '@/views/GradEduEx/Paper_QUDI.vue';
  import Paper_List0 from '@/views/GradEduEx/Paper_List.vue';
  import SysScoreSummaryNewTotal0 from '@/views/GradEduTools/SysScoreSummaryNewTotal.vue';
  import PaperAttention0 from '@/views/GradEduEx/PaperAttention.vue';
  import PaperCollectionLogCRUD0 from '@/views/GradEduPaper/PaperCollectionLogCRUD.vue';
  import PaperMajorDirecition0 from '@/views/GradEduEx/PaperMajorDirecition.vue';
  import SubViewpointTypeCRUD0 from '@/views/RT_Params/SubViewpointTypeCRUD.vue';
  import ExplainTypeCRUD0 from '@/views/RT_Params/ExplainTypeCRUD.vue';
  import LiteratureTypeCRUD0 from '@/views/RT_Params/LiteratureTypeCRUD.vue';
  import AcademicJournalsCRUD0 from '@/views/GradEduPaper/AcademicJournalsCRUD.vue';
  import JournalSubjectCRUD0 from '@/views/GradEduPaper/JournalSubjectCRUD.vue';
  import JournalSubjectCategoryCRUD0 from '@/views/GradEduPaper/JournalSubjectCategoryCRUD.vue';
  import ResearchTopicList0 from '@/views/GradEduTopic/ResearchTopicList.vue';
  import ResearchTopic_QUDI0 from '@/views/GradEduTopic/ResearchTopic_QUDI.vue';
  import gs_ResearchPlanCRUD0 from '@/views/GradEduTopic/gs_ResearchPlanCRUD.vue';
  import RTViewpointCRUD0 from '@/views/GradEduTopic/RTViewpointCRUD.vue';
  import RTPaperRela_QUDI0 from '@/views/GradEduTopic/RTPaperRela_QUDI.vue';
  import RTUserRela_QUDI0 from '@/views/GradEduTopic/RTUserRela_QUDI.vue';

  import gs_ResearchResultCRUD0 from '@/views/GradEduTopic/gs_ResearchResultCRUD.vue';
  import gs_VpClassificationCRUD0 from '@/views/GradEduTopic/gs_VpClassificationCRUD.vue';

  import ViewpointTypeCRUD0 from '@/views/RT_Params/ViewpointTypeCRUD.vue';
  import ke_SuperCRUD0 from '@/views/GradEduTopic/ke_SuperCRUD.vue';
  import ke_SubCRUD0 from '@/views/GradEduTopic/ke_SubCRUD.vue';
  import KnowledgeEconomyAllList0 from '@/views/GradEduTopic/KnowledgeEconomyAllList.vue';
  import gs_TopicTaskStatusCRUD0 from '@/views/RT_Params/gs_TopicTaskStatusCRUD.vue';
  import OriginalPaperAllList0 from '@/views/GradEduTopic/OriginalPaperAllList.vue';
  import XzMajorDirectionCRUD0 from '@/viewsShare/BaseInfo/XzMajorDirectionCRUD.vue';
  import MajorDirectionPaperRelaCRUD0 from '@/views/GradEduPaper/MajorDirectionPaperRelaCRUD.vue';
  // import DiscussionTopics0 from '@/views/GradEduTools/DiscussionTopics.vue';
  // import DiscussionTopics_QUDI0 from '@/views/GradEduTools/DiscussionTopics_QUDI.vue';
  import DiscussionTypeCRUD0 from '@/views/RT_Params/DiscussionTypeCRUD.vue';
  import qa_PaperCRUD0 from '@/views/InteractManage/qa_PaperCRUD.vue';

  import StudentInfoList0 from '@/viewsShare/DailyRunning/StudentInfoList.vue';
  import TeacherInfoList0 from '@/viewsShare/DailyRunning/TeacherInfoList.vue';
  import StudentInfoCRUD0 from '@/viewsShare/UserManage/StudentInfoCRUD.vue';
  import TeacherInfoCRUD0 from '@/viewsShare/BaseInfo/TeacherInfoCRUD.vue';
  import UsersCRUD0 from '@/viewsShare/UserManage/UsersCRUD.vue';
  import QxRoleRightRelationCRUD0 from '@/viewsShare/UserManage/QxRoleRightRelationCRUD.vue';

  import QxUsersCRUD0 from '@/viewsShare/BaseInfo/QxUsersCRUD.vue';
  import QxPrjMenusCRUD0 from '@/viewsShare/MenuManage_GP/QxPrjMenusCRUD.vue';
  import QxRoleMenusCRUD0 from '@/viewsShare/MenuManage_GP/QxRoleMenusCRUD.vue';
  import QxPotenceTypeCRUD0 from '@/viewsShare/PotenceMan/QxPotenceTypeCRUD.vue';
  import QxPrjPotenceCRUD0 from '@/viewsShare/PotenceMan/QxPrjPotenceCRUD.vue';

  import cc_CourseKnowledgesCRUD0 from '@/viewsShare/Knowledges/cc_CourseKnowledgesCRUD.vue';
  import gs_PaperGroupCRUD0 from '@/views/GradEduPaper/gs_PaperGroupCRUD.vue';
  import SysCommentCRUD0 from '@/views/GradEduTools/SysCommentCRUD.vue';
  import TotalDataStatistics0 from '@/views/GradEduTools/TotalDataStatistics.vue';
  import gs_UserRela0 from '@/views/GradEduTools/gs_UserRela.vue';
  import Paper_Statistics0 from '@/views/GradEduEx/Paper_Statistics.vue';
  import SysScoreSummaryCRUD0 from '@/views/GradEduTools/SysScoreSummaryCRUD.vue';
  import TotalDataStatisticsTest0 from '@/views/GradEduTools/TotalDataStatisticsTest.vue';
  import TotalDataStatisticsDetail0 from '@/views/GradEduTools/TotalDataStatisticsDetail.vue';
  import gs_KnowledgesGraphCRUD0 from '@/viewsShare/Knowledges/gs_KnowledgesGraphCRUD.vue';
  import StructureChart0 from '@/viewsShare/Knowledges/StructureChart.vue';
  import XzMajorCRUD0 from '@/viewsShare/BaseInfo/XzMajorCRUD.vue';
  import cc_CourseCRUD0 from '@/viewsShare/CourseLearning/cc_CourseCRUD.vue';
  import CurrEduClsCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsCRUD.vue';
  import CurrEduClsStuCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsStuCRUD.vue';
  import CurrEduClsTeacherCRUD0 from '@/viewsShare/DailyRunning/CurrEduClsTeacherCRUD.vue';
  import gs_TeachingDateCRUD0 from '@/viewsShare/DailyRunning/gs_TeachingDateCRUD.vue';
  import SysScoreWeightCRUD0 from '@/views/GradEduTools/SysScoreWeightCRUD.vue';
  import PersonalKnowledgeView0 from '@/views/GradEduTopic/PersonalKnowledgeView.vue';
  import gs_UserConfig0 from '@/views/GradEduTools/gs_UserConfig.vue';
  import CacheUseStateCRUD0 from '@/viewsShare/SystemSet/CacheUseStateCRUD.vue';
  import SysCommentTypeCRUD0 from '@/views/RT_Params/SysCommentTypeCRUD.vue';
  import PaperSubViewpointCRUD0 from '@/views/GradEduPaper/PaperSubViewpointCRUD.vue';
  import Welcome0 from '@/viewsShare/web/Welcome.vue';

  import router from '@/router';
  import { PaperIframe } from '@/views/web/PaperIframe';
  import { IndexIframe } from '@/views/web/IndexIframe';
  import { message } from '@/utils/myMessage';
  import { GetDivObjInDivObjN } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import PageHeadCom from '@/ts/components/PageHead.vue';
  import { qxRoleMenusStore } from '@/store/modulesShare/qxRoleMenus';
  import { userStore } from '@/store/modulesShare/user';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { useRoute } from 'vue-router';

  export default defineComponent({
    name: 'IndexIframe',
    components: {
      // 组件注册
      //   Paper_QUDI,
      //   Paper_List,
      //   SysScoreSummaryNewTotal,
      PageHeadCom,
    },
    props: {
      page: {
        type: String,
        required: false,
      },
    },
    setup(props) {
      const route = useRoute(); // 获取当前路由信息
      const strTitle = ref('研究生论文阅读系统-后台管理');
      const refDivLayout = ref();
      const Login_EditRef = ref();
      // const About = markRaw(About0);
      const menuSetId = ref('');
      const Paper_QUDI = markRaw(Paper_QUDI0);
      const Paper_List = markRaw(Paper_List0);
      const SysScoreSummaryNewTotal = markRaw(SysScoreSummaryNewTotal0);
      const PaperAttention = markRaw(PaperAttention0);
      const PaperCollectionLogCRUD = markRaw(PaperCollectionLogCRUD0);
      const PaperMajorDirecition = markRaw(PaperMajorDirecition0);
      const SubViewpointTypeCRUD = markRaw(SubViewpointTypeCRUD0);
      const ExplainTypeCRUD = markRaw(ExplainTypeCRUD0);
      const LiteratureTypeCRUD = markRaw(LiteratureTypeCRUD0);
      const AcademicJournalsCRUD = markRaw(AcademicJournalsCRUD0);
      const JournalSubjectCRUD = markRaw(JournalSubjectCRUD0);
      const JournalSubjectCategoryCRUD = markRaw(JournalSubjectCategoryCRUD0);
      const ResearchTopicList = markRaw(ResearchTopicList0);
      const ResearchTopic_QUDI = markRaw(ResearchTopic_QUDI0);
      const gs_ResearchPlanCRUD = markRaw(gs_ResearchPlanCRUD0);
      const RTViewpointCRUD = markRaw(RTViewpointCRUD0);
      const RTPaperRela_QUDI = markRaw(RTPaperRela_QUDI0);
      const RTUserRela_QUDI = markRaw(RTUserRela_QUDI0);

      const gs_ResearchResultCRUD = markRaw(gs_ResearchResultCRUD0);
      const gs_VpClassificationCRUD = markRaw(gs_VpClassificationCRUD0);

      const ViewpointTypeCRUD = markRaw(ViewpointTypeCRUD0);
      const ke_SuperCRUD = markRaw(ke_SuperCRUD0);
      const ke_SubCRUD = markRaw(ke_SubCRUD0);
      const KnowledgeEconomyAllList = markRaw(KnowledgeEconomyAllList0);
      const gs_TopicTaskStatusCRUD = markRaw(gs_TopicTaskStatusCRUD0);
      const OriginalPaperAllList = markRaw(OriginalPaperAllList0);
      const XzMajorDirectionCRUD = markRaw(XzMajorDirectionCRUD0);
      const MajorDirectionPaperRelaCRUD = markRaw(MajorDirectionPaperRelaCRUD0);
      const DiscussionTypeCRUD = markRaw(DiscussionTypeCRUD0);
      const qa_PaperCRUD = markRaw(qa_PaperCRUD0);

      const StudentInfoList = markRaw(StudentInfoList0);
      const TeacherInfoList = markRaw(TeacherInfoList0);
      const StudentInfoCRUD = markRaw(StudentInfoCRUD0);
      const TeacherInfoCRUD = markRaw(TeacherInfoCRUD0);
      const UsersCRUD = markRaw(UsersCRUD0);
      const QxRoleRightRelationCRUD = markRaw(QxRoleRightRelationCRUD0);

      const QxUsersCRUD = markRaw(QxUsersCRUD0);
      const QxPrjMenusCRUD = markRaw(QxPrjMenusCRUD0);
      const QxRoleMenusCRUD = markRaw(QxRoleMenusCRUD0);
      const QxPotenceTypeCRUD = markRaw(QxPotenceTypeCRUD0);
      const QxPrjPotenceCRUD = markRaw(QxPrjPotenceCRUD0);

      const cc_CourseKnowledgesCRUD = markRaw(cc_CourseKnowledgesCRUD0);
      const gs_PaperGroupCRUD = markRaw(gs_PaperGroupCRUD0);
      const SysCommentCRUD = markRaw(SysCommentCRUD0);
      const TotalDataStatistics = markRaw(TotalDataStatistics0);
      const gs_UserRela = markRaw(gs_UserRela0);
      const Paper_Statistics = markRaw(Paper_Statistics0);
      const SysScoreSummaryCRUD = markRaw(SysScoreSummaryCRUD0);
      const TotalDataStatisticsTest = markRaw(TotalDataStatisticsTest0);
      const TotalDataStatisticsDetail = markRaw(TotalDataStatisticsDetail0);
      const gs_KnowledgesGraphCRUD = markRaw(gs_KnowledgesGraphCRUD0);
      const StructureChart = markRaw(StructureChart0);
      const XzMajorCRUD = markRaw(XzMajorCRUD0);
      const cc_CourseCRUD = markRaw(cc_CourseCRUD0);
      const CurrEduClsCRUD = markRaw(CurrEduClsCRUD0);
      const CurrEduClsStuCRUD = markRaw(CurrEduClsStuCRUD0);
      const CurrEduClsTeacherCRUD = markRaw(CurrEduClsTeacherCRUD0);
      const gs_TeachingDateCRUD = markRaw(gs_TeachingDateCRUD0);
      const SysScoreWeightCRUD = markRaw(SysScoreWeightCRUD0);
      const PersonalKnowledgeView = markRaw(PersonalKnowledgeView0);
      const gs_UserConfig = markRaw(gs_UserConfig0);
      const CacheUseStateCRUD = markRaw(CacheUseStateCRUD0);
      const SysCommentTypeCRUD = markRaw(SysCommentTypeCRUD0);
      const PaperSubViewpointCRUD = markRaw(PaperSubViewpointCRUD0);
      const Welcome = markRaw(Welcome0);
      // 菜单数据
      const menu = ref([
        {
          name: '论文',
          active: true,
          items: [
            { name: '论文查看', active: true, component: Paper_List, paras: '' }, //  <a @click="xadmin.add_tab('论文查看','../GradEduEx/Paper_List')">
            { name: '关注论文', active: false, component: PaperAttention, paras: '' }, //   <a @click="xadmin.add_tab('关注论文','../GradEduEx/PaperAttention')">
            { name: '论文收藏', active: false, component: PaperCollectionLogCRUD, paras: '' }, //<a  @click="xadmin.add_tab('论文收藏','../GradEduEx/PaperCollectionLog_QUDI')"

            {
              name: '论文维护',
              title: '可以在这里维护一些外网的论文进行学习',
              component: Paper_QUDI,
              paras: 'PaperTypeId=01',
            },
            //  <a  title="可以在这里维护一些外网的论文进行学习"  @click="xadmin.add_tab('论文维护','../GradEduEx/Paper_QUDI?PaperTypeId=01')"
            {
              name: '论文专业方向维护',
              title: '',
              active: false,
              component: PaperMajorDirecition,
              paras: '',
            },
            //<a   @click="xadmin.add_tab('论文专业方向维护','../GradEduEx/PaperMajorDirecition')"
            {
              name: '子观点类型',
              title: '',
              active: false,
              component: SubViewpointTypeCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('子观点类型','../ParameterTable/SubViewpointType_QUDI_TS')"
            {
              name: '观点说明类型',
              title: '',
              active: false,
              component: ExplainTypeCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('观点说明类型','../ParameterTable/ExplainType_QUDI_TS')"
            {
              name: '文献类型',
              title: '',
              active: false,
              component: LiteratureTypeCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('文献类型','../ParameterTable/LiteratureType_QUDI_TS')"
            {
              name: '学术期刊',
              title: '',
              active: false,
              component: AcademicJournalsCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('学术期刊','../GradEduPaper/AcademicJournalsCRUD')"
            {
              name: '期刊学科',
              title: '',
              active: false,
              component: JournalSubjectCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('期刊学科','../GradEduPaper/JournalSubjectCRUD')">
            {
              name: '期刊学科门类',
              title: '',
              active: false,
              component: JournalSubjectCategoryCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('期刊学科门类','../GradEduPaper/JournalSubjectCategoryCRUD')"
          ],
        },
        {
          name: '主题研究管理',
          active: false,
          items: [
            {
              name: '主题查看',
              title: '查看当前教学班的所有主题，并可以查看选中主题下面的所有相关观点内容',
              component: ResearchTopicList,
              paras: '',
            },
            // <a title="查看当前教学班的所有主题，并可以查看选中主题下面的所有相关观点内容"  @click="xadmin.add_tab('主题查看','../GradEduTopic/ResearchTopicList')"
            {
              name: '主题维护',
              title: '维护自己参与的主题，并可以维护该主题题下面的所有相关观点内容',
              component: ResearchTopic_QUDI,
              paras: '',
            },
            // <a  title="维护自己参与的主题，并可以维护该主题题下面的所有相关观点内容"  @click="xadmin.add_tab('主题维护','../GradEduTopic/ResearchTopic_QUDI')"
            {
              name: '个人观点维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=01',
            },
            // <a   @click="xadmin.add_tab('个人观点维护','../GradEduTopic/Viewpoint_QUDI?UserTypeId=01')"
            {
              name: '专家观点维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=02',
            },
            // <a   @click="xadmin.add_tab('专家观点维护','../GradEduTopic/ExpertViewpoint?UserTypeId=02')"
            {
              name: '主题概念维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=03',
            },
            // <a   @click="xadmin.add_tab('主题概念维护','../GradEduTopic/Concept_QUDI_Cache')"
            {
              name: '客观事实维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=04',
            },
            // <a   @click="xadmin.add_tab('客观事实维护','../GradEduTopic/TopicObjective_QUDI_TS?ObjectiveTypeId=01')"
            {
              name: '客观数据维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=05',
            },
            // <a   @click="xadmin.add_tab('客观数据维护','../GradEduTopic/ObjectiveBasis?ObjectiveTypeId=02')"
            {
              name: '操作技能维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=06',
            },
            // <a @click="xadmin.add_tab('操作技能维护', '../GradEduTopic/SysSkillCRUD')">
            {
              name: '社会关系维护',
              title: '',
              component: PaperSubViewpointCRUD,
              paras: 'gsKnowledgeTypeId=07',
            },
            // <a   @click="xadmin.add_tab('社会关系维护', '../GradEduTopic/SysSocialRelationsCRUD')"
            {
              name: '主题研究计划',
              title: '',
              active: false,
              component: gs_ResearchPlanCRUD,
              paras: '',
            },
            // <a   @click="xadmin.add_tab('主题研究计划', '../GradEduTopic/gs_ResearchPlanCRUD')"
            {
              name: '主题个人观点关系',
              title: '',
              active: false,
              component: RTViewpointCRUD,
              paras: 'gsKnowledgeTypeId=01',
            },
            {
              name: '主题专家观点关系',
              title: '',
              active: false,
              component: RTViewpointCRUD,
              paras: 'gsKnowledgeTypeId=02',
            },
            // <a  @click="xadmin.add_tab('主题观点关系列表','../GradEduTopic/RTViewpointRela_QUDI')"
            {
              name: '主题论文关系列表',
              title: '',
              component: RTPaperRela_QUDI,
              paras: 'TopicRelaId=02',
            },
            // <a  @click="xadmin.add_tab('主题论文关系列表','../GradEduTopic/RTPaperRela_QUDI?TopicRelaId=02')"
            {
              name: '主题用户关系列表',
              title: '',
              active: false,
              component: RTUserRela_QUDI,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('主题用户关系列表','../GradEduTopic/RTUserRela_QUDI?TopicRelaId=02')"
            {
              name: '主题概念关系列表',
              title: '',
              active: false,
              component: RTViewpointCRUD,
              paras: 'gsKnowledgeTypeId=03',
            },
            // <a  @click="xadmin.add_tab('主题概念关系列表','../GradEduTopic/RTConceptRela_QUDI_Cache')"
            {
              name: '主题客观关系列表',
              title: '',
              component: RTViewpointCRUD,
              paras: 'gsKnowledgeTypeId=04',
            },
            {
              name: '主题客观数据关系列表',
              title: '',
              component: RTViewpointCRUD,
              paras: 'gsKnowledgeTypeId=05',
            },
            // <a  @click="xadmin.add_tab('主题客观关系列表','../GradEduTopic/RTTopicObjectiveRela_QUDI_TS')"
            {
              name: '主题研究结果关系',
              title: '',
              active: false,
              component: gs_ResearchResultCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('主题研究结果关系','../GradEduTopic/RTResearchResult_QUDI_TS')"

            // <a @click="xadmin.add_tab('知识详细分类', '../GradEduTopic/ke_SubCRUD')">

            // <a  @click="xadmin.add_tab('知识经济', '../GradEduTopic/KnowledgeEconomyAllList')"
            {
              name: '观点分类',
              title: '',
              active: false,
              component: gs_VpClassificationCRUD,
              paras: '',
            },

            {
              name: '小组论文写作查看',
              title: '',
              active: false,
              component: OriginalPaperAllList,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('小组论文写作查看', '../GradEduTopic/OriginalPaperAllList')"
          ],
        },
        {
          name: '知识经济管理',
          active: false,
          items: [
            {
              name: '知识经济',
              title: '',
              active: false,
              component: KnowledgeEconomyAllList,
              paras: '',
            },

            { name: '知识分类', title: '', active: false, component: ke_SuperCRUD, paras: '' },
            // <a @click="xadmin.add_tab('知识分类', '../GradEduTopic/ke_SuperCRUD')">
            { name: '知识详细分类', title: '', active: false, component: ke_SubCRUD, paras: '' },
            {
              name: '知识点维护',
              title: '',
              component: cc_CourseKnowledgesCRUD,
              paras: '',
            },
          ],
        },
        {
          name: '主题相关参数',
          active: false,
          items: [
            {
              name: '主题任务状态',
              title: '',
              active: false,
              component: gs_TopicTaskStatusCRUD,
              paras: '',
            },
            {
              name: '主题观点类型维护',
              title: '',
              active: false,
              component: ViewpointTypeCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('主题观点类型维护','../ParameterTable/ViewpointType_QUDI_TS')"
            // <a  @click="xadmin.add_tab('主题任务状态', '../ParameterTable/gs_TopicTaskStatusCRUD')"
          ],
        },
        {
          name: '专业方向',
          active: false,
          items: [
            {
              name: '用户专业方向维护',
              title: '',
              active: false,
              component: XzMajorDirectionCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('用户专业方向维护','../BaseInfo/XzMajorDirectionCRUD')"
            {
              name: '专业方向与论文关系维护',
              title: '',
              component: MajorDirectionPaperRelaCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('专业方向与论文关系维护','../GradEduTopic/MajorDirectionPaperRela_QUDI')"
          ],
        },
        {
          name: '讨论区',
          active: false,
          items: [
            // { name: '讨论主题', title: '', active:false, component: DiscussionTopics, paras: '' },
            // <a @click="xadmin.add_tab('讨论主题','../GradEduTools/DiscussionTopics')">
            // { name: '讨论主题维护', title: '', active:false, component: DiscussionTopics_QUDI, paras: '' },
            // <a  @click="xadmin.add_tab('讨论主题维护','../GradEduTools/DiscussionTopics_QUDI')"
            {
              name: '讨论类型维护',
              title: '',
              active: false,
              component: DiscussionTypeCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('讨论类型维护','../ParameterTable/DiscussionType_QUDI_TS')"
          ],
        },
        {
          name: '论文答疑',
          active: false,
          items: [
            {
              name: '论文答疑',
              title: '可以查看当前教学班内的所有答疑',
              component: qa_PaperCRUD,
              paras: '',
            },
            // <a  title="可以查看当前教学班内的所有答疑"  @click="xadmin.add_tab('论文答疑','../InteractManage/qa_PaperCRUD?typeid=1')"
            {
              name: '我的答疑',
              title: '答疑和论文关联，可以把论文内不懂的进行标注并提问',
              component: qa_PaperCRUD,
              paras: '',
            },
            // <a  title="答疑和论文关联，可以把论文内不懂的进行标注并提问"  @click="xadmin.add_tab('我的答疑','../InteractManage/qa_PaperCRUD?typeid=2')"
          ],
        },
        {
          name: '中学生管理',
          active: false,
          items: [],
        },
        {
          name: '用户管理',
          active: false,
          items: [
            // { name: '学生列表', title: '', active: false, component: StudentInfoList, paras: '' },
            // { name: '教师列表', title: '', active: false, component: TeacherInfoList, paras: '' },
            { name: '学生维护', title: '', active: false, component: StudentInfoCRUD, paras: '' },
            { name: '教师维护', title: '', active: false, component: TeacherInfoCRUD, paras: '' },
            { name: '用户维护', title: '', active: false, component: UsersCRUD, paras: '' },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
            { name: '平台用户维护', title: '', active: false, component: QxUsersCRUD, paras: '' },
            {
              name: '工程菜单维护',
              title: '',
              active: false,
              component: QxPrjMenusCRUD,
              paras: 'EditTabName=QxPrjMenus',
            },
            {
              name: '角色菜单',
              title: '',
              active: false,
              component: QxRoleMenusCRUD,
              paras: 'EditTabName=QxRoleMenus',
            },
            // <a @click="xadmin.add_tab('用户维护','../UserManage/Users_QUDI')">
            {
              name: '权限类型维护',
              title: '',
              active: false,
              component: QxPotenceTypeCRUD,
              paras: '',
            },
            {
              name: '权限维护',
              title: '',
              active: false,
              component: QxPrjPotenceCRUD,
              paras: '',
            },

            {
              name: '角色赋权关系',
              title: '',
              active: false,
              component: QxRoleRightRelationCRUD,
              paras: '',
            },

            // <a  @click="xadmin.add_tab('知识点维护','../Knowledges/cc_CourseKnowledgesCRUD')"
          ],
        },
        {
          name: '个人中心',
          active: false,
          items: [
            {
              name: '论文组管理',
              title: '',
              active: false,
              component: gs_PaperGroupCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('论文组管理','../GradEduPaper/gs_PaperGroupCRUD')">
            { name: '评论管理', title: '', active: false, component: SysCommentCRUD, paras: '' },
            // <a @click="xadmin.add_tab('评论管理','../GradEduTools/SysComment_QUDI_TS')">
            {
              name: '数据周期统计',
              title: '',
              active: false,
              component: TotalDataStatistics,
              paras: '',
            },
            // <a @click="xadmin.add_tab('数据周期统计','../GradEduTools/TotalDataStatistics')">
            { name: '用户关系图', title: '', active: false, component: gs_UserRela, paras: '' },
            // <a @click="xadmin.add_tab('用户关系图','../GradEduTools/gs_UserRela')">
            {
              name: '论文相关统计',
              title: '',
              active: false,
              component: Paper_Statistics,
              paras: '',
            },
            // <a @click="xadmin.add_tab('论文相关统计','../GradEduEx/Paper_Statistics')">
            {
              name: '分数汇总',
              title: '',
              active: false,
              component: SysScoreSummaryCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('分数汇总','../GradEduTools/SysScoreSummary_QUDI_TS')">
            {
              name: '分数汇总新',
              title: '',
              active: false,
              component: SysScoreSummaryNewTotal,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('分数汇总新', '../GradEduTools/SysScoreSummaryNewTotal')"
            {
              name: '数据周期统计Test',
              title: '',
              active: false,
              component: TotalDataStatisticsTest,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('数据周期统计Test','../GradEduTools/TotalDataStatisticsTest')"
            {
              name: '各表打分详情',
              title: '',
              active: false,
              component: TotalDataStatisticsDetail,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('各表打分详情', '../GradEduTools/TotalDataStatisticsDetail')"
            {
              name: '知识点逻辑图',
              title: '',
              active: false,
              component: gs_KnowledgesGraphCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('知识点逻辑图', '../Knowledges/gs_KnowledgesGraphCRUD')"
            { name: '结构思维图', title: '', active: false, component: StructureChart, paras: '' },
            // <a @click="xadmin.add_tab('结构思维图', '../Knowledges/StructureChart')">
          ],
        },
        {
          name: '教学班课程',
          active: false,
          items: [
            { name: '专业', title: '', active: false, component: XzMajorCRUD, paras: '' },
            // <a @click="xadmin.add_tab('专业', '../BaseInfo/XzMajorCRUD')">
            { name: '课程', title: '', active: false, component: cc_CourseCRUD, paras: '' },
            // <a @click="xadmin.add_tab('课程', '../CourseLearning_Share/cc_CourseCRUD')">
            { name: '教学班', title: '', active: false, component: CurrEduClsCRUD, paras: '' },
            // <a @click="xadmin.add_tab('教学班', '../DailyRunning/CurrEduClsCRUD')">
            {
              name: '教学班学生',
              title: '',
              active: false,
              component: CurrEduClsStuCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班学生', '../DailyRunning/CurrEduClsStuCRUD')">
            {
              name: '教学班教师',
              title: '',
              active: false,
              component: CurrEduClsTeacherCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('教学班老师', '../DailyRunning/CurrEduClsTeacherCRUD')"
            {
              name: '教学班日期',
              title: '',
              active: false,
              component: gs_TeachingDateCRUD,
              paras: '',
            },
            // <a @click="xadmin.add_tab('教学班日期', '../GradEduTools/gs_TeachingDateCRUD')">
          ],
        },
        {
          name: '系统设置',
          active: false,
          items: [
            {
              name: '分数权重管理',
              title: '',
              active: false,
              component: SysScoreWeightCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('分数权重管理','../ParameterTable/SysScoreWeight_QUDI_TS')"
            {
              name: '个人知识点查看',
              title: '',
              active: false,
              component: PersonalKnowledgeView,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('个人知识点查看', '../GradEduTopic/PersonalKnowledgeView')"
            {
              name: '各观点分享配置',
              title: '',
              active: false,
              component: gs_UserConfig,
              paras: '',
            },
            // <a @click="xadmin.add_tab('各观点分享配置', '../GradEduTools/gs_UserConfig')">
            { name: '缓存配置', title: '', active: false, component: CacheUseStateCRUD, paras: '' },
            // <a @click="xadmin.add_tab('缓存配置', '../SystemSet_Share/CacheUseStateCRUD')">
            {
              name: '评论类型管理',
              title: '',
              active: false,
              component: SysCommentTypeCRUD,
              paras: '',
            },
            // <a  @click="xadmin.add_tab('评论类型管理','../GradEduTopic/SysCommentType_QUDI_TS')"
          ],
        },
      ]);
      // const tabs = [
      //   { label: '我的论文', active:false, component: Paper_QUDI },
      //   { label: '论文查看', active:false, component: Paper_List },
      //   { label: '学生得分详情', active:false, component: SysScoreSummaryNewTotal },
      // ];
      // const strViewId = clsPrivateSessionStorage.viewId;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;
      // const tabs = ref<any[]>([]);
      const tabs = ref<any[]>([
        {
          label: '欢迎',
          name: 'Welcome',
          component: Welcome,
          paras: '',
        },
      ]);
      // 当前标签页
      const currentTab = ref('');
      const lastCurrentTab = ref('');
      // 添加标签页
      const addTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab) => tab.name === componentName);
        if (!existingTab) {
          const selectedModule = menu.value.find((module) => module.name === moduleName);
          if (selectedModule) {
            const selectedComponent = selectedModule.items.find(
              (item) => item.name === componentName,
            );
            if (selectedComponent) {
              tabs.value.push({
                label: componentName,
                name: componentName,
                component: selectedComponent.component,
                paras: selectedComponent.paras,
              });
              lastCurrentTab.value = currentTab.value;
              currentTab.value = componentName;
            }
            toggleActiveItem(selectedComponent);
            // selectedModule.items.forEach((m) => {
            //   if (m !== componentName) {
            //     m.active = false;
            //   }
            // });
            // selectedComponent.active = !module.active;
          }
        } else {
          lastCurrentTab.value = currentTab.value;
          currentTab.value = componentName;
        }
        // console.log('currentTab:', currentTab);
        // console.log('currentTab.value:', currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 500);
      };
      const SelectedTab = (componentName: string) => {
        for (let i = 0; i < tabs.value.length; i++) {
          if (tabs.value[i].name == componentName) {
            const divName = refDivLayout.value;
            const divCurr = GetDivObjInDivObjN(divName, `tab-${i}`);
            if (divCurr) divCurr.click();
          }
        }
      };
      const removeTab = (moduleName: string, componentName: string) => {
        const existingTab = tabs.value.find((tab) => tab.name === componentName);
        if (existingTab) {
          let indexToRemove = tabs.value.indexOf(componentName); // 获取要移除的元素的索引
          if (indexToRemove !== -1) {
            tabs.value.splice(indexToRemove, 1); // 从数组中移除一个元素
          }

          currentTab.value = lastCurrentTab.value;
        }
        toggleActive(currentTab.value);

        setTimeout(() => {
          SelectedTab(componentName);
        }, 100);
      };
      const closeTab = (tabName: string) => {
        let indexToRemove = tabs.value.indexOf(tabName); // 获取要移除的元素的索引

        tabs.value.splice(indexToRemove, 1);
        if (currentTab.value === tabs.value[indexToRemove]?.name) {
          currentTab.value = ''; // 关闭当前标签页
        }
      };
      // function removeTab(tabName: string): void {
      //   let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

      //   tabsStore.removeTab(tabName);
      //   tabsRef.value = tabsStore.myTabs;
      //   if (indexToActive > 0) {
      //     activeTab.value = indexToActive - 1;
      //   } else {
      //     activeTab.value = 0;
      //   }
      // }
      const activeTab = ref(0);
      // 切换菜单状态
      const toggleActive = (module: any) => {
        menu.value.forEach((m) => {
          if (m !== module) {
            m.active = false;
          }
        });
        module.active = !module.active;
      };
      const toggleActiveItem = (item: any) => {
        menu.value.forEach((m) => {
          m.items.forEach((i: any) => {
            if (i !== item) {
              i.active = false;
            }
          });
        });
        item.active = !item.active;
      };
      // const currentTabComponent = computed(() => {
      //   return tabs[activeTab.value].component;
      // });
      onMounted(async () => {
        if (typeof route.query.menuSetId === 'string') {
          menuSetId.value = route.query.menuSetId;
        }
        if (menuSetId.value == '0018') {
          strTitle.value = '研究生论文阅读系统-个人中心';
        }
        const strRoleId = userStore.roleId;
        console.log(strRoleId);

        const arrUpMenuName = await qxRoleMenusStore.getUpMenuNamesByCmPrjId(
          strRoleId,
          menuSetId.value,
          clsSysPara4WebApi.cmPrjId,
          clsSysPara4WebApi.currSelPrjId,
        );
        console.log('arrUpMenuName:', arrUpMenuName);
        menu.value = menu.value.filter((x) => arrUpMenuName.indexOf(x.name) > -1);
        console.log(menu.value);
        IndexIframe.GetPropValue = GetPropValue;
        IndexIframe.divLayout = refDivLayout.value;
        window_onload();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'menuSetId':
            return menuSetId.value;
          default:
            return '';
        }
        return '';
      }
      //清空框架页
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }
      //接收的参数
      // function GetRequest() {
      //   var url = location.search; //获取url中"?"符后的字串
      //   var theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //  var str = url.substring(1);
      //  strs = str.split('&');
      //  for (var i = 0; i < strs.length; i++) {
      // theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //  }
      //   }
      //   return theRequest;
      // }
      //加载首页
      function window_onload() {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();
        // var Request = new Object();
        // Request = GetRequest();
        // var str1 = Request['page'];

        var objPage = new IndexIframe();
        objPage.PageLoad();
        // setInterval('Bind_QuestionsCount1()', 300000); //指定300s刷新一次
        setInterval(() => {
          Bind_QuestionsCount1();
        }, 300000);
      }
      //加载答疑统计数量

      function Bind_QuestionsCount1() {
        var objPage = new IndexIframe();
        objPage.Bind_QuestionsCount();
      }
      //切换教学班
      function EduCls_Click(strkey: string, strName: string, strTypeID: string) {
        var objPage = new IndexIframe();
        const divName = refDivLayout.value;
        objPage.EduCls_Click(divName, strkey, strName, strTypeID);
        //RemoveIfame_Click();
      }
      //加载欢迎页
      //function WelcomeLoad_Click() {
      //  var objPage = new welcome.Welcome();
      //  objPage.PageLoad();
      //}
      //信息提示
      function layui_Alert(iconKey: string, strMsg: string) {
        message.success(strMsg);
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
        PaperIframe.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        refDivLayout,
        tabs,
        activeTab,
        Login_EditRef,
        btn_Click,
        toggleActive,
        menu,
        addTab,
        removeTab,
        currentTab,
        closeTab,
        Bind_QuestionsCount1,
        menuSetId,
        strTitle,
      };
    },
  });
</script>
<style scoped>
  #ModularName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }
  /* 样式可以根据需求进行修改 */
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  header {
    /* background-color: #333; */
    /* color: white; */
    padding: 20px;
    text-align: center;
  }
  .main-content {
    display: flex;
    flex: 1;
  }
  .sidebar {
    background-color: #f0f0f0;
    width: 250px;
    padding: 20px;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin-bottom: 1px;
  }
  .content {
    flex: 1;
    padding: 20px;
  }
  .nav-link {
    cursor: pointer;
    background-color: #f2f8fc;
  }

  .nav-link.active {
    font-weight: bold;
    background-color: #60b6f3;
  }
  /* .nav-item {
  } */

  .module-divider {
    border-top: 2px solid #d1b1b1;
    margin: 0;
  }
  .module-name {
    font-weight: bold;
    padding: 10px 0;
    font-size: 1.05rem;
  }
  .item-name {
    font-weight: normal;
    /* background-color: #7ac2f5; */
    font-size: 0.9rem;
  }
  .module-active {
    font-weight: bold;
    background-color: #1a9bf7;
  }
  .item_active {
    font-weight: bold;
    background-color: #dadcf3;
  }
</style>
<!-- // 
// <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
//  -->
@/store/modulesShare/qxRoleMenus @/store/modulesShare/user
