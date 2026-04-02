<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div class="index">
      <!-- 顶部开始 -->
      <PageHeadCom
        ref="PageHeadRef"
        :title="headTitle"
        :isShowEduCls="'true'"
        :header-height="'60px'"
        :is-show-paper-iframe="'false'"
        :isShowTopic="'false'"
        :is-show-search="'false'"
        :is-show-major="'true'"
        :is-show-attention="'true'"
        :paper-id="''"
      ></PageHeadCom>

      <!-- 顶部结束 -->
      <!-- 中部开始 -->
      <!-- 左侧菜单开始 -->
      <!-- 左侧菜单结束 -->
      <!-- 右侧主体开始 -->

      <div class="container-fluid mt-1">
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
    <input id="hidIdCurrEduCls" type="hidden" />

    <input id="hidPage" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { computed, defineComponent, onMounted, ref } from 'vue';

  import PaperAttention from '@/views/GradEduEx/PaperAttention.vue';
  import Paper_QUDI from '@/views/GradEduEx/Paper_QUDI.vue';
  import Paper_List from '@/views/GradEduEx/Paper_List.vue';
  import SysScoreSummaryNewTotal from '@/views/GradEduTools/SysScoreSummaryNewTotal.vue';

  import router from '@/router';
  import { PaperIframe } from '@/views/web/PaperIframe';
  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import PageHeadCom from '@/ts/components/PageHead.vue';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { userStore } from '@/store/modulesShare/user';

  // import { useThemeStore } from '@/store/modules/projectConfig';
  export default defineComponent({
    name: 'PaperIframe',
    components: {
      // 组件注册
      PaperAttention,
      Paper_QUDI,
      Paper_List,
      SysScoreSummaryNewTotal,
      PageHeadCom,
    },
    setup() {
      // const themeStore = useThemeStore();
      // const headerStyle = computed<CSSProperties>(() => {
      //   const { navTheme, layout } = themeStore;
      //   const isDark = navTheme === 'dark' && layout === 'topmenu';
      //   return {
      //     backgroundColor: navTheme === 'realDark' || isDark ? '' : 'rgba(255, 255, 255, 0.85)',
      //     color: isDark ? 'rgba(255, 255, 255, 0.85)' : '',
      //   };
      // });
      const headTitle = ref('论文阅读');
      const selectedValue = ref();
      const refDivLayout = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }

      const tabs = [
        {
          label: userStore.getUserType == UserTypeMap.middle_School ? '我的课文' : '我的论文',
          component: Paper_QUDI,
        },
        {
          label: userStore.getUserType == UserTypeMap.middle_School ? '课文查看' : '论文查看',
          component: Paper_List,
        },
        {
          label: userStore.getUserType == UserTypeMap.middle_School ? '关注课文' : '关注论文',
          component: PaperAttention,
        },
        { label: '学生得分详情', component: SysScoreSummaryNewTotal },
      ];

      // const strViewId = clsPrivateSessionStorage.viewId;
      // const strCmPrjId = clsPrivateSessionStorage.cmPrjId;

      const activeTab = ref(0);

      const currentTabComponent = computed(() => {
        const intActiveTab = clsPrivateSessionStorage.activeTab;
        if (intActiveTab > 0) {
          activeTab.value = intActiveTab;
        }
        return tabs[activeTab.value].component;
      });
      function tabChange(tabIndex: number) {
        activeTab.value = tabIndex;
        clsPrivateSessionStorage.activeTab = tabIndex;
      }
      onMounted(() => {
        if (userStore.getUserType == UserTypeMap.middle_School) {
          headTitle.value = '课文阅读';
        }

        PaperIframe.divLayout = refDivLayout.value;
        const intActiveTab = clsPrivateSessionStorage.activeTab;
        if (intActiveTab > 0) {
          activeTab.value = intActiveTab;
        }
        const objPage = new PaperIframe();
        objPage.PageLoad();
      });
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
        tabs,
        activeTab,
        currentTabComponent,
        Login_EditRef,
        refDivLayout,
        btn_Click,
        getUser,
        UserId,
        UserName,
        selectedValue,
        tabChange,
        headTitle,
        // headerStyle,
      };
    },
    methods: {
      async EduClsItemChange() {
        const selectedValue = this.selectedValue;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(selectedValue);
        if (objEduCls == null) return;
        PaperIframe.EduCls_Click(
          objEduCls.idCurrEduCls,
          objEduCls.eduClsName,
          objEduCls.eduClsTypeId,
        );
      },
    },
  });
</script>

<style lang="less" scoped>
  @header-height: 60px;
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

<!-- 右侧主体结束 -->
<!-- 中部结束 -->
<!-- 


    <link rel="stylesheet" href="./css/theme5.css"> 
   <style scoped>
   
    </style>

    } 
    

    
    <script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
    
    }
    <script>
      //清空框架页
      function RemoveIfame_Click() {
        localStorage.removeItem('hid');
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
      }

      function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf('?') != -1) {
          var str = url.substring(1);
          strs = str.split('&');
          for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
          }
        }
        return theRequest;
      }

      function window_onload = function () {
        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();

        var Request = new Object();
        Request = GetRequest();
        var str1 = Request['page'];

        $('#hidPage').val(str1);

        
          var objPage = new index.PaperIframe();
          objPage.PageLoad();
        
      };

      setInterval('Bind_QuestionsCount()', 300000); //指定300s刷新一次
      function Bind_QuestionsCount() {
        
          var objPage = new index.PaperIframe();
          objPage.Bind_QuestionsCount();
        
      }

      function EduCls_Click(strkey, strName, strTypeID) {
        
          var objPage = new index.PaperIframe();
          objPage.EduCls_Click(strkey, strName, strTypeID);
        
        RemoveIfame_Click();
      }


      //信息提示
      function layui_Alert(iconKey, strMsg) {
        message.success(strMsg, {
          icon: iconKey,
          time: 2000,
        });
      }
    </script> -->
@/store/modulesShare/user
