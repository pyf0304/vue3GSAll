<template>
  <!-- <div style="height: 200px; overflow-y: auto; left: 0; top: 100px"> -->
  <Dropdown placement="bottomRight">
    <!-- <SvgIcon name="locale" /> -->
    <span class="ml-1">当前教学班: {{ getLocaleText }}</span>
    <template #overlay>
      <!-- <Menu v-model:selectedKeys="selectedKeys" @click="handleMenuClick">
        <Menu.Item v-for="item in options" :key="item.value">
          <a href="javascript:;">{{ item.label }}</a>
        </Menu.Item>
      </Menu> -->

      <el-dropdown-menu
        v-model:selectedKeys="selectedKeys"
        @click="handleMenuClick"
        slot="dropdown"
      >
        <el-dropdown-item v-for="item in options" :key="item.value">
          <a href="javascript:;">{{ item.label }}</a></el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </Dropdown>
  <!-- </div> -->
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref } from 'vue';

  import { clsPrivateSessionStorage } from '@/ts/PubConfig/clsPrivateSessionStorage';

  import { IsNullOrEmpty } from '@/ts/PubFun/clsString';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  import { vCurrEduClsTeacher_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsTeacherWApi';
  import { vCurrEduClsStu_GetObjLstAsync } from '@/ts/L3ForWApi/DailyRunning/clsvCurrEduClsStuWApi';
  import { CurrEduClsEx_SortFunByKey } from '@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi';
  import { clsCurrEduClsEN } from '@/ts/L0Entity/DailyRunning/clsCurrEduClsEN';
  import { CurrEduCls_GetObjByIdCurrEduClsAsync } from '@/ts/L3ForWApi/DailyRunning/clsCurrEduClsWApi';
  import { SetSpanHtmlInDivObj } from '@/ts/PubFun/clsCommFunc4Ctrl';
  import { enumQxRoles } from '@/ts/L0Entity/UserManage_GP/clsQxRolesEN';
  interface Option {
    value: any;
    label: string;
  }
  // 定义一个接收外部传入的属性
  const props = defineProps({
    roleId: String, // 这里的类型应该匹配你期望的属性类型
    userId: String,
    divName: HTMLDivElement,
  });
  const selectedKeys = ref<string[]>([]);
  // const options = await getData();
  // const options = [
  //   { value: 'option1', label: '选项1' },
  //   { value: 'option2', label: '选项2' },
  //   { value: 'option3', label: '选项3' },
  // ];
  const options = ref<Option[]>([]);
  // console.log('options:', options);
  const Addi = ref('测试');
  const getLocaleText = computed(() => {
    const key = selectedKeys.value[0];
    if (!key) {
      return '';
    }
    const strOptionLabel = options.value.find((item) => item.value === key)?.label;
    console.log('strOptionLabel:', strOptionLabel);
    return strOptionLabel;
  });
  const IdCurrEduCls = ref(''); //await GetDefaIdCurrEduCls();
  // console.log(strIdCurrEduCls);
  async function handleMenuClick() {
    console.log('选中的项：', selectedKeys);
    const key = selectedKeys.value[0];
    console.log(key);
    const objSelOption = options.value.find((x) => x.value === key);
    if (objSelOption != null) {
      Addi.value = objSelOption.label;
      await SaveIdCurrEduCls(key);
      clsPrivateSessionStorage.cmPrjId = key;
    }
  }
  async function getData(divName0: HTMLDivElement) {
    let arrObjLst_Sel: any;
    //管理员
    if (
      props.roleId == enumQxRoles.System_Admin_00620001 ||
      props.roleId == enumQxRoles.Secondary_School_System_Admin_00620018
    ) {
      arrObjLst_Sel = await Get_EduClsTeaList();
    }
    //老师
    else if (props.roleId == '00620002') {
      arrObjLst_Sel = await Get_EduClsTeaList();
    }
    //学生
    else {
      arrObjLst_Sel = await Get_EduClsStuList(divName0);
    }

    arrObjLst_Sel = arrObjLst_Sel.sort(
      CurrEduClsEx_SortFunByKey(clsCurrEduClsEN.con_EduClsName, 'Asc'),
    );

    options.value = arrObjLst_Sel.map((x: any) => ({
      value: x.idCurrEduCls,
      label: x.eduClsName,
    }));
    console.log('当前用户所管理的教学班:', options.value);
  }

  //教学班教师
  async function Get_EduClsTeaList() {
    try {
      const strWhereCond = ` teacherId='${props.userId}' order by updDate Desc`;

      const arrvCurrEduClsTeacherObjLst = await vCurrEduClsTeacher_GetObjLstAsync(strWhereCond);
      // let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsTeacherObjLst.length; i++) {
        const objvCurrEduClsTeacher = arrvCurrEduClsTeacherObjLst[i];
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            selectedKeys.value = [objvCurrEduClsTeacher.idCurrEduCls];
            //存入session
            clsPubLocalStorage.idCurrEduCls = arrvCurrEduClsTeacherObjLst[i].idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = arrvCurrEduClsTeacherObjLst[i].eduClsTypeId;
            clsPubLocalStorage.eduClsName = arrvCurrEduClsTeacherObjLst[i].eduClsName;
          } else {
            selectedKeys.value = [clsPubLocalStorage.idCurrEduCls];
          }
        }

        return arrvCurrEduClsTeacherObjLst;

        // strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsTeacherObjLst[i].idCurrEduCls}","${arrvCurrEduClsTeacherObjLst[i].eduClsName}","${arrvCurrEduClsTeacherObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsTeacherObjLst[i].eduClsName}</a></dd>`;
      }
      // $('#dlEduClsList').html(strhtml);
    } catch (e: any) {
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  //教学班学生
  async function Get_EduClsStuList(divName: HTMLDivElement) {
    try {
      const strWhereCond = ` stuId='${props.userId}' order by modifyDate Desc`;

      const arrvCurrEduClsStuObjLst = await vCurrEduClsStu_GetObjLstAsync(strWhereCond);
      // let strhtml = '';
      for (let i = 0; i < arrvCurrEduClsStuObjLst.length; i++) {
        const objvCurrEduClsStu = arrvCurrEduClsStuObjLst[i];
        if (i == 0) {
          if (clsPubLocalStorage.idCurrEduCls == '') {
            SetSpanHtmlInDivObj(divName, 'spnEduClsName', objvCurrEduClsStu.eduClsName);
            //存入session
            clsPubLocalStorage.idCurrEduCls = objvCurrEduClsStu.idCurrEduCls;
            clsPubLocalStorage.eduClsTypeId = objvCurrEduClsStu.eduClsTypeId;
            clsPubLocalStorage.eduClsName = objvCurrEduClsStu.eduClsName;
          } else {
            SetSpanHtmlInDivObj(divName, 'spnEduClsName', clsPubLocalStorage.eduClsName);
          }
        }

        // strhtml += `<dd><a onclick=EduCls_Click("${arrvCurrEduClsStuObjLst[i].idCurrEduCls}","${arrvCurrEduClsStuObjLst[i].eduClsName}","${arrvCurrEduClsStuObjLst[i].eduClsTypeId}")> ${arrvCurrEduClsStuObjLst[i].eduClsName}</a></dd>`;
      }
      return arrvCurrEduClsStuObjLst;
    } catch (e: any) {
      const strMsg = `根据条件获取相应的记录对象的列表不成功,${e}.`;
      alert(strMsg);
    }
  }

  async function SaveIdCurrEduCls(strIdCurrEduCls: string) {
    clsPubLocalStorage.idCurrEduCls = strIdCurrEduCls;
    if (IsNullOrEmpty(strIdCurrEduCls) == false) {
      selectedKeys.value = [strIdCurrEduCls];
    }
  }

  async function GetDefaIdCurrEduCls() {
    const strIdCurrEduCls = clsPubLocalStorage.idCurrEduCls;
    if (IsNullOrEmpty(strIdCurrEduCls) || strIdCurrEduCls == '0') {
      await SaveIdCurrEduCls(strIdCurrEduCls);
    }

    const objCurrEduCls = await CurrEduCls_GetObjByIdCurrEduClsAsync(strIdCurrEduCls);
    if (objCurrEduCls == null) return;
    clsPubLocalStorage.eduClsName = objCurrEduCls.eduClsName;
    console.log('eduClsName:', objCurrEduCls.eduClsName);
    IdCurrEduCls.value = objCurrEduCls.idCurrEduCls;
    //    return strIdCurrEduCls;
    Addi.value = objCurrEduCls.eduClsName;
  }

  onMounted(() => {
    if (props.divName != null) {
      getData(props.divName);
      GetDefaIdCurrEduCls();
    }
  });
</script>
@/ts/L3ForWApiExShare/DailyRunning/clsCurrEduClsExWApi
