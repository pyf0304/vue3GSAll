<template>
  <!-- <div>
    <button @click="loadPdf">加载 PDF 文件</button>
    <div ref="pdfContainer"></div>
  </div> -->

  <div v-if="pdfDoc">
    <template v-for="index in pdfDoc._pdfInfo.numPages" :key="index">
      <canvas v-show="currentPage <= 0 || index == currentPage" class="pdf-page"></canvas>
    </template>
  </div>

  <!-- pdf页码 -->
  <input id="hidPdfPageNum" type="hidden" />

  <!-- pdf内容 -->
  <input id="hidPdfContent" type="hidden" />

  <!-- pdf当前页top -->
  <input id="page_top" type="hidden" name="page_top" />

  <!-- pdf当前页内码 -->
  <input id="page_cache" type="hidden" name="page_cache" />

  <!-- df——zoom -->
  <input id="pdf_zoom" type="hidden" name="pdf_zoom" />

  <!-- pdf选中文本top -->
  <input id="pdfDiv_top" type="hidden" name="pdfDiv_top" />

  <!-- pdf选中文本left -->
  <input id="pdfDiv_left" type="hidden" name="pdfDiv_left" />

  <!-- 是否答疑还是标注 -->
  <input id="hidIsQA_Tags" type="hidden" name="hidIsQA_Tags" />
</template>

<script lang="ts">
  import '@/assets/pdfjs2.3/web/viewer.css';

  import { defineComponent, ref, onMounted } from 'vue';
  // import pdfjs from 'pdfjs-dist/build/pdf';
  // import pdfjs from "pdfjs-dist";
  import * as pdfjsDist from 'pdfjs-dist';
  import * as pdfWorkerMin from 'pdfjs-dist/build/pdf.worker.min?url';
  import { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

  export default defineComponent({
    name: 'PdfViewer',
    props: {
      src: {
        type: Object,
        required: true,
        // default: new URL('/1人力资源管理服务外包协议2.0.pdf', import.meta.url),
      },
      currentPage: {
        type: Number,
        default: 0,
      },
    },
    emits: ['loaded'],
    setup(props, { emit }) {
      const pdfDoc = ref<PDFDocumentProxy | null>(null);
      const pdfContainer = ref<HTMLElement | null>(null);

      const loadPdf = async () => {
        pdfjsDist.GlobalWorkerOptions.workerSrc = pdfWorkerMin.default;
        console.log(props.src);
        pdfjsDist.getDocument(props.src).promise.then((pdf) => {
          //   if (pdf != null) {
          pdfDoc.value = pdf;
          const pdfPages = document.getElementsByClassName('pdf-page');
          //   const pdfPages = new Array<HTMLCanvasElement>();
          //   for (let i = 0; i < pdfPages0.length; i++) {
          //     const objCanvas = pdfPages0[i] as HTMLCanvasElement;
          //     pdfPages.push(objCanvas);
          //   }
          for (let i = 0; i < pdf._pdfInfo.numPages - 1; i++) {
            pdf.getPage(i + 1).then((page) => {
              const viewport = page.getViewport({ scale: 1 });
              const pdfPagesi = pdfPages[i] as HTMLCanvasElement;
              const context = pdfPagesi.getContext('2d') as CanvasRenderingContext2D;
              pdfPagesi.height = viewport.height;
              pdfPagesi.width = viewport.width;
              page.render({
                canvasContext: context,
                viewport,
              });
            });
          }
          emit('loaded', pdf);
          console.log('loaded');
          //   }
        });
      };
      onMounted(() => {
        // 在组件挂载后加载 PDF 文件
        loadPdf();
      });
      const loadPdfBak = async () => {
        if (!pdfContainer.value) return;

        // PDF 文件的 URL
        const pdfUrl = 'http://localhost:8090/pdffiles/汇报论文.pdf';
        if (pdfjsDist == null) {
          const strMsg = `pdfjsDist为空，请检查！`;
          console.error(strMsg);
          return;
        }

        // pdfjsDist.getDocument(props.src).promise.then((pdf) => {
        // 创建 PDF 渲染器
        pdfjsDist.GlobalWorkerOptions.workerSrc = pdfWorkerMin.default;
        const pdf = await pdfjsDist.getDocument(pdfUrl).promise;

        // 获取第一页
        const page = await pdf.getPage(1);

        // 设置缩放比例
        const scale = 1.5;

        // 获取页面视图
        const viewport = page.getViewport({ scale });

        // 创建 Canvas 元素
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // 获取 Canvas 2D 上下文
        const context = canvas.getContext('2d') as CanvasRenderingContext2D;

        // 渲染 PDF 到 Canvas
        await page.render({ canvasContext: context, viewport }).promise;

        // 将 Canvas 添加到容器
        pdfContainer.value.appendChild(canvas);
      };
      return { pdfContainer, loadPdf, pdfDoc, loadPdfBak };
    },
    methods: {
      document_ready() {
        // let selectedText;

        // const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement; //pdf悬浮层事件

        // const leftPart = document.getElementById('leftPart') as HTMLDivElement;
        // const rightPart = document.getElementById('rightPart') as HTMLDivElement;

        // const defaultWidth = 936; // 默认宽度

        // const ismove = false; // 用来判断是否移动了,区分点击和移动
        // const startx = 0;
        // let x;
        // const oldx = defaultWidth;

        // (function () {
        //   viewerContainer.onmouseup = function (e:any) {
        //     this.viewerContainer_mouseup(e);
        //   };
        // })();

        // $('#viewerContainer').mouseup(function (e:any) {
        //   const pageNum = document.getElementById('pageNumber') as HTMLInputElement;
        //   const selection = document.getSelection() as Selection;
        //   if (window.getSelection) {
        //     selectedText = window.getSelection().toString();
        //   } else if (selection && selection.rangeCount > 0) {
        //     //            selectedText = document.selection.createRange().text;
        //     selectedText = ''; //document.selection.createRange().text;
        //   }
        //   //获取坐标位置
        //   this.GetTextLayer();
        //   $('#hidPdfPageNum').val(pageNum.value);
        //   $('#hidPdfContent').val(selectedText);
        //   if (selectedText) {
        //     $('#icon')
        //       .css({
        //         left: e.clientX + 1,
        //         top: e.clientY - 30,
        //       })
        //       .fadeIn(300);
        //   } else {
        //     $('#icon').hide();
        //   }
        // });
        /*增加注释*/
        $('#icon').hover(
          function () {
            $(this).children().removeClass('tipsIcon1');
          },
          function () {
            $(this).children().addClass('tipsIcon1');
          },
        );
      },

      viewerContainer_mouseup() {
        const pageNum = document.getElementById('pageNumber') as HTMLInputElement;
        const selection = document.getSelection() as Selection;
        const selection_win = window.getSelection() as Selection;
        let selectedText;
        if (selection_win) {
          //   selectedText = window.getSelection().toString();
          selectedText = selection_win.toString();
        } else if (selection && selection.rangeCount > 0) {
          selectedText = selection.toString(); //.text;
        } else {
          selectedText = ''; //document.selection.createRange().text;
        }
        //获取坐标位置
        this.GetTextLayer();
        $('#hidPdfPageNum').val(pageNum.value);
        $('#hidPdfContent').val(selectedText);
        const viewerContainer = document.getElementById('viewerContainer') as HTMLDivElement; //pdf悬浮层事件
        const e = viewerContainer;
        console.log(e);
        if (selectedText) {
          $('#icon')
            .css({
              //   left: e.clientX + 1,
              //   top: e.clientY - 30,
            })
            .fadeIn(300);
        } else {
          $('#icon').hide();
        }
      },

      //添加答疑事件
      Add_QA() {
        $('#icon').hide();

        // $('#iframe_Paper_QA', parent.document)[0].contentWindow.AddQ();
        const iframeElement = $('#iframe_Paper_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null) (iframeElement.contentWindow as any).AddQ();
        }
      },

      //添加标注事件
      Add_Tages() {
        $('#icon').hide();

        // $('#iframe_Paper_Tags', parent.document)[0].contentWindow.btnAddTags_Click();
        const iframeElement = $('#iframe_Paper_Tags')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).btnAddTags_Click();
        }
      },

      //获取pdf选中位置的left和Top
      GetTextLayer() {
        const arrTextLayer = document.getElementsByClassName('textLayer');
        for (let i = 0; i < arrTextLayer.length; i++) {
          const objTextLayer = arrTextLayer[i];
          if (objTextLayer.childNodes.length > 0) {
            for (let j = 0; j < objTextLayer.childNodes.length; j++) {
              const objDiv = objTextLayer.childNodes[j] as HTMLDivElement;
              const txt0 = this.getSelectText();
              objDiv.addEventListener('mousemove', function (e:any) {
                console.log(e);
                // let txt = this.getSelectText();
                const txt = $.trim(txt0);
                console.log(txt);
                console.log('this', this);
                const strTop = this.style.top;
                const strLeft = this.style.left;
                const strMsg = `Top:${strTop};` + `Text:${this.innerText}`;
                console.log(strMsg);
                $('#pdfDiv_top').val(strTop);
                $('#pdfDiv_left').val(strLeft);
                console.log('strTop', strTop, 'strLeft', strLeft);
              });
            }
          }
        }
        console.log('设置Div的选择事件完成！');
      },

      //绑定标记图标
      Showdiv_PdfTags_Click() {
        // $('#iframe_Paper_Tags', parent.document)[0].contentWindow.Showdiv_PdfTags_Click();
        const iframeElement = $('#iframe_Paper_Tags')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).Showdiv_PdfTags_Click();
        }
      },
      //修改标记.定位标记
      btnUpdateTags_Click(strKey:string) {
        // $('#iframe_Paper_Tags', parent.document)[0].contentWindow.btnIndexesTags_Click(strKey);
        const iframeElement = $('#iframe_Paper_Tags')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).btnIndexesTags_Click(strKey);
        }
      },

      //绑定问题图标
      Showdiv_PdfQuestions_Click() {
        // $('#iframe_Paper_QA', parent.document)[0].contentWindow.Showdiv_PdfQuestions_Click();
        const iframeElement = $('#iframe_Paper_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).Showdiv_PdfQuestions_Click();
        }
      },

      //定位问题
      btnIndexesQuestions_Click(strKey:string) {
        // $('#iframe_Paper_QA', parent.document)[0].contentWindow.btnIndexesQuestions_Click(strKey);
        const iframeElement = $('#iframe_Paper_QA')[0] as HTMLIFrameElement;
        if (iframeElement != null) {
          if (iframeElement.contentWindow != null)
            (iframeElement.contentWindow as any).btnIndexesQuestions_Click(strKey);
        }
      },

      //定位pdf页码以及高亮
      btnLocationPdfPageNum_Click(pageNum, pdfContent) {
        const page_Number = document.getElementById('pageNumber') as HTMLInputElement;
        page_Number.value = pageNum;
        console.log(pdfContent);
        // PDFViewerApplication.page = pageNum;
        // //传值给pdf
        // PDFViewerApplication.findBar.findField.value = pdfContent;
        // // 要求查询结果全体高亮
        // PDFViewerApplication.findBar.highlightAll.checked = true;
        // // 上面两部已经OK，触发highlightallchange方法。OK
        // PDFViewerApplication.findBar.dispatchEvent('highlightallchange');
      },

      getSelectText() {
        let txt = '';
        const selection = document.getSelection() as Selection;
        console.log('selection:', selection);
        if (selection) {
          txt = selection.toString();
        } else {
          txt = ''; // document.getSelection();
          //txt = window.getSelection();
        }

        return $.trim(txt.toString());
      },
      //   function getSelectText() {
      //         var txt = "";
      //         if (document.selection) {
      //             txt = document.selection.createRange().text;
      //         }

      //         else {
      //             txt = document.getSelection();
      //             //txt = window.getSelection();
      //         }

      //         return $.trim(txt.toString());
      //     }
    },
  });
</script>

<style scoped>
  /* 添加样式 */
  /*pdf高亮*/
  .text-span {
    background-color: crimson;
    /*color: red;*/
  }

  .liRowsColor {
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

<!-- <html dir="ltr" mozdisallowselectionprint>
    <script src="~/pdfjs2.3/build/pdf.js"></script>
    <script src="~/pdfjs2.3/web/viewer.js"></script> -->
