<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <!--标题层-->
    <PageHeadCom
      ref="PageHeadRef"
      :title="'教学班信息维护'"
      :isShowEduCls="'false'"
      :header-height="'60px'"
      :is-show-paper-iframe="'false'"
      :is-show-topic="'false'"
      :is-show-search="'false'"
      :is-show-major="'false'"
      :is-show-attention="'false'"
      :paper-id="''"
    ></PageHeadCom>

    <!--查询层-->

    <div id="divEduClsInfo" class="myInline4Parent">
      <div class="ml-2 myinline">
        <span class="text-secondary title-text font-weight-bold">当前教学班:</span>
        <span
          id="spnEduClsName"
          class="text-secondary content-text"
          style="font-weight: bold"
        ></span
        >&nbsp;&nbsp;&nbsp;<span id="MajorName" style="font-weight: bold"></span>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">学年:</span
        ><span id="ShoolYear" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">开始时间:</span
        ><span id="spnStartDate" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="ml-2 myinline">
        <span class="ml-2 text-info title-text font-weight-bold">结束时间:</span
        ><span id="spnEndDate" class="content-text2" style="font-weight: bold"></span>
      </div>
      <div class="myinline">
        <button
          class="btn btn-outline-success btn-sm ml-2"
          type="submit"
          @click="btn_Click('ResetEduClsDate', '')"
          >重置</button
        >
      </div>
      <div class="myinline">
        <button
          class="btn btn-outline-success btn-sm ml-2"
          type="submit"
          @click="btn_Click('NewEduCls', '')"
          >新教学班</button
        >
      </div>
    </div>
    <!--功能区-->

    <div
      id="divFunction_Teacher"
      ref="refDivFunction_Teacher"
      class="table table-bordered table-hover mt-2"
    >
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCurrEduClsStuList"
            name="lblCurrEduClsStuList"
            class="col-form-label text-primary font-weight-bold title-text2"
            style="width: 250px"
            >教学班与教师关系
          </label>
        </li>
        <li class="nav-item ml-3">
          <button
            v-if="isCanEditEduClsTeacher == true"
            id="btnCreate"
            class="btn btn-sm btn-outline-info text-nowrap custom-button"
            @click="btn_Click('AddTeacher', '')"
            >添加教师</button
          >
        </li>
        <!-- <li class="nav-item ml-3">
          <button
            id="btnUpdate"
            name="btnUpdate"
            class="btn btn-outline-info btn-sm text-nowrap"
            @click="btn_Click('Update', '')"
            >修改</button
          >
        </li> -->
        <li class="nav-item ml-3">
          <button
            v-if="isCanEditEduClsTeacher == true"
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap custom-button"
            @click="btn_Click('DeleteTeacher', '')"
            >删除相关教师</button
          >
        </li>
      </ul>
    </div>
    <!--列表层-->
    <div id="divList_Teacher" ref="refDivList_Teacher" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsTeacherBy" type="hidden" />
    </div>
    <!--功能区-->

    <div
      id="divFunction_Stu"
      ref="refDivFunction_Stu"
      class="table table-bordered table-hover mt-2"
    >
      <ul class="nav">
        <li class="nav-item">
          <label
            id="lblCurrEduClsStuList"
            name="lblCurrEduClsStuList"
            class="col-form-label text-primary title-text2"
            style="width: 250px"
            >教学班与学生关系
          </label>
        </li>
        <li class="nav-item ml-1">
          <button
            v-if="isCanEditEduClsStudent == true"
            id="btnCreate"
            name="btnCreate"
            class="btn btn-sm btn-outline-info custom-button"
            @click="btn_Click('AddStu', '')"
            >添加学生</button
          >
        </li>

        <li class="nav-item ml-2">
          <button
            v-if="isCanEditEduClsStudent == true"
            id="btnDelete"
            class="btn btn-outline-info btn-sm text-nowrap custom-button"
            @click="btn_Click('DeleteStu', '')"
            >删除学生</button
          >
        </li>
      </ul>
    </div>
    <div id="divList_Stu" ref="refDivList_Stu" class="div_List">
      <div id="divDataLst" ref="refDivDataLst" class="div_DataList"> </div>
      <div id="divPager" class="pager"> </div>
      <input id="hidSortvCurrEduClsStuBy" type="hidden" />
    </div>

    <!--编辑层-->
    <CurrEduClsStu_EditCom ref="CurrEduClsStu_EditRef"></CurrEduClsStu_EditCom>
    <StudentInfoListCom
      :id-curr-edu-cls="idCurrEduCls"
      :pageType="'CurrEduClsInfo'"
      ref="StudentInfoListRef"
    ></StudentInfoListCom>
    <TeacherInfoListCom
      :id-curr-edu-cls="idCurrEduCls"
      ref="TeacherInfoListRef"
    ></TeacherInfoListCom>
    <CurrEduCls_EditCom ref="CurrEduCls_EditRef"></CurrEduCls_EditCom>
    <input id="hidOpType" type="hidden" />
    <input id="hidKeyId" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { CurrEduClsInfoEx } from '@/viewsShare/DailyRunning/CurrEduClsInfoEx';

  import CurrEduClsStu_EditCom from '@/viewsShare/DailyRunning/CurrEduClsStu_Edit.vue';
  import StudentInfoListCom from '@/viewsShare/DailyRunning/StudentInfoList.vue';
  import TeacherInfoListCom from '@/viewsShare/DailyRunning/TeacherInfoList.vue';
  import { CurrEduClsStu_Edit } from '@/viewsBase/DailyRunning/CurrEduClsStu_Edit';
  import { CurrEduClsCRUD } from '@/viewsBase/DailyRunning/CurrEduClsCRUD';
  import StudentInfoList from '@/viewsShare/DailyRunning/StudentInfoList';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import TeacherInfoList from '@/viewsShare/DailyRunning/TeacherInfoList';
  import CurrEduCls_EditCom from '@/viewsShare/DailyRunning/CurrEduCls_Edit.vue';
  import PageHeadCom from '@/ts/components/PageHead.vue';

  import { CurrEduCls_Edit } from '@/viewsBase/DailyRunning/CurrEduCls_Edit';
  import { userStore } from '@/store/modulesShare/user';
  import { qxRolePotenceRelaStore } from '@/store/modulesShare/qxRolePotenceRela';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  export default defineComponent({
    name: 'CurrEduClsCRUD',
    components: {
      // 组件注册
      CurrEduClsStu_EditCom,
      StudentInfoListCom,
      TeacherInfoListCom,
      CurrEduCls_EditCom,
      PageHeadCom,
    },
    setup() {
      const strTitle = ref('教学班信息维护');
      const CurrEduClsStu_EditRef = ref();
      const StudentInfoListRef = ref();
      const TeacherInfoListRef = ref();
      const CurrEduCls_EditRef = ref();
      const PageHeadRef = ref();
      const isCanEditEduClsTeacher = ref(false);
      const isCanEditEduClsStudent = ref(false);

      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList_Teacher = ref();
      const refDivList_Stu = ref();
      const refDivDataLst = ref();
      const idCurrEduCls = ref(''); // 声明一个 ref 用于存储参数
      onMounted(async () => {
        CurrEduClsInfoEx.divLayout = refDivLayout.value;
        CurrEduClsInfoEx.divQuery = refDivQuery.value;
        CurrEduClsInfoEx.divFunction = refDivFunction.value;
        CurrEduClsInfoEx.divList_Teacher = refDivList_Teacher.value;
        CurrEduClsInfoEx.divList_Stu = refDivList_Stu.value;
        const strRoleId = userStore.getRoleId;
        const strPotenceName_Teacher = '教学班教师维护';
        const strPotenceName_Student = '教学班学生维护';
        let arrRoleId = await qxRolePotenceRelaStore.getRoleIdsByPotenceName(
          strPotenceName_Teacher,
          clsSysPara4WebApi.currSelPrjId,
        );
        if (arrRoleId.indexOf(strRoleId) > -1) {
          isCanEditEduClsTeacher.value = true;
        }
        arrRoleId = await qxRolePotenceRelaStore.getRoleIdsByPotenceName(
          strPotenceName_Student,
          clsSysPara4WebApi.currSelPrjId,
        );
        if (arrRoleId.indexOf(strRoleId) > -1) {
          isCanEditEduClsStudent.value = true;
        }

        idCurrEduCls.value = clsPubLocalStorage.idCurrEduCls;
        const objPage = new CurrEduClsInfoEx(refDivLayout.value);
        objPage.PageLoadCache();
      });
      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            CurrEduClsCRUD.EditObj = CurrEduClsStu_EditRef.value;
            CurrEduClsStu_Edit.EditObj = CurrEduClsStu_EditRef.value;
            break;
          case 'AddStu':
            StudentInfoList.EditObj = StudentInfoListRef.value;
            break;
          case 'DeleteStu':
            break;
          case 'AddTeacher':
            TeacherInfoList.EditObj = TeacherInfoListRef.value;
            break;
          case 'DeleteTeacher':
            break;
          case 'NewEduCls':
            CurrEduCls_Edit.EditObj = CurrEduCls_EditRef.value;
            break;
          default:
            break;
        }
        CurrEduClsInfoEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        CurrEduClsStu_EditRef,
        StudentInfoListRef,
        TeacherInfoListRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList_Teacher,
        refDivList_Stu,
        idCurrEduCls,
        CurrEduCls_EditRef,
        PageHeadRef,
        isCanEditEduClsTeacher,
        isCanEditEduClsStudent,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped>
  .myinline {
    display: inline-block;
    margin-left: 10px; /* 可选，为子元素之间添加间距 */
  }
  .myInline4Parent {
    display: flex;
    align-items: center; /* 可选，使子元素垂直居中 */
  }
  .title-text {
    font-size: 1.1rem;
    font-weight: bolder;
  }
  .title-text2 {
    font-size: 1.05rem;
    font-weight: bold;
  }
  .content-text {
    font-size: 1.1rem;
    font-weight: bold;
  }
  .content-text2 {
    font-size: 1.05rem;
    font-weight: bold;
  }
  .custom-button2 {
    background-color: #ff6600; /* 自定义背景颜色 */
    color: #fff; /* 自定义文本颜色 */
    border: 2px solid #ff6600; /* 自定义边框 */
    /* 其他自定义样式属性 */
  }
  .custom-button {
    border: 2px solid #008cff; /* 自定义边框 */
    margin-left: 10px; /* 可选，为子元素之间添加间距 */
    /* 其他自定义样式属性 */
  }
</style>
@/viewsShare/DailyRunning/CurrEduClsInfoEx@/viewsShare/DailyRunning/StudentInfoList@/viewsShare/DailyRunning/TeacherInfoList
@/store/modulesShare/qxRolePotenceRela @/store/modulesShare/user
