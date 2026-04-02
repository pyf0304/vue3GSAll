<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->
      <div class="x-nav">
        <span class="layui-breadcrumb">
          <a href="">首页</a>
          <a href="">个人中心</a>
          <a>
            <cite>个人知识点</cite>
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
      <div id="divContent" style="width: 100%">
        <div id="divContent_list">
          <ul id="myTab" class="nav nav-tabs">
            <li id="liPaper"
              ><a href="#li_Paper" data-toggle="tab" @click="liPaperClick()">相关论文</a></li
            >
            <li id="liPaperReadWrite"
              ><a href="#li_PaperReadWrite" data-toggle="tab" @click="liPaperReadWriteClick()"
                >论文读写</a
              ></li
            >
            <li id="liPaperSubViewpoint"
              ><a href="#li_PaperSubViewpoint" data-toggle="tab" @click="liPaperSubViewpointClick()"
                >论文子观点</a
              ></li
            >
            <li id="liViewpoint"
              ><a href="#li_Viewpoint" data-toggle="tab" @click="liViewpointClick()"
                >个人观点</a
              ></li
            >
            <li id="liExpertViewpoint"
              ><a href="#li_ExpertViewpoint" data-toggle="tab" @click="liExpertViewpointClick()"
                >专家观点</a
              ></li
            >
            <li id="liConcept"
              ><a href="#li_Concept" data-toggle="tab" @click="liConceptClick()">相关概念</a></li
            >
            <li id="liObjectiveFact"
              ><a href="#li_Objective" data-toggle="tab" @click="liObjectiveFactClick()"
                >客观事实</a
              ></li
            >
            <li id="liObjectiveBasis"
              ><a href="#li_ObjectiveBasis" data-toggle="tab" @click="liObjectiveBasisClick()"
                >客观数据</a
              ></li
            >
            <li id="liSysskill"
              ><a href="#li_Sysskill" data-toggle="tab" @click="liSysskillClick()">操作技能</a></li
            >
            <li id="liSysSocialRela"
              ><a href="#li_SysSocialRela" data-toggle="tab" @click="liSysSocialRelationsClick()"
                >社会关系</a
              ></li
            >
          </ul>
          <div id="myTabContent" class="tab-content">
            <!-- - 论文 -->
            <div class="tab-pane fade" id="li_Paper">
              <div id="divRtPaperRela" class="div_List">
                <div id="divRtCitedPaperRelaDataLst" class="div_List"></div>
                <div id="divPagerPaper" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 论文读写 -->
            <div class="tab-pane fade" id="li_PaperReadWrite">
              <div id="divPaperReadWrite" class="div_List">
                <div id="divPaperReadWriteDataLst" class="div_List"></div>
                <div id="divPagerPaperReadWrite" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 论文子观点 -->
            <div class="tab-pane fade" id="li_PaperSubViewpoint">
              <div id="divPaperSubViewpoint" class="div_List">
                <div id="divPaperSubViewpointDataLst" class="div_List"></div>
                <div id="divPagerPaperSubViewpoint" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 下 1个人观点  -->
            <div class="tab-pane fade" id="li_Viewpoint">
              <div id="divRtViewPointRela" class="div_List">
                <div id="divRtViewPointRelaDataLst" class="div_List"> </div>
                <div id="divPagerViewpoint" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 下 2专家观点  -->
            <div class="tab-pane fade" id="li_ExpertViewpoint">
              <div id="divRtViewPointRela" class="div_List">
                <div id="divRtExpertViewPointRelaDataLst" class="div_List"> </div>
                <div id="divExpertPagerViewpoint" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 概念  -->
            <div class="tab-pane fade" id="li_Concept">
              <div id="divRtConceptRela" class="div_List">
                <div id="divRtConceptRelaDataLst" class="div_List"> </div>
                <div id="divPagerConcept" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 客观事实  -->
            <div class="tab-pane fade" id="li_Objective">
              <div id="divRtTopicObjectiveRela" class="div_List">
                <div id="divRtTopicObjectiveDataLst" class="div_List"> </div>
                <div id="divPagerObjective" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 客观数据  -->
            <div class="tab-pane fade" id="li_ObjectiveBasis">
              <div id="divRtTopicObjectiveRela" class="div_List">
                <div id="divBasisRtTopicObjectiveDataLst" class="div_List"> </div>
                <div id="divPagerBasis" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 技能  -->
            <div class="tab-pane fade" id="li_Sysskill">
              <div id="divRtSysskillRela" class="div_List">
                <div id="divSysskillDataLst" class="div_List"> </div>
                <div id="divPagerSysskill" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
            <!-- 社会关系  -->
            <div class="tab-pane fade" id="li_SysSocialRela">
              <div id="divRtSysSocialRelaRela" class="div_List">
                <div id="divSysSocialRelaDataLst" class="div_List"> </div>
                <div id="divPagerSysSocialRela" class="paperviewpoint" value="1"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" value="" />
    <input id="hidRoleId" type="hidden" value="" />
    <!-- 观点 个人 专家  -->
    <input id="hidSortvViewpointBy" type="hidden" value="" />
    <input id="hidTopicRelaId" type="hidden" value="" />
    <input id="hidViewpointId" type="hidden" value="" />
    <!-- 论文  -->
    <input id="hidSortvPaperBy" type="hidden" value="" />
    <input id="hidPaperId" type="hidden" value="" />
    <input id="hidSortQxUsersBy" type="hidden" value="" />
    <input id="hidUserIdKey" type="hidden" value="" />
    <!-- 主题用户关系  -->
    <input id="hidSortvRTUserRelaBy" type="hidden" value="" />
    <input id="hidCurrPageIndexUser" type="hidden" value="1" />
    主题观点关系
    <input id="hidSortvRTViewpointRelaBy" type="hidden" value="" />
    <input id="hidCurrPageIndexViewpoint" type="hidden" value="1" />
    <!-- 主题论文关系  -->
    <input id="hidSortvRTPaperRelaBy" type="hidden" value="" />
    <input id="hidCurrPageIndexPaper" type="hidden" value="1" />
    <!-- 主题概念关系  -->
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvRTConceptRelaBy" type="hidden" value="" />
    <input id="hidConceptId" type="hidden" value="" />
    <!-- 主题客观关系  -->
    <input id="hidSortvTopicObjectiveBy" type="hidden" value="" />
    <input id="hidObjectiveId" type="hidden" value="" />
    <!-- 观点角色类型  -->
    <input id="hidUserTypeId" type="hidden" value="" />
    <!-- 客观类型  -->
    <input id="hidObjectiveTypeId" type="hidden" value="" />
    <!-- 用户列表  -->
    <input id="hidSortvUsersBy" type="hidden" value="" />
    <!-- 客观事实列表  -->
    <input id="hidSortvTopicObjectiveBy" type="hidden" value="" />
    <!-- 存放tab页顺序  -->
    <input id="hidTabNum" type="hidden" />
    <!-- 研究结果  -->
    <input id="hidSortvRTResearchResultBy" type="hidden" value="" />
    <!-- 区分所有论文，和小组成员论文  -->
    <input id="hidstrType" type="hidden" />
    <!-- 区分个人专家观点  区分客观事实和客观数据  -->
    <input id="hidPageType" type="hidden" />
    <!-- 技能  -->
    <input id="hidSortvRTSysSkillBy" type="hidden" value="" />
    <input id="hidSkillId" type="hidden" value="" />
    <!-- 社会关系  -->
    <input id="hidSortvRTSysSocialRelaBy" type="hidden" value="" />
    <input id="hidSocialId" type="hidden" value="" />
    <!-- 研究计划  -->
    <input id="hidSortvgs_ResearchPlanBy" type="hidden" value="" />
    <!-- 研究计划 教师任务布置  -->
    <input id="hidSortgs_TeacherTaskBy" type="hidden" value="" />
    <!-- 论文类型 -->
    <input id="hidPaperTypeId" type="hidden" value="" />
    <!-- 当前教学班Id  -->
    <input id="hidId_CurrEduCls" type="hidden" />
  </div>
</template>
<script lang="ts">
  import $ from 'jquery';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/comment.css';

  import '@/assets/css/site.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/SimpleTree.css';
  import '@/assets/css/public.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { PersonalKnowledgeViewEx } from '@/views/GradEduTopic/PersonalKnowledgeViewEx';
  import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { PaperSubViewpointCRUD } from '@/viewsBase/GradEduPaper/PaperSubViewpointCRUD';
  export default defineComponent({
    name: 'PersonalKnowledgeView',
    components: {
      // 组件注册
    },
    setup() {
      const strTitle = ref('个人知识查看');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        window_onload();
      });

      /*
       * 页面导入-在导入页面后运行的函数
       */
      function window_onload() {
        //获取隐藏控件值
        var y = localStorage.getItem('hidNum')?.toString();
        $('#hidTabNum').val(y ?? '');

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoad();
      }
      //论文
      function liPaperClick() {
        var strnum = '1';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liPaperClick();
      }
      //论文读写
      function liPaperReadWriteClick() {
        var strnum = '2';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liPaperReadWriteClick();
      }
      //论文子观点
      function liPaperSubViewpointClick() {
        var strnum = '3';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liPaperSubViewpointClick();
      }
      //个人观点
      function liViewpointClick() {
        var strnum = '4';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liViewpointClick();
      }
      //专家观点
      function liExpertViewpointClick() {
        var strnum = '5';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liExpertViewpointClick();
      }
      //概念
      function liConceptClick() {
        var strnum = '6';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liConceptClick();
      }
      //客观事实
      function liObjectiveFactClick() {
        var strnum = '7';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liObjectiveFactClick();
      }
      //客观数据
      function liObjectiveBasisClick() {
        var strnum = '8';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liObjectiveBasisClick();
      }
      //客观数据
      function liSysskillClick() {
        var strnum = '9';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liSysskillClick();
      }
      //客观数据
      function liSysSocialRelationsClick() {
        var strnum = '10';
        $('#hidTabNum').val(strnum);
        var y = GetInputValueInDivObj(refDivLayout.value, 'hidTabNum');
        localStorage.setItem('hidNum', y);

        var objPage = new PersonalKnowledgeViewEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.liSysSocialRelationsClick();
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            PaperSubViewpointCRUD.EditObj = SysScoreSummary_EditRef.value;

            break;
          default:
            break;
        }
        PersonalKnowledgeViewEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
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
        liPaperClick,
        liViewpointClick,
        liPaperSubViewpointClick,
        liExpertViewpointClick,
        liConceptClick,
        liObjectiveFactClick,
        liObjectiveBasisClick,
        liSysskillClick,
        liSysSocialRelationsClick,
        liPaperReadWriteClick,
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
