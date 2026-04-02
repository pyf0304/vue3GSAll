<template>
  <div class="container">
    <ul class="nav">
      <li v-for="(menuItem, index) in menuItems0" :key="index" class="nav-item">
        <div class="menu-item" @click="moveToFirst(index)">
          <a :class="{ 'nav-link': true, highlighted: index === 0 }">{{ menuItem.text }}</a>
          <span v-if="index !== menuItems0.length - 1" class="separator">|</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';
  import { GetPObjInDivObj, GetSpanObjInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';

  export default defineComponent({
    name: 'PaperQA',
    components: {
      // 组件注册
    },
    props: {
      // allAnswerTitle: {
      //   type: String,
      //   default: '全部回答',
      // },
      // myAnswerTitle: {
      //   type: String,
      //   default: '我的回答',
      // },
      // lastAnswerTitle: {
      //   type: String,
      //   default: '最新回答',
      // },
      menuItems: {
        type: Array<clsBtnItem>,
        required: true,
      },
    },
    emits: ['on-item-click'],
    setup(props, { emit }) {
      const menuItems0 = ref(props.menuItems);

      const moveToFirst = (index: number) => {
        const clickedItem = menuItems0.value.splice(index, 1)[0];
        menuItems0.value.unshift(clickedItem);
        emit('on-item-click', {
          keyId: clickedItem.keyId,
          text: clickedItem.text,
          content: '菜单项改变事件',
        });
      };
      const refDivLayout = ref();
      function ChangeCommentItem(keyId: string) {
        // const spnAllAnswer = GetSpanObjInDivObj(refDivLayout.value, 'spnAllAnswer');
        const spnAllAnswer = GetPObjInDivObj(refDivLayout.value, 'pAllAnswer');

        const spnMyAnswer = GetSpanObjInDivObj(refDivLayout.value, 'spnMyAnswer');
        const spnLastAnswer = GetSpanObjInDivObj(refDivLayout.value, 'spnLastAnswer');
        spnAllAnswer.classList.remove('comment-active0');
        spnMyAnswer.classList.remove('comment-active0');
        spnLastAnswer.classList.remove('comment-active0');
        spnAllAnswer.classList.remove('comment-my0');
        spnMyAnswer.classList.remove('comment-my0');
        spnLastAnswer.classList.remove('comment-my0');

        switch (keyId) {
          case '01':
            spnAllAnswer.classList.add('comment-active0');
            spnMyAnswer.classList.add('comment-my0');
            spnLastAnswer.classList.add('comment-my0');
            break;
          case '02':
            spnAllAnswer.classList.add('comment-my0');
            spnMyAnswer.classList.add('comment-active0');
            spnLastAnswer.classList.add('comment-my0');
            break;
          case '03':
            spnAllAnswer.classList.add('comment-my0');
            spnMyAnswer.classList.add('comment-my0');
            spnLastAnswer.classList.add('comment-active0');
            break;
        }
      }
      function handleItemClick(keyId: string) {
        // console.log('Clicked:', keyId);

        emit('on-item-click', {
          keyId: keyId,
          content: '按钮单击事件',
        });
        ChangeCommentItem(keyId);
        // 处理点击选项后的逻辑
      }
      onMounted(() => {
        window_onload();
      });

      function btn_Click(strCommandName: string, strKeyId: any) {
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
            break;
          default:
            break;
        }
        // PaperQAAbtn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      /**
       * 页面导入-在导入页面后运行的函数
       **/
      function window_onload() {
        // $('#h1idOrderbyId').val('1');
      }

      return {
        btn_Click,
        refDivLayout,

        window_onload,

        handleItemClick,
        moveToFirst,
        menuItems0,
      };
    },

    methods: {
      // 方法定义
    },
  });
</script>
<style scoped lang="scss">
  .menu-item {
    display: flex;
    align-items: center;
  }

  .nav-link {
    font-size: 16px; /* 或者其他默认字体大小 */
  }

  .highlighted {
    font-size: 18px;
    // font-weight: bold; /* 如果需要粗体 */
    font-style: italic;
    color: #2a2a2a;
  }

  .separator {
    margin: 0 5px;
  }

  .comment-all0 {
    font-size: 18px;
    color: #2a2a2a;
    float: left;
  }
  .comment-active0 {
    font-size: 18px;
    color: #2a2a2a;
    float: left;
  }
  .comment-center0 {
    font-size: 14px;
    float: left;
    overflow: hidden;
    position: relative;
    top: 4px;
  }

  .comment-center-slash0 {
    display: inline-block;
    margin: 0 6px;
    color: #999;
    font-size: 14px;
  }

  .comment-my0 {
    color: #379be9;
    cursor: pointer;
  }

  .comment-my0:hover {
    color: #328bd1;
  }

  .active {
    font-weight: bolder;
  }
</style>
