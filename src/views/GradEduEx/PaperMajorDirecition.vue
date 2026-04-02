<template>
    <div id="divLayout" ref="refDivLayout" class="divComContainer">

        <div id="divLoading" class="loading">
<img src="@/assets/images/CirclePoint.gif" />
</div>
<div id="tabLayout" class="tab_layout">
<div class="x-nav">
    <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">论文管理</a>
        <a>
            <cite>论文专业方向维护</cite>
        </a>
        <label id="lblMsg_List" name="lblMsg_List"></label>
    </span>
    <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" @click="location_reload()" title="刷新">
        <i class="layui-icon layui-icon-refresh" style="line-height:30px"></i>
    </a>
</div>
<!-- 查询层 -->
<div id="divQuery" ref="refDivQuery" class="div_query">
    <table id="tabQuery" name="tabQuery" style="width: 50%; " class="table table-bordered table-hover table td table-sm">
        <tr>
            <td>
                <input id="txtPaperTitle_q" name="txtPaperTitle_q" placeholder="论文标题" class="layui-input" style="width:250px;" />
            </td>
            <td>
                <input class="layui-input" placeholder="编辑日期" name="txtUpdDate_q" id="txtUpdDate_q" style="width:120px;">
            </td>
            <td class="ValueTD">
                <select id="ddlLiteratureTypeId_q" class="form-control" style="width:170px;" />
            </td>
            <td>
                <select id="ddlUserId_q" class="form-control" style="width:170px;" />
            </td>
            <td>
                <select id="ddlIdXzMajor_q"  class="form-control" style="width:170px;" />
            </td>
            
            <td>
                <button class="layui-btn" lay-submit="" lay-filter="sreach" @click="btn_Click('Query','')">
                    <i class="layui-icon">&#xe615;</i>
                </button>
            </td>
        </tr>
    </table>
</div>
<!-- 功能区 -->
<div id="divFunction"  ref="refDivFunction" class="layui-card-header">
    <div class="btn-group btn-group-sm">
        <button class="btn btn-success" id="btnAddNewRecord" name="btnAddNewRecord" @click="btnAddXzMajorRela_Click()"><i class="layui-icon">&#xe654;</i>添加专业方向</button>
        <button class="btn btn-primary" id="btnUpdateRecord" name="btnUpdateRecord" title="如果提交不能修改" @click="btnSelectMajorRela_Click()"><i class="layui-icon">&#xe642;</i>查看专业关系</button>
    </div>
</div>
<div id="FunInfo" class="alert alert-info">
    <strong>本界面功能：</strong> 在本界面可以给论文添加专业方向,这样在论文查看界面就可以和本专业论文进行匹配。
    </div>
<!-- 列表层 -->
<div id="divList" ref="refDivList" class="div_List">
    <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade in active show" id="AllPaper" style="padding:5px;">
            <p>
                <div id="divDataLst" ref="refDivDataLst" class="div_List">
                </div>
                <div id="divPager" class="pager" value="1">
                   
                </div>
            </p>
        </div>
    </div>
    <!-- 论文专业方向关系 -->
    <div class="modal fade" style="z-index:1060;" id="divMajorDirectionList" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
        <div class="modal-dialog" style="margin-left:200px;">
            <div class="modal-content" style="width: 1000px;">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModallabel">专业方向</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <!-- 查询层 -->
                <div id="divQuerys" class="div_query">
                    <table id="tabQuerys" name="tabQuery" style="width: 70%; " class="table table-bordered table-hover table td table-sm">
                        <tr>
                            <td>
                                <label id="lblid_XzMajor_q" name="lblid_XzMajor_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                    专业
                                    </label>
                            </td>
                            <td>
                                <select id="ddlIdXzMajor_q" name="ddlIdXzMajor_q" class="form-control" style="width:200px;" />
                            </td>
                            <td>
                                <label id="lblMajorDirectionName_q" name="lblMajorDirectionName_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                    研究方向名
                                    </label>
                            </td>
                            <td>
                                <input id="txtMajorDirectionName_q" name="txtMajorDirectionName_q" class="form-control" style="width:200px;" />
                            </td>
                            <td>
                                <button type="submit" id="btnQuery" name="btnQuery" class="btn btn-outline-warning text-nowrap btn-sm" @click="btn_Click('QueryMajorDirection','')">查询</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-body">
                    <div id="divList" ref="refDivList" class="div_List">
                        <div id="divMajorDirectionDataLst" class="div_List">
                        </div>
                        <div id="divPager" class="pager" value="1">
                       
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="close_Click()">关闭</button>
   
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    </div>
   
</div>
</div>
<input id="hidOpType" type="hidden" />
<input id="hidKeyId" type="hidden" />
<input id="hidUserId1" type="hidden" value="@strUserId1_Value" />
<input id="hidCurrPageIndex" type="hidden" value="1" />
<input id="hidSortvPaperBy" type="hidden" value="" />
<input id="hidUserId" type="hidden" />
<input id="hdnpic" type="hidden" />
<input id="hidPaperTypeId" type="hidden" />
<input id="hdnFileOne" type="hidden" />
<input id="hdnFileTwo" type="hidden" />
<input id="hdnpicThree" type="hidden" />
<input id="hidSortvXzMajorDirectionBy" type="hidden" value="" />
<input id="hidPaperId" type="hidden" />
<input id="hidMajorDirectionId" type="hidden" />

    </div>
  </template>
  <script lang="ts">
    import 'jquery/dist/jquery.min';
    import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
    

import '@/assets/css/site.css';
import '@/assets/lib/Xadmin/css/font.css';
 import '@/assets/lib/Xadmin/css/xadmin.css';

 import '@/assets/css/public.css';
    import { defineComponent, onMounted, ref } from 'vue';
    //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
    

import { GetFirstCheckedKeyId } from '@/ts/PubFun/clsCommFunc4Web';
import { PaperMajorDirecitionEx } from '@/views/GradEduEx/PaperMajorDirecitionEx';
import { MajorDirectionPaperRelaCRUD } from '@/viewsBase/GradEduPaper/MajorDirectionPaperRelaCRUD';
    export default defineComponent({
      name: 'PaperMajorDirecition',
      components: {
        // 组件注册
        // SysScoreSummary_EditCom,
      },
      setup() {
        const strTitle = ref('论文专业方向');
        const SysScoreSummary_EditRef = ref();
        const refDivLayout = ref();
        const refDivQuery = ref();
        const refDivFunction = ref();
        const refDivList = ref();
        const refDivDataLst = ref();
        onMounted(() => {

          const objPage = new PaperMajorDirecitionEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
          objPage.PageLoad();
          
        });
        

//查看专业关系
    function btnSelectMajorRela_Click() {

          var strKeyId = GetFirstCheckedKeyId(); //refDivLayout.value);
if (strKeyId == "") {
    alert("请选择需要查看的记录！");
    return;
}
window.location.href = "../GraduateEduTopic/PaperAddXzmajorRela?PaperId=" + strKeyId;

            }

//添加论文专业关系
function btnAddXzMajorRela_Click() {

var strKeyId = GetFirstCheckedKeyId(); //refDivLayout.value);
if (strKeyId == "") {
    alert("请选择需要的论文！");
    return;
}
$('#hidPaperId').val(strKeyId);
// ShowDialogOne();
//调用专业方向绑定；
    var objPage = new PaperMajorDirecitionEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
objPage.btnMajorDirection_Click();

            }

//用来选择专业记录方法；
function btnOkInTab_Click(strKeyId:string) {

if (strKeyId == "") {
    alert("请选择需要的记录！");
    return;
}
var objPage = new PaperMajorDirecitionEx(refDivLayout.value);
objPage.btnOkInTab_Click(strKeyId);

            }

//关闭详情
function close_Click() {
// HideDialogOne();
}



        function btn_Click(strCommandName: string, strKeyId: string) {
          switch (strCommandName) {
            case 'Create':
            case 'AddNewRecordWithMaxId':
            case 'CreateWithMaxId':
            case 'Update':
            case 'UpdateRecord':
            case 'UpdateRecordInTab':
              PaperMajorDirecitionEx.EditObj = SysScoreSummary_EditRef.value;
              
              break;
            default:
              break;
          }
          PaperMajorDirecitionEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
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
              btnAddXzMajorRela_Click,
              btnSelectMajorRela_Click,

              close_Click
        };
      },
      watch: {
        // 数据监听
      },
      
      methods: {
        // 方法定义
        
         location_reload() {
        window.location.reload();
      },
      },
    });
  </script>
  <style scoped></style>

