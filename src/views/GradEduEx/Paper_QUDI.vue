<template>
  <div id="divLayout" ref="refDivLayout" class="divContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div id="tabLayout" class="tab_layout">
      <!--  标题层  -->
      <div v-if="showHeader" class="row">
        <div class="col-md-9">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#/index">首页</a></li>
              <li class="breadcrumb-item"><a href="#/PaperIframe/">论文管理</a></li>
              <li class="breadcrumb-item active" aria-current="page">论文维护</li>
              <li class="breadcrumb-item"
                ><label id="lblMsg_List" name="lblMsg_List" style="width: 200px"></label
              ></li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 查询层  -->
      <div id="divQuery" ref="refDivQuery" class="div_query mt-1" style="width: 100%">
        <table
          id="tabQuery"
          name="tabQuery"
          style="width: 50%"
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
              <button
                class="btn btn-sm btn-info"
                style="width: 100px"
                lay-submit=""
                lay-filter="sreach"
                @click="btn_Click('Query', '')"
                >查询
                <font-awesome-icon icon="search" />
              </button>
            </td>
            <td>
              <a class="btn btn-sm btn-info" title="刷新" @click="btn_Click('location.reload', '')">
                <font-awesome-icon :icon="['fas', 'arrows-rotate']" />
                <!-- <i class="fas fa-sync-alt"></i> -->
              </a>
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区  -->
      <div id="divFunction" ref="refDivFunction" class="layui-card-header">
        <div class="btn-group btn-group-sm">
          <button
            id="btnAddNewRecord"
            class="btn btn-success"
            @click="btn_Click('CreateWithMaxId', '')"
            ><font-awesome-icon :icon="['fas', 'plus']" />{{ paperAddNewRecord }}</button
          >
          <button
            id="btnUpdateRecord"
            class="btn btn-info ml-1"
            title="已提交论文只能修改附件"
            @click="btn_Click('UpdateRecord', '')"
            ><font-awesome-icon :icon="['fas', 'pencil']" />{{ paperUpdateRecord }}</button
          >
          <button
            id="btnDelRecord"
            class="btn btn-danger ml-1"
            style="display: none"
            @click="btn_Click('DelRecord', '')"
            ><font-awesome-icon :icon="['fas', 'trash']" />{{ paperDelRecord }}</button
          >
        </div>
        <div class="btn-group btn-group-sm ml-1">
          <button
            id="btnAddSection"
            class="btn btn-success ml-1"
            title="给论文添加节点以后可以再论文子观点内引用维护"
            @click="btn_Click('AddSection', '')"
            ><font-awesome-icon :icon="['fas', 'plus']" />{{ paperAddSection }}</button
          >
          <button
            id="btnAudit"
            class="btn btn-primary ml-1"
            style="display: none"
            @click="btn_Click('Audit', '')"
            ><font-awesome-icon icon="check" />{{ paperAudit }}</button
          >
          <button
            id="btnSubmit"
            class="btn btn-primary ml-1"
            title="论文提交以后才可以再其他页面引用到，不过提交以后不能再修改"
            @click="btn_Click('Submit', '')"
            ><font-awesome-icon icon="floppy-disk" />{{ paperSubmit }}</button
          >
          <button
            id="btnCancelSubmit"
            class="btn btn-warning ml-1"
            style="display: none"
            name="btnCancelSubmit"
            @click="btn_Click('CancelSubmit', '')"
            ><font-awesome-icon icon="rotate-left" />取消提交</button
          >
          <button
            id="btnSynPaperStatistics"
            class="btn btn-secondary ml-1"
            name="btnSynPaperStatistics"
            style="display: none"
            @click="btn_Click('SynPaperStatistics', '')"
            ><font-awesome-icon icon="calculator" />统计核算</button
          >
          <button
            id="ExportExcel"
            class="btn btn-secondary ml-1"
            value="导出Excel"
            @click="btn_Click('exportExcel', '')"
            ><font-awesome-icon icon="file-excel" />Excel导出</button
          >
        </div>
        <div class="btn-group btn-group-sm ml-1">
          <button
            id="btnSetCurrEduCls"
            class="btn btn-secondary ml-1"
            @click="btn_Click('SetCurrEduCls', '')"
            >设置当前教学班</button
          >
          <select
            v-if="isShowDirection == true"
            id="ddlMajorDirectionId_SetFldValue"
            class="form-control form-control-sm ml-1"
            style="width: 120px"
          ></select>
          <button
            v-if="isShowDirection == true"
            id="btnSetCurrMajorDirection"
            class="btn btn-secondary"
            @click="btn_Click('SetCurrMajorDirection', '')"
            >设置当前方向</button
          >
        </div>
      </div>
      <div class="alert alert-info alert-dismissible">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <strong>本界面功能：</strong>
        可以维护外网的引用论文方便在本系统学习，添加论文节是为了后续写观点可以有个索引，论文维护好以后可以提交，提交以后不能再修改了，如不小心提交可以联系教学班老师帮忙取消！
      </div>
      <!-- 列表层  -->
      <div id="divList_Parent" ref="refDivList" class="container-fluid">
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
            <div v-show="activeTabId === 'AllPaper'" id="AllPaper">
              <div id="divList_AllPaper">
                <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div>
              </div>
              <br />
            </div>
            <!-- <div id="CurrEduClsPaper" class="tab-pane fade" style="padding: 5px"> -->
            <div v-show="activeTabId === 'CurrEduClsPaper'" id="CurrEduClsPaper">
              <div id="divList_CurrEduCls">
                <div id="divDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div>
              </div>
              <br />
            </div>
            <!-- <div id="MyMajor" class="tab-pane fade"> -->
            <div v-show="activeTabId === 'MyMajor'" id="MyMajor">
              <div id="divList_Major">
                <div id="divDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1"> </div>
              </div>
              <br />
            </div>
            <!-- <div id="MyDirection" class="tab-pane fade"> -->
            <div v-show="activeTabId === 'MyDirection'" id="MyDirection">
              <div id="divList_Direction">
                <div id="divDataLst" class="div_DataList"> </div>
                <div id="divPager" class="pager" value="1" style="display: none"> </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <!-- 编辑层 -->
      <div
        id="divMajorDirectionList"
        class="modal fade"
        style="z-index: 1060"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" style="margin-left: 200px">
          <div class="modal-content" style="width: 1000px">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">专业方向</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 查询层  -->
            <div id="divQuerys" class="div_query">
              <table
                id="tabQuerys"
                name="tabQuery"
                style="width: 70%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr>
                  <td>
                    <label
                      id="lblid_XzMajor_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      专业
                    </label>
                  </td>
                  <td>
                    <select
                      id="ddlIdXzMajor_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <label
                      id="lblMajorDirectionName_q"
                      name="lblMajorDirectionName_q"
                      class="col-form-label text-right"
                      style="width: 80px; width: 90px"
                    >
                      研究方向名
                    </label>
                  </td>
                  <td>
                    <input
                      id="txtMajorDirectionName_q"
                      name="txtMajorDirectionName_q"
                      class="form-control form-control-sm"
                      style="width: 200px"
                    />
                  </td>
                  <td>
                    <button
                      id="btnQuery"
                      type="submit"
                      name="btnQuery"
                      class="btn btn-outline-warning text-nowrap"
                      @click="btn_Click('QueryMajorDirection', '')"
                      >查询</button
                    >
                  </td>
                </tr>
              </table>
            </div>
            <div class="modal-body">
              <div id="divList_MajorDirect" ref="refDivList_MajorDirect" class="div_List">
                <div id="divDataLst" class="div_DataList"> </div>
                <div id="divDirection" class="pager" value="1"> </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                id="btnCancel"
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                @click="btn_Click('close', '')"
                >关闭</button
              >
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
    </div>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
    <input id="hidCurrPageIndex" type="hidden" value="1" />
    <input id="hidSortvPaperBy" type="hidden" value="" />
    <input id="hidUserId" type="hidden" />
    <input id="hdnpic" type="hidden" />
    <input id="hidPaperId" type="hidden" />
    <input id="hdnFileOne" type="hidden" />
    <input id="hdnFileTwo" type="hidden" />
    <input id="hdnFileThree" type="hidden" />
    <input id="hidSortvXzMajorDirectionBy" type="hidden" value="" />
    <input id="hidMajorDirectionId" type="hidden" />
    <Paper_EditCom ref="Paper_EditRef"></Paper_EditCom>
    <Paper_Edit4MSReadingCom ref="Paper_Edit4MSReadingRef"></Paper_Edit4MSReadingCom>
    <SectionQUDITs ref="SectionQUDITsRef" :paper-id="paperId"></SectionQUDITs>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/public.css';
  import '@/assets/css/Tabs.css';
  import { defineComponent, onMounted, reactive, ref } from 'vue';

  import { Login } from '@/viewsShare/UserManage/Login';
  import router from '@/router';
  import { PaperCRUD } from '@/viewsBase/GradEduPaper/PaperCRUD';
  import { Paper_QUDI } from '@/views/GradEduEx/Paper_QUDI';
  import Paper_EditCom from '@/views/GradEduPaper/Paper_Edit.vue';
  import Paper_Edit4MSReadingCom from '@/views/GradEduPaper/Paper_Edit4MSReading.vue';

  import { Paper_Edit } from '@/viewsBase/GradEduPaper/Paper_Edit';
  import SectionQUDITs from '@/views/GradEduPaper/Section_QUDI_TS.vue';

  import { Format, IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { UserTypeMap } from '@/store/modules/types/userType';
  import { userStore } from '@/store/modulesShare/user';
  import { GetDivObjInDivObjN, GetFirstCheckedKeyIdInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  export default defineComponent({
    name: 'PaperQudi',
    components: {
      // 组件注册
      Paper_EditCom,
      Paper_Edit4MSReadingCom,
      SectionQUDITs,
    },
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
        { id: 'MyMajor', label: `专业论文-${userStore.getMajorName}`, isCan4MiddleSchool: false },
        { id: 'MyDirection', label: '本方向论文', isCan4MiddleSchool: false },
      ]);
      const tabs_Sel = ref();
      const paperAudit = ref('论文审核');
      const paperAddSection = ref('添加论文节');
      const paperDelRecord = ref('删除论文');
      const paperUpdateRecord = ref('修改论文');
      const paperAddNewRecord = ref('添加论文');
      const paperSubmit = ref('提交论文');
      const isShowDirection = ref(true);
      const Paper_EditRef = ref();
      const Paper_Edit4MSReadingRef = ref();
      const SectionQUDITsRef = ref();
      const Login_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivList = ref();
      const refDivList_MajorDirect = ref();
      const paperId = ref('0');
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      onMounted(() => {
        tabs_Sel.value = tabs;
        if (userStore.userType == UserTypeMap.middle_School) {
          tabs_Sel.value = tabs.filter((x) => x.isCan4MiddleSchool == true);
          paperAudit.value = '论文审核';
          paperAddSection.value = '添加课文节';
          paperDelRecord.value = '删除课文';
          paperUpdateRecord.value = '修改课文';
          paperAddNewRecord.value = '添加课文';
          paperSubmit.value = '提交课文';
          isShowDirection.value = false;
        }
        if (userStore.getIdXzMajor.length == 0) {
          // tabs.splice(-2);
          tabs_Sel.value = tabs.filter((x) => x.id != 'MyMajor' && x.id != 'MyDirection');
        }

        Paper_QUDI.GetPropValue = GetPropValue;
        const strActiveTabId_Paper = clsPrivateSessionStorage.activeTabId_Paper;
        if (IsNullOrEmpty(strActiveTabId_Paper) == false) {
          activeTabId.value = strActiveTabId_Paper;
        }
        const objPage = new Paper_QUDI(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        // objPage.divFunction = refDivFunction.value;
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
      /*
         提交编辑
            (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_mySubmit)
        */
      function mySubmit(pstrOp: string) {
        console.log(pstrOp);
        // if ($('#txtPaperTitle').val() == '') {
        //   message.success('论文标题不能为空!', {
        //     icon: 3,
        //     time: 1000,
        //   });
        // } else if ($('#txtPeriodical').val() == '') {
        //   message.success('期刊不能为空!', {
        //     icon: 3,
        //     time: 1000,
        //   });
        // } else if ($('#txtAuthor').val() == '') {
        //   message.success('论文作者不能为空!', {
        //     icon: 3,
        //     time: 1000,
        //   });
        // } else {
        //   $('#btnOKUpd').attr('disabled', true);
        //   $('#divLoading').show();
        //   //判断文件格式；
        //   IsHasFile();
        // }
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        let divList = null;
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'AddNewRecord':
            if (userStore.userType == UserTypeMap.middle_School) {
              Paper_QUDI.EditObj = Paper_Edit4MSReadingRef.value;
              Paper_Edit.EditObj = Paper_Edit4MSReadingRef.value;
            } else {
              Paper_QUDI.EditObj = Paper_EditRef.value;
              Paper_Edit.EditObj = Paper_EditRef.value;
            }
            console.log('Paper_Edit.EditRef:', Paper_Edit.EditObj);
            break;
          case 'login':
            PaperCRUD.EditObj = Login_EditRef.value;
            Login.EditObj = Login_EditRef.value;
            console.log('Login.EditRef: ', Login.EditObj);
            break;
          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          case 'AddSection':
            // Section_QUDI_TSEx.SectionQUDITsRef = SectionQUDITsRef;
            // console.log(
            //   'Section_QUDI_TSEx.SectionCRUDEditRef: ',
            //   Section_QUDI_TSEx.SectionQUDITsRef,
            // );
            // break;
            divList = getDivList();
            if (divList == null) {
              alert('当前页面的列表层为空，请检查！');
              return;
            }
            paperId.value = GetFirstCheckedKeyIdInDivObj(divList);
            if (paperId.value == '') {
              alert('当前选择的文章为空，请检查！');
              return;
            }
            SectionQUDITsRef.value.showDialog();
            return;
          default:
            break;
        }
        Paper_QUDI.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      function getDivList(): HTMLDivElement | null {
        let strMsg;
        let divList = null;
        const divLayout = refDivLayout.value;
        switch (activeTabId.value) {
          case 'MyDirection': //查询记录
            divList = GetDivObjInDivObjN(divLayout, 'divList_Direction');
            break;

          case 'CurrEduClsPaper': //查询记录
            divList = GetDivObjInDivObjN(divLayout, 'divList_CurrEduCls');

            break;
          case 'AllPaper': //查询记录
            divList = GetDivObjInDivObjN(divLayout, 'divList_AllPaper');

            break;
          case 'MyMajor': //查询记录
            divList = GetDivObjInDivObjN(divLayout, 'divList_Major');

            break;
          default:
            strMsg = `获取divList时,当前页面:${activeTabId.value}在getDivList函数的switch中没有被处理！`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
        return divList;
      }
      return {
        Paper_EditRef,
        Paper_Edit4MSReadingRef,
        SectionQUDITsRef,
        Login_EditRef,
        refDivLayout,
        refDivQuery,
        refDivList,
        refDivList_MajorDirect,
        btn_Click,
        mySubmit,
        getUser,
        UserId,
        UserName,
        activeTabId,
        tabs,
        tabs_Sel,
        paperAudit,
        paperAddSection,
        paperDelRecord,
        paperUpdateRecord,
        paperAddNewRecord,
        paperSubmit,
        isShowDirection,
        paperId,
        getDivList,
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
        Paper_QUDI.btn_Click('changeTab', tabId, this.refDivLayout);
      },
    },
  });
</script>
<style scoped>
  /* body {
transform: scale(0.8); /* 将页面内容缩小 0.8 倍 
transform-origin: left top; /* 设置缩放的基点为左上角 
  } */
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

<script src="~/lib/Xadmin/js/x1admin.js" type="text/javascript"></script>
    @*Excel.js*@
<script src="~/lib/xlsx.core.min.js"></script>
<script src="~/lib/xlsx.full.min.js"></script>
<script src="../lib/jquery-form.js"></script>
<script src="../lib/jquery.min.js"></script>
<script>
    layui.use(['laydate', 'form'],
        function () {
            var laydate = layui.laydate;
            //执行一个laydate实例
                laydate.render({
                elem: '#txtUpdDate_q' //指定元素
                });
            //执行一个laydate实例
                //laydate.render({
            //    elem: '#end' //指定元素
                //});
        });
</script>
}
<script>
           /**
     按钮单击,用于调用Js函数中btn_Click
        (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btn_Click)
    **/
    function btn_Click(strCommandName, strKeyId) {

            paper_qudi.Paper_QUDIbtn_Click(strCommandName, strKeyId, refDivLayout.value);

    }
    function selectFile() {
        document.getElementById('file').click();
    }
    // 读取 excel文件
        function outputWorkbook(workbook) {
        var sheetNames = workbook.SheetNames; // 工作表名称集合
            sheetNames.forEach(name => {
            var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
                for (var key in worksheet) {
                // v是读取单元格的原始值
                    console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
            }
        });
    }
    function readWorkbook(workbook) {
        var sheetNames = workbook.SheetNames; // 工作表名称集合
            var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
            var csv = XLSX.utils.sheet_to_csv(worksheet);
        document.getElementById('result').innerHTML = csv2table(csv);
    }
    // 将csv转换成表格
        function csv2table(csv) {
        var html = '<table>';
        var rows = csv.split('\n');
        rows.pop(); // 最后一行没用的
            rows.forEach(function (row, idx) {
            var columns = row.split(',');
            columns.unshift(idx + 1); // 添加行索引
                if (idx == 0) { // 添加列索引
                    html += '<tr>';
                for (var i = 0; i < columns.length; i++) {
                    html += '<th>' + (i == 0 ? '' : String.fromCharCode(65 + i - 1)) + '</th>';
                }
                html += '</tr>';
            }
            html += '<tr>';
            columns.forEach(function (column) {
                html += '<td>' + column + '</td>';
            });
            html += '</tr>';
        });
        html += '</table>';
        return html;
    }
    function table2csv(table) {
        var csv = [];
        $(table).find('tr').each(function () {
            var temp = [];
            $(this).find('td').each(function () {
                temp.push($(this).html());
            })
            temp.shift(); // 移除第一个
                csv.push(temp.join(','));
        });
        csv.shift();
        return csv.join('\n');
    }
    // csv转sheet对象
        function csv2sheet(csv) {
        var sheet = {}; // 将要生成的sheet
            csv = csv.split('\n');
        csv.forEach(function (row, i) {
            row = row.split(',');
            if (i == 0) sheet['!ref'] = 'A1: ' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
            row.forEach(function (col, j) {
                sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
            });
        });
        return sheet;
    }
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
        function sheet2blob(sheet, sheetName) {
        sheetName = sheetName || 'sheet1';
        var workbook = {
            SheetNames: [sheetName],
            Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet;
        // 生成excel的配置项
            var wopts = {
            bookType: 'xlsx', // 要生成的文件类型
                bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
                type: 'binary'
        };
        var wbout = XLSX.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
        // 字符串转ArrayBuffer
            function s2ab(s:string) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        return blob;
    }
    function openDownloadDialog(url, saveName) {
        if (typeof url == 'object' && url instanceof Blob) {
            url = URL.createObjectURL(url); // 创建blob地址
            }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file: ///模式下不会生效
            var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
    }
    $(function () {
        document.getElementById('file').addEventListener('change', function (e:any) {
            var files = e.target.files;
            if (files.length == 0) return;
            var f = files[0];
            if (!/\.xlsx$/g.test(f.name)) {
                alert('仅支持读取xlsx格式！');
                return;
            }
            readWorkbookFromLocalFile(f, function (workbook) {
                readWorkbook(workbook);
            });
        });
        loadRemoteFile('./sample/test.xlsx');
    });
    function loadRemoteFile(url) {
        readWorkbookFromRemoteFile(url, function (workbook) {
            readWorkbook(workbook);
        });
    }
    function exportExcel() {
     
        var sheet = XLSX.utils.table_to_sheet($('#divDataLst table')[0]);
        openDownloadDialog(sheet2blob(sheet), '导出论文.xlsx');
    }
    function exportSpecialExcel() {
        var aoa = [
            ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
                ['姓名', '性别', '年龄', '注册时间'],
            ['张三', '男', 18, new Date()],
            ['李四', '女', 22, new Date()]
        ];
        var sheet = XLSX.utils.aoa_to_sheet(aoa);
        sheet['!merges'] = [
            // 设置A1-C1的单元格合并
                { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
        ];
        openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
    }
        /**获取地址栏参数 */
        //获取地址栏参数名称；
            function GetRequest() {
            var url = location.search; //获取url中"?"符后的字串
                var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substring(1);
                strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
                }
            }
            return theRequest;
        }
        /**获取论文读写类型ID */
        function GetReadWriteTypeId() {
            var Request = new Object();
            Request = GetRequest();
            var str1;
            str1 = Request['PaperTypeId'];
            $('#h1idPaperTypeId').val(str1);
        }
        function GetPaperTypeId_load() {
            var Request = new Object();
            Request = GetRequest();
            var str1;
            str1 = Request['PaperTypeId'];
            //测试01
                // str1 = "01";
            $('#h1idPaperTypeId').val(str1);
            var stPaperTypeId = $('#h1idPaperTypeId').val();
            if (stPaperTypeId == "01") {
                $('#lbltitle').html("论文维护");
            }
            else if (stPaperTypeId == "02") {
                $('#lbltitle').html("论文查看");
                $('#btnAddNewRecord').hide();
                $('#btnUpdateRecord').hide();
                $('#btnAddSection').hide();
                $('#btnDelRecord').hide();
                $('#btnAddXzMajorRela').hide();
                $('#btnSelectMajorRela').hide();
            }
            if (str1 != null) {
                
                    var objPage = new paper.Paper_QUDI();
                    objPage.PageLoad();
                    instantiateTextbox();
                
            }
            else {
                
                    var objPage = new paper.Paper_QUDI();
                    objPage.PageLoad();
                    instantiateTextbox();
                
            }
        }
        /*
    页面导入-在导入页面后运行的函数
        (AutoGCLib.WA_ViewScript_TS4CSharp: Gen_WApi_JS_Page_Load)
    */
        function window_onload = function () {
            var MaxInputs = 2;
            var tdInputsWrapper = $("#tdInputsWrapper");
            //var AddButton = $("#AddMoreFileBox");
            var x = tdInputsWrapper.length;
            var FieldCount = 1;
            $("#AddMoreFileBox").click(function () {
                // $(AddButton).click(function (e:any) {
                if (x <= MaxInputs) {
                    FieldCount++;
                    //add input box
                        $("#tdInputsWrapper").append('<br/><input type="file" name="txtUploadfile' + FieldCount + '" id="txtUploadfile' + FieldCount + '"/>');
                    x++; //text box increment
                    }
                return false;
                // });
            })
            GetPaperTypeId_load();
                function tab(pa) {
                    $(pa + ".title li").click(function () {
                        //找到是点击第几个
                            var ind = $(pa + "#title li").index($(this));
                        //alert(ind);
                        //以前显示的隐藏
                            $(pa + ".wrap div: visible").hide();
                        //第几个显示
                            $(pa + ".wrap div: eq(" + ind + ")").show();
                        //有高亮ho 去掉高亮ho
                            $(pa + ".title li.ho").removeClass("ho");
                        //被点击的元素添加ho
                            $(this).addClass("ho");
                    }) //clicked
                    } //tab ed
                    tab(".tab1 ");
        }
        function instantiateTextbox() {
            textboxio.replaceAll('textarea', {
                paste: {
                    style: 'clean'
                },
                css: {
                    stylesheets: ['../textboxio/example.css']
                }
            });
        };
        /*
    详细记录
            */
        function btnDetailRecordInTab_Click(strKeyId: string) {
            GetReadWriteTypeId();
            
                if (strKeyId == "") {
                    alert("请选择需要查看的记录！");
                    return;
                }
                //window.location.href = "../GraduateEduEx/PaperDetail?PaperId=" + strKeyId;
                xadmin.open('论文详情', '../GraduateEduEx/PaperDetail?PaperId=' + strKeyId);
                //var objPage = new paperreadwrite.PaperReadWrite_QUDI_TSEx();
                //objPage.btnDetailRecord_Click();
            
        }
        /*
    详细记录
            */
        function btnDetailRecord_Click() {
            GetReadWriteTypeId();
            
                var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
                if (strKeyId == "") {
                    alert("请选择需要查看的记录！");
                    return;
                }
                window.location.href = "../GraduateEduEx/PaperDetail?PaperId='" + strKeyId + "'";
            
        }
        //论文审核
            function btnAudit_Click() {
            GetReadWriteTypeId();
            
                var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
                if (strKeyId == "") {
                    alert("请选择需要查看的记录！");
                    return;
                }
                var objPage = new paper.Paper_QUDI();
                objPage.btnAudit_Click(strKeyId);
            
        }
  
        //添加论文节
            function btnAddSection_Click() {
            
                var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
                if (strKeyId == "") {
                    alert("请选择需要的论文！");
                    return;
                }
                //window.location.href = "../ParameterTable/Section_QUDI_TS?PaperId=" + strKeyId;
                //xadmin.open('论文子观点', '../GradEduTopic/Pdfiframe?PageType=01&TopicId=' + strKeyId, '', '', true)
                xadmin.open('论文节维护', '../ParameterTable/Section_QUDI_TS?PaperId=' + strKeyId);
            
        }
 
        //用来选择专业记录方法；
            function btnOkInTab_Click(strKeyId: string) {
            
                if (strKeyId == "") {
                    alert("请选择需要的记录！");
                    return;
                }
                var objPage = new paper.Paper_QUDI();
                objPage.btnOkInTab_Click(strKeyId);
            
        }

        /*
    所有论文
            */
        function liAllPaper_Click() {
            
                $("#Text1").val("进入函数：liAllPaper_Click");
                var objPage = new paper.Paper_QUDI();
                objPage.liAllPaper_Click();
            
        }
        /*
    本专业
            */
        function liMajor_Click() {
            
                $("#Text1").val("进入函数：liMajor_Click");
                var objPage = new paper.Paper_QUDI();
                objPage.liMajor_Click();
            
        }
        /*
    本专业方向
            */
        function liMajorDirection_Click() {
            
                $("#Text1").val("进入函数：liMajorDirection_Click");
                var objPage = new paper.Paper_QUDI();
                objPage.liMajorDirection_Click();
            
        }
     /*
      修改记录
              */
        function btnUpdateRecord_Click() {
            $("#btnOKUpd").attr("disabled", false);
       
           var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
        if (strKeyId == "")
    {
    alert("请选择需要修改的记录！");
    return;
    }
    //ShowDialog('Update');
    var objPage = new paper.Paper_QUDI();
           objPage.btnUpdateRecord_Click(strKeyId);
           //setTextboxio();
       
        }
        function setTextboxio()
        {
            var editors1 = $("#txtPaperContent").val();
            var editors = textboxio.get('#txtPaperContent');
            var editor = editors[0];
            editor.content.set(editors1);
        }
  
     
       
        //判断图片附件格式、以及文件附件格式
            function IsHasFile() {
            var pic1 = $("#txtUploadfileUrl").val();
            if (pic1 != "") {
                strs = pic1.split('.');
                var suffix = strs[strs.length - 1];
                if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
                    alert("请选择图片格式！");
                    $("#btnOKUpd").attr("disabled", false);
                    $("#divLoading").hide();
                    var obj = document.getElementById('txtUploadfileUrl');
                    obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                        return;
                    //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
                    }
            }
            //文件
                var tdInputsWrapper = $("#tdInputsWrapper");
            //var MaxInputs = 2;
            var y = tdInputsWrapper.length;
            //循环得到的个数
                for (var i = 0; i < y; i++) {
                if (i == 0) {
                    var file1 = $("#txtUploadfile").val();
                    if (file1 != "") {
                        strs = file1.split('.');
                        var suffix = strs[strs.length - 1];
                        if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                            alert("请选择pdf格式文件！");
                            $("#btnOKUpd").attr("disabled", false);
                            $("#divLoading").hide();
                            var obj = document.getElementById('txtUploadfile');
                            obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                                return true;
                           
                        }
                    }
                    else {
                        return false;
                    }
                }
                else if (i == 1) {
                    var file2 = $("#txtUploadfile2").val();
                    if (file2 != "") {
                        strs = file2.split('.');
                        var suffix = strs[strs.length - 1];
                        if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                            alert("请选择pdf格式文件！");
                            $("#btnOKUpd").attr("disabled", false);
                            $("#divLoading").hide();
                            var obj = document.getElementById('txtUploadfile2');
                            obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                                return;
                            
                        }
                    }
                }
               else if (i == 2) {
                    var file3 = $("#txtUploadfile3").val();
                    if (file3 != "") {
                        strs = file3.split('.');
                        var suffix = strs[strs.length - 1];
                        if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
                            alert("请选择pdf格式文件！");
                            $("#btnOKUpd").attr("disabled", false);
                            $("#divLoading").hide();
                            var obj = document.getElementById('txtUploadfile3');
                            obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
                                return;
                            //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
                            }
                    }
                }
            }
            //上传
                doUpload();
        }
            //上传方法
              function doUpload() {
              var formData = new FormData($("#uploadForm")[0]);
                      const strUrl = "@Url.Action("UploadFile", "testUploadPic")";
            console.log("strUrl: ", strUrl);
            $.ajax({
                 url: "@Url.Action("UploadFile", "testUploadPic")",
                type: 'post',
                data: formData,
                async: false,
                cache: false,
                contentType: false,
                processData: false,
                success: function (returndata) {
                    //成功/为空
                        if (returndata.status == 0 || returndata.status == -1) {
                        //如果图片地址为空，那么是修改 则不用存放地址；
                            if (returndata.fileNamePic != "") {
                            $("#hdnpic").val(returndata.fileNamePic);
                        }
                        //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
                            if (returndata.fileNameOne != "") {
                            $("#hdnFileOne").val(returndata.fileNameOne);
                        }
                        if (returndata.fileNameTwo != "") {
                            $("#hdnFileTwo").val(returndata.fileNameTwo);
                        }
                        if (returndata.fileNameThree != "") {
                            $("#hdnFileThree").val(returndata.fileNameThree);
                        }
                        var editors = textboxio.get('#txtPaperContent');
                        var editor = editors[0];
                        $("#txtPaperContent").val(editor.content.get());
                        
                            var objPage = new Thesis.Paper_QUDI();
                            objPage.btnOKUpd_Click();
                        
                       
                    }
                    else {
                        alert('请选择正确文件!(in Paper_QUDI.doUpload)')
                    }
                },
                error: function (returndata) {
                    alert(returndata);
                }
            });
        }
        
        //论文提交
            function btnSubmit_Click() {
            
                var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
                if (strKeyId == "") {
                    alert("请选择需要提交的记录！");
                    return;
                }
                //ShowDialog('Update');
                var objPage = new paper.Paper_QUDI();
                objPage.btnIsSubmit_Click(strKeyId);
            
        }
        //论文下拉框改变事件
    
        function ddlPaperTypeChange() {
            
                //ShowDialog('Update');
                var objPage = new paper.Paper_QUDI();
                objPage.ddlPaperTypeChange();
            
        }
        //取消论文提交
            function btnCancelSubmit_Click() {
            
                var strKeyId = commonfunc.GetFirstCheckedKeyIdInDiv('divList');
                if (strKeyId == "") {
                    alert("请选择需要提交的记录！");
                    return;
                }
                //ShowDialog('Update');
                var objPage = new paper.Paper_QUDI();
                objPage.btnCancelSubmit_Click(strKeyId);
            
        }
        /*
         统计核算
            (AutoGCLib.WA_ViewScript_TS4Html: Gen_WApi_JS_btnQuery_Click)
        */
        function btnSynPaperStatistics_Click() {
            
                $("#Text1").val("进入函数：btnQuery_Click");
                var objPage = new paper.Paper_QUDI();
                objPage.btnSynPaperStatistics_Click();
            
        }
        //信息提示
            function layui_Alert(iconKey, strMsg) {
            message.success(strMsg, {
                icon: iconKey,
                time: 2000
                });
        }
</script> -->
