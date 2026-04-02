<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="tabLayout" class="tab_layout">
      <!-- 标题层 -->

      <div style="position: relative; width: 648px; height: 37px; left: 0px; top: 0px">
        <label id="lblViewTitle" name="lblViewTitle" class="h5"> 课程CRUD </label>
        <label id="lblMsg_List" name="lblMsg_List" class="text-warning" style="width: 250px">
        </label>
      </div>
      <!-- 查询层 -->

      <div id="divQuery" ref="refDivQuery" class="div_query">
        <table
          id="tabEdit"
          style="width: 900px"
          class="table table-bordered table-hover table td table-sm"
        >
          <tr>
            <td class="text-right">
              <label
                id="lblCourseCode_q"
                name="lblCourseCode_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                课程代码
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseCode_q"
                name="txtCourseCode_q"
                class="form-control"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCourseName_q"
                name="lblCourseName_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                课程名称
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCourseName_q"
                name="txtCourseName_q"
                class="form-control"
                style="width: 120px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCourseTypeID_q"
                name="lblCourseTypeID_q"
                class="col-form-label text-right"
                style="width: 90px"
              >
                课程类型
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlCourseTypeID_q"
                name="ddlCourseTypeID_q"
                class="form-control"
                style="width: 120px"
              ></select>
            </td>
            <td class="nav-item ml-3">
              <button
                id="btnQuery"
                name="btnQuery"
                class="btn btn-outline-info btn-sm text-nowrap"
                @click="btn_Click('Query', '')"
                >查询</button
              >
            </td>
            <td class="nav-item ml-3">
              <button
                id="btnExportExcel"
                name="btnExportExcel"
                class="btn btn-outline-warning btn-sm text-nowrap"
                @click="btn_Click('ExportExcel', '')"
                >导出Excel</button
              >
            </td>
          </tr>
        </table>
      </div>
      <!-- 功能区 -->

      <div id="divFunction" ref="refDivFunction" class="table table-bordered table-hover">
        <ul class="nav">
          <li class="nav-item">
            <label
              id="lblcc_CourseList"
              name="lblcc_CourseList"
              class="col-form-label text-info"
              style="width: 250px"
            >
              课程列表
            </label>
          </li>

          <li class="nav-item ml-3">
            <button
              id="btnAddNewRecordWithMaxId"
              name="btnAddNewRecordWithMaxId"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('AddNewRecordWithMaxId', '')"
              >添加-关键字自增</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnUpdateRecord"
              name="btnUpdateRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Update', '')"
              >修改</button
            >
          </li>
          <li class="nav-item ml-3">
            <button
              id="btnDelRecord"
              name="btnDelRecord"
              class="btn btn-outline-info btn-sm text-nowrap"
              @click="btn_Click('Delete', '')"
              >删除</button
            >
          </li>
        </ul>
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
    <input id="hidSortcc_CourseBy" type="hidden" value="" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/site.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
  import { cc_CourseCRUDEx } from '@/viewsShare/CourseLearning/cc_CourseCRUDEx';
  import { cc_CourseCRUD } from '@/viewsBase/CourseLearning/cc_CourseCRUD';
  import cc_Course_EditCom from '@/viewsShare/CourseLearning/cc_Course_Edit.vue';
  import { cc_Course_Edit } from '@/viewsBase/CourseLearning/cc_Course_Edit';
  export default defineComponent({
    name: 'CcCourseCRUD',
    components: {
      // 组件注册
      cc_Course_EditCom,
    },
    setup() {
      const strTitle = ref('课程维护');
      const cc_Course_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        const objPage = new cc_CourseCRUDEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.PageLoadCache();
      });

      // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
      function sheet2blob(sheet: any, sheetName: string) {
        // sheetName = sheetName || 'sheet1';
        // var workbook = {
        // SheetNames: [sheetName],
        // Sheets: {}
        // };
        // workbook.Sheets[sheetName] = sheet;
        // // 生成excel的配置项
        // var wopts = {
        // bookType: 'xlsx', // 要生成的文件类型
        // bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        // type: 'binary'
        // };
        // var wbout = XLSX.write(workbook, wopts);
        // var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
        // // 字符串转ArrayBuffer
        // function s2ab(s)
        // {
        // var buf = new ArrayBuffer(s.length);
        // var view = new Uint8Array(buf);
        // for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        // return buf;
        // }
        // return blob;
      }

      /**
       * 通用的打开下载对话框方法，没有测试过具体兼容性
       * @param url 下载地址，也可以是一个blob对象，必选
       * @param saveName 保存文件名，可选
       */
      function openDownloadDialog(url: string, saveName: string) {
        // if (typeof url == 'object' && url instanceof Blob) {
        // url = URL.createObjectURL(url); // 创建blob地址
        // }
        // var aLink = document.createElement('a');
        // aLink.href = url;
        // aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
        // var event;
        // if (window.MouseEvent) event = new MouseEvent('click');
        // else {
        // event = document.createEvent('MouseEvents');
        // event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // }
        // aLink.dispatchEvent(event);
      }
      //所有用户自定义的JS函数建议都放在这里
      function exportSpecialExcel_pyf(arrData: any, strFileName: string) {
        // var sheet = XLSX.utils.aoa_to_sheet(arrData);
        // openDownloadDialog(sheet2blob(sheet), strFileName);
      }

      function btn_Click(strCommandName: string, strKeyId: string) {
        switch (strCommandName) {
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            cc_CourseCRUD.EditObj = cc_Course_EditRef.value;
            cc_Course_Edit.EditObj = cc_Course_EditRef.value;
            break;
          default:
            break;
        }
        cc_CourseCRUDEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        cc_Course_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped></style>
@/viewsShare/CourseLearning/cc_CourseCRUDEx
