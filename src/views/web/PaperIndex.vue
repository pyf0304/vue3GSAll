<template>
  <div>
    <h1>用户免登录-课文阅读测试</h1>
    <ul>
      <li>
        <router-Link to="/aboutb">关于b</router-Link>
      </li>
      <li>
        <button @click="JumpToPaperIframeByTeacher()"> 以老师身份跳转到论文管理 </button>
      </li>
      <li>
        <button @click="JumpToPaperIframeByStudent1()"> 以学生1身份跳转到论文管理 </button>
      </li>
      <li>
        <button @click="JumpToPaperIframeByStudent2()"> 以学生2身份跳转到论文管理 </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import router from '@/router';
  import { userStore } from '@/store/modulesShare/user';
  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';
  import { defineComponent } from '@vue/runtime-core';
  export default defineComponent({
    name: 'about_1',
    setup() {
      const btn_Click = (strCommandName: string): void => {
        const strKeyId = '';
        alert(`命令:${strCommandName}, 关键字:${strKeyId}.`);
      };
      const JumpToPaperIframeByTeacher = () => {
        // userStore.getUserId = '00701';

        clsPubLocalStorage.idCurrEduCls = '00000060';

        // userStore.getIdXzMajor = '00000466';
        // userStore.getMajorName = '教育技术学研究生';
        clsPrivateSessionStorage.questionsTypeId = '01';
        clsPubLocalStorage.majorDirectionId = '00000005';
        clsPubLocalStorage.majorDirectionName = '信息化教育';
        router.push('/PaperIframe');
      };
      const JumpToPaperIframeByStudent1 = () => {
        // userStore.getUserId = '0310276';

        clsPubLocalStorage.idCurrEduCls = '00000060';

        // userStore.getIdXzMajor = '00000466';
        // userStore.getMajorName = '教育技术学研究生';
        clsPrivateSessionStorage.questionsTypeId = '01';
        clsPubLocalStorage.majorDirectionId = '00000005';
        clsPubLocalStorage.majorDirectionName = '信息化教育';
        router.push('/PaperIframe');
      };
      const JumpToPaperIframeByStudent2 = () => {
        // userStore.getUserId = '2201';

        clsPubLocalStorage.idCurrEduCls = '00000060';

        // userStore.getIdXzMajor = '00000466';
        // userStore.getMajorName = '初一学生';
        clsPrivateSessionStorage.questionsTypeId = '01';
        clsPubLocalStorage.majorDirectionId = '00000005';
        clsPubLocalStorage.majorDirectionName = '信息化教育';
        router.push('/PaperIframe');
      };
      return {
        btn_Click,
        JumpToPaperIframeByTeacher,
        JumpToPaperIframeByStudent1,
        JumpToPaperIframeByStudent2,
      };
    },
  });
</script>

<style scoped></style>
@/store/modulesShare/user
