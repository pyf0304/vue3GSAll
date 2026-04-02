<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!-- 头部信息 -->
    <div class="top">
      <div class="top_con">
        <div class="top_title">{{ sysTitle }}</div>
        <div class="top_login">
          <!-- <a id="tz_login" href="javascript:void(0)" @click="xadmin.open('登录','../Web/Login?state=1',700,700)">登录1</a> -->
          <table>
            <tr>
              <td>
                <a id="tz_login" href="javascript:void(0)" @click="btn_Click('login', '')">
                  登录
                </a></td
              >
              <td>
                <a id="tz_Register" href="javascript:void(0)" @click="btn_Click('Register', '')"
                  >注册</a
                ></td
              >
              <td>
                <a
                  id="lnkUserName"
                  href="javascript:void(0)"
                  style="display: none"
                  @click="btn_Click('Console', '')"
                ></a
              ></td>
              <td>
                <MyDropButton
                  ref="refMyDropButton"
                  :buttons="buttons"
                  :is-visible="visible"
                  :title="myTitle1"
                  :is-replace-title="true"
                  @on-button-click="handleRoleChange"
                ></MyDropButton
              ></td>
              <td>
                <a
                  id="Cancellation"
                  href="javascript:void(0)"
                  style="display: none; color: darkorange"
                  @click="btn_Click('Cancellation', '')"
                  >注销</a
                ></td
              >
            </tr>
          </table>
        </div>
      </div>
    </div>

    <!-- 网页图片切换 -->
    <div class="slider">
      <div class="bd">
        <ul>
          <li>
            <a href="javascript:void(0)">
              <img src="@/assets/css/index/img/p2.jpg" />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="@/assets/css/index/img/p5.jpg" />
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <img src="@/assets/css/index/img/p2.jpg" />
            </a>
          </li>
        </ul>
      </div>

      <div class="hd">
        <ul></ul>
      </div>

      <div class="pnBtn prev"
        ><span class="blackBg"></span><a class="arrow" href="javascript:void(0)"></a
      ></div>
      <div class="pnBtn next"
        ><span class="blackBg"></span><a class="arrow" href="javascript:void(0)"></a
      ></div>
    </div>

    <!-- 网页内容信息 -->
    <div class="content">
      <div class="box1">
        <div class="ExpressLane1">
          <ul class="list_ul1">
            <li>
              <!-- <a href="javascript:void(0)" class="icon-7" @click="btn_Click('liPaper', '')"> -->
              <router-Link class="icon-7" asp-area="" to="/PaperIframe">
                <div class="iconLeft">
                  <i></i>
                  <label>{{ paperReading }}</label>
                </div>
                <span
                  >&nbsp;&nbsp;&nbsp;&nbsp;论文管理与阅读模块面向学生论文管理与阅读，学生通过该模块可以进行论文阅读交流，同时进行答疑和标注，教师可以进行监督和评价，促进学生发生深度学习。
                </span>
              </router-Link>
            </li>
            <li>
              <router-Link class="icon-2" asp-area="" to="/TopicIframe">
                <div class="iconLeft">
                  <i></i>
                  <label>主题研究</label>
                </div>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;主题研究与小组学习模块包括：主题研究、小组学习、小组论文写作和知识经济。目的为学生提供主题研究的个性化学习空间，进行小组学习，通过创建“研究主题”完成对某一研究主题的知识梳理和归纳，同时服务于小组论文写作和知识经济的管理。
                </span>
              </router-Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="box2">
        <div class="ExpressLane2">
          <ul class="list_ul2">
            <li>
              <router-Link class="icon-5" asp-area="" to="/QAIframe">
                <i></i>
                <label>答疑标注</label>
                <span
                  >&nbsp;&nbsp;&nbsp;&nbsp;在阅读论文过程中，可以对有疑惑的地方进行答疑，邀请其他人来回复答疑；还可以对重点内容进行标注，例如：标注创新点、重点内容、数据分析方法、结论等。</span
                >
              </router-Link>
            </li>
            <li>
              <router-Link class="icon-8" asp-area="" to="/IndexIframe?menuSetId=0018">
                <i></i>
                <label>个人中心</label>
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;完善个人信息，查看用户的观点、答疑、标注以及研究论文等；学习状态监控可了解学习状况与相关数据统计，观看学习轨迹，进而调整学习步调，实现自我学习的反馈和管理。
                </span>
              </router-Link>
            </li>

            <li>
              <!-- <router-Link class="icon-6" asp-area="" to="/IndexIframe"> -->
              <a href="javascript:void" class="icon-6" @click="liTool_Click()">
                <i></i>
                <label>控制中心</label>
                <span
                  >&nbsp;&nbsp;&nbsp;&nbsp;主要实现用户对自己身份认证和学习过程管理，主要包括专业管理、教学班管理以及学习监控等功能，教学管理主要解决专业、研究方向、教学班成员以及成绩等。</span
                >
              </a>
              <!-- </router-Link> -->
            </li>
          </ul>
        </div>
      </div>

      <div id="box3" class="box3">
        <div class="row">
          <div class="col" style="background-color: lavender">
            编辑论文&nbsp;
            <span id="PersonalPaperNum" class="badge badge-pill badge-primary" title="全部提交总数"
              >0</span
            >
            <span id="MonthPaperNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="WeekPaperNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="TodayPaperNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavenderblush">
            关注论文&nbsp;
            <span
              id="PersonalPaperAttentionNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthPaperAttentionNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span
              id="WeekPaperAttentionNum"
              class="badge badge-pill badge-info"
              title="本周提交总数"
              >0</span
            >
            <span
              id="TodayPaperAttentionNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavender">
            论文子观点&nbsp;
            <span
              id="PersonalPaperSubViewpointNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthPaperSubViewpointNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span
              id="WeekPaperSubViewpointNum"
              class="badge badge-pill badge-info"
              title="本周提交总数"
              >0</span
            >
            <span
              id="TodayPaperSubViewpointNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavenderblush">
            论文答疑&nbsp;
            <span
              id="Personalqa_QuestionsNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="Monthqa_QuestionsNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span id="Weekqa_QuestionsNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span
              id="Todayqa_QuestionsNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col" style="background-color: lavender">
            论文标注&nbsp;
            <span
              id="Personalgs_TagsNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span id="Monthgs_TagsNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="Weekgs_TagsNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="Todaygs_TagsNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>

          <div class="col" style="background-color: lavenderblush">
            社会关系&nbsp;
            <span
              id="PersonalSysSocialRelationsNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthSysSocialRelationsNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span
              id="WeekSysSocialRelationsNum"
              class="badge badge-pill badge-info"
              title="本周提交总数"
              >0</span
            >
            <span
              id="TodaySysSocialRelationsNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavender">
            评论&nbsp;
            <span
              id="PersonalSysCommentNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthSysCommentNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span id="WeekSysCommentNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="TodaySysCommentNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavenderblush">
            教师问题回答&nbsp;
            <span
              id="Personalqa_AnswerNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span id="Monthqa_AnswerNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="Weekqa_AnswerNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="Todayqa_AnswerNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col" style="background-color: lavender">
            个人观点&nbsp;
            <span
              id="PersonalViewpointNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span id="MonthViewpointNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="WeekViewpointNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="TodayViewpointNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavenderblush">
            专家观点&nbsp;
            <span
              id="PersonalExpertViewpointNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthExpertViewpointNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span
              id="WeekExpertViewpointNum"
              class="badge badge-pill badge-info"
              title="本周提交总数"
              >0</span
            >
            <span
              id="TodayExpertViewpointNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavender">
            主题概念&nbsp;
            <span
              id="PersonalConceptNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span id="MonthConceptNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="WeekConceptNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="TodayConceptNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
          <div class="col" style="background-color: lavenderblush">
            客观事实&nbsp;
            <span
              id="PersonalObjectiveFactNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthObjectiveFactNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span id="WeekObjectiveFactNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span
              id="TodayObjectiveFactNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>
        </div>
        <div class="row">
          <div class="col" style="background-color: lavender">
            客观数据&nbsp;
            <span
              id="PersonalObjectiveBasisNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span
              id="MonthObjectiveBasisNum"
              class="badge badge-pill badge-warning"
              title="本月提交总数"
              >0</span
            >
            <span
              id="WeekObjectiveBasisNum"
              class="badge badge-pill badge-info"
              title="本周提交总数"
              >0</span
            >
            <span
              id="TodayObjectiveBasisNum"
              class="badge badge-pill badge-success"
              title="今日提交数"
              >0</span
            >
          </div>

          <div class="col" style="background-color: lavenderblush">
            操作技能&nbsp;
            <span
              id="PersonalSysSkillNum"
              class="badge badge-pill badge-primary"
              title="全部提交总数"
              >0</span
            >
            <span id="MonthSysSkillNum" class="badge badge-pill badge-warning" title="本月提交总数"
              >0</span
            >
            <span id="WeekSysSkillNum" class="badge badge-pill badge-info" title="本周提交总数"
              >0</span
            >
            <span id="TodaySysSkillNum" class="badge badge-pill badge-success" title="今日提交数"
              >0</span
            >
          </div>
        </div>
      </div>

      <div id="box4" class="box4"> </div>
    </div>

    <!-- 网页尾部信息 -->
    <div class="footer">
      <div class="foot">
        <div class="fleft">
          <span class="flogo"
            ><a href="javascript:void(0)" title="研究生论文阅读系统">研究生论文阅读系统</a></span
          >
          <ul class="flist">
            <li id="flfirst">
              <a href="http://www.shnu.edu.cn/" target="_blank">上海师范大学</a>
            </li>
            <li id="flfirst">
              <a href="https://www.sh-tz.com/" target="_blank">上海泰泽</a>
            </li>
          </ul>
          <div class="copyright"> Copyright &#169; 2020 研究生论文阅读系统v1 </div>
        </div>
        <div class="fright">
          <ul class="rlist">
            <li><a href="77240613@qq.com" class="flink3">Email</a></li>
          </ul>
          <ul class="fimg">
            <li>
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=77240613&site=qq&menu=yes"
                class="fimglink1"
                title="关注微信"
              ></a>
            </li>
            <li>
              <a
                href="http://wpa.qq.com/msgrd?v=3&uin=77240613&site=qq&menu=yes"
                class="fimglink2"
                title="制作人QQ"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--编辑层-->
    <LoginCom ref="Login_EditRef" :system-name="mySystemName"></LoginCom>
    <wfmRegisterStuCom ref="wfmRegisterStuRef"></wfmRegisterStuCom>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/index/css/index.css';
  import '@/assets/css/index/css/slider.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import { IndexB, Index_PageLoad, Index_btn_Click } from '@/views/web/IndexB';
  import LoginCom from '@/viewsShare/web/Login.vue';
  import wfmRegisterStuCom from '@/viewsShare/web/wfmRegisterStu.vue';

  import { Login } from '@/viewsShare/UserManage/Login';
  import router from '@/router';

  import { Users_Edit } from '@/viewsBase/UserManage/Users_Edit';
  import { userStore } from '@/store/modulesShare/user';
  import { UserType, UserTypeMap, getUserTypeByStr } from '@/store/modules/types/userType';
  import MyDropButton from '@/ts/components/myDropButton.vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';
  import { qxRolesStore } from '@/store/modulesShare/qxRoles';
  export default defineComponent({
    name: 'MyIndex',
    components: {
      // 组件注册
      LoginCom,
      wfmRegisterStuCom,
      MyDropButton, // Use the correct component name here
    },
    setup() {
      const buttons = ref<Array<clsBtnItem>>([
        { type: 'btn', keyId: 'button1', text: '角色1', title: '' },
      ]);
      const mySystemName = ref('研究生论文系统');
      const visible = ref(true);
      const myTitle1 = ref('角色');
      const refMyDropButton = ref();
      const handleRoleChange = async (data: any) => {
        const strKeyId = data.keyId;
        const objButton = buttons.value.find((x) => x.keyId == strKeyId);
        if (objButton == null) return;

        userStore.setRoleId(strKeyId);
        userStore.setRoleName(objButton.text);
        const objQxRole = await qxRolesStore.getObj(strKeyId);
        if (objQxRole != null) {
          const objUserType: UserType = getUserTypeByStr(objQxRole.userType);
          userStore.setUserType(objUserType);
        }
        // 根据点击的按钮选项执行相应的操作
        if (strKeyId === 'button1') {
          // 处理按钮1的点击操作
          // ...
          alert('button1');
        } else if (strKeyId === 'button2') {
          // 处理按钮2的点击操作
          // ...
          alert(objButton.keyId + objButton.text);
        } else if (strKeyId === 'button3') {
          // 处理按钮3的点击操作
          // ...
          alert('button3');
        }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      const refDivLayout = ref();
      const Login_EditRef = ref();
      const wfmRegisterStuRef = ref();

      const sysTitle = ref('研究生论文阅读系统');
      const paperReading = ref('论文阅读');
      const UserName = ref('pyf');

      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        IndexB.divLayout = refDivLayout.value;
        IndexB.vuebtn_Click = btn_Click;
        if (userStore.getUserType === UserTypeMap.middle_School) {
          sysTitle.value = '中学生阅读平台';
          paperReading.value = '课文阅读';
        }
        // userStore.getIdXzMajor = '00000468';
        Index_PageLoad();

        // setRoles();
      });
      async function setRoles() {
        buttons.value.splice(0, buttons.value.length);
        let strUserId = userStore.getUserId;
        console.log('userId in setRoles:', strUserId);
        if (strUserId == '') {
          strUserId = userStore.getUserId;
        }
        if (strUserId == '') {
          console.error(`用户:[${strUserId}]的为空，请检查！`);
          return;
        }
        let arrRoleIds = userStore.getRoleIds;
        if (arrRoleIds.length == 0) {
          arrRoleIds = await userStore.getRoleIdLst(strUserId);
          if (arrRoleIds.length == 0) {
            console.error(`用户:[${strUserId}]的角色为空，请检查！`);
            return;
          }
        }

        const arrRoleNames = userStore.getRoleNames;
        for (let i = 0; i < arrRoleIds.length; i++) {
          buttons.value.push({
            type: 'btn',
            keyId: arrRoleIds[i],
            text: `${arrRoleNames[i]}`,
            title: '',
          });
        }

        // refMyDropButton.value.myFun1();
        const strCurrRoleId = userStore.roleId;
        if (strCurrRoleId == '') {
          userStore.setRoleId(arrRoleIds[0]);
          userStore.setRoleName(arrRoleNames[0]);
        }
        const strCurrRoleName = userStore.roleName;
        refMyDropButton.value.SetTitle(`(${strCurrRoleName})`);
      }
      function liUserCenter_Click() {
        var objPage = new IndexB();
        objPage.liUserCenter_Click();
      }

      function liTool_Click() {
        var objPage = new IndexB();
        objPage.liTool_Click();
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'setRoles':
            setRoles();
            return;
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'login':
            IndexB.EditObj = Login_EditRef.value;
            Login.EditObj = Login_EditRef.value;
            console.log('Login.EditRef:', Login.EditObj);
            break;
          case 'Register':
            Users_Edit.EditObj = wfmRegisterStuRef.value;
            console.log('Users_Edit.EditRef:', Users_Edit.EditObj);

            break;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");

            break;
          default:
            break;
        }
        Index_btn_Click(strCommandName, strKeyId);
      }
      return {
        Login_EditRef,
        wfmRegisterStuRef,
        btn_Click,
        getUser,
        sysTitle,
        paperReading,
        UserName,
        liTool_Click,
        liUserCenter_Click,
        buttons,
        visible,
        myTitle1,
        handleRoleChange,
        refMyDropButton,
        mySystemName,
      };
    },
  });
</script>
<style scoped>
  .box3 {
    padding: 3px 10px 10px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 5px;
  }

  .box4 {
    padding: 10px 10px 0px 10px;
    background-color: white;
    border-left: solid 1px #dbdcde;
    border-right: solid 1px #dededf;
    border-bottom: solid 1px #dbdcde;
    border-radius: 7px 4px 4px 2px;
    margin-bottom: 8px;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0px;
    margin-left: 0px;
    padding-top: 5px;
    background-color: white;
    /*border-left: solid 1px #dbdcde;
            border-right: solid 1px #dededf;*/
    /*border-bottom: solid 1px #dbdcde;*/
    border-radius: 4px 4px 4px 2px;
    line-height: 3;
  }

  .alert {
    position: relative;
    padding: 0.55rem 1.25rem;
    margin-bottom: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
</style>
@/viewsShare/UserManage/Login @/store/modulesShare/user
