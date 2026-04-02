<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>

    <!-- 标题层 -->
    <div class="x-nav">
      <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">个人中心</a>
        <a>
          <cite>逻辑关系图</cite>
        </a>
        <label id="lblMsg_List" name="lblMsg_List"></label>
      </span>
      <a
        class="layui-btn layui-btn-small"
        style="line-height: 1.6em; margin-top: 3px; float: right"
        @click="location_reload()"
        title="刷新"
      >
        <i class="layui-icon layui-icon-refresh" style="line-height: 30px"></i>
      </a>
      <a
        id="btn1"
        @click="save_node()"
        class="layui-btn layui-btn-normal"
        style="line-height: 1.6em; margin-top: 3px; float: right; margin-right: 10px"
        title="保存结构图"
      >
        <i class="layui-icon layui-icon-file-b" style="line-height: 30px"></i>保存结构图
      </a>
      <a
        id="btn3"
        @click="remove_node()"
        class="layui-btn layui-btn-danger"
        style="line-height: 1.6em; margin-top: 3px; float: right; margin-right: 10px"
        title="删除节点"
      >
        <i class="layui-icon layui-icon-delete" style="line-height: 30px"></i>删除节点
      </a>
      <a
        id="btn2"
        @click="add_node()"
        class="layui-btn layui-btn-warm"
        style="line-height: 1.6em; margin-top: 3px; float: right; margin-right: 10px"
        title="添加节点"
      >
        <i class="layui-icon ayui-icon-add-circle" style="line-height: 30px"></i>添加节点
      </a>
    </div>
    <div class="device">
      <div class="deviceLeft">
        <h3>结构图</h3>
        <div id="StructureChartTitle" class="deviceLeft_box"> </div>
      </div>
      <div id="deviceRight">
        <div id="jsmind_container"></div>
      </div>
    </div>
    <input id="hidLogicNodeJson" type="hidden" />
    <input id="hidLogicRelaJson" type="hidden" />
    <input id="hidKnowledgeGraphId" type="hidden" />
    <input id="hidChangeBg" type="hidden" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/comment.css';

  import '@/assets/lib/Xadmin/css/font.css';
  import '@/assets/lib/Xadmin/css/xadmin.css';
  import '@/assets/css/public.css';
  import '@/assets/lib/jsmind/jsmind.css';
  import '@/assets/lib/jsPlumb/css/style.css';
  import jsMind from 'jsmind';
  // import 'jsmind/jsmind.draggable';
  import 'jsmind/style/jsmind.css';

  import { defineComponent, onMounted, ref } from 'vue';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { LogicRela } from '@/viewsShare/Knowledges/LogicRela';
  import { message } from '@/utils/myMessage';
  import { StructureChart } from '@/viewsShare/Knowledges/StructureChart';
  export default defineComponent({
    name: 'StructureChart',
    components: {
      // 组件注册
    },
    setup() {
      const _jm = ref(null);
      const strTitle = ref('组织结构图');
      const SysScoreSummary_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      onMounted(() => {
        StructureChart.divLayout = refDivLayout.value;
        StructureChart.divQuery = refDivQuery.value;
        StructureChart.divFunction = refDivFunction.value;
        StructureChart.divList = refDivList.value;
        StructureChart.divDataLst = refDivDataLst.value;
        window_onload();
      });

      function window_onload() {
        load_jsmind();
        // GetRequestId_PageLoad();
      }

      function GetRequestId_PageLoad() {
        // var Request = new Object();
        // Request = GetRequest();
        var strKnowledgeGraphId = ''; // Request['KnowledgeGraphId'];
        if (strKnowledgeGraphId != null) {
          $('#hidKnowledgeGraphId').val(strKnowledgeGraphId);

          var objPage = new LogicRela();
          objPage.PageLoad();
        }
      }
      //加载结构图
      function load_jsmind() {
        const mind = {
          meta: {
            name: 'demo',
            author: '77240613@qq.com',
            version: '0.2',
          },
          format: 'node_array',
          data: [
            { id: 'root', isroot: true, topic: '父节点' },
            { id: 'sub1', parentid: 'root', topic: 'sub1', 'background-color': '#0000ff' },
            { id: 'sub11', parentid: 'sub1', topic: 'sub11' },
            { id: 'sub12', parentid: 'sub1', topic: 'sub12' },
            { id: 'sub13', parentid: 'sub1', topic: 'sub13' },
            { id: 'sub2', parentid: 'root', topic: 'sub2' },
            { id: 'sub21', parentid: 'sub2', topic: 'sub21' },
            { id: 'sub22', parentid: 'sub2', topic: 'sub22', 'foreground-color': '#33ff33' },
            { id: 'sub3', parentid: 'root', topic: 'sub3' },
          ],
        };
        const options = {
          container: 'jsmind_container',
          editable: true,
          theme: 'primary',
        };
        // const jm = jsMind.show(options, mind);
        _jm.value = new jsMind(options);
        console.log(_jm.value);
        if (_jm.value == null) return;
        _jm.value.show(mind);

        _jm.value.add_node('sub2', 'sub23', 'new node', { 'background-color': 'red' });
        _jm.value.set_node_color('sub21', 'green', '#ccc');
      }
      //添加节点
      function add_node() {
        if (_jm.value == null) return;
        var selected_node = _jm.value.get_selected_node(); // as parent of new node

        if (!selected_node) {
          message.info('please select a node first.');
          return;
        }
        var nodeid = jsMind.util.uuid.newid();
        var topic = '* Node_' + nodeid.substr(nodeid.length - 6) + ' *';
        var node = _jm.value.add_node(selected_node, nodeid, topic);
      }
      //删除节点
      function remove_node() {
        if (_jm.value == null) return;
        // const selected_id = _jm.value.get_selected_nodeid();
        const selected_id = _jm.value.get_selected_node(); // as parent of new node

        if (!selected_id) {
          message.info('please select a node first.');
          return;
        }
        _jm.value.remove_node(selected_id);
      }
      //保存结构图
      function save_node() {
        if (_jm.value == null) return;
        var mind_data = _jm.value.get_data('node_array');
        console.log(mind_data);
        var mind_string = jsMind.util.json.json2string(mind_data);
      }

      function Alert_layer(strIcon: string, strMsg: string) {
        message.success(strMsg);
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
        StructureChartbtn_Click(strCommandName, strKeyId, refDivLayout.value);
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
        window_onload,
        save_node,
        remove_node,
        add_node,
      };
    },

    methods: {
      // 方法定义
      location_reload() {
        window.location.reload();
      },
    },
  });
</script>
<style scoped>
  #jsmind_container {
    width: 100%;
    height: 800px;
    border: solid 1px #ccc;
    /*background:#f4f4f4;*/
    background: #f4f4f4;
  }
</style>

<!-- <script type="text/javascript" src="~/lib/jsmind/jsmind.js"></script>
<script type="text/javascript" src="~/lib/jsmind/jsmind.draggable.js"></script>
<script type="text/javascript" src="~/lib/jsmind/jsmind.screenshot.js"></script> -->
