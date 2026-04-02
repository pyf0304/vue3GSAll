<template>
  <div id="divName4Login" class="login" style="width: 450px">
    <!-- <h3>自动生成代码2016版</h3> -->
    <div class="form">
      <label>用户名:</label>
      <input id="txtUserId" type="text" class="text-Info" value="" />
    </div>
    <div class="form">
      <label>密码</label>
      <input id="txtPassword" type="password" class="text-Info" value="" />
    </div>
    <div class="loginform1">
      <input type="button" class="btn btn-outline-info" value="登录" @click="btnLogin_Click()" />
    </div>
    <div class="btnMore">
      <!-- <a href="./Webform/UserManage/wfmRegister.a1spx">注册</a>
      <a href="./Webform/DownLoad/wfmDownLoadClsFile.a1spx?ParentPage=HomePage">文件下载</a>
      <a href="./Webform/News/NewTest.a1spx" class="text-nowrap">公告知识查看</a>
      <a href="Test/TestBrowserInfo.a1spx" class="text-nowarp" style="width: 100px">浏览器类型</a> -->
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  // import DetailRegionFlds_EditCom from '@/views/RegionManage/DetailRegionFlds_Edit.vue';
  // import DetailRegionFlds_DetailCom from '@/views/RegionManage/DetailRegionFlds_Detail.vue';

  export default defineComponent({
    name: 'DetailRegionFldsCRUD',
    components: {
      // 组件注册
      // DetailRegionFlds_EditCom,
      // DetailRegionFlds_DetailCom,
    },
    setup() {
      const strTitle = ref('详细区域字段维护');
      const DetailRegionFlds_EditRef = ref();
      const DetailRegionFlds_DetailRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {});
      function btnLogin_Click() {
        // Login.btnLogin_Click();
      }
      return {
        strTitle,
        btnLogin_Click,
        DetailRegionFlds_EditRef,
        DetailRegionFlds_DetailRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
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
<script type="text/javascript">
  //Js函数，用于界面的CRUD, 后备之用,可能后面派作用
  /// <summary>
  /// 存在关键字记录?
  /// </summary>
  function btnLogin_Click() {
    login.Login.btnLogin_Click();
  }

  function SetSession(Key, Value) {
    $.ajax({
      url: '/Session/SetString',
      cache: false,
      async: false,
      type: 'get',
      dataType: 'json',
      data: {
        Key: Key,
        Value: Value,
      },
      success: function (data) {
        strIdCurrEduclsstrKey = data.key;
        strIdCurrEduclsstrValue = data.value;

        $('#myKey').html(strKey);
        $('#myValue').html(strValue);
        console.log(strKey + strValue);
      },
    });
  }
</script>

<style scoped></style>
