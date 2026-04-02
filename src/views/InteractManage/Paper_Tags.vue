<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <div id="divLoading" class="loading">
      <img src="@/assets/images/CirclePoint.gif" />
    </div>

    <div style="width: 100%; height: 100%">
      <!-- 标注 -->
      <div id="div_Tags" class="div_Tags">
        <div id="list_Tags"></div>
      </div>

      <!-- 欢迎 -->
      <div id="div_qa_Welcome">
        <div style="text-align: center"><h2>论文标记使用说明</h2></div>
        <ul>
          <li class="rowtit color1"
            >选中左边的pdf文字会弹出两个图标，选中标注图标就可以添加标注了</li
          >
          <li class="rowtit color2">如需要删除标记可以在右侧列表内删除</li>
          <li class="rowtit color3"
            >点击pdf文档内的标记图标可以定位到列表，点击列表也可以定位到pdf页码</li
          >
        </ul>
      </div>

      <!-- 标注编辑 -->
      <div id="divEditTagsRegion" ref="gs_Tags_EditRef">
        <div>
          <div class="modal-content">
            <div class="modal-header">
              <h4 id="myModalLabel" class="modal-title">pdf标注</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
              <table
                id="tabEdit"
                style="width: 100%"
                class="table table-bordered table-hover table td table-sm"
              >
                <tr style="display: none">
                  <td colspan="2">
                    <input
                      id="txtOrderNum"
                      name="txtOrderNum"
                      class="form-control form-control-sm"
                      style="width: 50px"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-left" colspan="2" style="height: 30px">
                    <span id="lblPdfContent" class="text-primary mt-1 mb-1" style="width: 30%"
                      >Pdf选择内容:</span
                    >

                    <span
                      id="spnPdfContent"
                      placeholder="Pdf内容"
                      class="text-secondary mt-1 mb-1 text-left"
                      style="width: 70%"
                    ></span>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <textarea
                      id="txtTagsContent"
                      placeholder="标注内容"
                      class="layui-input"
                      style="width: 100%; height: 200px"
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <select id="ddlTagsTypeId" class="form-control" style="width: 200px" />
                  </td>
                </tr>

                <tr>
                  <td
                    ><button
                      id="btnCancelgs_Tags"
                      type="button"
                      class="layui-btn layui-btn-primary"
                      style="width: 100%"
                      @click="btnCancel3_Click()"
                      >{{ strCancelButtonText }}</button
                    ></td
                  >
                  <td
                    ><button
                      id="btnSubmitgs_Tags"
                      type="button"
                      class="layui-btn layui-btn-primary"
                      style="width: 100%"
                      @click="btn_Click('TagsSubmit', '')"
                      >{{ strSubmitButtonText }}</button
                    ></td
                  >
                </tr>
              </table>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
    </div>

    <!-- 论文Id -->
    <input id="hidPaperId" type="hidden" />

    <!-- 标注ID -->
    <input id="hidTagsId" type="hidden" />

    <!-- pdf内容 -->
    <input id="hidPdfContent" type="hidden" />

    <!-- pdf选中文本top -->
    <input id="pdfDiv_top" type="hidden" name="pdfDiv_top" />

    <!-- pdf选中文本left -->
    <input id="pdfDiv_left" type="hidden" name="pdfDiv_left" />
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import '@/assets/css/public.css';
  import '@/assets/css/paperlist.css';
  import '@/assets/css/comment.css';
  import '@/assets/css/SimpleTree.css';

  import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
  import $ from 'jquery';
  //import { Format, IsNullOrEmpty } from "@/ts/PubFun/clsString"

  import { message } from '@/utils/myMessage';
  import { Paper_Tags } from '@/views/InteractManage/Paper_Tags';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { gs_Tags_Edit } from '@/viewsBase/InteractManage/gs_Tags_Edit';
  import { gs_Tags_EditEx } from '@/views/InteractManage/gs_Tags_EditEx';
  import { pdf_LocationPdfPageNum, pdf_SetClientType } from '@/ts/FunClass/clsPubFun4Pdf';
  import { stuPdfData } from '@/ts/PubFun/stuPdfData';
  import { RTUserRelaEx_FuncMap_UserName } from '@/ts/L3ForWApiEx/GradEduTopic/clsRTUserRelaExWApi';
  import enumCommentOrder from '@/ts/FunClass/enumCommentOrder';

  export default defineComponent({
    name: 'PaperQA',
    components: {
      // 组件注册
    },
    props: {
      paperId: {
        type: String,
        default: '',
      },
      idCurrEduCls: {
        type: String,
        default: '',
      },
      questionsId: {
        type: String,
        default: '',
      },
      pushId: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      console.log(props);
      const strTitle = ref('论文答疑表维护');
      const qa_Paper_EditRef = ref();
      const qa_Paper_DetailRef = ref();
      const gs_Tags_EditRef = ref();
      const refDivLayout = ref();
      const refDivQuery = ref();
      const refDivFunction = ref();
      const refDivList = ref();
      const refDivDataLst = ref();
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelgs_Tags':
            strCancelButtonText.value = strNewValue;
            break;
          case 'btnSubmitgs_Tags':
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
          case 'btnCancelgs_Tags':
            return strCancelButtonText.value;
          case 'btnSubmitgs_Tags':
            return strSubmitButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const iframeFunction = (data: stuPdfData) => {
        console.log('从 iframe 接收到的数据：', data);
        // message.success('从 iframe 接收到的数据：', data);
        // 在这里执行你的逻辑
      };
      // 在 setup 中设置一个变量来存储事件处理函数
      const handleIframeMessage = (event: any) => {
        // 处理从 iframe 接收到的消息
        const data = event.data;
        // 假设消息格式是字符串，你可以根据需要进行解析
        if (typeof data.funcName === 'string') {
          // 调用组件中的函数
          switch (data.funcName) {
            case 'AddQ':
              // btn_Click(data.funcName, data.selectText);
              // AddQ(data.selectText);
              break;
            case 'AddTags':
              // AddTags('Add');
              btn_Click('AddTags', data);
              break;

            case 'Showdiv_PdfTags_Click':
              Showdiv_PdfTags_Click();
              break;
            case 'btnIndexesTags_Click':
              btnIndexesTags_Click(data.keyId);
              break;
            case 'btnUpdateTags_Click':
              btn_Click('UpdateTags', data.keyId);
              break;
          }
          // iframeFunction(data);
        }
      };
      onMounted(() => {
        window.addEventListener('message', handleIframeMessage);
        Paper_Tags.vuebtn_Click = btn_Click;
        Paper_Tags.divLayout = refDivLayout.value;
        window_onload();
      });
      // 在组件卸载前移除事件监听器
      onUnmounted(() => {
        window.removeEventListener('message', handleIframeMessage);
      });
      function btn_Click(strCommandName: string, data: any) {
        if (strCommandName == 'SetButtonText') {
          SetButtonText(data.buttonId, data.newValue);

          return;
        } else if (strCommandName == 'GetButtonText') {
          const strValue = GetButtonText(data.buttonId);
          return strValue;
        }
        switch (strCommandName) {
          case 'ShowTags':
            // btnShowTags_Click();
            break;
          case 'Detail':
            break;
          case 'AddTags':
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
          case 'UpdateTags':
            gs_Tags_Edit.EditObj = gs_Tags_EditRef.value;
            // this.divEdit = gs_Tags_EditRef.value;
            gs_Tags_EditEx.vuebtn_Click = btn_Click;
            // Paper_Tags.questionTypeId = '01';
            console.log('gs_Tags_Edit.EditRef:', gs_Tags_Edit.EditObj);
            Paper_Tags.btn_Click(strCommandName, data, gs_Tags_EditRef.value);
            return;
            break;
          default:
            break;
        }
        Paper_Tags.btn_Click(strCommandName, data, refDivLayout.value);
      }
      function Showdiv_PdfTags_Click() {
        const objPage = new Paper_Tags();
        objPage.Showdiv_PdfTags();
      }
      // 方法定义
      function window_onload() {
        // $('#h1idOrderbyId').val('1');
        Getqa_PaperId();

        const objPage = new Paper_Tags();
        objPage.PageLoad(enumCommentOrder.AllComment_01);
      }

      function Getqa_PaperId() {
        const strIdCurrEduCls = props.idCurrEduCls;
        if (IsNullOrEmpty(strIdCurrEduCls)) return;
        const strPaperId = props.paperId;

        if (strIdCurrEduCls != null) {
          clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
        }

        if (strPaperId != null) {
          clsPrivateSessionStorage.paperId = strPaperId;
        }
      }
      /*
       * 显示对话框
       */
      function AddTags(strOp: string) {
        if (strOp === 'Add') {
          $('#txtTagsContent').val('');
          $('#myModalLabel').html('添加标注');

          $('#btnSubmitgs_Tags').html('添加标注');

          //Paper_QUDI.GetMaxStrId('#txtPaperId');
        } else if (strOp === 'Update') {
          $('#myModalLabel').html('修改标注');
          $('#btnSubmitgs_Tags').html('修改标注');
        } else if (strOp === 'Detail') {
          $('#btnOKUpd').hide();
          $('#myModalLabel').html('详细信息');
        }
        // $('#divEditTagsRegion').modal('show');
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
      //锚点
      function btnIndexesTags_Click(strKeyId: string) {
        //先清除观点 和问题的 背景

        //先清除背景色
        $('#infoTages div').removeClass('liRowsColor');
        //添加背景色
        $(`#T${strKeyId}`).addClass('liRowsColor');
      }
      return {
        strTitle,
        btn_Click,
        qa_Paper_EditRef,
        qa_Paper_DetailRef,
        gs_Tags_EditRef,
        refDivLayout,
        refDivQuery,
        refDivFunction,
        refDivList,
        refDivDataLst,
        window_onload,
        AddTags,
        strSubmitButtonText,
        strCancelButtonText,
        SetButtonText,
        GetButtonText,
        iframeFunction,
      };
    },

    methods: {
      //锚点
      btnIndexesQuestions_Click(strKeyId: string) {
        //先清除观点 和问题的 背景

        //先清除背景色
        $('#infoSubViewpoint div').removeClass('liRowsColor');
        //添加背景色
        $(`#Q${strKeyId}`).addClass('liRowsColor');
      },

      /*
       *
    显示对话框
   (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_ShowDialog)
   */
      ShowDialog(pstrOp: string) {
        $('#icon').hide();

        const strOp = pstrOp;

        if (strOp === 'Add') {
          $('#txtTagsContent').val('');
          $('#myModalLabel').html('添加标注');

          $('#btnSubmitgs_Tags').html('添加标注');

          //Paper_QUDI.GetMaxStrId('#txtPaperId');
        } else if (strOp === 'Update') {
          $('#myModalLabel').html('修改标注');
          $('#btnSubmitgs_Tags').html('修改标注');
        } else if (strOp === 'Detail') {
          $('#btnOKUpd').hide();
          $('#myModalLabel').html('详细信息');
        }
        // $('#divEditTagsRegion').modal('show');
      },

      /*
       隐藏对话框
      (AutoGCLib.WA_ViewScript_TS4CSharp:Gen_WApi_JS_HideDialog)
      */
      HideDialog() {
        // $('#divEditTagsRegion').modal('hide');
      },

      btnCancel3_Click() {
        $('#div_Tags').show();
        $('#div_qa_Welcome').show();
        $('#divEditTagsRegion').hide();
      },

      //点击标注定位pdf
      btnShowTags_Click(strKey: string, pageNum: number, pdfContent: string) {
        $('#hidTagsId').val(strKey);
        $('#hidPdfContent').val(pdfContent);

        //先清除背景色
        $('#infoTages div').removeClass('liRowsColor');
        //添加背景色
        strKey = `T${strKey}`;
        $(`#${strKey}`).addClass('liRowsColor');

        //定位pdf页码
        // $('#iframe_qaPdf', parent.document).contents().find('#hid1IsQA_Tags').val(2);
        pdf_SetClientType('Tags');

        pdf_LocationPdfPageNum(pageNum, pdfContent);
      },
    },
  });
</script>
<style scoped>
  li {
    line-height: 30px;
  }

  .info {
    margin-top: 10px;
    border-bottom: solid 0px #dbdcde;
  }

  #list_Tags {
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    min-height: 400px;
    /*height: 400px;*/
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }

  #div_qa_Questions {
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
    background-color: #fff;
    height: 400px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    /*overflow-x: scroll;*/
  }

  .div_Answer {
    margin-top: 5px;
    /*position: fixed;
            bottom: 1px;
            right: 0px;*/
  }

  #div_qa_Welcome {
    border-radius: 5px;
    background-color: beige;
    margin: 10px 10px 10px 10px;
    padding: 20px 20px 20px 20px;
  }

  .artlist li {
    line-height: 35px;
  }

  .rowtit {
    font-size: 16px;
  }

  #divEditTagsRegion {
    width: 100%;
    min-height: 450px;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: #fff;
    display: none;
  }

  #div_qa_Answer {
    border-radius: 5px;
    background-color: #fff;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    display: none;
    min-height: 450px;
  }

  #divEditAnswerRegion {
    width: 100%;
    min-height: 450px;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 5px;
    background-color: #fff;
    display: none;
  }

  /*pdf高亮*/
  .text-span {
    background-color: crimson;
    /*color: red;*/
  }

  .liRowsColor {
    border: 1px solid #ddd;
    background-color: aliceblue;
    color: #fff;
  }

  /*批注提示图标样式*/
  .tipsIcon1 {
    opacity: 0.8;
    z-index: 1;
    filter: alpha(opacity=80);
  }

  .tipsIcon2 {
    opacity: 0.8;
    z-index: 1;
    filter: alpha(opacity=80);
  }
</style>
<!-- 


    
    
    
    
    
    }

    <script> -->
