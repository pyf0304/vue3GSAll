<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div class="index">
      <!-- 顶部开始 -->
      <div class="container">
        <div class="logo">
          <a href="index">答疑标注</a>
        </div>

        <ul id="EduCls" class="layui-nav left fast-add" lay-filter="">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <span id="spnEduClsName_Head" title="当前选择的教学班"></span>
            </a>
            <dl id="dlEduClsList" class="layui-nav-child">
              <!-- 二级菜单 -->
            </dl>
          </li>
          <li class="layui-nav-item" style="margin-left: 50px">
            <a @click="add_tab('我的提问')"><font-awesome-icon icon="user" />我的提问</a>
          </li>
          <li class="layui-nav-item" style="margin-left: 50px">
            <a @click="add_tab('我的回答')"><font-awesome-icon icon="user" />我的回答</a>
          </li>
          <li class="layui-nav-item" style="margin-left: 50px">
            <a @click="add_tab('论文标注')"
              ><i class="layui-icon layui-icon-read" style="line-height: 30px" title="论文标注"></i
              >论文标注</a
            >
          </li>
        </ul>
        <ul class="layui-nav right" lay-filter="">
          <li class="layui-nav-item">
            <a id="lnkUserName" href="javascript:;"></a>
            <dl class="layui-nav-child">
              <!-- 二级菜单 -->
              <dd>
                <a @click="xadmin_open('个人信息')">个人信息</a>
              </dd>
            </dl>
          </li>
          <li class="layui-nav-item to-index">
            <span id="spanMajorName" title="当前用户专业名称"></span>
          </li>
          <li class="layui-nav-item">
            <a @click="add_tab('邀请回答问题')"
              >答疑被邀请<span id="QuestionsCount" class="badge text-bg-info">0</span></a
            >
          </li>
          <li class="layui-nav-item to-index">
            <router-link to="/index" class="nav-link">前台首页</router-link>
          </li>
        </ul>
      </div>
      <!-- 顶部结束 -->
      <!-- 中部开始 -->
      <!-- 左侧菜单开始 -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->
      <div class="page-content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
          <ul class="layui-tab-title">
            <li class="home"> <font-awesome-icon icon="fa-regular fa-heart" />答疑标注 </li>
          </ul>
          <div id="tab_right" class="layui-unselect layui-form-select layui-form-selected">
            <dl>
              <dd data-type="this">关闭当前</dd>
              <dd data-type="other">关闭其它</dd>
              <dd data-type="all">关闭全部</dd>
            </dl>
          </div>
          <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
              <!-- <iframe
                id="QA_iframe"
                src="/#/InteractManage/qa_PaperCRUD?typeid=1"
                frameborder="0"
                scrolling="yes"
                class="x-iframe"
              ></iframe> -->

              <ul class="tabs">
                <li
                  v-for="(tab, index) in tabs"
                  :key="index"
                  :class="{ active: activeTab === index }"
                  @click="changeTab(tab)"
                >
                  {{ tab }}
                  <a
                    href="javascript:void(0)"
                    class="ml-2"
                    title="移除该页面"
                    @click="removeTab(tab)"
                  >
                    <font-awesome-icon icon="times" style="color: rgb(164, 207, 247)" />
                  </a>
                </li>
              </ul>
              <component :is="currentTabComponent" :typeId="typeIdValue" />
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

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  // import '@/assets/lib/Xadmin/js/x1admin.js';
  import { computed, defineComponent, onMounted, ref } from 'vue';

  import QaPaperCRUD from '@/views/InteractManage/qa_PaperCRUD.vue';
  import QaAnswerCRUD from '@/views/InteractManage/qa_AnswerCRUD.vue';
  import GsTagsCRUD from '@/views/InteractManage/gs_TagsCRUD.vue';
  import UserInfoCom from '@/viewsShare/web/UserInfo.vue';

  import router from '@/router';

  import { QAIframe } from '@/views/web/QAIframe';
  import { useTabsStore } from '@/store/modules/tabs';
  import { UserInfo } from '@/viewsShare/web/UserInfo';
  import { PaperIframe } from './PaperIframe';
  export default defineComponent({
    name: 'QAIframe',
    components: {
      QaPaperCRUD,
      QaAnswerCRUD,
      GsTagsCRUD,
      UserInfoCom,
    },
    setup() {
      const typeIdValue = ref('1');
      const refDivLayout = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      // const tabs = [
      //   { label: '我的论文', component: Paper_QUDI },
      //   { label: '论文查看', component: Paper_List },
      //   { label: '学生得分详情', component: SysScoreSummaryNewTotal },
      // ];
      const tabsStore = useTabsStore();
      const tabsRef = ref(tabsStore.myTabs);
      const activeTab = ref(0);
      // const activeTabLast = ref(1);
      const currentTabComponent = computed(() => {
        // const intActiveTab = activeTabLast.value;
        // if (intActiveTab > 0) {
        //   activeTab.value = intActiveTab;
        // }
        const myTabs = tabsStore.myTabs;
        const tabName = myTabs[activeTab.value];
        // return tabName;
        // return `${tabName}Com`;
        switch (tabName) {
          case '论文答疑':
            typeIdValue.value = '1';
            return QaPaperCRUD;
          case '我的提问':
            typeIdValue.value = '2';
            return QaPaperCRUD;
          case '我的回答':
            typeIdValue.value = '1';
            return QaAnswerCRUD;
          case '论文标注':
            typeIdValue.value = '1';
            return GsTagsCRUD;
          case '邀请回答问题':
            typeIdValue.value = '1';
            return QaPaperCRUD;
          // case '个人信息':
          //   return UserInfo;
        }
        // const arrEntries = Object.entries(components);
        // const objCom = arrEntries[activeTab.value];
        // return objCom;
        // const strIndex: any = `${tabName}Com`;
        // return components[tabName];
      });
      function removeTab(tabName: string): void {
        let indexToActive = tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引

        tabsStore.removeTab(tabName);
        tabsRef.value = tabsStore.myTabs;
        if (indexToActive > 0) {
          activeTab.value = indexToActive - 1;
        } else {
          activeTab.value = 0;
        }
      }
      // const strViewId = clsPrivateSessionStorage.viewId;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      onMounted(() => {
        QAIframe.divLayout = refDivLayout.value;
        tabsStore.addTab('论文答疑');
      });
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }

      // function GetRequest() {
      //   var url = location.search; //获取url中"?"符后的字串
      //   var theRequest = new Object();
      //   if (url.indexOf('?') != -1) {
      //     var str = url.substring(1);
      //     strs = str.split('&');
      //     for (var i = 0; i < strs.length; i++) {
      //       theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //     }
      //   }
      //   return theRequest;
      // }

      function window_onload() {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();

        var Request = new Object();
        // Request = GetRequest();
        // var str1 = Request['page'];

        // $('#hidPage').val(str1);

        var objPage = new QAIframe();
        objPage.PageLoad();
      }

      setInterval('Bind_QuestionsCount()', 300000); //指定300s刷新一次
      function Bind_QuestionsCount() {
        var objPage = new QAIframe();
        objPage.Bind_QuestionsCount();
      }

      function EduCls_Click(strkey: string, strName: string, strTypeID: string) {
        const divName = refDivLayout.value;
        var objPage = new QAIframe();
        objPage.EduCls_Click(divName, strkey, strName, strTypeID);

        RemoveIfame_Click();
      }

      //信息提示
      // function layui_Alert(iconKey, strMsg) {
      //   message.success(strMsg, {
      //     icon: iconKey,
      //     time: 2000,
      //   });
      // }
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
        // tabs,
        activeTab,
        currentTabComponent,
        Login_EditRef,
        btn_Click,
        getUser,
        UserId,
        UserName,
        refDivLayout,
        tabsStore,
        tabsRef,
        removeTab,
        typeIdValue,
      };
    },
    computed: {
      tabs() {
        // 这里是从 Vuex store 获取 tabs 状态
        // return this.$store.state.tabs;
        this.tabsRef = this.tabsStore.myTabs;

        return this.tabsRef;
      },
    },
    methods: {
      changeTab(tabName: string) {
        const indexToActive = this.tabsStore.myTabs.indexOf(tabName); // 获取要移除的元素的索引
        if (indexToActive != -1) this.activeTab = indexToActive;
        // 切换当前显示的组件
        // this.$router.push({ name: tabName });
      },

      add_tab(strFeatureName: string) {
        switch (strFeatureName) {
          case '我的提问':
            this.tabsStore.addTab('我的提问'); //, '../InteractManage/qa_PaperCRUD?typeid=2');
            break;
          case '我的回答':
            this.tabsStore.addTab('我的回答'); //, '../InteractManage/qa_AnswerCRUD');
            break;
          case '论文标注':
            this.tabsStore.addTab('论文标注'); //, '../InteractManage/gs_TagsCRUD');
            break;
          case '邀请回答问题':
            this.tabsStore.addTab('邀请回答问题'); //, '../InteractManage/qa_PaperCRUD?typeid=2&IsReceive=1');
            break;
        }
        this.tabsRef = this.tabsStore.myTabs;
        let indexToActive = this.tabsStore.myTabs.indexOf(strFeatureName); // 获取要移除的元素的索引
        if (indexToActive !== -1) {
          this.activeTab = indexToActive;
        }
      },
      xadmin_open(strFeatureName: string) {
        const objPage = new UserInfo();
        objPage.PageLoad();
        // switch (strFeatureName) {
        //   case '个人信息':
        //     xadmin.open('个人信息', '../Web/UserInfo', 1000, 800);
        //     break;
        // }
      },
    },
  });
</script>
<style scoped>
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

  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
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

  .container {
    width: 100%;
    height: 45px;
    background-color: #007fff;
  }

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
    /* background: url(@/assets/css/index/img/logo_tz2.png) no-repeat; */
    /* width: 200px; */
  }

  .page-content-bg {
    /* position: absolute; */
    position: relative;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 220px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 100;
    display: none;
  }

  .layui-tab-content {
    padding: 5px;
  }
</style>
<!-- 
    

    
    <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
    
    }
    <script>
      //清空框架页
   
    </script> -->
@/viewsShare/web/UserInfo
