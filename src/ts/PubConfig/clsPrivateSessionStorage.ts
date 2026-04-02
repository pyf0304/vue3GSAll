export class clsPrivateSessionStorage {
  public static get viewId(): string {
    const strKey = 'viewId';
    let strViewId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strViewId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.viewId为空！');
    }
    return strViewId;
  }

  //设置教学班Id
  public static set viewId(strViewId: string) {
    try {
      //清空本类缓存
      const strKey = 'viewId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  public static get tabId(): string {
    const strKey = 'tabId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.tabId为空！');
    }
    return strTabId;
  }

  //设置教学班Id
  public static set tabId(strTabId: string) {
    try {
      //清空本类缓存
      const strKey = 'tabId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTabId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get tabName(): string {
    const strKey = 'tabName';
    let strTabName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.tabId为空！');
    }
    return strTabName;
  }

  //设置教学班Id
  public static set tabName(strTabName: string) {
    try {
      //清空本类缓存
      const strKey = 'tabName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTabName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get viewName(): string {
    const strKey = 'viewName';
    let strViewName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strViewName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.viewName为空！');
    }
    return strViewName;
  }

  //设置教学班Id
  public static set viewName(strViewName: string) {
    try {
      //清空本类缓存
      const strKey = 'viewName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 当前运行的CM工程Id
   */
  public static get cmPrjId(): string {
    const strKey = 'cmPrjId';
    let strCmPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCmPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存cmPrjId为空！');
    }
    return strCmPrjId;
  }

  /**
   * 当前运行的CM工程Id
   */
  public static set cmPrjId(strCmPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'cmPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCmPrjId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 当前运行的CM工程Id
   */
  public static get cmPrjName(): string {
    const strKey = 'cmPrjName';
    let strCmPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCmPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存cmPrjName为空！');
    }
    return strCmPrjId;
  }

  /**
   * 当前运行的CM工程Id
   */
  public static set cmPrjName(strCmPrjName: string) {
    try {
      //清空本类缓存
      const strKey = 'cmPrjName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCmPrjName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  /**
   * 当前运行的工程Id
   */
  public static get currPrjId(): string {
    const strKey = 'currPrjId';
    let strCurrPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存CurrPrjId为空！');
    }
    return strCurrPrjId;
  }

  /**
   * 当前运行的工程Id
   */
  public static set currPrjId(strCurrPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'currPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrPrjId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get currSelPrjId(): string {
    const strKey = 'currSelPrjId';
    let strCurrSelPrjId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrSelPrjId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currSelPrjId为空！');
    }
    return strCurrSelPrjId;
  }

  //设置教学班Id
  public static set currSelPrjId(strCurrSelPrjId: string) {
    try {
      //清空本类缓存
      const strKey = 'currSelPrjId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrSelPrjId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get currPrjDataBaseId(): string {
    const strKey = 'currPrjDataBaseId';
    let strCurrPrjDataBaseId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrPrjDataBaseId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currPrjDataBaseId为空！');
    }
    return strCurrPrjDataBaseId;
  }

  //设置教学班Id
  public static set currPrjDataBaseId(strCurrPrjDataBaseId: string) {
    try {
      //清空本类缓存
      const strKey = 'currPrjDataBaseId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrPrjDataBaseId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get prjDataBaseName(): string {
    const strKey = 'prjDataBaseName';
    let strPrjDataBaseName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strPrjDataBaseName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存prjDataBaseName为空！');
    }
    return strPrjDataBaseName;
  }

  //设置教学班Id
  public static set prjDataBaseName(strPrjDataBaseName: string) {
    try {
      //清空本类缓存
      const strKey = 'prjDataBaseName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strPrjDataBaseName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get currSelPrjName(): string {
    const strKey = 'currSelPrjName';
    let strCurrSelPrjName = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strCurrSelPrjName = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currSelPrjName为空！');
    }
    return strCurrSelPrjName;
  }

  //设置教学班Id
  public static set currSelPrjName(strCurrSelPrjName: string) {
    try {
      //清空本类缓存
      const strKey = 'currSelPrjName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strCurrSelPrjName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }
  /**
   * 界面中的主表Id
   *
   * */
  public static get viewInfo_MainTabId(): string {
    const strKey = 'viewInfo_MainTabId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.tabId为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set viewInfo_MainTabId(strViewInfoMainTabId: string) {
    try {
      //清空本类缓存
      const strKey = 'viewInfo_MainTabId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strViewInfoMainTabId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_TabName(): string {
    const strKey = 'prjTab_TabName';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = localStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_TabName为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set prjTab_TabName(strPrjTabTabName: string) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_TabName';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strPrjTabTabName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_FuncModuleAgcId(): string {
    const strKey = 'prjTab_FuncModuleAgcId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_FuncModuleAgcId为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set prjTab_FuncModuleAgcId(strPrjTabFuncModuleAgcId: string) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_FuncModuleAgcId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strPrjTabFuncModuleAgcId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get css_FldDispUnitStyle_CtlTypeId(): string {
    const strKey = 'css_FldDispUnitStyle_CtlTypeId';
    let strTabId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTabId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_TabName为空！');
    }
    return strTabId;
  }

  //界面中的主表Id
  public static set css_FldDispUnitStyle_CtlTypeId(strCssFldDispUnitStyleCtlTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'css_FldDispUnitStyle_CtlTypeId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strCssFldDispUnitStyleCtlTypeId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  /**
   * 界面中的主表Id
   *
   * */
  public static get prjTab_IsShare(): boolean {
    const strKey = 'prjTab_IsShare';
    let bolIsShare = false;
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      const strValue = localStorage.getItem(strKey);
      bolIsShare = strValue == '0' ? false : true;
    } else {
      console.error('缓存clsPrivateSessionStorage.prjTab_IsShare为空！');
    }
    return bolIsShare;
  }

  //界面中的主表Id
  public static set prjTab_IsShare(bolIsShare: boolean) {
    try {
      //清空本类缓存
      const strKey = 'prjTab_IsShare';
      localStorage.removeItem(strKey);
      //把值存入session

      localStorage.setItem(strKey, bolIsShare ? '1' : '0');
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get applicationTypeId(): string {
    const strKey = 'applicationTypeId';
    let strApplicationTypeId = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strApplicationTypeId = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存applicationTypeId为空！');
    }
    return strApplicationTypeId;
  }

  //设置教学班Id
  public static set applicationTypeId(strApplicationTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'applicationTypeId';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strApplicationTypeId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get applicationTypeName(): string {
    const strKey = 'applicationTypeName';
    let strApplicationTypeName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strApplicationTypeName = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存applicationTypeName为空！');
    }
    return strApplicationTypeName;
  }

  //设置教学班Id
  public static set applicationTypeName(strApplicationTypeName: string) {
    try {
      //清空本类缓存
      const strKey = 'applicationTypeName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strApplicationTypeName);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get funcModuleNameSim(): string {
    const strKey = 'funcModuleNameSim';
    let strFuncModuleNameSim = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strFuncModuleNameSim = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.funcModuleNameSim为空！');
    }
    return strFuncModuleNameSim;
  }

  //设置教学班Id
  public static set funcModuleNameSim(strFuncModuleNameSim: string) {
    try {
      //清空本类缓存
      const strKey = 'funcModuleNameSim';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strFuncModuleNameSim);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get funcModuleENName(): string {
    const strKey = 'funcModuleENName';
    let strFuncModuleENName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strFuncModuleENName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存clsPrivateSessionStorage.funcModuleENName为空！');
    }
    return strFuncModuleENName;
  }

  //设置教学班Id
  public static set funcModuleENName(strFuncModuleENName: string) {
    try {
      //清空本类缓存
      const strKey = 'funcModuleENName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strFuncModuleENName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  public static get currDataBaseTypeId(): string {
    const strKey = 'currDataBaseTypeId';
    let strCurrDataBaseTypeId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strCurrDataBaseTypeId = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存currDataBaseTypeId为空！');
    }
    return strCurrDataBaseTypeId;
  }

  //设置教学班Id
  public static set currDataBaseTypeId(strCurrDataBaseTypeId: string) {
    try {
      //清空本类缓存
      const strKey = 'currDataBaseTypeId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strCurrDataBaseTypeId);
    } catch (e: any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get regionTypeIdLst(): Array<string> {
    const strKey = 'regionTypeIdLst';
    let arrRegionTypeIdLst = new Array<string>();
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      const strArr = sessionStorage.getItem(strKey);
      if (strArr == null) return arrRegionTypeIdLst;
      if (strArr.length == 0) return arrRegionTypeIdLst;
      arrRegionTypeIdLst = strArr.split('|') as Array<string>;
      return arrRegionTypeIdLst;
    } else {
      return arrRegionTypeIdLst;
      //      console.error('缓存clsPrivateSessionStorage.regionTypeIdLst为空！');
    }
  }

  //设置教学班Id
  public static set regionTypeIdLst(arrRegionTypeIdLst: Array<string>) {
    try {
      //清空本类缓存
      const strKey = 'regionTypeIdLst';
      sessionStorage.removeItem(strKey);
      //把值存入session
      const strArr = arrRegionTypeIdLst.join('|');
      sessionStorage.setItem(strKey, strArr);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////主题Id/////////////////////////////////////////////////////////////
  //获取用户ID

  //////////////////////////////////////////////////////////主题Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get topicIdInTree(): string {
    const strKey = 'topicIdInTree';
    let strTopicId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTopicId = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存topicIdInTree为空！');
    }

    return strTopicId;
  }
  //设置用户Id
  public static set topicIdInTree(strTopicId: string) {
    try {
      //清空本类缓存
      const strKey = 'topicIdInTree';
      sessionStorage.removeItem(strKey);
      //把值存入session
      if (strTopicId == undefined) strTopicId = '';
      sessionStorage.setItem(strKey, strTopicId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //////////////////////////////////////////////////////////主题Id/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get topicName(): string {
    const strKey = 'topicName';
    let strTopicName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strTopicName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存topicName为空！');
    }
    return strTopicName;
  }
  //设置用户Id
  public static set topicName(strTopicName: string) {
    try {
      //清空本类缓存
      const strKey = 'topicName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTopicName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get paperRWId(): string {
    const strKey = 'paperRWId';
    let strPaperRWId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strPaperRWId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存paperId为空！');
    }
    return strPaperRWId;
  }
  //设置用户Id
  public static set paperRWId(strTopicId: string) {
    try {
      //清空本类缓存
      const strKey = 'paperRWId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTopicId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get paperId(): string {
    const strKey = 'paperId';
    let strPaperId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strPaperId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存paperId为空！');
    }
    return strPaperId;
  }
  //设置用户Id
  public static set paperId(strTopicId: string) {
    try {
      //清空本类缓存
      const strKey = 'paperId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTopicId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get questionsTypeId(): string {
    const strKey = 'questionsTypeId';
    let strQuestionsTypeId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strQuestionsTypeId = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存questionsTypeId为空！');
    }
    return strQuestionsTypeId;
  }
  //设置用户Id
  public static set questionsTypeId(strTopicId: string) {
    try {
      //清空本类缓存
      const strKey = 'questionsTypeId';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strTopicId);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get activeTab(): number {
    const strKey = 'activeTab';
    let intActiveTab = 0;
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      intActiveTab = Number(sessionStorage.getItem(strKey));
    } else {
      console.error('缓存questionsTypeId为空！');
    }
    return intActiveTab;
  }
  //设置用户Id
  public static set activeTab(intActiveTab: number) {
    try {
      //清空本类缓存
      const strKey = 'activeTab';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, intActiveTab.toString());
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get activeTabId_Paper(): string {
    const strKey = 'activeTabId_Paper';
    let strActiveTabId_Paper = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strActiveTabId_Paper = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存questionsTypeId为空！');
    }
    return strActiveTabId_Paper;
  }
  //设置用户Id
  public static set activeTabId_Paper(strActiveTabId_Paper: string) {
    try {
      //清空本类缓存
      const strKey = 'activeTabId_Paper';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strActiveTabId_Paper);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }

  //获取用户ID
  public static get activeTab_Topic(): number {
    const strKey = 'activeTab_Topic';
    let intActiveTab = 0;
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      intActiveTab = Number(sessionStorage.getItem(strKey));
    } else {
      console.error('缓存questionsTypeId为空！');
    }
    return intActiveTab;
  }
  //设置用户Id
  public static set activeTab_Topic(intActiveTab: number) {
    try {
      //清空本类缓存
      const strKey = 'activeTab_Topic';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, intActiveTab.toString());
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
}
