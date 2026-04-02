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
      <div
        id="divLoading"
        style="
          width: 100%;
          height: 100px;
          position: absolute;
          z-index: 100;
          text-align: center;
          margin-top: 300px;
          display: none;
        "
      >
        <img src="@/assets/images/CirclePoint.gif" height="100" width="100" />
      </div>

      <div class="login layui-anim layui-anim-up">
        <div class="message" style="text-align: center"
          ><h4>{{ systemName }}</h4></div
        >
        <div id="darkbannerwrap"></div>
        <div class="mt-3">
          <input
            id="txtUserId"
            ref="strUserId"
            placeholder="用户名"
            type="text"
            class="layui-input"
          />
          <hr class="hr15" style="width: 80%" />
          <input
            id="txtPassword"
            ref="strPassword"
            placeholder="密码"
            type="password"
            class="layui-input"
          />
          <hr class="hr15" style="width: 80%" />
        </div>

        <div style="width: 100%">
          <div id="slider"></div>
        </div>
        <!-- <hr class="hr15" /> -->
        <!-- <input
          value="登录"
          lay-submit
          lay-filter="formDemo"
          style="width: 100%"
          type="submit"
          @click="btnLogin_Edit_Click('Submit', '')"
        /> -->
        <!-- <hr class="hr15" />

        <hr class="hr20" /> -->
      </div>

      <input id="hidState" type="hidden" />

      <input id="hidOpType" type="hidden" />
      <input id="hidKeyId" type="hidden" />
    </div>
    <template #footer>
      <el-button id="btnSubmitLogin" type="primary" @click="btnLogin_Edit_Click('Submit', '')">{{
        strSubmitButtonText
      }}</el-button>
      <el-button id="btnCancelLogin" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';

  import { Login } from '@/viewsShare/web/Login';

  export default defineComponent({
    name: 'Login',
    components: {
      // 组件注册
    },
    props: {
      systemName: {
        type: String,
        required: true,
      },
    },
    setup() {
      const strTitle = ref('用户登录'); // 研究生论文系统
      const strUserId = ref('');
      const strPassword = ref('');

      const strSubmitButtonText = ref('登录');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelLogin':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitLogin':
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
          case 'btnCancelLogin':
            return strCancelButtonText.value;
          case 'btnSubmitLogin':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };

      const btnLogin_Click = () => {
        // const txtUser = document.getElementById('txtUserId');
        // const txtPassword = document.getElementById('txtPassword');

        //var divlogin = document.getElementById("login");
        //var divloginInfo = document.getElementById("loginInfo");

        if (strUserId.value == '') {
          alert('请输入用户名！');
        } else if (strPassword.value == '') {
          alert('请输入密码！');
        } else {
          //   const objPage = new Login(new IndexB());
          //   objPage.btnLogin_Click();
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('400px'); // 设置对话框的宽度
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
      return {
        strUserId,
        strPassword,
        btnLogin_Click,
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
        //Login_Edit.btnClick(strCommandName, strKeyId);
      },

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnLogin_Edit_Click(strCommandName: string, strKeyId: string) {
        console.log(strCommandName, strKeyId, 'in btnLogin_Edit_Click');
        console.log('Login.EditRef:(in btnLogin_Edit_Click)', Login.EditObj);

        Login.btnEdit_Click(strCommandName, strKeyId);
      },

      /**
       * 提交编辑
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_mySubmit)
       **/
      Submit_Login(strOp: string) {
        alert(`提交${strOp}`);
        // const objPage = new Login();
        // objPage.btnLogin_Click();
      },
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
<!-- <script type="text/javascript" charset="utf-8">
        layui.config({
            base: '../lib/sliderVerify/'
        }).use(['sliderVerify', 'jquery', 'form'], function () {
            var sliderVerify = layui.sliderVerify,
                $ = layui.jquery,
                form = layui.form;
            var slider = sliderVerify.render({
                elem: '#slider',
                onOk: function () {//当验证通过回调
                    message.success('滑块验证通过!', {
                        icon: 1,
                        time: 500
                    });
                    //清空localStorage
                    //localStorage.clear();
                    //message.success("滑块验证通过");
                }
            })
            $('#reset').on('click', function () {
                slider.reset();
            })
            //监听提交
            form.on('submit(formDemo)', function (data) {
                if (slider.isOk()) {
                    //message.success(JSON.stringify(data.field));
                    btnLogin_Click();
                } else {
                    message.success("请先通过滑块验证");
                }
                return false;
            });

        })
    </script> -->

<!-- 

 
    
    


    <script src="~/jquery.mobile-1.4.5/jquery-1.11.1.min.js"></script>
 
    
    



    <script>
      

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


        function window_onload = function () {

            var Request = new Object();
            Request = GetRequest();

            var str1 = Request['state'];
            $("#hidState").val(str1);

         
                var objPage = new users.Login();
                objPage.PageLoad();
         

        }


        function btnLogin_Click() {
            var txtUser = document.getElementById("txtUserId");
            var txtPassword = document.getElementById("txtPassword");

            //var divlogin = document.getElementById("login");
            //var divloginInfo = document.getElementById("loginInfo");

            if (txtUser.value == "") {
                alert("请输入用户名！");
            } else if (txtPassword.value == "") {
                alert("请输入密码！");

            } else {
              

                    var objPage = new users.Login();
                    objPage.btnLogin_Click();
              
            }
        }

        function CloseWindow() {

            try {
                var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                parent.layer.close(index); //再执行关闭

                window.parent.PageLoad();

            } catch (e:any) {
                window.opener.location = "父页面地址";
                window.opener = null;
                window.close();
            }
        }
    </script>
</head>
<body class="login-bg"> -->
