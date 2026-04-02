<template>
  <div id="divLayout_Head" ref="refDivLayout_Head">
    <div :style="{ height: `${headerHeight}px` }" class="layout-header">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand moduleTitle text-secondary" href="index">{{ title }}</a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ml-3">
                <router-link to="/index" class="nav-link">首页</router-link>
              </li>
              <li v-if="isShowPaperIframe == 'true'" class="nav-item">
                <router-link to="/PaperIframe" class="nav-link">/论文阅读</router-link>
              </li>

              <li v-if="isShowEduCls == 'true'" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span id="spnEduClsName_Head" title="当前选择的教学班">没有可选的教学班</span>
                </a>
                <ul id="ulCurrEduCls" class="dropdown-menu"></ul>
              </li>
              <li v-if="isShowEduCls == 'true'" class="nav-item ml-1">
                <router-Link v-if="canEditEduCls == true" to="/CurrEduClsInfo" class="nav-link">
                  <span title="维护当前教学班的相关信息"> 维护教学班信息 </span>
                </router-Link>
              </li>

              <li v-if="isShowTopic == 'true'" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span id="spnTopicName_Head" title="当前研究主题">当前研究主题</span>
                </a>
                <ul id="ulResearchTopic" class="dropdown-menu"></ul>
              </li>

              <li class="nav-item ml-3">
                <a id="lnkUserName" class="nav-link" href="javascript:;"></a>
                <ul id="ulCurrEduCls" class="dropdown-menu">
                  <!-- 二级菜单 -->
                  <li>
                    <a onclick="xadmin.open('个人信息', '../Web/UserInfo', 1000, 800)">个人信息</a>
                  </li>
                </ul>
              </li>

              <li v-if="isShowMajor1 == true" class="nav-item ml-3">
                <span id="spanMajorName" title="当前用户专业名称" class="nav-link"></span>
              </li>
              <li v-if="isShowAttention == 'true'" class="nav-item ml-3">
                <!-- <router-link
                  class="nav-link"
                  :to="{ name: 'PaperAttention', params: { showHeader: true, courseId: 111 } }"
                  ><font-awesome-icon icon="fa-regular fa-heart" />关注论文</router-link
                > -->
                <router-link class="nav-link" to="/PaperAttention?showHeader=true&courseId=111"
                  ><font-awesome-icon icon="fa-regular fa-heart" />{{ focusPaper }}</router-link
                >

                <!-- <router-link :to="{ name: 'user', params: { id: 123 }}">User Profile</router-link> -->
              </li>
              <!-- <li class="nav-item ml-3">
                <a
                  class="nav-link"
                  onclick="xadmin.add_tab(
                      '邀请回答问题',
                      '../InteractManage/qa_PaperCRUD?typeid=2&IsReceive=1',
                    )
                  "
                  >答疑被邀请<span id="QuestionsCount" class="badge text-bg-info">0</span></a
                >
              </li> -->
            </ul>
            <form v-if="isShowSearch == 'true'" class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit"> Search </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import router from '@/router';
  import { PageHead } from '@/ts/components/PageHead';
  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
  import { userStore } from '@/store/modulesShare/user';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { enumQxUserRoles } from '@/ts/L0Entity/UserManage/clsQxUserRolesEN';

  export default defineComponent({
    name: 'PageHead',
    components: {
      // 组件注册
    },
    props: {
      title: {
        type: String,
        required: true,
      },
      isShowEduCls: {
        type: String,
        required: true,
      },
      isShowPaperIframe: {
        type: String,
        required: true,
      },
      isShowTopic: {
        type: String,
        required: true,
      },
      isShowMajor: {
        type: String,
        required: true,
      },
      isShowSearch: {
        type: String,
        required: true,
      },
      isShowAttention: {
        type: String,
        required: true,
      },
      paperId: {
        type: String,
        required: true,
      },
      headerHeight: {
        type: String,
        required: true,
        default: '60',
      },
    },
    setup(props) {
      const focusPaper = ref('关注论文');
      const selectedValue = ref();
      const refDivLayout_Head = ref();
      const Login_EditRef = ref();
      const isShowMajor1 = ref(true);
      const canEditEduCls = ref(true);
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        PageHead.divLayout = refDivLayout_Head.value;
        PageHead.vuebtn_Click = btn_Click;
        PageHead.GetPropValue = GetPropValue;
        if (userStore.getUserType === UserTypeMap.middle_School) {
          isShowMajor1.value = false;
          focusPaper.value = '关注课文';
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
        const objPage = new PageHead();
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return props.title;
          case 'isShowEduCls':
            return props.isShowEduCls;
          case 'isShowTopic':
            return props.isShowTopic;
          case 'paperId':
            return props.paperId;

          default:
            return '';
        }
        return '';
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
        PageHead.btn_Click(strCommandName, strKeyId, refDivLayout_Head.value);
      }
      return {
        Login_EditRef,
        refDivLayout_Head,
        btn_Click,
        getUser,
        isShowMajor1,
        canEditEduCls,
        UserName,
        selectedValue,
        focusPaper,
        // headerStyle,
      };
    },
    methods: {
      async EduClsItemChange() {
        const selectedValue = this.selectedValue;
        const divName = this.refDivLayout_Head;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(selectedValue);
        if (objEduCls == null) return;
        PageHead.EduCls_Click(
          divName,
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
@/store/modulesShare/user
