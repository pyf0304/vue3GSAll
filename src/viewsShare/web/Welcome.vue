<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <a href="#" class="list-group-item active">模块1</a>
            <a href="#" class="list-group-item">菜单项1</a>
            <a href="#" class="list-group-item">菜单项2</a>
            <a href="#" class="list-group-item">菜单项3</a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="panel panel-default">
            <div class="panel-heading">模块1</div>
            <div class="panel-body">这里是模块1的内容。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-fluid">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
          <div class="layui-card">
            <div class="layui-card-body">
              <blockquote class="layui-elem-quote">
                <span id="spanMajordirection" style="font-size: 14px"></span><br /><br />
                当前时间：
                <span class="x-red"></span>@DateTime.Now.ToString();
              </blockquote>
            </div>
          </div>
        </div>
        <div class="layui-col-md12">
          <div class="layui-card">
            <div class="layui-card-header">数据统计</div>
            <div class="layui-card-body">
              <ul class="layui-row layui-col-space10 layui-this x-admin-carousel x-admin-backlog">
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文数</h3>
                    <p>
                      <cite><span id="PaperNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>

                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>引用论文数</h3>
                    <p>
                      <cite><span id="QuotePaperNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>本组论文数</h3>
                    <p>
                      <cite><span id="GroupPaperNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文阅读数</h3>
                    <p>
                      <cite><span id="PaperReadNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文写作数</h3>
                    <p>
                      <cite><span id="PaperWriteNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文观点数</h3>
                    <p>
                      <cite><span id="PaperSubViewpointNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="layui-col-md12" id="Personaldiv">
          <div class="layui-card">
            <div class="layui-card-header">个人数据统计</div>
            <div class="layui-card-body">
              <ul class="layui-row layui-col-space10 layui-this x-admin-carousel x-admin-backlog">
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文数</h3>
                    <p>
                      <cite><span id="PersonalPaperNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文阅读数</h3>
                    <p>
                      <cite><span id="PersonalPaperReadNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文写作数</h3>
                    <p>
                      <cite><span id="PersonalPaperWriteNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>论文观点数</h3>
                    <p>
                      <cite
                        ><span id="PersonalPaperSubViewpointNum" style="color: red"></span
                      ></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>主题个人观点</h3>
                    <p>
                      <cite><span id="PersonalViewpointNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>主题专家观点</h3>
                    <p>
                      <cite><span id="PersonalExpertViewpointNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>主题概念</h3>
                    <p>
                      <cite><span id="PersonalConceptNum" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>主题客观事实</h3>
                    <p>
                      <cite><span id="PersonalObjectiveFact" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
                <li class="layui-col-md2 layui-col-xs6">
                  <a href="javascript:;" class="x-admin-backlog-body">
                    <h3>主题客观数据</h3>
                    <p>
                      <cite><span id="PersonalObjectiveBasis" style="color: red"></span></cite>
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="layui-col-md12">
          <div class="layui-card">
            <div class="layui-card-header">系统信息</div>
            <div class="layui-card-body">
              <table class="layui-table">
                <tbody>
                  <tr>
                    <th>系统版本</th>
                    <td>v1.6</td>
                  </tr>
                  <tr>
                    <th>服务器地址</th>
                    <td>www.sh-tz.com</td>
                  </tr>
                  <tr>
                    <th>操作系统</th>
                    <td>Win servier2008</td>
                  </tr>
                  <tr>
                    <th>运行环境</th>
                    <td>IIS7.5</td>
                  </tr>
                  <tr>
                    <th>开发语言</th>
                    <td>C#、JavaScript、TypeScript</td>
                  </tr>
                  <tr>
                    <th>Sql版本</th>
                    <td>Sql Server2008</td>
                  </tr>

                  <tr>
                    <th>上传附件限制</th>
                    <td>2M</td>
                  </tr>
                  <tr>
                    <th>执行时间限制</th>
                    <td>30s</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/public.css';
  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { Welcome } from '@/viewsShare/web/Welcome';
  export default defineComponent({
    name: 'Welcome',
    components: {
      // 组件注册
      // SysScoreSummary_EditCom,
    },
    setup() {
      const strTitle = ref('欢迎');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        Welcome.divLayout = refDivLayout.value;
        const objPage = new Welcome();
        objPage.PageLoad();
      });

      function window_onload() {
        var objPage = new Welcome();
        objPage.PageLoad();
      }

      //加载欢迎页
      function WelcomeLoad_Click() {
        var objPage = new Welcome();
        objPage.PageLoad();
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
          default:
            break;
        }
        Welcomebtn_Click(strCommandName, strKeyId, refDivLayout.value);
      }
      return {
        strTitle,
        btn_Click,
        SysScoreSummary_EditRef,
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
@/viewsShare/web/Welcome
