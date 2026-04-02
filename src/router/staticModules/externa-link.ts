import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
// import { t } from '@/hooks/useI18n';
const routes: Array<RouteRecordRaw> = [
  {
    path: 'http://buqiyuan.gitee.io/vite-vue3-lowcode/',
    name: 'http://buqiyuan.gitee.io/vite-vue3-lowcode/',
    component: RouterView,
    meta: {
      title: 'H5低代码平台',
      icon: 'icon-externa-link',
      isExt: true,
    },
  },
  // {
  //   path: '/pyf-about3',
  //   name: `pyf-about3`,
  //   // redirect: { name: `${moduleName}-custom-modal` },
  //   meta: {
  //     title: t('routes.demo.pyfabout'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "demos-custom-a-custom-modal" */ '@/viewsShare/test/about.vue'),
  // },
  // {
  //   path: 'http://localhost:8090/pyf-about2',
  //   name: `http://localhost:8090/pyf-about2`,
  //   component: RouterView,
  //   meta: {
  //     title: t('routes.demo.pyfabout'),
  //     icon: 'icon-zhuomian',
  //     // keepAlive: true,
  //     isExt: true,
  //   },
  // },
  {
    path: 'http://www.shnu.edu.cn',
    name: `http://www.shnu.edu.cn`,
    component: RouterView,
    meta: {
      title: '上海师大',
      icon: 'icon-zhuomian',
      // keepAlive: true,
      isExt: true,
    },
  },
];
export default routes;
