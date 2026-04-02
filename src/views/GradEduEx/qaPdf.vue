<template>
  <!-- <div>
    <button @click="loadPdf">加载 PDF 文件</button>
    <div ref="pdfContainer"></div>
  </div> -->
  <div tabindex="1" class="loadingInProgress" style="height: 100%; width: 100%">
    <div id="outerContainer">
      <div id="sidebarContainer">
        <div id="toolbarSidebar">
          <div class="splitToolbarButton toggled">
            <button
              id="viewThumbnail"
              class="toolbarButton toggled"
              title="Show Thumbnails"
              tabindex="2"
              data-l10n-id="thumbs"
            >
              <span data-l10n-id="thumbs_label">Thumbnails</span>
            </button>
            <button
              id="viewOutline"
              class="toolbarButton"
              title="Show Document Outline (double-click to expand/collapse all items)"
              tabindex="3"
              data-l10n-id="document_outline"
            >
              <span data-l10n-id="document_outline_label">Document Outline</span>
            </button>
            <button
              id="viewAttachments"
              class="toolbarButton"
              title="Show Attachments"
              tabindex="4"
              data-l10n-id="attachments"
            >
              <span data-l10n-id="attachments_label">Attachments</span>
            </button>
          </div>
        </div>
        <div id="sidebarContent">
          <div id="thumbnailView"> </div>
          <div id="outlineView" class="hidden"> </div>
          <div id="attachmentsView" class="hidden"> </div>
        </div>
        <div id="sidebarResizer" class="hidden"></div>
      </div>
      <!-- sidebarContainer -->
      <div id="mainContainer">
        <div id="findbar" class="findbar hidden doorHanger">
          <div id="findbarInputContainer">
            <input
              id="findInput"
              class="toolbarField"
              title="Find"
              placeholder="Find in document…"
              tabindex="91"
              data-l10n-id="find_input"
            />
            <div class="splitToolbarButton">
              <button
                id="findPrevious"
                class="toolbarButton findPrevious"
                title="Find the previous occurrence of the phrase"
                tabindex="92"
                data-l10n-id="find_previous"
              >
                <span data-l10n-id="find_previous_label">Previous</span>
              </button>
              <div class="splitToolbarButtonSeparator"></div>
              <button
                id="findNext"
                class="toolbarButton findNext"
                title="Find the next occurrence of the phrase"
                tabindex="93"
                data-l10n-id="find_next"
              >
                <span data-l10n-id="find_next_label">Next</span>
              </button>
            </div>
          </div>
          <div id="findbarOptionsOneContainer">
            <input id="findHighlightAll" type="checkbox" class="toolbarField" tabindex="94" />
            <label for="findHighlightAll" class="toolbarLabel" data-l10n-id="find_highlight"
              >Highlight all</label
            >
            <input id="findMatchCase" type="checkbox" class="toolbarField" tabindex="95" />
            <label for="findMatchCase" class="toolbarLabel" data-l10n-id="find_match_case_label"
              >Match case</label
            >
          </div>
          <div id="findbarOptionsTwoContainer">
            <input id="findEntireWord" type="checkbox" class="toolbarField" tabindex="96" />
            <label for="findEntireWord" class="toolbarLabel" data-l10n-id="find_entire_word_label"
              >Whole words</label
            >
            <span id="findResultsCount" class="toolbarLabel hidden"></span>
          </div>
          <div id="findbarMessageContainer">
            <span id="findMsg" class="toolbarLabel"></span>
          </div>
        </div>
        <!-- findbar -->
        <div id="secondaryToolbar" class="secondaryToolbar hidden doorHangerRight">
          <div id="secondaryToolbarButtonContainer">
            <button
              id="secondaryPresentationMode"
              class="secondaryToolbarButton presentationMode visibleLargeView"
              title="Switch to Presentation Mode"
              tabindex="51"
              data-l10n-id="presentation_mode"
            >
              <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
            </button>
            <button
              id="secondaryOpenFile"
              class="secondaryToolbarButton openFile visibleLargeView"
              title="Open File"
              tabindex="52"
              data-l10n-id="open_file"
            >
              <span data-l10n-id="open_file_label">Open</span>
            </button>
            <button
              id="secondaryPrint"
              class="secondaryToolbarButton print visibleMediumView"
              title="Print"
              tabindex="53"
              data-l10n-id="print"
            >
              <span data-l10n-id="print_label">Print</span>
            </button>
            <button
              id="secondaryDownload"
              class="secondaryToolbarButton download visibleMediumView"
              title="Download"
              tabindex="54"
              data-l10n-id="download"
            >
              <span data-l10n-id="download_label">Download</span>
            </button>
            <a
              id="secondaryViewBookmark"
              href="javascript:void(0)"
              class="secondaryToolbarButton bookmark visibleSmallView"
              title="Current view (copy or open in new window)"
              tabindex="55"
              data-l10n-id="bookmark"
            >
              <span data-l10n-id="bookmark_label">Current View</span>
            </a>
            <div class="horizontalToolbarSeparator visibleLargeView"></div>
            <button
              id="firstPage"
              class="secondaryToolbarButton firstPage"
              title="Go to First Page"
              tabindex="56"
              data-l10n-id="first_page"
            >
              <span data-l10n-id="first_page_label">Go to First Page</span>
            </button>
            <button
              id="lastPage"
              class="secondaryToolbarButton lastPage"
              title="Go to Last Page"
              tabindex="57"
              data-l10n-id="last_page"
            >
              <span data-l10n-id="last_page_label">Go to Last Page</span>
            </button>
            <div class="horizontalToolbarSeparator"></div>
            <button
              id="pageRotateCw"
              class="secondaryToolbarButton rotateCw"
              title="Rotate Clockwise"
              tabindex="58"
              data-l10n-id="page_rotate_cw"
            >
              <span data-l10n-id="page_rotate_cw_label">Rotate Clockwise</span>
            </button>
            <button
              id="pageRotateCcw"
              class="secondaryToolbarButton rotateCcw"
              title="Rotate Counterclockwise"
              tabindex="59"
              data-l10n-id="page_rotate_ccw"
            >
              <span data-l10n-id="page_rotate_ccw_label">Rotate Counterclockwise</span>
            </button>
            <div class="horizontalToolbarSeparator"></div>
            <button
              id="cursorSelectTool"
              class="secondaryToolbarButton selectTool toggled"
              title="Enable Text Selection Tool"
              tabindex="60"
              data-l10n-id="cursor_text_select_tool"
            >
              <span data-l10n-id="cursor_text_select_tool_label">Text Selection Tool</span>
            </button>
            <button
              id="cursorHandTool"
              class="secondaryToolbarButton handTool"
              title="Enable Hand Tool"
              tabindex="61"
              data-l10n-id="cursor_hand_tool"
            >
              <span data-l10n-id="cursor_hand_tool_label">Hand Tool</span>
            </button>
            <div class="horizontalToolbarSeparator"></div>
            <button
              id="scrollVertical"
              class="secondaryToolbarButton scrollModeButtons scrollVertical toggled"
              title="Use Vertical Scrolling"
              tabindex="62"
              data-l10n-id="scroll_vertical"
            >
              <span data-l10n-id="scroll_vertical_label">Vertical Scrolling</span>
            </button>
            <button
              id="scrollHorizontal"
              class="secondaryToolbarButton scrollModeButtons scrollHorizontal"
              title="Use Horizontal Scrolling"
              tabindex="63"
              data-l10n-id="scroll_horizontal"
            >
              <span data-l10n-id="scroll_horizontal_label">Horizontal Scrolling</span>
            </button>
            <button
              id="scrollWrapped"
              class="secondaryToolbarButton scrollModeButtons scrollWrapped"
              title="Use Wrapped Scrolling"
              tabindex="64"
              data-l10n-id="scroll_wrapped"
            >
              <span data-l10n-id="scroll_wrapped_label">Wrapped Scrolling</span>
            </button>
            <div class="horizontalToolbarSeparator scrollModeButtons"></div>
            <button
              id="spreadNone"
              class="secondaryToolbarButton spreadModeButtons spreadNone toggled"
              title="Do not join page spreads"
              tabindex="65"
              data-l10n-id="spread_none"
            >
              <span data-l10n-id="spread_none_label">No Spreads</span>
            </button>
            <button
              id="spreadOdd"
              class="secondaryToolbarButton spreadModeButtons spreadOdd"
              title="Join page spreads starting with odd-numbered pages"
              tabindex="66"
              data-l10n-id="spread_odd"
            >
              <span data-l10n-id="spread_odd_label">Odd Spreads</span>
            </button>
            <button
              id="spreadEven"
              class="secondaryToolbarButton spreadModeButtons spreadEven"
              title="Join page spreads starting with even-numbered pages"
              tabindex="67"
              data-l10n-id="spread_even"
            >
              <span data-l10n-id="spread_even_label">Even Spreads</span>
            </button>
            <div class="horizontalToolbarSeparator spreadModeButtons"></div>
            <button
              id="documentProperties"
              class="secondaryToolbarButton documentProperties"
              title="Document Properties…"
              tabindex="68"
              data-l10n-id="document_properties"
            >
              <span data-l10n-id="document_properties_label">Document Properties…</span>
            </button>
          </div>
        </div>
        <!-- secondaryToolbar -->
        <div class="toolbar">
          <div id="toolbarContainer">
            <div id="toolbarViewer">
              <div id="toolbarViewerLeft">
                <button
                  id="sidebarToggle"
                  class="toolbarButton"
                  title="Toggle Sidebar"
                  tabindex="11"
                  data-l10n-id="toggle_sidebar"
                >
                  <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                </button>
                <div class="toolbarButtonSpacer"></div>
                <button
                  id="viewFind"
                  class="toolbarButton"
                  title="Find in Document"
                  tabindex="12"
                  data-l10n-id="findbar"
                >
                  <span data-l10n-id="findbar_label">Find</span>
                </button>
                <div class="splitToolbarButton hiddenSmallView">
                  <button
                    id="previous"
                    class="toolbarButton pageUp"
                    title="Previous Page"
                    tabindex="13"
                    data-l10n-id="previous"
                  >
                    <span data-l10n-id="previous_label">Previous</span>
                  </button>
                  <div class="splitToolbarButtonSeparator"></div>
                  <button
                    id="next"
                    class="toolbarButton pageDown"
                    title="Next Page"
                    tabindex="14"
                    data-l10n-id="next"
                  >
                    <span data-l10n-id="next_label">Next</span>
                  </button>
                </div>
                <input
                  id="pageNumber"
                  type="number"
                  class="toolbarField pageNumber"
                  title="Page"
                  value="1"
                  size="4"
                  min="1"
                  tabindex="15"
                  data-l10n-id="page"
                />
                <input
                  id="pageNumber"
                  v-model="pageNumber"
                  type="number"
                  class="toolbarField pageNumber"
                  title="Page"
                  @input="handlePageNumberChange"
                />
                <span id="numPages" class="toolbarLabel"></span>
              </div>
              <div id="toolbarViewerRight">
                <button
                  id="presentationMode"
                  class="toolbarButton presentationMode hiddenLargeView"
                  title="Switch to Presentation Mode"
                  tabindex="31"
                  data-l10n-id="presentation_mode"
                >
                  <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                </button>
                <button
                  id="openFile"
                  class="toolbarButton openFile hiddenLargeView"
                  title="Open File"
                  tabindex="32"
                  data-l10n-id="open_file"
                >
                  <span data-l10n-id="open_file_label">Open</span>
                </button>
                <button
                  id="print"
                  class="toolbarButton print hiddenMediumView"
                  title="Print"
                  tabindex="33"
                  data-l10n-id="print"
                >
                  <span data-l10n-id="print_label">Print</span>
                </button>
                <button
                  id="download"
                  class="toolbarButton download hiddenMediumView"
                  title="Download"
                  tabindex="34"
                  data-l10n-id="download"
                >
                  <span data-l10n-id="download_label">Download</span>
                </button>
                <a
                  id="viewBookmark"
                  href="javascript:void(0)"
                  class="toolbarButton bookmark hiddenSmallView"
                  title="Current view (copy or open in new window)"
                  tabindex="35"
                  data-l10n-id="bookmark"
                >
                  <span data-l10n-id="bookmark_label">Current View</span>
                </a>
                <div class="verticalToolbarSeparator hiddenSmallView"></div>
                <button
                  id="secondaryToolbarToggle"
                  class="toolbarButton"
                  title="Tools"
                  tabindex="36"
                  data-l10n-id="tools"
                >
                  <span data-l10n-id="tools_label">Tools</span>
                </button>
              </div>
              <div id="toolbarViewerMiddle">
                <div class="splitToolbarButton">
                  <button
                    id="zoomOut"
                    class="toolbarButton zoomOut"
                    title="Zoom Out"
                    tabindex="21"
                    data-l10n-id="zoom_out"
                  >
                    <span data-l10n-id="zoom_out_label">Zoom Out</span>
                  </button>
                  <div class="splitToolbarButtonSeparator"></div>
                  <button
                    id="zoomIn"
                    class="toolbarButton zoomIn"
                    title="Zoom In"
                    tabindex="22"
                    data-l10n-id="zoom_in"
                  >
                    <span data-l10n-id="zoom_in_label">Zoom In</span>
                  </button>
                </div>
                <span id="scaleSelectContainer" class="dropdownToolbarButton">
                  <select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom">
                    <option
                      id="pageAutoOption"
                      title=""
                      value="auto"
                      selected="true"
                      data-l10n-id="page_scale_auto"
                      >Automatic Zoom</option
                    >
                    <option
                      id="pageActualOption"
                      title=""
                      value="page-actual"
                      data-l10n-id="page_scale_actual"
                      >Actual Size</option
                    >
                    <option
                      id="pageFitOption"
                      title=""
                      value="page-fit"
                      data-l10n-id="page_scale_fit"
                      >Page Fit</option
                    >
                    <option
                      id="pageWidthOption"
                      title=""
                      value="page-width"
                      data-l10n-id="page_scale_width"
                      >Page Width</option
                    >
                    <option
                      id="customScaleOption"
                      title=""
                      value="custom"
                      disabled="true"
                      hidden="true"
                    ></option>
                    <option
                      title=""
                      value="0.5"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 50 }'
                      >50%</option
                    >
                    <option
                      title=""
                      value="0.75"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 75 }'
                      >75%</option
                    >
                    <option
                      title=""
                      value="1"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 100 }'
                      >100%</option
                    >
                    <option
                      title=""
                      value="1.25"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 125 }'
                      >125%</option
                    >
                    <option
                      title=""
                      value="1.5"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 150 }'
                      >150%</option
                    >
                    <option
                      title=""
                      value="2"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 200 }'
                      >200%</option
                    >
                    <option
                      title=""
                      value="3"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 300 }'
                      >300%</option
                    >
                    <option
                      title=""
                      value="4"
                      data-l10n-id="page_scale_percent"
                      data-l10n-args='{ "scale": 400 }'
                      >400%</option
                    >
                  </select>
                </span>
              </div>
            </div>
            <div id="loadingBar">
              <div class="progress">
                <div class="glimmer"> </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <menu id="viewerContextMenu" type="context">
          <menuitem id="contextFirstPage" label="First Page" data-l10n-id="first_page"></menuitem>
          <menuitem id="contextLastPage" label="Last Page" data-l10n-id="last_page"></menuitem>
          <menuitem
            id="contextPageRotateCw"
            label="Rotate Clockwise"
            data-l10n-id="page_rotate_cw"
          ></menuitem>
          <menuitem
            id="contextPageRotateCcw"
            label="Rotate Counter-Clockwise"
            data-l10n-id="page_rotate_ccw"
          ></menuitem>
        </menu> -->
        <div id="viewerContainer" tabindex="0" @mouseup="viewerContainer_mouseup()">
          <!-- <div id="viewer" class="pdfViewer"></div> -->
          <div v-if="pdfDoc">
            <template v-for="index in pdfDoc._pdfInfo.numPages" :key="index">
              <canvas
                v-show="currentPage <= 0 || index == currentPage"
                :id="'page-' + index"
                class="pdf-page"
              ></canvas>
            </template>
          </div>
        </div>
        <div id="errorWrapper" hidden="true">
          <div id="errorMessageLeft">
            <span id="errorMessage"></span>
            <button id="errorShowMore" data-l10n-id="error_more_info"> More Information </button>
            <button id="errorShowLess" data-l10n-id="error_less_info" hidden="true">
              Less Information
            </button>
          </div>
          <div id="errorMessageRight">
            <button id="errorClose" data-l10n-id="error_close"> Close </button>
          </div>
          <div class="clearBoth"></div>
          <!-- <textarea
            id="errorMoreInfo"
            style="display: none"
            rows="8"
            cols="8"
            readonly="readonly"
          ></textarea> -->
        </div>
      </div>
      <!-- mainContainer -->
      <div id="overlayContainer" class="hidden">
        <div id="passwordOverlay" class="container hidden">
          <div class="dialog">
            <div class="row">
              <p id="passwordText" data-l10n-id="password_label"
                >Enter the password to open this PDF file:</p
              >
            </div>
            <div class="row">
              <input id="password" type="password" class="toolbarField" />
            </div>
            <div class="buttonRow">
              <button id="passwordCancel" class="overlayButton"
                ><span data-l10n-id="password_cancel">Cancel</span></button
              >
              <button id="passwordSubmit" class="overlayButton"
                ><span data-l10n-id="password_ok">OK</span></button
              >
            </div>
          </div>
        </div>
        <div id="documentPropertiesOverlay" class="container hidden">
          <div class="dialog">
            <div class="row">
              <span data-l10n-id="document_properties_file_name">File name:</span>
              <p id="fileNameField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_file_size">File size:</span>
              <p id="fileSizeField">-</p>
            </div>
            <div class="separator"></div>
            <div class="row">
              <span data-l10n-id="document_properties_title">Title:</span> <p id="titleField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_author">Author:</span>
              <p id="authorField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_subject">Subject:</span>
              <p id="subjectField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_keywords">Keywords:</span>
              <p id="keywordsField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_creation_date">Creation Date:</span>
              <p id="creationDateField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_modification_date">Modification Date:</span>
              <p id="modificationDateField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_creator">Creator:</span>
              <p id="creatorField">-</p>
            </div>
            <div class="separator"></div>
            <div class="row">
              <span data-l10n-id="document_properties_producer">PDF Producer:</span>
              <p id="producerField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_version">PDF Version:</span>
              <p id="versionField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_page_count">Page Count:</span>
              <p id="pageCountField">-</p>
            </div>
            <div class="row">
              <span data-l10n-id="document_properties_page_size">Page Size:</span>
              <p id="pageSizeField">-</p>
            </div>
            <div class="separator"></div>
            <div class="row">
              <span data-l10n-id="document_properties_linearized">Fast Web View:</span>
              <p id="linearizedField">-</p>
            </div>
            <div class="buttonRow">
              <button id="documentPropertiesClose" class="overlayButton"
                ><span data-l10n-id="document_properties_close">Close</span></button
              >
            </div>
          </div>
        </div>
        <div id="printServiceOverlay" class="container hidden">
          <div class="dialog">
            <div class="row">
              <span data-l10n-id="print_progress_message">Preparing document for printing…</span>
            </div>
            <div class="row">
              <progress value="0" max="100"></progress>
              <span
                data-l10n-id="print_progress_percent"
                data-l10n-args='{ "progress": 0 }'
                class="relative-progress"
                >0%</span
              >
            </div>
            <div class="buttonRow">
              <button id="printCancel" class="overlayButton"
                ><span data-l10n-id="print_progress_close">Cancel</span></button
              >
            </div>
          </div>
        </div>
      </div>
      <!-- overlayContainer -->
    </div>

    <div id="printContainer"></div>

    <div id="icon" style="display: none; position: absolute">
      <img
        id="tipsIcon1"
        src="@/assets/images/QA.png"
        class="tipsIcon1"
        style="height: 24px; width: 24px"
        title="添加答疑"
        @click="Add_QA()"
      />
      <img
        id="tipsIcon2"
        src="@/assets/images/001_50.png"
        class="tipsIcon2"
        style="height: 24px; width: 24px"
        title="添加批注"
        @click="Add_Tages()"
      />
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
  </div>
</template>

<script lang="ts">
  //   import '@/assets/pdfjs2.3/web/viewer.css';
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref, onMounted } from 'vue';
  // import pdfjs from 'pdfjs-dist/build/pdf';
  // import pdfjs from "pdfjs-dist";
  import $ from 'jquery';
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
      const pageNumber = ref(1);

      function handlePageNumberChange() {
        // 在这里处理文本更改事件
        console.log('文本已更改，新的页数是：', pageNumber.value);
        // currentPage.value = pageNumber;
        const pdfPages = document.getElementsByClassName('pdf-page');
        for (let i = 0; i < pdfPages.length; i++) {
          const objPage = pdfPages[i] as HTMLCanvasElement;
          if (i == pageNumber.value) {
            objPage.style.display = '';
          } else {
            objPage.style.display = 'none';
          }
        }
      }

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
              //   console.log('page:', page);
              //   page.getTextContent().then((textContent) => {
              //     // textContent 包含页面的文本内容信息
              //     // 遍历 textContent.items 获取文本块
              //     textContent.items.forEach((textItem) => {
              //       // 获取文本内容
              //       const text = textItem.str;
              //       console.log(text);
              //     });
              //   });

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
      return { pdfContainer, loadPdf, pdfDoc, loadPdfBak, pageNumber, handlePageNumberChange };
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
              objDiv.addEventListener('mousemove', function (e: any) {
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
      btnUpdateTags_Click(strKey: string) {
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
      btnIndexesQuestions_Click(strKey: string) {
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
