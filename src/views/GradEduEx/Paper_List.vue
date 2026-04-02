<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <a
      id="backtop"
      class="back-top"
      href="javascript: scroll(0,0);"
      target="_self"
      title="返回顶部"
      style="display: block"
    >
      <i class="icon-backtop"></i>
    </a>
    <div id="tabLayout">
      <!-- 标题层  -->
      <div v-if="showHeader" class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#/index">首页</a></li>
              <li class="breadcrumb-item"><a href="#/PaperIframe/">论文管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">论文查看</li>
              <li class="breadcrumb-item"
                ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
              ></li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query mt-1">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 60%"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td>
              <input
                id="txtPaperTitle_q"
                name="txtPaperTitle_q"
                placeholder="论文标题"
                class="layui-input"
                style="width: 250px"
              />
            </td>
            <td>
              <input
                id="txtUpdDate_q"
                class="layui-input"
                placeholder="发表日期"
                name="txtUpdDate_q"
                style="width: 120px"
              />
            </td>
            <td class="ValueTD">
              <select
                id="ddlLiteratureTypeId_q"
                name="ddlLiteratureTypeId_q"
                class="form-control form-control-sm"
                style="width: 170px"
              />
            </td>

            <td>
              <select
                id="ddlUserId_q"
                name="ddlUserId_q"
                class="form-control form-control-sm"
                style="width: 170px"
              />
            </td>
            <td class="ValueTD">
              <select
                id="ddlPaperTypeId_q"
                name="ddlPaperTypeId_q"
                class="form-control form-control-sm"
                style="width: 200px"
              />
            </td>
            <td>
              <select
                id="ddlMajorDirectionId_SetFldValue"
                name="ddlMajorDirectionId_SetFldValue"
                class="form-control ml-1"
                style="width: 150px"
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
              <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
                <!-- <i class="fas fa-sync-alt"></i> -->
              </a></td
            >
          </tr>
        </table>
      </div>
      <!-- 功能区 -->
      <div>
        <select
          id="ddlPaperSort"
          name="ddlPaperSort"
          class="form-control form-control-sm"
          style="width: 150px; float: right; margin-right: 20px; color: red"
          onchange="PaperSort_Click()"
        >
          <option value="0">智能排序...</option>
          <option value="1">时间排序</option>
          <option value="2">标题排序</option>
          <option value="3">评论数优先</option>
          <option value="4">评分优先</option>
          <option value="5">读写数优先</option>
          <option value="6">浏览量优先</option>
          <option value="7">人气优先</option>
        </select>
      </div>

      <!-- 列表层 -->
      <div id="divList" ref="refDivList" class="container-fluid">
        <div style="height: 100%; width: 100%; background-color: #fff">
          <div class="tab-header">
            <div
              v-for="tab in tabs_Sel"
              :key="tab.id"
              :class="{ active: tab.id === activeTabId }"
              @click="changeTab(tab.id)"
            >
              {{ tab.label }}
            </div>
          </div>
          <div id="myTabContent" class="tab-content">
            <!-- <div id="AllPaper" class="tab-pane active" style="padding: 5px"> -->
            <div
              v-show="activeTabId === 'AllPaper'"
              id="AllPaper"
              class="container-fluid divOverFlow"
            >
              <div id="divList_AllPaper">
                <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div> </div
              ><br />
            </div>
            <div
              v-show="activeTabId === 'CurrEduClsPaper'"
              id="CurrEduClsPaper"
              class="container-fluid divOverFlow"
            >
              <div id="divList_CurrEduCls">
                <div id="divDataLst" class=""> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div> </div
              ><br />
            </div>
            <div
              v-show="activeTabId === 'MyMajor'"
              id="MyMajor"
              class="container-fluid divOverFlow"
            >
              <div id="divList_Major">
                <div id="divDataLst" class="div_List"> </div>
                <div id="divPager" class="pager" value="1"> </div> </div
              ><br />
            </div>
            <div
              v-show="activeTabId === 'MyDirection'"
              id="MyDirection"
              class="container-fluid divOverFlow"
            >
              <div id="divList_Direction">
                <div id="divDataLst" class=""> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div> </div
              ><br />
            </div>
          </div>
        </div>
      </div>
    </div>

    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />

    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvPaperBy" type="hidden" value="" />

    <input id="hidUserId" type="hidden" />
    <input id="hdnpic" type="hidden" />

    <input id="hdnFileOne" type="hidden" />
    <input id="hdnFileTwo" type="hidden" />
    <input id="hdnpicThree" type="hidden" />

    <input id="hidSortvXzMajorDirectionBy" type="hidden" value="" />
    <input id="hidPaperId" type="hidden" />
    <input id="hidMajorDirectionId" type="hidden" />

    <input id="hidTabPaper" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import '@/assets/css/public.css';
  import '@/assets/css/Tabs.css';
  import '@/assets/css/paperlist.css';

  import { defineComponent, onMounted, reactive, ref } from 'vue';

  import { Login } from '@/viewsShare/UserManage/Login';
  import router from '@/router';
  import { Paper_ListEx } from '@/views/GradEduEx/Paper_ListEx';
  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { userStore } from '@/store/modulesShare/user';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  export default defineComponent({
    name: 'PaperList',
    // components: {
    //   // 组件注册
    //   LoginCom,
    // },
    props: {
      showHeader: {
        type: Boolean,
        default: false,
      },
    },
    setup() {
      const activeTabId = ref('AllPaper');
      const tabs = reactive([
        {
          id: 'AllPaper',
          label: userStore.getUserType == UserTypeMap.middle_School ? '全部课文' : '全部论文',
          isCan4MiddleSchool: true,
        },
        {
          id: 'CurrEduClsPaper',
          label:
            userStore.getUserType == UserTypeMap.middle_School
              ? `本教学班课文-${clsPubLocalStorage.eduClsName}`
              : `本教学班论文-${clsPubLocalStorage.eduClsName}`,
          isCan4MiddleSchool: true,
        },
        { id: 'MyMajor', label: '专业论文', isCan4MiddleSchool: false },
        { id: 'MyDirection', label: '本方向论文', isCan4MiddleSchool: false },
      ]);
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivList = ref();

      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      const tabs_Sel = ref();
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        tabs_Sel.value = tabs;
        if (userStore.userType == UserTypeMap.middle_School) {
          // tabs.splice(-2);
          tabs_Sel.value = tabs.filter((x) => x.isCan4MiddleSchool == true);
        }
        if (userStore.getIdXzMajor.length == 0) {
          // tabs.splice(-2);
          tabs_Sel.value = tabs.filter((x) => x.id != 'MyMajor' && x.id != 'MyDirection');
        }

        Paper_ListEx.GetPropValue = GetPropValue;

        const strActiveTabId_Paper = clsPrivateSessionStorage.activeTabId_Paper;
        if (IsNullOrEmpty(strActiveTabId_Paper) == false) {
          activeTabId.value = strActiveTabId_Paper;
        }
        const objPage = new Paper_ListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;

        objPage.divList = refDivList.value;
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'activeTabId':
            return activeTabId.value;
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
          case 'login':
            Paper_ListEx.EditObj = Login_EditRef.value;
            Login.EditObj = Login_EditRef.value;
            console.log('Login.EditRef: ', Login.EditObj);
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
        Paper_ListEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        Login_EditRef,
        refDivLayout,
        refDivQuery,
        refDivList,
        btn_Click,
        getUser,
        UserId,
        UserName,
        activeTabId,
        tabs,
        tabs_Sel,
      };
    },
    methods: {
      // 方法定义
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
        //if (strCommandName == "AddNewRecordWithMaxId") {
        //    alert("this.$refs.mychild.parentHandleclick");
        //    this.$refs.mychild.parentHandleclick("嘿嘿嘿");
        //}
        //Paper_Edit.btnClick(strCommandName, strKeyId);
      },
      // 方法定义
      changeTab(tabId: string) {
        this.activeTabId = tabId;
        clsPrivateSessionStorage.activeTabId_Paper = tabId;
        Paper_ListEx.btn_Click('changeTab', tabId, this.refDivLayout);
      },
    },
  });
</script>
<style scoped>
  .divOverFlow {
    overflow: auto;
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

  .div_List {
    font-size: 15px;
    overflow: auto;
    height: 600px;
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

    
    
    
    

    <script>
      layui.use(['laydate', 'form'], function () {
        var laydate = layui.laydate;

        //执行一个laydate实例
        laydate.render({
          elem: '#txtUpdDate_q', //指定元素
        });
      });
  
    
      /**
     按钮单击,用于调用Js函数中btn_Click
    (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btn_Click)
    **/
      function btn_Click(strCommandName, strKeyId) {

          gs_paperlist.Paper_ListEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);

      }

      /*
详细记录
(AutoGCLib.WA_ViewScript_TS4CSharp: btnDetailRecord_Click)
*/
      function btnDetailRecordInTab_Click(strKeyId: string) {
        GetReadWriteTypeId();
        
        //    if (strKeyId == "") {
        //        alert("请选择需要查看的记录！");
        //        return;
        //    }

        //    //var objPage = new paperreadwrite.PaperReadWrite_QUDI_TSEx();
        //    //objPage.btnDetailRecord_Click();
        
        window.location.href = '../GraduateEduEx/PaperDetail?PaperId=' + strKeyId;
      }
      /*
详细记录
(AutoGCLib.WA_ViewScript_TS4CSharp: btnDetailRecord_Click)
*/
      function btnDetailRecord_Click() {
        GetReadWriteTypeId();

        window.location.href = "../GraduateEduEx/PaperDetail?PaperId='" + strKeyId + "'";
      }



      
      /*
     专业分页修改
    (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_JumpToPage)
    */
      function JumpToPageOne() {
        var intCurrPageIndex = $('#input_numberOne').val();
        var intPageIndex = Number(intCurrPageIndex);
        console.log('跳转到' + intPageIndex + '页');
        
          var objPage = new xzmajordirection.Paper_ListEx();
          objPage.IndexPageOne(intPageIndex);
        
      }
      /*
 专业分页修改
(AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_PageNum)
*/
      function PageNumOne(intPageIndex: number) {
        console.log('跳转到' + intPageIndex + '页');
        
          var objPage = new xzmajordirection.Paper_ListEx();
          objPage.IndexPageOne(intPageIndex);
        
      }

      /*
     专业分页修改
    (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_PrevPage)
    */
      function PrevPageOne() {
        var intCurrPageIndex = $('#hidCurrPageIndex').val();
        var intPageIndex = Number(intCurrPageIndex) - 1;
        console.log('跳转到' + intPageIndex + '页');
        
          var objPage = new xzmajordirection.Paper_ListEx();
          objPage.IndexPageOne(intPageIndex);
        
      }
      /*
  专业分页修改
 (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_NextPage)
 */
      function NextPageOne() {
        var intCurrPageIndex = $('#hidCurrPageIndex').val();
        var intPageIndex = Number(intCurrPageIndex) + 1;
        console.log('跳转到' + intPageIndex + '页');
        
          var objPage = new xzmajordirection.Paper_ListEx();
          objPage.IndexPageOne(intPageIndex);
        
      }

      /*
添加点赞
(AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_btnAddNewRecord_Click)
*/
      function btnAddVote_Click(strKeyId:string, UserId:string) {
        //$('#hidSubViewpointId').val(strKeyId);
        
          var objPage = new Paper_ListEx.Paper_ListEx();
          objPage.btnAddVote_Click(strKeyId, UserId);
        

        message.success('已点赞!', {
          icon: 1,
          time: 2000,
        });
      }

      /*
添加收藏
(AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_btnAddNewRecord_Click)
*/
      function btnAddCollection_Click(strKeyId: string) {
        //$('#hidSubViewpointId').val(strKeyId);
        
          var objPage = new Paper_ListEx.Paper_ListEx();
          objPage.btnAddCollection_Click(strKeyId);
        
        message.success('已收藏!', {
          icon: 1,
          time: 2000,
        });
      }

      //下载
      function btnDownLoadFile_Click(strKeyId: string) {
        
          var objpage = new Paper_ListEx.Paper_ListEx();
          objpage.btnDownLoadFile_Click(strKeyId);
        
      }


      /**智能排序事件 */
      function PaperSort_Click() {
        
          var objPage = new Paper_ListEx.Paper_ListEx();
          objPage.PaperSort_Click();
        
      }

      //根据专业得到专业方向
      function selectXzMajorDirection_Click() {
        
          var objPage = new Paper_ListEx.Paper_ListEx();
          objPage.selectXzMajorDirection_Click();
        
      }

      //刷新
      function Refresh_Click() {
        //location.reload();

        
          var objPage = new Paper_ListEx.Paper_ListEx();
          objPage.Refresh_Click();
        
      }

      //我的论文
      function MyPaper_Click() {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        xadmin.open('我的论文', '../GraduateEduEx/Paper_QUDI', '', '', true);
      }

      //论文阅读
      function PaperRead_Click() {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        xadmin.open('论文阅读', '../GraduateEduEx/PaperReadList?ReadWriteTypeId=03', '', '', true);
      }

      //论文答疑
      function PaperQA_Click() {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        xadmin.open('论文答疑', '../InteractManage/qa_PaperCRUD?typeid=1', '', '', true);
      }

      //信息提示
      function layui_Alert(iconKey, strMsg) {
        message.success(strMsg, {
          icon: iconKey,
          time: 2000,
        });
      }

      function PaperSubV_Click(strKey:string) {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        xadmin.open(
          'pdf论文子观点查看',
          '../GraduateEduEx/PaperSubViewpoint_pdf?Type=02&PaperId=' + strKey,
          '',
          '',
          true,
        );
      }
      function PaperSubVer_Click(strKey:string) {
        //xadmin.open('申请添加主题', '../GradEduTopic/ApplyTopic', '', '', true);
        xadmin.open(
          'pdf论文子观点查看',
          '../GraduateEduEx/PaperSubViewpoint_pdf?Type=02&PaperId=' + strKey,
          '',
          '',
          true,
        );
      }
    </script> -->
@/viewsShare/UserManage/Login @/store/modulesShare/user
