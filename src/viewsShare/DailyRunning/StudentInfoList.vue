<template>
  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button @click="dialogVisible = false" type="primary"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divLayout" ref="refDivLayout" class="divComContainer">
      <div id="tabLayout" class="tab_layout">
        <!-- 标题层 -->

        <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
          <label id="lblViewTitle" class="h5"> 学生列表 </label>
        </div>
        <div v-if="idCurrEduCls != ''">
          <span id="spnEduClsName" style="float: left" class="h6"> 教学班 </span>
          <button
            id="btnAddStuToEduCls"
            class="btn btn-outline-success"
            style="float: right"
            @click="btn_Click('AddStuToEduCls', '')"
            >添加学生</button
          >
        </div>
        <!-- 查询层 -->

        <div id="divQuery" ref="refDivQuery" class="div_query">
          <table
            id="tabEdit"
            style="width: 900px"
            class="table table-bordered table-hover table td table-sm"
          >
            <tr>
              <td class="text-left">
                <label id="lblStuID_q" class="col-form-label text-right" style="width: 50px">
                  学号
                </label>
              </td>
              <td class="text-left">
                <input id="txtStuId_q" class="form-control" style="width: 60px" />
              </td>
              <td class="text-left">
                <label id="lblStuName_q" class="col-form-label text-right" style="width: 50px">
                  姓名
                </label>
              </td>
              <td class="text-left">
                <input id="txtStuName_q" class="form-control" style="width: 60px" />
              </td>
              <td class="text-right">
                <label
                  id="lblIdXzCollege_q"
                  name="lblIdXzCollege_q"
                  class="col-form-label text-right"
                  style="width: 50px"
                  >学院
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlIdXzCollege_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>
              <td class="text-right">
                <label id="lblIdXzMajor_q" class="col-form-label text-right" style="width: 50px"
                  >专业
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlIdXzMajor_q"
                  class="form-control form-control-sm"
                  style="width: 120px"
                ></select>
              </td>

              <td class="text-right">
                <label id="lblIdGradeBase_q" class="col-form-label text-right" style="width: 50px"
                  >年级
                </label>
              </td>
              <td class="text-left">
                <select
                  id="ddlIdGradeBase_q"
                  class="form-control form-control-sm"
                  style="width: 80px"
                ></select>
              </td>
              <td class="text-left">
                <button
                  type="submit"
                  id="btnQuery"
                  class="btn btn-outline-warning text-nowrap"
                  @click="btn_Click('Query', '')"
                  >查询</button
                >
              </td>
              <td> <label id="lblMsg_List" class="text-warning" style="width: 150px"> </label></td>
            </tr>
          </table>
        </div>
        <!-- 功能区 -->

        <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
          <ul class="nav"> </ul>
        </div>
        <!-- 列表层 -->
        <div id="divList" ref="refDivList" class="div_List">
          <div id="divDataLst" ref="refDivDataLst" class="div_List"> </div>
          <div id="divPager" class="pager"> </div>
        </div>
        <!-- 编辑层 -->
        <div id="divEdit" value="1"></div>
      </div>
      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
      <input id="hidCurrPageIndex" type="hidden" value="1" />
      <input id="hidSortvStudentInfoBy" type="hidden" value="" />

      <input id="hidCurrEduClsId" type="hidden" />

      <!-- 课文Id -->
      <input id="hidTextId" type="hidden" />
    </div>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/site.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';

  import '@/assets/css/public.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { StudentInfoCRUD } from '@/viewsBase/UserManage/StudentInfoCRUD';
  import StudentInfoList from '@/viewsShare/DailyRunning/StudentInfoList';
  import { useRoute } from 'vue-router';
  import { GetCheckedKeyIds } from '@/ts/PubFun/clsCommFunc4Web';
  export default defineComponent({
    name: 'StudentInfoList',
    components: {
      // 组件注册
    },
    props: {
      idCurrEduCls: {
        type: String,
        required: false,
      },
      pageType: {
        type: String,
        required: true, //根据参数判断是什么界面传入；01 教学班界面、02中学课文界面；
      },
    },
    setup(props) {
      const strTitle = ref('学生列表');
      const StudentInfo_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const route = useRoute(); // 获取当前路由信息
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      const Pagetype = ref(''); // 声明一个 ref 用于存储参数
      const TextId = ref(''); // 声明一个 ref 用于存储参数

      onMounted(() => {
        StudentInfoList.vuebtn_Click = btn_Click;
        StudentInfoList.GetPropValue = GetPropValue;
        window_onload();
      });
      function SetDiv() {}
      const dialogVisible = ref(false);
      const dialogWidth = ref('1000px'); // 设置对话框的宽度
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'strTitle':
            return strTitle.value;
          case 'idCurrEduCls':
            if (props.idCurrEduCls == null) return '';
            return props.idCurrEduCls;
          case 'pageType':
            return props.pageType;
          default:
            return '';
        }
        return '';
      }
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;
          case 'SetDiv':
            SetDiv();
            break;
          case 'AddStuToEduCls':
            break;
          default:
            break;
        }
        StudentInfoList.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      //所有用户自定义的JS函数建议都放在这里

      function btnCurrEduClsInTab_Click(strKeyId: string) {
        if (strKeyId == '') {
          alert('请选择需要的记录！');
          return;
        }
        //ShowDialogOne();
        // const objPage = new StudentInfoList();
        //   objPage.btnCurrEduClsInTab_Click(strKeyId);

        StudentInfoList.btn_Click('CurrEduClsInTab', strKeyId, refDivLayout.value);
      }

      function CloseWindow() {
        // try {
        //   const index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        //   parent.layer.close(index); //再执行关闭
        //   window.parent.btn_Click('Query');
        // } catch (e) {
        //   window.opener.location = '父页面地址';
        //   window.opener = null;
        //   window.close();
        // }
      }

      /*
       * 确定推送
       **/
      function btnOkPushStuText() {
        const arrKeyIds = GetCheckedKeyIds();
        if (arrKeyIds.length == 0) {
          alert('请选择需要推送的记录！');
          return;
        }
        // const objPage = new StudentInfoList();
        // objPage.btnOkPushStuText();
      }

      //   function GetRequest() {
      //     const url = location.search; //获取url中"?"符后的字串
      //     const theRequest = new Object();
      //     if (url.indexOf('?') != -1) {
      //       const str = url.substring(1);
      //       const strs = str.split('&');
      //       for (let i = 0; i < strs.length; i++) {
      //         theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
      //       }
      //     }
      //     return theRequest;
      //   }

      function GetCurrEduClsId() {
        // const Request = new Object();
        // Request = GetRequest();

        if (typeof route.query.idCurrEduCls === 'string') {
          idCurrEduCls.value = route.query.idCurrEduCls;
        } else {
          // 如果不是字符串，可以在这里处理
          idCurrEduCls.value = ''; // 或者设置默认值
        }

        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidCurrEduClsId', idCurrEduCls.value);

        if (typeof route.query.Pagetype === 'string') {
          Pagetype.value = route.query.Pagetype;
        } else {
          // 如果不是字符串，可以在这里处理
          Pagetype.value = ''; // 或者设置默认值
        }

        //课程Id

        if (typeof route.query.TextId === 'string') {
          TextId.value = route.query.TextId;
        } else {
          // 如果不是字符串，可以在这里处理
          TextId.value = ''; // 或者设置默认值
        }
        // SetInputValueInDivObj(StudentInfoList.divLayout, 'hidTextId', TextId.value);

        // if (IsNullOrEmpty(idCurrEduCls.value) == false) {
        StudentInfoList.btn_Click('PageLoad', '', refDivLayout.value);
        // }
      }

      /*
  页面导入-在导入页面后运行的函数
 (AutoGCLib.WA_ViewScript_TS4Html:Gen_WApi_JS_Page_Load)
 */
      function window_onload() {
        GetCurrEduClsId();
      }

      return {
        strTitle,
        btn_Click,
        StudentInfo_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,

        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
      };
    },

    methods: {
      // 方法定义
      /**
       * 页面导入-在导入页面后运行的函数
       **/
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
