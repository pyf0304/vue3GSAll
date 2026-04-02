<template>
  <!-- 编辑层 -->
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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <div id="divLoading" class="loading">
        <img src="@/assets/images/CirclePoint.gif" />
      </div>
      <div>
        <div>
          <table
            id="tabwucPaperReadWrite"
            name="tabwucPaperReadWrite"
            style="width: 100%; padding: 1px; border: 0px"
            class="table table-bordered table-hover"
          >
            <tr>
              <td rowspan="8" style="width: 40%; text-align: center">
                <img
                  id="headPic"
                  src="/UploadFiles/UserHeadPic/n-avator-bg.png"
                  style="width: 200px; height: 200px; border-radius: 20px"
                />
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="width: 20%; text-align: right">
                <label id="lblIdentityDesc" name="lblIdentityDesc" class="text-right">
                  用户类型：
                </label>
              </td>
              <td class="ValueTD" style="width: 40%">
                <label
                  id="lbl_IdentityDesc"
                  name="lbl_IdentityDesc"
                  class=""
                  style="width: 98%"
                ></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right">
                <label id="lblCollegeName" name="lblCollegeName" class="text-right"> 学院： </label>
              </td>
              <td class="ValueTD">
                <label
                  id="lbl_CollegeName"
                  name="lbl_CollegeName"
                  class=""
                  style="width: 98%"
                ></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right">
                <label id="lblMajorName" name="lblMajorName" class="text-right"> 专业： </label>
              </td>
              <td class="ValueTD">
                <label id="lbl_MajorName" name="lbl_MajorName" class="" style="width: 98%"></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right">
                <label id="lblGradeBaseName" name="lblGradeBaseName" class="text-right">
                  年级：
                </label>
              </td>
              <td class="ValueTD">
                <label
                  id="lbl_GradeBaseName"
                  name="lbl_GradeBaseName"
                  class=""
                  style="width: 98%"
                ></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right">
                <label id="lblUserName" name="lblUserName" class="text-right"> 姓名： </label>
              </td>
              <td class="ValueTD">
                <label id="lbl_UserName" name="lbl_UserName" class=""></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right">
                <label id="lblEmail" name="lblEmail" class="text-right"> 邮箱： </label>
              </td>
              <td class="ValueTD">
                <label id="lbl_Email" name="lbl_Email" class=""></label>
              </td>
            </tr>
            <tr>
              <td class="NameTD" style="text-align: right"></td>
              <td class="ValueTD">
                <button
                  id="btnUpdate"
                  type="button"
                  class="btn btn-primary"
                  @click="btnUpdate_Click()"
                  >修改个人信息</button
                >
              </td>
            </tr>
          </table>
        </div>
        <div
          class="modal fade"
          id="divEditRegion"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" style="margin-left: 100px">
            <form id="uploadForm" method="post" enctype="multipart/form-data">
              <div class="modal-content" style="width: 800px">
                <div class="modal-header">
                  <h4 class="modal-title" id="myModalLabel">用户信息修改</h4>

                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true"
                    >×</button
                  >
                </div>
                <div class="modal-body">
                  <table
                    id="tabwucPaperSubViewpoint"
                    name="tabwucPaperSubViewpoint"
                    style="width: 100%; padding: 1px; border: 0px"
                    class="table table-bordered"
                  >
                    <tr>
                      <td rowspan="8" style="width: 40%; text-align: center">
                        <img
                          id="EditHeadPic"
                          src="/UploadFiles/UserHeadPic/n-avator-bg.png"
                          style="width: 150px; height: 150px; border-radius: 20px"
                        />
                        <br />
                        <div id="divimg" style="width: 100%; height: 50px">
                          <img
                            id="avatar1"
                            @click="EditHeadPic_Click(1)"
                            src="/UploadFiles/UserHeadPic/avatar1.png"
                            class="img_avatar"
                          />
                          <img
                            id="avatar2"
                            @click="EditHeadPic_Click(2)"
                            src="/UploadFiles/UserHeadPic/avatar2.png"
                            class="img_avatar"
                          />
                          <img
                            id="avatar3"
                            @click="EditHeadPic_Click(3)"
                            src="/UploadFiles/UserHeadPic/avatar3.png"
                            class="img_avatar"
                          />
                          <img
                            id="avatar4"
                            @click="EditHeadPic_Click(4)"
                            src="/UploadFiles/UserHeadPic/avatar4.png"
                            class="img_avatar"
                          />
                        </div>
                        <span style="color: red">自定义头像上传：</span>
                        <br /><input type="file" id="txtUploadImgFile" />
                        <br />
                        <h4>图片格式jpg、png，大小不超过100KB</h4>
                      </td>
                    </tr>
                    <tr>
                      <td class="NameTD" style="width: 20%">
                        <label
                          id="lblXzCollege"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          学院
                        </label>
                      </td>
                      <td class="ValueTD" style="width: 40%">
                        <select
                          id="ddlid_XzCollege"
                          name="ddlid_XzCollege"
                          class="form-control"
                          style="width: 200px"
                          onchange="selectMajor()"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblXzMajor"
                          name="lblXzMajor"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          专业
                        </label>
                      </td>
                      <td class="ValueTD">
                        <select
                          id="ddlIdXzMajor"
                          name="ddlIdXzMajor"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblGradeBase"
                          name="lblGradeBase"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          年级
                        </label>
                      </td>
                      <td class="ValueTD">
                        <select
                          id="ddlIdGradeBase"
                          name="ddlIdGradeBase"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblUserName"
                          name="lblUserName"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          姓名：
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          type="text"
                          id="txtUserName"
                          name="txtUserName"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblEmail"
                          name="lblEmail"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          邮箱
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          type="text"
                          id="txtEmail"
                          name="txtEmail"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblPassword"
                          name="lblPassword"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          密码
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          type="password"
                          id="txtPassword"
                          name="txtPassword"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td class="NameTD">
                        <label
                          id="lblRePassword"
                          name="lblRePassword"
                          class="col-form-label text-right"
                          style="width: 90px"
                        >
                          重复密码
                        </label>
                      </td>
                      <td class="ValueTD">
                        <input
                          type="password"
                          id="txtRePassword"
                          name="txtRe_Password"
                          class="form-control"
                          style="width: 200px"
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="modal-footer">
                  <button
                    id="btnOKUpd"
                    type="button"
                    class="btn btn-primary"
                    style="float: right; margin-left: 100px"
                    @click="mySubmit()"
                    >修改</button
                  >
                </div>
              </div>
              <!-- /.modal-content -->
            </form>
          </div>
          <!-- /.modal -->
        </div>
      </div>

      <input id="hidUserId" type="hidden" />
      <input id="hidHeadPicUrl" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnCancelLoginLog" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitLoginLog"
        type="primary"
        @click="btnLoginLog_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/css/public.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { LoginLogCRUDEx } from '@/viewsShare/LogManage/LoginLogCRUDEx';
  import { LoginLog_EditEx } from '@/viewsShare/LogManage/LoginLog_EditEx';
  import { UserInfo } from '@/viewsShare/web/UserInfo';
  import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
  import { File_IsHasImgFile, File_UploadImgFile } from '@/ts/FunClass/clsPubFun4Web';
  export default defineComponent({
    name: 'LoginLogEdit',
    components: {
      // 组件注册
    },
    setup() {
      const mySelectedFile = ref(null);
      const refDivEdit = ref();
      const strTitle = ref('用户信息');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelLoginLog':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitLoginLog':
            strSubmitButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelLoginLog':
            return strCancelButtonText.value;
          case 'btnSubmitLoginLog':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
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
      function handleFileChange(event: any) {
        // 当文件选择框的值发生变化时触发
        mySelectedFile.value = event.target.files[0]; // 获取选择的文件
        console.log('selectedFile.value:', mySelectedFile.value);
      }
      function window_onload() {
        var objPage = new UserInfo();
        objPage.PageLoad();
      }

      /**根据学院选择专业 */
      function selectMajor() {
        var objPage = new UserInfo();
        objPage.selectMajor_Click();
      }

      /*修改*/
      function btnUpdate_Click() {
        // ShowDialog();
        var objPage = new UserInfo();
        objPage.btnUpdate_Click();
      }

      /*提交*/
      async function mySubmit() {
        const divName = refDivEdit.value;
        $('#divLoading').show();
        //$('#btnOKUpd').attr("disabled", true);

        const bolIsExist = await File_IsHasImgFile(divName);
        if (bolIsExist == true) {
          let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
          let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_PaperSubViewpoint;
          const currHostname = window.location.hostname;

          if (currHostname == 'localhost') {
            strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
          }
          //   if (this.literatureTypeId == '05') {
          //     strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTrainingSubViewpoint;
          //   }
          // const divName = this.refDivEdit;
          const responseData = await File_UploadImgFile(
            strUploadWebMainDir,
            strUploadWebSubDir,
            mySelectedFile.value,
          );
          UserInfo.uploadResponseData = responseData;
        }
        console.error('bolIsExist:', bolIsExist);

        const strListDiv = '';
        var objPage = new UserInfo();
        objPage.btnOKUpd_Click(strListDiv);
      }

      function EditHeadPic_Click(key: number) {
        switch (key) {
          case 1:
            $('#hidHeadPicUrl').val('UploadFiles/UserHeadPic/avatar1.png');
            $('#EditHeadPic').attr(
              'src',
              '/GraduateStudyWebApp/UploadFiles/UserHeadPic/avatar1.png',
            );
            $('#divimg img').removeClass('BorderColor');
            $('#avatar1').addClass('BorderColor');
            break;
          case 2:
            $('#hidHeadPicUrl').val('UploadFiles/UserHeadPic/avatar2.png');
            $('#EditHeadPic').attr(
              'src',
              '/GraduateStudyWebApp/UploadFiles/UserHeadPic/avatar2.png',
            );
            $('#divimg img').removeClass('BorderColor');
            $('#avatar2').addClass('BorderColor');
            break;
          case 3:
            $('#hidHeadPicUrl').val('UploadFiles/UserHeadPic/avatar3.png');
            $('#EditHeadPic').attr(
              'src',
              '/GraduateStudyWebApp/UploadFiles/UserHeadPic/avatar3.png',
            );
            $('#divimg img').removeClass('BorderColor');
            $('#avatar3').addClass('BorderColor');
            break;
          case 4:
            $('#hidHeadPicUrl').val('UploadFiles/UserHeadPic/avatar4.png');
            $('#EditHeadPic').attr(
              'src',
              '/GraduateStudyWebApp/UploadFiles/UserHeadPic/avatar4.png',
            );
            $('#divimg img').removeClass('BorderColor');
            $('#avatar4').addClass('BorderColor');
            break;
          default:
            break;
        }
      }

      return {
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        btnUpdate_Click,
        EditHeadPic_Click,
        mySubmit,
        refDivEdit,
        handleFileChange,
        mySelectedFile,
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
        //LoginLog_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       **/
      btnLoginLog_Edit_Click(strCommandName: string, strKeyId: string) {
        LoginLog_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       **/
      Submit_LoginLog(strOp: string) {
        alert(`提交${strOp}`);
        const objPage = new LoginLog_EditEx('', new LoginLogCRUDEx());
        objPage.btnSubmit_Click();
      },
    },
  });
</script>
<style scoped>
  .BorderColor {
    border: solid 1px red;
  }

  .img_avatar {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    margin: 5px;
    float: left;
  }
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
