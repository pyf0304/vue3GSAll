<template>
    <div id="divLayout" ref="refDivLayout" class="divComContainer">
        <div id="divLoading" class="loading">
<img src="@/assets/images/CirclePoint.gif" />
</div>
<div id="tabLayout" class="tab_layout">
<!-- 标题层 -->
<div class="x-nav">
    <span class="layui-breadcrumb">
        <a href="">首页</a>
        <a href="">主题研究管理</a>
        <a>
            <cite>知识经济</cite>
        </a>
        <label id="lblMsg_List" name="lblMsg_List"></label>
    </span>
    <a class="layui-btn layui-btn-small" style="line-height:1.6em;margin-top:3px;float:right" @click="location_reload()" title="刷新">
        <i class="layui-icon layui-icon-refresh" style="line-height:30px"></i>
    </a>
</div>
<!-- 查询层 -->
<div id="divQuery"  ref="refDivQuery" class="div_query" style="display:none;">
    <table id="tabQuery" name="tabQuery" style="width: 50%; " class="table table-bordered table-hover table td table-sm">
        <tr>
            <td></td>
            <td style="display:none;">
                <input id="txtTopicName_q" name="txtTopicName_q" placeholder="栏目主题" class="layui-input" style="width:300px;" />
            </td>
            <td style="display:none;">
                <input id="txtTopicProposePeople_q" name="txtTopicProposePeople_q" placeholder="主题提出人" class="layui-input" style="width:200px;" />
            </td>
            <td style="display:none;">
                <input id="dllTopicName" name="dllTopicName" class="layui-input" style="width:200px;" />
            </td>
            <td style="display:none;">
                <button class="layui-btn" lay-submit="" lay-filter="sreach" @click="btn_Click('Query','')">
                    <i class="layui-icon">&#xe615;</i>
                </button>
            </td>
        </tr>
        
    </table>
</div>
<div style="width:90%;">
    <div class="TopNameMenu" style="width:30%;float:left;border:1px solid #dee2e6;line-height: 2.5;margin-top:5px;">
        <ul class="layui-nav left fast-add" lay-filter="" id="TopicId">
            <li class="layui-nav-item">
                <a href="javascript:;">
                    <div style="width:100%;  line-height: 2.5;margin-top:10px;">
                        <span>主题切换：</span>
                        <span id="TopicName"></span>
                        </div>
                </a>
                <dl class="layui-nav-child" id="dlTopicNameList"></dl>
            </li>
        </ul>
    </div>
    <div style="width:69%;float:right;line-height: 2.5;margin-top:5px;margin-left:1px;">
        <table id="tabQuery" name="tabQuery" style="width: 30%; border:0px;" class="table table-bordered table-hover table td table-sm">
            <tr>
                <td>
                    <label id="lblAppraiseContent" name="lblAppraiseContent" class="col-form-label text-right" style="width:90px;">
                        字体：
                        </label>
                </td>
                <td>
                    <button id="btnFontSizeJian" class="layui-btn layui-btn-normal" lay-submit="" lay-filter="sreach">
                        <i class="layui-icon">一</i>
                    </button>
                </td>
                <td>
                    <input id="txtFontSizeNum" name="txtFontSizeNum" value="16" class="layui-input" style="width:50px;" />
                </td>
                <td>
                    <button id="btnFontSizeJia" class="layui-btn layui-btn-normal" lay-submit="" lay-filter="sreach">
                        <i class="layui-icon">&#xe654</i>
                    </button>
                </td>
            </tr>
            
        </table>
    </div>
</div>

 <!-- 分左右2个区域  -->
<div style="width:100%;">
    <div id="divTree_KE" class="divTree1_Curr">
        <ul class="st_tree" id="TreeBind_KE">
          
        </ul>
    </div>
    <div id="divContent" class="divContent1">
        <div id="divContent_menu">
            <ul class="nav" style="float:right;margin-right:10px;display:none;">
                
                <li class="nav-item ml-3">
                    <a href="#infoViewpoint" class="btn btn-outline-info text-nowrap btn-sm">个人观点</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoExpert" class="btn btn-outline-info text-nowrap btn-sm">专家观点</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoConcept" class="btn btn-outline-info text-nowrap btn-sm">相关概念</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoFacts" class="btn btn-outline-info text-nowrap btn-sm">客观事实</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoBasis" class="btn btn-outline-info text-nowrap btn-sm">客观数据</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoSysskill" class="btn btn-outline-info text-nowrap btn-sm">技能</a>
                </li>
                <li class="nav-item ml-3">
                    <a href="#infoSysSocialRelations" class="btn btn-outline-info text-nowrap btn-sm">社会关系</a>
                </li>
            </ul>
        </div>
        <div id="divContent_list">
        </div>
         上 用户 
        
    </div>
</div>
 <!-- 主题列表层  -->

<!-- 编辑层 -->
<div class="modal fade" id="divEditRegion" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content" style="width: 800px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">模态框（Modal）标题</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <table id="tabwucResearchTopic" name="tabwucResearchTopic" style="width: 600px; padding: 1px; border:0px" class="table table-bordered table-hover">
                    <tr style="display:none;">
                        <td class="NameTD">
                            <label id="lblTopicId" name="lblTopicId" class="col-form-label text-right" style="width:90px;">
                                主题编号
                                </label>
                        </td>
                        <td class="ValueTD">
                            <input id="txtTopicId" name="txtTopicId" class="form-control" style="width:200px;" />
                        </td>
                    </tr>
                    <tr>
                        <td class="NameTD">
                            <label id="lblTopicName" name="lblTopicName" class="col-form-label text-right" style="width:90px;">
                                栏目主题
                                </label>
                        </td>
                        <td class="ValueTD">
                            <input id="txtTopicName" name="txtTopicName" class="form-control" style="width:400px;" />
                        </td>
                    </tr>
                    <tr>
                        <td class="NameTD">
                            <label id="lblTopicContent" name="lblTopicContent" class="col-form-label text-right" style="width:90px;">
                                主题内容
                                </label>
                        </td>
                        <td class="ValueTD">
                            <textarea id="txtTopicContent" name="txtTopicContent" class="form-control" style="width:500px;height:80px;"></textarea>
                            
                        </td>
                    </tr>
                    
                    <tr>
                        <td class="NameTD">
                            <label id="lblOrderNum" name="lblOrderNum" class="col-form-label text-right" style="width:90px;">
                                序号
                                </label>
                        </td>
                        <td class="ValueTD">
                            <input id="txtOrderNum" name="txtOrderNum" class="form-control" style="width:200px;" />
                           
                        </td>
                        
                    </tr>
                    <tr>
                        <td class="NameTD">
                            <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width:90px;">
                                备注
                                </label>
                        </td>
                        <td class="ValueTD">
                            <textarea id="txtMemo" name="txtMemo" class="form-control" style="width:500px;height:40px;"></textarea>
                            
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal">关闭</button>
                <button id="btnOKUpd" type="button" class="btn btn-primary btn-sm" @click="btn_Click('mySubmit','')">添加</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
</div>
 <!-- 详细  -->
<div class="modal fade" style="z-index:1060;" id="divResearchTopicDetail" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:200px;">
        <div class="modal-content" style="width: 1000px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">主题详细</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div id="divList" ref="refDivList" class="div_List">
                    <table id="tabwucResearchTopicDetail" name="tabwucResearchTopicDetail" style="width: 100%; padding: 1px; border:0px" class="table table-bordered table-hover">
                        <tr>
                            <td class="NameTD">
                                <label id="lblTopicName" name="lblTopicName" class="col-form-label text-right" style="width:90px;">
                                    栏目主题
                                    </label>
                            </td>
                            <td class="ValueTD">
                                <label id="txtTopicNameDetail" name="txtTopicNameDetail" class="col-form-label" style="width:400px;" />
                            </td>
                        </tr>
                        <tr>
                            <td class="NameTD">
                                <label id="lblTopicContent" name="lblTopicContent" class="col-form-label text-right" style="width:90px;">
                                    主题内容
                                    </label>
                            </td>
                            <td class="ValueTD">
                                <label id="txtTopicContentDetail" name="txtTopicContentDetail" class="col-form-label" style="width:500px;height:80px;"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="NameTD">
                                <label id="lblMemo" name="lblMemo" class="col-form-label text-right" style="width:90px;">
                                    备注
                                    </label>
                            </td>
                            <td class="ValueTD">
                                <label id="txtMemoDetail" name="txtMemoDetail" class="col-form-label" style="width:500px;height:40px;"></label>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="close_Click()">关闭</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
</div>
 <!-- 观点列表  -->
<div class="modal fade" style="z-index:1060;" id="divViewpointList" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:200px;">
        <div class="modal-content" style="width: 1000px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">观点列表</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <div id="divList" ref="refDivList" class="div_List">
                    <div id="divViewpointDataLst" class="div_List">
                    </div>
                    <div id="divPager" class="pager" value="1">
                 
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="closeOne_Click()">关闭</button>
                
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
</div>
 <!-- 论文列表  -->
<div class="modal fade" style="z-index:1060;" id="divPaperList" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:200px;">
        <div class="modal-content" style="width: 1000px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">论文列表</h4>
                <h4 class="modal-title" style="color:red;">(当前只显示已提交的论文数据)</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div id="divQuery"  ref="refDivQuery" class="div_query">
                <table id="tabQuery" name="tabQuery" style="width: 70%; " class="table table-bordered table-hover table td table-sm">
                    <tr>
                        <td>
                            <label id="lblPaperTitle_q" name="lblPaperTitle_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                论文标题
                                </label>
                        </td>
                        <td>
                            <input id="txtPaperTitle_q" name="txtPaperTitle_q" class="form-control" style="width:200px;" />
                        </td>
                       
                        <td class="NameTD">
                            <label id="lblLiteratureTypeId_q" name="lblLiteratureTypeId_q" class="col-form-label text-right" style="width:90px;">
                                文献类型
                                </label>
                        </td>
                        <td class="ValueTD">
                            <select id="ddlLiteratureTypeId_q" name="ddlLiteratureTypeId_q" class="form-control" style="width:180px;" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="lblReadUser_q" name="lblReadUser_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                用户
                                </label>
                        </td>
                        <td>
                            <select id="ddlUserId_q" name="ddlUserId_q" class="form-control" style="width:180px;" />
                        </td>
                        <td>
                            <button type="submit" id="btnPaperQuery" name="btnPaperQuery" class="btn btn-outline-warning text-nowrap btn-sm" @click="btnPaperQuery_Click()">查询</button>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div class="modal-body">
                <div id="divList" ref="refDivList" class="div_List">
                    <div id="divPaperDataLst" class="div_List">
                    </div>
                    <div id="divPager" class="pager" value="1">
                       
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="closeTwo_Click()">关闭</button>
                
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
</div>
 <!-- 用户列表  -->
<div class="modal fade" style="z-index:1060;" id="divUserList" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:200px;">
        <div class="modal-content" style="width: 1000px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">用户列表</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <!-- 查询层 -->
            <div id="divQuery"  ref="refDivQuery" class="div_query">
                <table id="tabQuery" name="tabQuery" style="width: 70%; " class="table table-bordered table-hover table td table-sm">
                    <tr>
                        <td>
                            <label id="lblUserId_q" name="lblUserId_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                用户ID
                                </label>
                        </td>
                        <td>
                            <input id="txtUserId_q" name="txtUserId_q" class="form-control" style="width:200px;" />
                        </td>
                        <td>
                            <label id="lblUserName_q" name="lblUserName_q" class="col-form-label text-right" style="width:80px;width:90px;">
                                用户名
                                </label>
                        </td>
                        <td>
                            <input id="txtUserName_q" name="txtUserName_q" class="form-control" style="width:200px;" />
                        </td>
                        <td>
                            <button type="submit" id="btnUserQuery" name="btnUserQuery" class="btn btn-outline-warning text-nowrap btn-sm" @click="btnUserQuery_Click()">查询</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label id="lblTopicUserRole" name="lblTopicUserRole" class="col-form-label" style="width:250px;">
                                请选择主题用户角色：
                                </label>
                        </td>
                        <td>
                            <select id="ddlTopicUserRole_q" name="ddlTopicUserRole_q" class="form-control" style="width:180px;" />
                        </td>
                    </tr>
                </table>
            </div>
            
            <div class="modal-body">
                <div id="divList" ref="refDivList" class="div_List">
                    <div id="divUserDataLst" class="div_List">
                    </div>
                    <div id="divPager" class="pager" value="1">
                   
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button id="btnCancel" type="button" class="btn btn-default btn-sm" data-dismiss="modal" @click="closeThree_Click()">关闭</button>
                
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
</div>
 <!-- 评论列表  -->
<div class="modal fade" style="z-index:1061;" id="divShowAppraise" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:230px;">
        <div class="modal-content" style="width: 1000px;">
            <div class="modal-header" style="padding:5px;">
                <h4 class="modal-title" id="myModallabel">全部评论</h4>
                <button id="btnOKUpd" type="button" class="btn btn-primary btn-sm" style="float:right; margin-left:700px; width:150px;" @click="btnDetailAddAppraise_Click()">添加评论</button>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body" style="height:650px;overflow:auto;">
                <div class="comment-short" id="J_Short">
                    <div class="comment-title" style="margin-top:5px;">
                        <p class="comment-all" @click="AllComment_Click()">全部评论</p>
                        <div class="comment-center" id="J_CommentCenter">
                            <span class="comment-center-slash">/</span>
                            <span class="comment-my J_userCenter" @click="MyComment_Click()">我的评论</span>
                        </div>
                        <p class="comment-sort">
                            <span data-targetid="4760694256" data-sort="1" class="J_CommentSort comment-sort-cur" @click="NewComment_Click()">最新</span> &nbsp;/&nbsp;
                            <span data-targetid="4760694256" data-sort="0" class="J_CommentSort comment-sort-cur" @click="btn_Click('HottestComment','')">最热</span>
                        </p>
                    </div>
                    <div id="J_ShortComment">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
</div>
 <!-- 添加评论  -->
<div class="modal fade" style="z-index:1062;" id="divEditAppraise" tabindex="-1" role="dialog" aria-labelledby="myModallabel" aria-hidden="true">
    <div class="modal-dialog" style="margin-left:330px;margin-top:100px;">
        <div class="modal-content" style="width: 800px;">
            <div class="modal-header">
                <h4 class="modal-title" id="myModallabel">评论打分</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <table id="tabwucPaperSubViewpointAppraise" name="tabwucPaperSubViewpointAppraise" style="width: 760px; padding: 1px; border:0px" class="table table-bordered table-hover">
                    <tr id="AppraiseScoreId">
                        <td class="NameTD">
                            <label class="col-form-label text-right" style="width:90px;">评分</label>
                        </td>
                        <td class="ValueTD">
                            <div id="pingfen2"></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="NameTD">
                            <label id="lblAppraiseContent" name="lblAppraiseContent" class="col-form-label text-right" style="width:90px;">
                                评议
                                </label>
                        </td>
                        <td class="ValueTD">
                            
                            <textarea id="txtAppraiseContent" name="txtAppraiseContent" class="form-control" style="width:500px;height:80px;"></textarea>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="modal-footer">
                
                <button id="btnOKUpdAppraise" type="button" class="btn btn-primary" @click="SubmitAppraise_Click()">添加</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal -->
</div>
</div>
<a id="backtop" class="back-top" href="javascript:scroll(0,0);" target="_self" title="返回顶部" style="display: block;"><i class="icon-backtop"></i></a>
<input id="hidOpType" type="hidden" />
<input id="hidKeyId" type="hidden" />


<input id="hidCurrPageIndex" type="hidden" value="1" />
<input id="hidSortResearchTopicBy" type="hidden" value="" />

<input id="hidUserId" type="hidden" />
<input id="hidSortvViewpointBy" type="hidden" value="" />
<input id="hidTopicRelaId" type="hidden" />
<input id="hidTopicName" type="hidden" />
<input id="hidViewpointId" type="hidden" />
<input id="hidSortvPaperBy" type="hidden" value="" />
<input id="hidPaperId" type="hidden" value="" />
<input id="hidSortQxUsersBy" type="hidden" value="" />
<input id="hidUserIdKey" type="hidden" />
 <!-- 主题用户关系  -->
<input id="hidSortvRTUserRelaBy" type="hidden" value="" />
 <!-- 主题观点关系  -->
<input id="hidSortvRTViewpointRelaBy" type="hidden" value="" />
 <!-- 主题论文关系  -->
<input id="hidSortvRTPaperRelaBy" type="hidden" value="" />
<input id="hidViewpointUserId" type="hidden" />
<!-- 评论相关 -->
<input id="hidParentId" type="hidden" />
<input id="hidViewpointUserId" type="hidden" />
<input id="hidCommentTypeId" type="hidden" />
<input id="hidTableKey" type="hidden" />
<input id="hidRoleId" type="hidden" />

<!-- 知识点分类子类 -->
<input id="hidke_SubId" type="hidden" />
<!-- 知识点分类 -->
<input id="hidke_SuperId" type="hidden" />

    </div>
  </template>
  <script lang="ts">
    import 'jquery/dist/jquery.min';
    import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';    
import '@/assets/css/site.css';
import '@/assets/lib/Xadmin/css/font.css';
 import '@/assets/lib/Xadmin/css/xadmin.css';
import '@/assets/css/comment.css';
import '@/assets/css/SimpleTree.css';
 import '@/assets/css/public.css';

    import { defineComponent, onMounted, ref } from 'vue';
    //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"
    
import { KnowledgeEconomyListEx } from '@/views/GradEduTopic/KnowledgeEconomyListEx';
import { message } from '@/utils/myMessage';
import { GetFirstCheckedKeyId } from '@/ts/PubFun/clsCommFunc4Web';
import { GetInputValueInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
import { ResearchTopicCRUD } from '@/viewsBase/GradEduTopic/ResearchTopicCRUD';
import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';
    export default defineComponent({
      name: 'KnowledgeEconomyAllList',
      components: {
        // 组件注册
      },
          setup() {
              const strTitle = ref('知识经济');
              const SysScoreSummary_EditRef = ref();
              const refDivLayout = ref();
              const refDivQuery = ref();
              const refDivFunction = ref();
              const refDivList = ref();
              const refDivDataLst = ref();
              onMounted(() => {
                  
                  window_onload();
                  
              });


              function BtnTopicName_Click(strkey: string, strName: string) {

            //       var objPage = new KnowledgeEconomyListEx();
            //       $("#hidTopicRelaId").val(strkey);
            //       $("#hidTopicName").val(strName);
            //       objPage.BtnTopicName_Click(strkey, strName);

            //       message.success('已切换主题!');
            //       $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
            //   }

            //   var flag = true;
            //   $(function () {
            //       $('.main').click(function () {
            //           var num = $('.main').index(this);
            //           if (flag == true) {
            //               $('.main').eq(num).css('background', 'url(../images/st_icon_open.png) no-repeat left');
            //               $('.submenu').eq(num).show(100);
            //               flag = false;
            //           } else {
            //               $('.main').eq(num).css('background', 'url(../images/st_icon.png) no-repeat left');
            //               $('.submenu').eq(num).hide(100);
            //               flag = true;
            //           }

            //       });
            //   });
          }
//设置
function HideTheme_Click(keyId:string) {
// $("#hidke_SuperId").val(keyId);
// var num = $('#li'+keyId).index(this);
// var strId = $('#li' + keyId);
// //var num = $(this).index();
// if ($('#li' + keyId).find('ul').eq(0).css("display") == 'none') {
//     $('#li' + keyId).find('a').eq(0).css('background', 'url(../images/st_icon_open.png) no-repeat left');
//     $('#li' + keyId).find('ul').eq(0).show(100);
//    // flag = false;
// }
// else {
//     $('#li' + keyId).find('a').eq(0).css('background', 'url(../images/st_icon.png) no-repeat left');
//     $('#li' + keyId).find('ul').eq(0).hide(100);
// }

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.GetDataShow();

//if (flag == true) {
//    //$('.main').eq(num).css('background', 'url(../images/st_icon_open.png) no-repeat left');
//    //$('.submenu').eq(num).show(100);
//    $('#li' + keyId).find('a').eq(0).css('background', 'url(../images/st_icon_open.png) no-repeat left');
//    $('#li' + keyId).find('ul').eq(0).show(100);
//    flag = false;
//} else {
//    $('#li' + keyId).find('a').eq(0).css('background', 'url(../images/st_icon.png) no-repeat left');
//    $('#li' + keyId).find('ul').eq(0).hide(100);
//    flag = true;
//}
}
////默认展开数据
//function LoadTreeShow() {
//    //锚点标注显示；
//   // $("#divContent_menu").show();0609注释
//    var num = $('.main').index(this);
//    $('.main').eq(num).css('background', 'url(../images/st_icon_open.png) no-repeat left');
//    $('.submenu').eq(num).show(100);
//    flag = false;
//}

/*
* 页面导入-在导入页面后运行的函数
*/
function window_onload () {
var ClassArtlist = document.getElementsByClassName("artlist");
var txtFontSizeNum = document.getElementById("txtFontSizeNum");
var btnFontSizeJia = document.getElementById("btnFontSizeJia");
var btnFontSizeJian = document.getElementById("btnFontSizeJian");
// var num = txtFontSizeNum.value; /*定义一个初始变量*/
// btnFontSizeJia.onclick = function () {
//     num++;
//     txtFontSizeNum.value = num;
//     //ClassArtlist.fontSize = num + 'px';
//     var i;
//     for (i = 0; i < ClassArtlist.length; i++) {
//         ClassArtlist[i].style.fontSize = num + "px";
//     }
//     message.success('字体增大到：' + num + 'px');
// };
// btnFontSizeJian.onclick = function () {
//     num--;
//     txtFontSizeNum.value = num;
//     //ClassArtlist.fontSize = num + 'px';
//     var i;
//     for (i = 0; i < ClassArtlist.length; i++) {
//         ClassArtlist[i].style.fontSize = num + "px";
//     }
//     message.success('字体减小到：' + num + 'px');
// }

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.PageLoad();

//		aurl   文件夹路径
    //	divname   div的id ， （必传参数）
    //	inputname  会为你生成input :text;设置input id 默认div id;
//	starnum    星星的个数；默认五个；
    //	startnum   星星初始化个数，初始化后，不可更改；(op  设置 true ；)
//  textTure   星星数默认五颗；开启文本显示；

//0609注释
  //  initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin' });
}

function SetFontSize() {
//设置全局字体
    var ClassArtlist = document.getElementsByClassName("artlist");
var txtFontSizeNum = document.getElementById("txtFontSizeNum");
var i;
// for (i = 0; i < ClassArtlist.length; i++) {
//     ClassArtlist[i].style.fontSize = txtFontSizeNum.value + "px";
// }
}
//点击树事件
function btnSelectke_Sub(strKeyId:string, strName:string) {
//先清除背景色
    $("#TreeBind_KE li a").removeClass("selected");
//添加背景色
    //$("#" + strKeyId + " a").addClass("selected");
$('#liTwo' + strKeyId).find('a').addClass("selected");
//存储点击的id
    $("#hidke_SubId").val(strKeyId);
//$("#hidTopicName").val(strName);
//点击后调整关系表数据方法；
    
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.GetAllFunctionMethod();

}
//点击树菜单事件；
function btnSelectResearchTopic(strKeyId:string,strName:string) {
// $("#divContent_menu").show();0609注释
    //先清除背景色
    $("#TreeBind_KE li a").removeClass("selected");
//添加背景色
    $("#" + strKeyId + " a").addClass("selected");
//存储点击的id
    $("#hidTopicRelaId").val(strKeyId);
$("#hidTopicName").val(strName);
//alert(strKeyId);
//点击后调整关系表数据方法；
    
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.GetAllFunctionMethod();

}
/*
* 添加点赞
*/
function btnAddLikeLog_Click(strKeyId:string) {
$('#hidViewpointId').val(strKeyId);

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnAddLikeLog_Click();
    message.success('已点赞!');

}
/*
* 添加点赞
*/
function btnAddVote_Click(strKeyId:string,strUserId:string,strVoteTypeId:string) {
$('#hidViewpointId').val(strKeyId);

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnAddVote_Click(strKeyId, strUserId, strVoteTypeId);
    message.success('已点赞!');

}
/*
* 显示评论
*/
function btnShowAppraise_Click(strKeyId:string, strCommentTypeId:string, strViewpointUserId:string) {
$('#hidViewpointId').val(strKeyId);
$('#hidViewpointUserId').val(strViewpointUserId);
$('#hidCommentTypeId').val(strCommentTypeId);
$('#hidTableKey').val(strKeyId);

    // ShowDialog4();
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnShowAppraise_Click(enumCommentOrder.AllComment_01);

}
/*
* 添加评论
*/
function SubmitAppraise_Click() {
//    alert("提交" + strOp);
$("#btnOKUpdAppraise").attr("disabled", 'true');
//    alert("提交" + strOp);
if ($("#hidUserInfo").val() != "") {
    
        var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.SubmitAppraise_Click();
    
} else {
    $("#btnOKUpdAppraise").attr("disabled", 'false');
    alert("用户session丢失，请重新登录！");
}
}
//添加添加按钮，弹出评论框
function btnDetailAddAppraise_Click() {
// $("#hidParentId").val("root");
// initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin' });
// $("#txtAppraiseContent").val("");

// ShowDialog3();
// }

// function btnReplyComment_Click(strKeyId:string) {
// $('#hidParentId').val(strKeyId);
// initPingFen({ divname: 'pingfen2', textTure: true, inputname: 'pin' });
// $("#txtAppraiseContent").val("");
// ShowDialog3();
}

//添加主题用户关系
function btnAddUserRelaInTab_Click() {
  
    var strKeyId = $('#hidTopicRelaId').val();
    if (strKeyId == "") {
        alert("请选择需要添加关系的主题！");
        return;
    }
    else {
        //存放选择id
          //  $('#hidTopicRelaId').val(strKeyId);
        // ShowDialogFour();
        //调用用户列表绑定；
            var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnAddUserRela_Click();
    }

}
//删除主题用户关系
function btnDelUserRelaInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要删除的记录！");
        return;
    }
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnDelUserRelaRecordInTab_Click(strKeyId);

}
//添加主题观点关系
function btnAddViewPointRelaRecordInTab_Click() {

    var strKeyId = $('#hidTopicRelaId').val();
    if (strKeyId == "") {
        alert("请选择需要添加关系的主题！");
        return;
    }
    else {
        //存放选择id
            // $('#hidTopicRelaId').val(strKeyId);
        // ShowDialogTwo();
        //调用专业方向绑定；
            var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnAddRela_Click();
    }

}
//删除主题观点关系
function btnDelViewPointRelaRecordInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要删除的记录！");
        return;
    }
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnDelViewPointRelaRecordInTab_Click(strKeyId);

}
//添加主题论文关系
function btnAddPaperRelaRecordInTab_Click() {

    var strKeyId = $('#hidTopicRelaId').val();
    if (strKeyId == "") {
        alert("请选择需要添加关系的主题！");
        return;
    }
    else {
        //存放选择id
         //  $('#hidTopicRelaId').val(strKeyId);
        // ShowDialogThree();
        //调用专业方向绑定；
            var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
        objPage.btnAddPaperRela_Click();
    }

}
//删除主题论文关系
function btnDelPaperRelaRecordInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要删除的记录！");
        return;
    }
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnDelPaperRelaRecordInTab_Click(strKeyId);

}

/*
* 删除记录的事件函数
*/
function btnDelRecord_Click() {

    

        var strKeyId = GetInputValueInDivObj(refDivLayout.value, 'hidTopicRelaId');
    if (strKeyId == "") {
        alert("请选择需要删除的主题！");
        return;
    }
    else {
        if (confirm("确定删除主题及所有关联数据吗？")) {
            var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
            objPage.btnDelInRecord_Click(strKeyId);
            return true;
        }
        return false;
    }

}
/*
* 添加主题观点关系记录
*/
function btnAddRela_Click() {

    var strKeyId = GetFirstCheckedKeyId();
    if (strKeyId == "") {
        alert("请选择需要添加关系的记录！");
        return;
    }
    //存放选择id
        $('#hidTopicRelaId').val(strKeyId);
    // ShowDialogTwo();
    //调用专业方向绑定；
        var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnAddRela_Click();
    //window.location.href = "../GraduateEduTopic/ResearchTopicAdd?TopicRelaId=" + strKeyId;

}
//选择观点方法
function btnOkInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要的记录！");
        return;
    }
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnOkInTab_Click(strKeyId);

}
//查看主题观点关系
function btnQueryViewpointRela_Click() {

    var strKeyId = GetFirstCheckedKeyId();
    if (strKeyId == "") {
        alert("请选择需要的记录！");
        return;
    }
    window.location.href = "../GraduateEduTopic/ResearchTopicAdd?TopicRelaId=" + strKeyId;

}

function btnDetailInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要的记录！");
        return;
    }
    // ShowDialogOne();
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnDetailInTab_Click(strKeyId);

}
//关闭详情
function close_Click() {
// HideDialogOne();
}

//2.观点列表

//关闭观点列表
function closeOne_Click() {
// HideDialogTwo();
}
//3.论文列表
/*
* 添加主题论文关系记录
*/
function btnAddPaperRela_Click() {

    var strKeyId = GetFirstCheckedKeyId();
    if (strKeyId == "") {
        alert("请选择需要添加关系的记录！");
        return;
    }
    //存放选择id
        $('#hidTopicRelaId').val(strKeyId);
    // ShowDialogThree();
    //调用专业方向绑定；
        var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnAddPaperRela_Click();

}
/*
* 确定选择论文数据
*/

function btnPaperRecordInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要的记录！");
        return;
    }
    //ShowDialogOne();
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    // objPage.btnPaperRecordInTab_Click(strKeyId);

}
/*
* 查询记录
*/
function btnPaperQuery_Click() {

    $("#Text1").val("进入函数：btnPaperQuery_Click");
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnPaperQuery_Click();

}
/////////////////////////////////////////////////////论文列表
function closeTwo_Click() {
// HideDialogThree();
}

/*
* 添加主题用户关系记录
*/
function btnAddUserRela_Click() {

    var strKeyId = GetFirstCheckedKeyId();
    if (strKeyId == "") {
        alert("请选择需要添加关系的记录！");
        return;
    }
    //存放选择id
        $('#hidTopicRelaId').val(strKeyId);
    // ShowDialogFour();
    //调用用户列表绑定；
        var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnAddUserRela_Click();

}
/*
* 确定选择用户数据
*/

function btnUserRecordInTab_Click(strKeyId:string) {

    if (strKeyId == "") {
        alert("请选择需要的记录！");
        return;
    }
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    // objPage.btnUserRecordInTab_Click(strKeyId);

}
/*
* 用户查询记录
*/
function btnUserQuery_Click() {

    $("#Text1").val("进入函数：btnUserQuery_Click");
    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnUserQuery_Click();

}

//全部评论
function AllComment_Click() {


    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnShowAppraise_Click(enumCommentOrder.AllComment_01);
    //message.success('已点赞!', {
    //    icon: 1,
    //    time: 2000
        //});

}
//我的评论
function MyComment_Click() {

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnShowAppraise_Click(enumCommentOrder.Personal_02);
    //message.success('已点赞!', {
    //    icon: 1,
    //    time: 2000
        //});

}
//最新评论
function NewComment_Click() {

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.btnShowAppraise_Click(enumCommentOrder.LatestComments_03);
    //message.success('已点赞!', {
    //    icon: 1,
    //    time: 2000
        //});

}
//刷新本页面绑定数据
function Refresh_AllTopicRela() {

    var objPage = new KnowledgeEconomyListEx(refDivLayout.value);
        objPage.divLayout = refDivLayout.value;
        objPage.divQuery = refDivQuery.value;
        objPage.divFunction = refDivFunction.value;
        objPage.divList = refDivList.value;
    objPage.BindGv_AllTopicRela();

}

        function btn_Click(strCommandName: string, strKeyId: string) {
          switch (strCommandName) {
            case 'Create':
            case 'AddNewRecordWithMaxId':
            case 'CreateWithMaxId':
            case 'Update':
            case 'UpdateRecord':
            case 'UpdateRecordInTab':
              ResearchTopicCRUD.EditObj = SysScoreSummary_EditRef.value;
              
              break;
            default:
              break;
          }
          KnowledgeEconomyListEx.btn_Click(strCommandName, strKeyId, refDivLayout.value);
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
              AllComment_Click,
              MyComment_Click,
              SubmitAppraise_Click,
              NewComment_Click,
              btnPaperQuery_Click,
              btnUserQuery_Click,
              btnDetailAddAppraise_Click,
              
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
            closeOne_Click() { return; },
            closeTwo_Click() { return; },
            closeThree_Click() { return; },
            close_Click() { return; },
      },
    });
  </script>
  <style scoped>
    body.modal-open {
        position: absolute !important;
    }
    .btnLeft {
        float: left;
    }
    .btnRight {
        float: right;
        margin-right: 50px;
    }
    #divTree_KE a {
        font-size: 18px;
    }
    /*主题小标题*/
    .title {
        font-size: 18px;
    }
    /*主题内容*/
    .artlist {
        font-size: 16px;
    }
    .example img {
        max-width: 200px;
        margin-left: 10px;
    }

    .divTree1_Curr {
  position:relative;
  top: 100px;
  left: 10px;
  /*bottom: 5%;*/
  z-index: 1;
  max-height: 700px;
}
</style>


<!-- 评论评分 -->
<!-- <script src="~/lib/zoomify/zooming.js"></script> -->


