export class clsPubSessionStorage {
  //////////////////////////////////////////////////////////用户List/////////////////////////////////////////////////////////////
  //获取用户Lst
  public static GetUserLst(): string {
    const strKey = 'UserLst';
    let strUserId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strUserId = sessionStorage.getItem(strKey) as string;
    } else {
      console.log('缓存用户Lst为空！');
    }
    return strUserId;
  }
  //设置用户Lst
  public static SetUserLst(strUserLst: string) {
    try {
      //清空本类缓存
      const strKey = 'UserLst';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strUserLst);
    } catch (e:any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  //获取分页当前页
  public static get PaperNum(): string {
    const strKey = 'PaperNum';
    let strPaperNum = '';
    if (Object.prototype.hasOwnProperty.call(localStorage, strKey)) {
      //缓存存在，直接返回
      strPaperNum = localStorage.getItem(strKey) as string;
    } else {
      console.log('缓存strEduClsTypeID为空！');
    }
    return strPaperNum;
  }

  //设置分页当前页
  public static set PaperNum(strPaperNum: string) {
    try {
      //清空本类缓存
      const strKey = 'PaperNum';
      localStorage.removeItem(strKey);
      //把值存入session
      localStorage.setItem(strKey, strPaperNum);
    } catch (e:any) {
      console.error(e);
      const strMsg = `存入缓存出错,${e}.`;
      throw strMsg;
    }
  }

  public static get applicationTypeId(): string {
    const strKey = 'applicationTypeId';
    let strApplicationTypeId = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strApplicationTypeId = sessionStorage.getItem(strKey) as string;
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
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strApplicationTypeId);
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

  //////////////////////////////////////////////////////////专业/////////////////////////////////////////////////////////////
  //获取用户ID
  public static get majorName(): string {
    const strKey = 'majorName';
    let strMajorName = '';
    if (Object.prototype.hasOwnProperty.call(sessionStorage, strKey)) {
      //缓存存在，直接返回
      strMajorName = sessionStorage.getItem(strKey) as string;
    } else {
      console.error('缓存majorName为空！');
    }
    return strMajorName;
  }

  //设置用户Id
  public static set majorName(strMajorName: string) {
    try {
      //清空本类缓存
      const strKey = 'majorName';
      sessionStorage.removeItem(strKey);
      //把值存入session
      sessionStorage.setItem(strKey, strMajorName);
    } catch (e: any) {
      const strMsg = `存入缓存出错,${e}.`;
      console.error(strMsg);
      throw strMsg;
    }
  }
}
