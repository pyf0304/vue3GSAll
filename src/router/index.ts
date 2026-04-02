// import 'nprogress/css/nprogress.css'; // 进度条样式
import { App } from 'vue';
// import { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import { createRouterGuards } from './router-guards';

// import outsideLayout from './outsideLayout';
import { whiteNameList } from './constant';
// import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

// import demosPyf from '@/router/staticModules/demosPyf';
// import rtParams from '@/router/staticModules/rtParams';
// import { t } from '@/hooks/useI18n';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/about',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index1.vue'),
    // component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/admin1',
    name: 'admin1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/testAdmin/admin1.vue'),
    meta: {
      title: 'admin1',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
        meta: {
          title: '首页',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin2',
    name: 'admin2',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/testAdmin/admin2.vue'),
    meta: {
      title: 'admin2',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin3',
    name: 'admin3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/testAdmin/admin3.vue'),
    meta: {
      title: 'admin3',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin4',
    name: 'admin4',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/testAdmin/admin4.vue'),
    meta: {
      title: 'admin4',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },
  {
    path: '/admin5',
    name: 'admin5',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/testAdmin/admin5.vue'),
    meta: {
      title: 'admin5',
    },
    children: [
      {
        path: '/about',
        name: 'myabout',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about.vue'),
        meta: {
          title: '关于',
        },
        children: [],
      },
      {
        path: '/about2',
        name: 'myabout2',
        // redirect: '/dashboard/welcome',
        component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/about2.vue'),
        meta: {
          title: '关于2',
        },
        children: [],
      },
    ],
  },

  {
    path: '/QxPrjMenusCRUD',
    name: 'QxPrjMenusCRUD',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/MenuManage_GP/QxPrjMenusCRUD.vue'),
    meta: {
      title: 'QxPrjMenusCRUD',
    },
    children: [],
  },
  {
    path: '/testDropdownMenu1',
    name: 'testDropdownMenu1',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/testDropdownMenu/dropdownMenu1.vue'),
    meta: {
      title: 'testDropdownMenu1',
    },
    children: [],
  },
  {
    path: '/testDropdownMenu2',
    name: 'testDropdownMenu2',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/testDropdownMenu/dropdownMenu2.vue'),
    meta: {
      title: 'testDropdownMenu2',
    },
    children: [],
  },
  {
    path: '/testTabs',
    name: 'testTabs',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tabs/testTabs.vue'),
    meta: {
      title: 'testTabs',
    },
    children: [],
  },
  {
    path: '/MindMap',
    name: 'MindMap',
    component: () => import('@/viewsShare/TestMindMap/MindMap.vue'),
    meta: {
      title: 'MindMap',
    },
    children: [],
  },
  {
    path: '/MindMap2',
    name: 'MindMap2',
    component: () => import('@/viewsShare/TestMindMap/MindMap2.vue'),
    meta: {
      title: 'MindMap2',
    },
    children: [],
  },
  {
    path: '/downloadFile',
    name: 'downloadFile',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/tools/downloadFile.vue'),
    meta: {
      title: '下载文件',
    },
    children: [],
  },
  {
    path: '/IndexIframe',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index1.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/Index1.vue'),
    meta: {
      title: '首页',
    },
    children: [],
  },

  {
    path: '/PaperIframe',
    name: 'PaperIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/PaperIframe.vue'),
    meta: {
      title: '论文管理',
    },
    children: [],
  },

  {
    path: '/IndexIframe',
    name: 'IndexIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/IndexIframe.vue'),
    meta: {
      title: '用户中心',
    },
    children: [],
  },

  {
    path: '/QAIframe',
    name: 'QAIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/QAIframe.vue'),
    meta: {
      title: '答疑备注',
    },
    children: [],
  },

  {
    path: '/TopicIframe',
    name: 'TopicIframe',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/web/TopicIframe.vue'),
    meta: {
      title: '主题管理',
    },
    children: [],
  },

  {
    path: '/CurrEduClsInfo',
    name: 'CurrEduClsInfo',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/viewsShare/DailyRunning/CurrEduClsInfo.vue'),
    meta: {
      title: '教学班信息',
    },
    children: [],
  },

  {
    path: '/ResearchTopicQudi1',
    name: 'ResearchTopicQudi1',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduTopic/ResearchTopic_QUDI.vue'),
    meta: {
      title: '主题管理',
    },
    children: [],
  },

  {
    path: '/gs_PaperReportCRUD',
    name: 'gs_PaperReportCRUD',

    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduTopic/gs_PaperReportCRUD.vue'),
    meta: {
      title: '论文报告',
    },
    children: [],
  },

  {
    path: '/TotalDataStatisticsDetail',
    name: 'TotalDataStatisticsDetail',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduTools/TotalDataStatisticsDetail.vue'),
    meta: {
      title: '用户学习数据汇总详细信息',
    },
    children: [],
  },
  {
    path: '/PaperSubViewpoint',
    name: 'PaperSubViewpoint',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduEx/PaperSubViewpoint_pdf.vue'),
    meta: {
      title: '论文子观点',
    },
    children: [],
  },
  {
    path: '/ReadTraining',
    name: 'ReadTraining',
    // redirect: '/dashboard/welcome',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/MiddleSchoolReading/ReadTraining_pdf.vue'),
    meta: {
      title: '阅读训练',
    },
    children: [],
  },
  {
    path: '/UploadFile',
    name: 'UploadFile',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/tUploadFile.vue'),
    meta: {
      title: '上传文件',
    },
    children: [],
  },
  {
    path: '/PaperAttention',
    name: 'PaperAttention',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduEx/PaperAttention.vue'),
    meta: {
      title: '论文关注',
    },
    children: [],
  },
  {
    path: '/ResearchTopicList',
    name: 'ResearchTopicList',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/GradEduTopic/ResearchTopicList.vue'),
    meta: {
      title: '主题查看',
    },
    children: [],
  },
  {
    path: '/InteractManage/Paper_QA',
    name: 'InteractManage_Paper_QA',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/InteractManage/Paper_QA.vue'),
    meta: {
      title: '论文答疑',
    },
    children: [],
  },
  {
    path: '/InteractManage/qa_PaperCRUD',
    name: 'InteractManage_qa_PaperCRUD',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/InteractManage/qa_PaperCRUD.vue'),
    meta: {
      title: '论文答疑',
    },
    children: [],
  },

  {
    path: '/InteractManage/Paper_Tags',
    name: 'InteractManage_Paper_Tags',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/InteractManage/Paper_Tags.vue'),
    meta: {
      title: '论文标记',
    },
    children: [],
  },
  {
    path: '/InteractManage/Tea_QA',
    name: 'InteractManage_Tea_QA',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/InteractManage/Tea_QA.vue'),
    meta: {
      title: '教师提问',
    },
    children: [],
  },
  {
    path: '/InteractManage/TeaTest_QA',
    name: 'InteractManage_TeaTest_QA',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/InteractManage/TeaTest_QA.vue'),
    meta: {
      title: '教师提问',
    },
    children: [],
  },
  {
    path: '/dialog1',
    name: 'dialog1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/myDialog/Dialog1.vue'),
    meta: {
      title: '对话框',
    },
    children: [],
  },

  {
    path: '/testDropButton',
    name: 'testDropButton',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/testADropButton.vue'),
    meta: {
      title: '测试下拉按钮',
    },
    children: [],
  },
  {
    path: '/tElDropButton1',
    name: 'tElDropButton1',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/tElDropButton1.vue'),
    meta: {
      title: '测试下拉按钮',
    },
    children: [],
  },
  {
    path: '/tElDropButton2',
    name: 'tElDropButton2',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/tElDropButton2.vue'),
    meta: {
      title: '测试下拉按钮2',
    },
    children: [],
  },
  {
    path: '/tElDropButton3',
    name: 'tElDropButton3',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/tElDropButton4.vue'),
    meta: {
      title: '测试下拉按钮3',
    },
    children: [],
  },
  {
    path: '/testMyDropButton',
    name: 'testMyDropButton',
    // redirect: '/dashboard/welcome',
    component: () => import(/* webpackChunkName: "layout" */ '@/viewsShare/test/testMyDropButton.vue'),
    meta: {
      title: '测试下拉按钮3',
    },
    children: [],
  },

  {
    path: '/testPdf3',
    name: 'testPdf3',
    component: () => import(/* webpackChunkName: "about" */ '@/viewsShare/test/Pdf/testPdf3.vue'),
  },

  // Layout之外的路由

  // ...demosPyf,
  // ...rtParams,
  // Layout之外的路由
];
export const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route: any) => {
    const { name } = route;
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}
export async function setupRouter(app: App) {
  // 创建路由守卫
  // createRouterGuards(router, whiteNameList);

  app.use(router);
  // console.log(router);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
}
export default router;
