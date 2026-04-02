<template>
  <div id="divLayout_Paper" ref="refDivLayout_Head" class="divComContainer">
    <div class="layout-Paper">
      <select
        v-model="selectedValue"
        id="ddlPaperId_q"
        class="form-control form-control-sm"
        style="width: 200px"
        @change="handleChange"
      />
    </div>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';

  import { defineComponent, onMounted, ref } from 'vue';

  import router from '@/router';
  import { TopicPaper } from '@/ts/components/TopicPaper';
  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
  import { BindDdl_ObjLst_V } from '@/ts/PubFun/clsCommFunc4Web';
  import { clsvRTPaperRelaEN } from '@/ts/L0Entity/GradEduTopic/clsvRTPaperRelaEN';
  import { vRTPaperRela_GetObjLstAsync } from '@/ts/L3ForWApi/GradEduTopic/clsvRTPaperRelaWApi';
  import { vPaperEx_BindDdl_PaperIdByTopicId } from '@/ts/L3ForWApiEx/GradEduPaper/clsPaperExWApi';

  export default defineComponent({
    name: 'TopicPaper',
    components: {
      // 组件注册
    },
    props: {
      title: {
        type: String,
        required: true,
      },

      topicId: {
        type: String,
        required: true,
      },
      paperId: {
        type: String,
        required: true,
      },
      modelValue: {},
    },

    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const selectedValue = ref();
      const refDivLayout_Head = ref();
      const Login_EditRef = ref();
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }

      function handleChange(event: any) {
        selectedValue.value = event.target.value;
        emit('update:modelValue', selectedValue.value);
      }

      onMounted(() => {
        TopicPaper.divLayout = refDivLayout_Head.value;
        TopicPaper.vuebtn_Click = btn_Click;
        TopicPaper.GetPropValue = GetPropValue;
        if (props.topicId != '') {
          SetDdl_PaperId(props.topicId);
        }
        const objPage = new TopicPaper();
        objPage.PageLoad();
      });
      function GetPropValue(strPropName: string): string {
        switch (strPropName) {
          case 'title':
            return props.title;
          case 'topicId':
            return props.topicId;
          case 'paperId':
            return props.paperId;
          default:
            return '';
        }
      }
      //论文子观点
      async function SetDdl_PaperId(strTopicId: string) {
        try {
          await vPaperEx_BindDdl_PaperIdByTopicId('ddlPaperId_q', strTopicId);
        } catch (e: any) {
          console.error('catch(e)=');
          console.error(e);
          const strMsg = `获取主题相关论文列表不成功,${e}.`;
          alert(strMsg);
        }
      }

      //论文下拉框绑定

      function btn_Click(strCommandName: string, strKeyId: string) {
        console.log(strKeyId);
        switch (strCommandName) {
          case 'Detail':
            break;
          case 'Create':
          case 'AddNewRecordWithMaxId':
          case 'CreateWithMaxId':
          case 'Update':
          case 'UpdateRecord':
          case 'UpdateRecordInTab':
            break;

          case 'liPaper':
            router.push('/about');
            console.log("router.push('/about');");
            // router.push({ name: 'myabout' });
            // console.log("router.push({ name: 'myabout' });");
            break;
          default:
            break;
        }
        TopicPaperbtn_Click(strCommandName, strKeyId, refDivLayout.value);
      }

      return {
        Login_EditRef,
        refDivLayout_Head,
        btn_Click,
        getUser,
        UserId,
        UserName,
        selectedValue,

        handleChange,

        // headerStyle,
      };
    },
    methods: {
      async SelectPaper() {
        const selectedValue = this.selectedValue;
        const objEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(selectedValue);
        if (objEduCls == null) return;
        TopicPaper.EduCls_Click(
          objEduCls.idCurrEduCls,
          objEduCls.eduClsName,
          objEduCls.eduClsTypeId,
        );
      },
    },
  });
</script>

<style lang="less" scoped>
  @header-height: 60px;
  .moduleTitle {
    font-size: 20px;
    font-weight: bold;
  }

  .layout-header {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    height: @header-height;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #aacbec;

    * {
      cursor: pointer;
    }
  }

  .tabs-container {
    display: flex;
    flex-direction: row;
  }

  .tabs {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tabs li {
    cursor: pointer;
    padding: 10px 20px;
    background-color: #eee;
  }

  .tabs li.active {
    font-weight: bold;
    background-color: #ccc;
  }

  .tab-content {
    flex-grow: 1;
    padding: 20px;
    background-color: #f0f0f0;
  }

  .page-content {
    position: absolute;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 0px;
    overflow: hidden;
    z-index: 1;
  }

  #TopicName {
    font-size: 18px;
    font-style: italic;
    /*font-weight: bold;*/
  }

  .container {
    width: 100%;
    height: 45px;
    background-color: #007fff;
  }

  .container .logo a {
    float: left;
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
    /* background: url(@/assets/css/index/img/logo_tz2.png) no-repeat; */
    /* width: 200px; */
  }

  .page-content-bg {
    /* position: absolute; */
    position: relative;
    top: 45px;
    right: 0;
    /*bottom: 42px;*/
    bottom: 0px;
    left: 220px;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 100;
    display: none;
  }

  .layui-tab-content {
    padding: 5px;
  }
</style>
