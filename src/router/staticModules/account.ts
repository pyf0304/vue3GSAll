import type { RouteRecordRaw } from 'vue-router';
import RouterView from '@/layout/routerView/index.vue';
const moduleName = 'account';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/account',
    component: RouterView,
    redirect: '/account/settings',
    meta: {
      title: '个人中心',
      hideInMenu: true,
    },
    children: [
      {
        path: 'settings',
        name: `${moduleName}-settings`,
        component: () => import('@/views/account/settings.vue'),
        meta: { title: '系统设置', hideInMenu: true },
      },
      {
        path: 'about',
        name: `${moduleName}-about`,
        component: () => import('@/views/account/about.vue'),
        meta: { title: '关于', hideInMenu: true },
      },
      {
        path: 'selectPrj',
        name: `${moduleName}-selectPrj`,
        component: () => import('@/views/AuthorityManage/SelectProject.vue'),
        meta: { title: 'selectPrj', hideInMenu: true },
      },
      {
        path: 'testTabs',
        name: `${moduleName}-testTabs`,
        component: () => import('@/viewsShare/tabs/myTabs.vue'),
        meta: { title: 'testTabs', hideInMenu: true },
      },
      {
        path: 'editViewRegion',
        name: `${moduleName}-editViewRegion`,
        component: () => import('@/views/PrjInterface/ViewInfo_AllProp.vue'),
        meta: { title: 'editViewRegion', hideInMenu: true },
      },
      {
        path: 'editTabRelaInfo',
        name: `${moduleName}-editTabRelaInfo`,
        component: () => import('@/views/Table_Field/PrjTab_AllProp.vue'),
        meta: { title: 'editTabRelaInfo', hideInMenu: true },
      },
    ],
  },
];
export default routes;
