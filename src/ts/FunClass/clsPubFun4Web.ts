/*
 * 功能:为Web提供一些几个公共的功能函数
 * 版本:2019-08-07-01
 * 作者:潘以锋
 * */
import axios from 'axios';
import $ from 'jquery';
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';
import { Storage } from '@/utils/Storage';
import {
  GetInputObjInDivObj,
  GetInputObjInDivObjN,
  SetInputValueInDivObj,
  getTdObjByIdInDivObj,
} from '@/ts/PubFun/clsCommFunc4Ctrl';
import { UploadResponseData } from '@/ts/FunClass/UploadResponseData';
import { clsSysPara4WebApi } from '@/ts/PubConfig/clsSysPara4WebApi';
import { fa } from 'element-plus/es/locale';
import router from '@/router';

// declare const document: any;
export const PubFun4Web_ConstructorName = 'PubFun4Web';
export const sqlWApiController = 'SqlApi';
export const sqlWApiConstructorName = 'sqlWApi';
//下载方法
export function doDownLoad(filepath: string, filename: string) {
  const aLink = document.createElement('a');
  aLink.download = filename;
  aLink.href = filepath;
  console.log(filepath);
  document.body.appendChild(aLink);
  aLink.click();
  document.body.removeChild(aLink);
}

export class clsPubFun4Web {
  /*
   * 获取当前时间
   */
  public static getNowDate(): string {
    const date = new Date();
    let strMonth: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();

    let strHours: string | number = date.getHours();
    let strMinutes: string | number = date.getMinutes();
    let strSeconds: string | number = date.getSeconds();

    if (strMonth <= 9) {
      strMonth = `0${strMonth}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }
    if (strHours <= 9) {
      strHours = `0${strHours}`;
    }
    if (strMinutes <= 9) {
      strMinutes = `0${strMinutes}`;
    }
    if (strSeconds <= 9) {
      strSeconds = `0${strSeconds}`;
    }

    return `${date
      .getFullYear()
      .toString()}-${strMonth}-${strDate} ${strHours}:${strMinutes}:${strSeconds}`;
  }

  /*
   * 获取当前时间的年月日
   */
  public static getNowDate_ymd(): string {
    const date = new Date();
    let strMonth: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();

    if (strMonth <= 9) {
      strMonth = `0${strMonth}`;
    }
    if (strDate <= 9) {
      strDate = `0${strDate}`;
    }
    return `${date.getFullYear().toString()}-${strMonth}-${strDate}`;
  }

  public static async Refresh() {
    /*A*/
    console.error('刷新缓存完成！(in clsPubFun4Web.Refresh)');
    //CacheHelper.ClearSessionStorage();
  }
}

//判断图片附件格式、以及文件附件格式
export async function File_IsHasImgFile(divName: HTMLDivElement): Promise<boolean> {
  //图片

  const tdInputsWrapper = getTdObjByIdInDivObj(divName, 'tdInputsWrapper');
  //console.error(tdInputsWrapper);
  //var MaxInputs = 2;
  const y = tdInputsWrapper.childNodes.length;

  //循环得到的个数
  for (let i = 0; i < y; i++) {
    if (i == 0) {
      const txtUploadImgFile = GetInputObjInDivObj(divName, 'txtUploadImgFile');
      const file1 = txtUploadImgFile.value;
      console.log('file1:', file1);
      //console.error(file1);
      if (file1 != null && file1 != '') {
        const strs = file1.split('.');
        const suffix = strs[strs.length - 1];

        if (
          suffix != 'jpg' &&
          suffix != 'JPG' &&
          suffix != 'gif' &&
          suffix != 'GIF' &&
          suffix != 'png' &&
          suffix != 'PNG'
        ) {
          alert('请选择jpg、gif、png格式文件！');
          // const obj = document.getElementById('txtUploadImgFile');
          // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
          return true;
          //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
        }
      } else {
        return false;
      }
    } else if (i == 1) {
      const file2 = $('#txtUploadImgFile2').val()?.toString();

      if (file2 != null && file2 != '') {
        const strs = file2.split('.');
        const suffix = strs[strs.length - 1];

        if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
          alert('请选择jpg、gif、png格式文件！');
          return true;
        }
      }
    } else if (i == 2) {
      const file3 = $('#txtUploadImgFile3').val()?.toString();

      if (file3 != null && file3 != '') {
        const strs = file3.split('.');
        const suffix = strs[strs.length - 1];

        if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
          alert('请选择jpg、gif、png格式文件！');

          return true;
        }
      }
    }
  }
  return true;
  //上传
}

//上传方法
export async function File_doUploadBak1() {
  let bolIsSuccess = false;
  const formData = new FormData($('#uploadForm')[0] as HTMLFormElement);
  let strUrl = '@Url.Action("UploadFile", "testUploadPic")';
  if (strUrl == '') {
    //            strUrl = 'https://www.sh-tz.com/GS/ApitestUploadPic/';
    strUrl = GetUploadUrl('UploadFile');
  }
  $.ajax({
    url: strUrl,
    type: 'post',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success(returndata) {
      console.error(returndata.status);
      //成功/为空
      if (returndata.status == 0 || returndata.status == -1) {
        //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
        if (returndata.fileNameOne != '') {
          $('#hdnFileOne').val(returndata.fileNameOne);
          console.error('文件1已经上传');
          bolIsSuccess = true;
        }
        if (returndata.fileNameTwo != '') {
          $('#hdnFileTwo').val(returndata.fileNameTwo);
          console.error('文件2已经上传');
          bolIsSuccess = true;
        }
        if (returndata.fileNameThree != '') {
          $('#hdnFileThree').val(returndata.fileNameThree);
          console.error('文件3已经上传');
          bolIsSuccess = true;
        }

        console.error('进入：objPage.btnOKUpd_Click();');
        //   const objPage = new ReadTraining_pdf();
        //   objPage.btnOKUpd_Click();

        $('#div_PaperDetail').show();
        $('#divQuery').show();
        $('#div_SubViewpointList').show();
        $('#divEditRegion').hide();

        // var aa = JSON.stringify(returndata);

        //alert(returndata.message);
      } else {
        alert('请选择正确图片格式(in ReadTraining_pdf)');
      }
    },
    error(returndata) {
      alert(returndata);
    },
  });
  return bolIsSuccess;
}

export async function File_doUploadBak(divName: HTMLDivElement): Promise<boolean> {
  console.error('Enter doUpload');

  //       const formData = new FormData($('#uploadForm')[0]);
  const formElement = document.getElementById('uploadForm');
  let formData;
  if (formElement instanceof HTMLFormElement) {
    formData = new FormData(formElement);

    // Now you can work with the formData object
  } else {
    console.error('Element with id "uploadForm" is not an HTML form element.');
  }
  //        let strUrl = '@Url.Action("UploadFile", "testUploadPic")';
  let strUrl = GetUploadUrl('UploadFile');
  console.log('strUrl1:', strUrl);

  if (strUrl == '') {
    //            strUrl = 'https://www.sh-tz.com/GS/ApitestUploadPic/';
    strUrl = GetUploadUrl('UploadFile');
  }
  //const strUrl = getUploadPaperUrl();
  console.log('strUrl:', strUrl);
  $.ajax({
    url: strUrl,
    type: 'post',
    data: formData,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    success: (returndata) => {
      console.error('returndata.status');
      //console.error(returndata);
      console.error(returndata.status);
      //成功/为空
      if (returndata.status == 0 || returndata.status == -1) {
        //如果图片地址为空，那么是修改 则不用存放地址；
        if (returndata.fileNamePic != '') {
          SetInputValueInDivObj(divName, 'hdnpic', returndata.fileNamePic);
        }
        //如果文件地址为空，那么是修改 则不用存放地址；返回3个文件地址；
        if (returndata.fileNameOne != '') {
          SetInputValueInDivObj(divName, 'hdnFileOne', returndata.fileNameOne);
        }
        if (returndata.fileNameTwo != '') {
          SetInputValueInDivObj(divName, 'hdnFileTwo', returndata.fileNameTwo);
        }
        if (returndata.fileNameThree != '') {
          SetInputValueInDivObj(divName, 'hdnFileThree', returndata.fileNameThree);
        }

        // const editors = textboxio.get('#txtPaperContent');
        // const editor = editors[0];
        // $('#txtPaperContent').val(editor.content.get());

        // require(['../js/GraduateEduPublicPage/AddPaperEx.js'], function (Thesis) {
        //   var objPage = new Thesis.AddPaperEx();
        //   objPage.btnOKUpd_Click();
        // });
        return true;
      } else {
        alert('请选择正确文件!(in AddPaper.doUpload)');
        return false;
      }
    },
    error: (returndata) => {
      alert(returndata);
      return false;
    },
  });
  return false;
}
function GetUploadUrl(strAction: string): string {
  // let strUrl = `http://localhost:28524/ExamLibWA/testUploadPic/${strAction}/`; //GetUploadDir
  let strUrl = `http://192.168.1.15:7110/testUploadPic/${strAction}/`; //GetUploadDir
  if (clsSysPara4WebApi.bolIsLocalHost == false) {
    strUrl = `${clsSysPara4WebApi.CurrIPAddressAndPort}/${clsSysPara4WebApi.CurrPrx}/testUploadPic/${strAction}/`;
  }
  return strUrl;
}
export async function File_UploadFile(
  strUploadWebMainDir: string,
  strUploadWebSubDir: string,
  mySelectedFile: any,
): Promise<any> {
  // if (!this.selectedFile) {
  //   alert('请选择一个文件');
  //   return;
  // }
  const objUploadResponseData = new UploadResponseData();
  try {
    // 使用 axios 发送 Get 请求上传文件
    // let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
    // let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_Paper;
    // const currHostname = window.location.hostname;

    // if (currHostname == 'localhost') {
    //   strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
    // }
    // if (LiteratureTypeId.value == '05') {
    //   strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTraining;
    // }
    const token = Storage.get(ACCESS_TOKEN_KEY);
    //console.error('token:', token);
    const config = {
      headers: {
        Authorization: `${token}`,
      },
      params: {
        strUploadWebMainDir,
        strUploadWebSubDir,
      },
    };
    const strUrl = GetUploadUrl('GetUploadDir');

    const response = await axios.get(strUrl, config);

    // 处理上传成功后的响应
    console.log('目录设置成功', response.data);
  } catch (error) {
    // 处理上传失败时的错误
    console.error('目录设置失败', error);
    return false;
  }

  if (mySelectedFile == null) {
    alert('请选择一个文件');
    return false;
  }
  console.log('mySelectedFile.value:', mySelectedFile);
  // // 创建 FormData 对象
  const formData = new FormData();
  formData.append('file', mySelectedFile); // 将文件添加到 FormData
  // const formElement = document.getElementById('uploadForm');
  // let formData;
  // if (formElement instanceof HTMLFormElement) {
  //   formData = new FormData(formElement);

  //   // Now you can work with the formData object
  // } else {
  //   console.error('Element with id "uploadForm" is not an HTML form element.');
  // }

  const strUrl = GetUploadUrl('UploadFile');
  console.log('strUrl1:', strUrl);

  try {
    // 使用 axios 发送 POST 请求上传文件
    const response = await axios.post(strUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 设置请求头，必须为multipart/form-data
      },
    });

    // 处理上传成功后的响应
    console.log('文件上传成功', response.data);
    if (response.data.success == true) {
      objUploadResponseData.isHasFile = true;
      objUploadResponseData.fileNamePic = response.data.fileNamePic;
      objUploadResponseData.fileNameOne = response.data.fileNameOne;
      objUploadResponseData.fileNameTwo = response.data.fileNameTwo;
      objUploadResponseData.fileNameThree = response.data.fileNameThree;
      objUploadResponseData.success = true;
    }
    return objUploadResponseData;
  } catch (error) {
    // 处理上传失败时的错误
    console.error('文件上传失败', error);
    return objUploadResponseData;
  }
}
export async function File_UploadImgFile(
  strUploadWebMainDir: string,
  strUploadWebSubDir: string,
  mySelectedFile: any,
): Promise<any> {
  // if (!this.selectedFile) {
  //   alert('请选择一个文件');
  //   return;
  // }
  const objUploadResponseData = new UploadResponseData();
  try {
    // 使用 axios 发送 Get 请求上传文件
    // let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
    // let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_Paper;
    // const currHostname = window.location.hostname;

    // if (currHostname == 'localhost') {
    //   strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
    // }
    // if (LiteratureTypeId.value == '05') {
    //   strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTraining;
    // }
    const token = Storage.get(ACCESS_TOKEN_KEY);
    //console.error('token:', token);
    const config = {
      headers: {
        Authorization: `${token}`,
      },
      params: {
        strUploadWebMainDir,
        strUploadWebSubDir,
      },
    };
    const strUrl = GetUploadUrl('GetUploadDir');
    const response = await axios.get(strUrl, config);

    // 处理上传成功后的响应
    console.log('目录设置成功', response.data);
  } catch (error) {
    // 处理上传失败时的错误
    console.error('目录设置失败', error);
    return false;
  }

  if (mySelectedFile == null) {
    alert('请选择一个文件');
    return false;
  }
  console.log('mySelectedFile.value:', mySelectedFile);
  // // 创建 FormData 对象
  const formData = new FormData();
  formData.append('file', mySelectedFile); // 将文件添加到 FormData
  // const formElement = document.getElementById('uploadForm');
  // let formData;
  // if (formElement instanceof HTMLFormElement) {
  //   formData = new FormData(formElement);

  //   // Now you can work with the formData object
  // } else {
  //   console.error('Element with id "uploadForm" is not an HTML form element.');
  // }

  const strUrl = GetUploadUrl('UploadImgFile');
  console.log('strUrl1:', strUrl);

  try {
    // 使用 axios 发送 POST 请求上传文件
    const response = await axios.post(strUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 设置请求头，必须为multipart/form-data
      },
    });

    // 处理上传成功后的响应
    console.log('文件上传成功', response.data);
    if (response.data.success == true) {
      objUploadResponseData.isHasFile = true;
      objUploadResponseData.imgFilePathOne = response.data.imgFilePathOne;
      objUploadResponseData.imgFilePathTwo = response.data.imgFilePathTwo;
      objUploadResponseData.imgFilePathThree = response.data.imgFilePathThree;
    }
    return objUploadResponseData;
  } catch (error) {
    // 处理上传失败时的错误
    console.error('文件上传失败', error);
    return objUploadResponseData;
  }
}
export async function File_IsHasImgFile1(divName: HTMLDivElement): Promise<boolean> {
  const txtUploadImgFile = GetInputObjInDivObj(divName, 'txtUploadImgFile');
  const pic1 = txtUploadImgFile.value;
  console.log('txtUploadImgFile:', txtUploadImgFile);
  // console.log('txtUploadImgFile:', txtUploadImgFile.files);

  if (pic1 == '') return false;
  if (pic1 != '') {
    const strs = pic1.split('.');
    const suffix = strs[strs.length - 1];

    if (suffix != 'jpg' && suffix != 'gif' && suffix != 'png') {
      alert('请选择图片格式！');

      // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
      return false;
      //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
    }
  }

  return true;
}
export async function File_IsHasFile(
  divName: HTMLDivElement,
  fileExtLst: string,
): Promise<boolean> {
  if (fileExtLst == '') {
    alert('扩展名列表不能为空！');
  }
  const arrExt0 = fileExtLst.split(',');
  const arrExt = arrExt0.map((x) => x.replace('.', ''));
  console.log('arrExt', arrExt);
  //文件
  const tdInputsWrapper = getTdObjByIdInDivObj(divName, 'tdInputsWrapper');
  //var MaxInputs = 2;
  const y = tdInputsWrapper.childNodes.length;

  //循环得到的个数
  for (let i = 0; i < y; i++) {
    if (i == 0) {
      const txtUploadfile = GetInputObjInDivObj(divName, 'txtUploadfile');
      const file1 = txtUploadfile.value;

      console.error('file1');
      console.error(file1);
      if (file1 != undefined && file1 != '') {
        const strs = file1.split('.');
        const suffix = strs[strs.length - 1];
        // if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
        if (arrExt.indexOf(suffix) == -1) {
          alert(`请选择:${fileExtLst}格式文件！`);
          //  obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
          return false;
          //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
        }
      } else {
        return false;
      }
    } else if (i == 1) {
      const txtUploadfile2 = GetInputObjInDivObjN(divName, 'txtUploadfile2');
      if (txtUploadfile2 != null) {
        const file2 = txtUploadfile2.value;

        if (file2 != undefined && file2 != '') {
          const strs = file2.split('.');
          const suffix = strs[strs.length - 1];

          // if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
          if (arrExt.indexOf(suffix) == -1) {
            alert(`请选择:${fileExtLst}格式文件！`);
            // obj.outerHTML = obj.outerHTML; //这样清空，在IE8下也能执行成功
            return false;
            //obj.select(); document.selection.clear();这种方法也可以清空 input file 的value值
          }
        }
      }
    } else if (i == 2) {
      const txtUploadfile3 = GetInputObjInDivObjN(divName, 'txtUploadfile3');
      if (txtUploadfile3 != null) {
        const file3 = txtUploadfile3.value;

        if (file3 != undefined && file3 != '') {
          const strs = file3.split('.');
          const suffix = strs[strs.length - 1];

          // if (suffix != 'doc' && suffix != 'docx' && suffix != 'pdf') {
          if (arrExt.indexOf(suffix) == -1) {
            alert(`请选择:${fileExtLst}格式文件！`);

            return false;
          }
        }
      }
    }
  }
  //上传
  // await this.doUpload();
  return true;
}

export async function Canvas_UploadFile(
  strUploadWebMainDir: string,
  strUploadWebSubDir: string,
  formData: FormData,
): Promise<boolean> {
  // if (!this.selectedFile) {
  //   alert('请选择一个文件');
  //   return;
  // }
  try {
    // 使用 axios 发送 Get 请求上传文件
    // let strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir;
    // let strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_Paper;
    // const currHostname = window.location.hostname;

    // if (currHostname == 'localhost') {
    //   strUploadWebMainDir = clsSysPara4WebApi.spUploadWebMainDir_Local;
    // }
    // if (LiteratureTypeId.value == '05') {
    //   strUploadWebSubDir = clsSysPara4WebApi.spUploadWebSubDir_ReadTraining;
    // }
    const token = Storage.get(ACCESS_TOKEN_KEY);
    //console.error('token:', token);
    const config = {
      headers: {
        Authorization: `${token}`,
      },
      params: {
        strUploadWebMainDir,
        strUploadWebSubDir,
      },
    };
    const strUrl = GetUploadUrl('UpLoadUserCanvasPic');
    // $.ajax({
    //   url: "@Url.Action("UpLoadUserCanvasPic", "testUploadPic")",//服务器地址

    const response = await axios.get(strUrl, config);

    // 处理上传成功后的响应
    console.log('目录设置成功', response.data);
  } catch (error) {
    // 处理上传失败时的错误
    console.error('目录设置失败', error);
    return false;
  }

  // // 创建 FormData 对象
  // const formData = new FormData();
  // formData.append('file', mySelectedFile.value); // 将文件添加到 FormData

  const strUrl = GetUploadUrl('UploadFile');
  console.log('strUrl1:', strUrl);

  try {
    // 使用 axios 发送 POST 请求上传文件
    const response = await axios.post(strUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // 设置请求头，必须为multipart/form-data
      },
    });

    // 处理上传成功后的响应
    console.log('文件上传成功', response.data);
    return true;
  } catch (error) {
    // 处理上传失败时的错误
    console.error('文件上传失败', error);
    return false;
  }
}

export function reLogin() {
  router.push('/index');
}
