<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div class="index">
      <!-- 顶部开始 -->

      <div class="layout-header">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand moduleTitle text-secondary" href="index">主题研究</a>

            <!-- <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> -->
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item ml-3">
                  <router-link to="/index" class="nav-link">前台首页</router-link>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="javascript:void(0)"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span id="spnEduClsName_Head" title="当前选择的教学班">没有可选的教学班</span>
                  </a>
                  <ul id="ulCurrEduCls" class="dropdown-menu"> </ul>
                </li>
                <li class="nav-item ml-1">
                  <router-Link v-if="canEditEduCls == true" to="/CurrEduClsInfo" class="nav-link">
                    <span title="维护当前教学班的相关信息"> 维护教学班信息1 </span>
                  </router-Link>
                </li>

                <li class="nav-item ml-3">
                  <a
                    id="CurrTopicName"
                    title="当前选择的研究主题"
                    href="javascript:;"
                    class="nav-link text-primary font-weight-bold"
                  >
                  </a>
                </li>
                <li class="nav-item ml-3">
                  <a id="lnkUserName" class="nav-link" href="javascript:;"></a>
                  <ul id="ulCurrEduCls" class="dropdown-menu">
                    <!-- 二级菜单 -->
                    <li>
                      <a @click="xadmin_open('个人信息', '../Web/UserInfo', 1000, 800)">个人信息</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item ml-3">
                  <span id="spanMajorName" title="当前用户专业名称" class="nav-link"></span>
                </li>
                <li class="nav-item ml-3">
                  <router-link class="nav-link" to="/ResearchTopicList"
                    ><font-awesome-icon icon="fa-regular fa-heart" />主题查看</router-link
                  >
                </li>

                <li class="nav-item ml-3">
                  <a
                    class="nav-link"
                    @click="
                      xadmin_add_tab(
                        '邀请回答问题',
                        '../InteractManage/qa_PaperCRUD?typeid=2&IsReceive=1',
                      )
                    "
                    >答疑被邀请<span id="QuestionsCount" class="badge text-bg-info">0</span></a
                  >
                </li>
                <li class="nav-item ml-3">
                  <a
                    @click="
                      xadmin_add_tab('学生得分详情', '../GradEduTools/SysScoreSummaryNewTotal')
                    "
                    class="nav-link"
                    ><i
                      class="layui-icon layui-icon-chart"
                      style="line-height: 30px"
                      title="学生得分详情"
                    ></i
                    >学生得分详情</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <!-- 顶部结束 -->
      <!-- 中部开始 -->
      <!-- 左侧菜单开始 -->
      <!-- <div class="x-slide_left"></div> -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <div class="page-content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <ul class="tabs">
                <li
                  v-for="(tab, index) in tabs"
                  :key="index"
                  :class="{ active: activeTab === index }"
                  @click="tabChange(index)"
                >
                  {{ tab.label }}
                </li>
              </ul>

              <component :is="currentTabComponent" />
            </div>
          </div>
          <div id="tab_show"></div>
        </div>
      </div>
      <div class="page-content-bg"></div>
    </div>

    <!-- 右侧主体结束 -->
    <!-- 中部结束 -->

    <input id="hidIdCurrEduCls" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { computed, defineComponent, onMounted, ref } from 'vue';

  import ResearchTopicQudi1 from '@/views/GradEduTopic/ResearchTopic_QUDI.vue';
  import ResearchTopicList from '@/views/GradEduTopic/ResearchTopicList.vue';
  import SysScoreSummaryNewTotal from '@/views/GradEduTools/SysScoreSummaryNewTotal.vue';
  import qa_PaperCRUD from '@/views/InteractManage/qa_PaperCRUD.vue';

  import router from '@/router';

  import { TopicIframe } from '@/views/web/TopicIframe';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { userStore } from '@/store/modulesShare/user';
  import { enumQxUserRoles } from '@/ts/L0Entity/UserManage/clsQxUserRolesEN';
  export default defineComponent({
    name: 'TopicIframe',
    components: {
      // 组件注册
      ResearchTopicQudi1,
      ResearchTopicList,
      SysScoreSummaryNewTotal,
      qa_PaperCRUD,
    },
    setup() {
      const canEditEduCls = ref(true);
      const refDivLayout = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      const tabs = [
        { label: '研究主题', component: ResearchTopicQudi1 },
        { label: '主题查看', component: ResearchTopicList },
        { label: '学生得分详情', component: SysScoreSummaryNewTotal },
        { label: '邀请回答问题', component: qa_PaperCRUD },
      ];
      // const strViewId = clsPrivateSessionStorage.viewId;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      const activeTab = ref(0);

      const currentTabComponent = computed(() => {
        return tabs[activeTab.value].component;
      });
      function tabChange(tabIndex: number) {
        activeTab.value = tabIndex;
        clsPrivateSessionStorage.activeTab_Topic = tabIndex;
      }
      onMounted(() => {
        TopicIframe.divLayout = refDivLayout.value;
        const intActiveTab = clsPrivateSessionStorage.activeTab_Topic;
        if (intActiveTab > 0) {
          activeTab.value = intActiveTab;
        }
        switch (userStore.roleId) {
          case enumQxUserRoles.System_Admin_00620001:
          case enumQxUserRoles.K_12_Teacher_00620013:
          case enumQxUserRoles.Regular_Teacher_00620002:
          case enumQxUserRoles.Secondary_School_System_Admin_00620018:
            canEditEduCls.value = true;
            break;
          default:
            canEditEduCls.value = false;
            break;
        }
        const objPage = new TopicIframe();
        objPage.PageLoad();
      });
      function xadmin_open(strTitle: string, strUrl: string, intHeight: number, intWidth: number) {
        console.log(strTitle, strUrl, intHeight, intWidth);
        alert('xadmin_open');
      }
      function xadmin_add_tab(strTitle: string, strUrl: string) {
        console.log(strTitle, strUrl);
        alert('xadmin_add_tab');
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
        TopicIframe.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        refDivLayout,
        tabs,
        activeTab,
        currentTabComponent,
        Login_EditRef,
        btn_Click,
        getUser,
        UserId,
        UserName,
        ResearchTopicList,
        tabChange,
        xadmin_open,
        xadmin_add_tab,
        canEditEduCls,
      };
    },
  });
</script>
<style lang="less" scoped>
  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
  }

  .layout-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: @header-height;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #aacbec;

    * {
      cursor: pointer;
    }
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

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 20px;
    line-height: 45px;
    /* width: 200px; */
  }

  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }
</style>

<!-- 


    
    
    
    <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
    
}

<script>

    //清空框架页
    function RemoveIfame_Click() {
        localStorage.removeItem('hid')
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
    }
    //window_onload = function () {
    //    //加载页面的时候关闭控制框架的所有缓存页面
    //    localStorage.removeItem('hid')
    //    $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
    //}

 

    setInterval('Bind_QuestionsCount()', 300000);  //指定300s刷新一次
    function Bind_QuestionsCount() {

            var objPage = new index.TopicIframe();
            objPage.Bind_QuestionsCount();

    }

    function EduCls_Click(strkey, strName, strTypeID) {

            var objPage = new index.TopicIframe();
            objPage.EduCls_Click(strkey, strName, strTypeID);

        //RemoveIfame_Click();
    }

    //信息提示
    function layui_Alert(iconKey, strMsg) {

        message.success(strMsg, {
            icon: iconKey,
            time: 2000
        });
    }



</script>
 -->
