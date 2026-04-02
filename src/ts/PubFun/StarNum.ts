import $ from 'jquery';
export function initPingFen(obj: any) {
  let aurl = '',
    divname = '',
    inputname = '',
    starnum = 0,
    startnum = -1,
    sSta = true,
    textTure = false;
  if (obj.imgurl != undefined && obj.imgurl != '' && obj.imgurl != null) {
    aurl = obj.imgurl;
  }
  if (obj.divname != undefined && obj.divname != '' && obj.divname != null) {
    divname = obj.divname;
  }
  if (obj.inputname != undefined && obj.inputname != '' && obj.inputname != null) {
    inputname = obj.inputname;
  }
  if (obj.startnum != undefined && obj.startnum != '' && obj.startnum != null) {
    startnum = obj.startnum;
  }
  if (obj.starnum != undefined && obj.starnum != '' && obj.starnum != null) {
    (starnum = obj.starnum), (sSta = true);
  }
  if (obj.op != undefined && obj.op != '' && obj.op != null) {
    if (obj.op == true) {
      sSta = false;
    }
  }
  if (obj.startnum == 0) {
    startnum = 0;
  }
  if (obj.textTure == true) {
    textTure = true;
  }
  const oDiv = document.getElementById(divname) as HTMLDivElement;
  if (oDiv == null) {
    const strMsg = `div名:[${divname}] 在本页面不存在，请检查！`;
    return;
  }
  oDiv.classList.add('startnum-pingfendiv');
  let sTest = '';
  if (starnum != 0 && starnum != null && starnum != undefined) {
    sTest += '<ul>';
    for (let i = 0; i < starnum; i++) {
      sTest += '<li></li>';
    }
    sTest += '</ul>';
    textTure = false;
  } else {
    sTest = '<ul><li></li><li ></li ><li ></li><li></li><li ></li></ul>';
  }
  oDiv.innerHTML = sTest;
  const tmp = document.createElement('span');
  const sText = document.createElement('span');
  sText.classList.add('sText');
  const txt_AppraiseContent = document.getElementById('txtAppraiseContent') as HTMLInputElement;

  const aLi = oDiv.getElementsByTagName('li');
  const i = 0;
  let kaiguan = 0;
  let SbackGrounfurlD = '';
  let SbackGrounfurlS = '';
  if (aurl == undefined || aurl == '' || aurl == null) {
    SbackGrounfurlD = `url('/lib/startnum-1.0/images/star.gif') no-repeat 0 -29px`;
    SbackGrounfurlS = `url('/lib/startnum-1.0/images/star.gif') no-repeat 0   0px`;
  } else {
    //SbackGrounfurD = "url(" + aurl + "/Scripts/startnum-1.0/images/star.gif) no-repeat 0 -29px";
    //SbackGrounfurlS = "url(" + aurl + "/Scripts/startnum-1.0/images/star.gif) no-repeat 0 0px"
    SbackGrounfurlD = `url('/lib/startnum-1.0/images/star.gif') no-repeat 0 -29px`;
    SbackGrounfurlS = `url('/lib/startnum-1.0/images/star.gif') no-repeat 0 0px`;
  }
  for (let i = 0; i < aLi.length; i++) {
    aLi[i].setAttribute('index', i.toString());
    if (startnum != -1 && sSta) {
      $(function () {
        for (i = 0; i < startnum; i++) {
          aLi[i].style.background = SbackGrounfurlD;
        }
      });
    } else {
      if (!sSta) {
        $(function () {
          kaiguan = startnum;
          for (i = 0; i < startnum; i++) {
            aLi[i].style.background = SbackGrounfurlD;
          }
        });
      } else {
        aLi[i].style.background = SbackGrounfurlS;
      }
      aLi[i].onmouseover = function () {
        for (i = 0; i < aLi.length; i++) {
          const thisLi = this as HTMLLIElement;
          const myIndex = thisLi.getAttribute('index');
          const intIndex = Number(myIndex);
          if (i <= intIndex) {
            aLi[i].style.background = SbackGrounfurlD;
          } else {
            aLi[i].style.background = SbackGrounfurlS;
          }
        }
      };
      aLi[i].onmouseout = function () {
        if (kaiguan == 0) {
          for (i = 0; i < aLi.length; i++) {
            aLi[i].style.background = SbackGrounfurlS;
          }
        } else {
          const thisLi = this as HTMLLIElement;
          const myIndex = thisLi.getAttribute('index');
          const intIndex = Number(myIndex);
          if (intIndex >= kaiguan) {
            for (i = aLi.length - 1; i >= kaiguan; i--) {
              aLi[i].style.background = SbackGrounfurlS;
            }
          } else {
            for (i = 0; i < kaiguan; i++) {
              aLi[i].style.background = SbackGrounfurlD;
            }
          }
        }
      };
      aLi[i].onclick = function () {
        const thisLi = this as HTMLLIElement;
        const myIndex = thisLi.getAttribute('index');
        const intIndex = Number(myIndex);
        kaiguan = intIndex + 1;
        if (textTure) {
          switch (kaiguan) {
            case 1:
              sText.innerHTML = '非常差';
              txt_AppraiseContent.value = '非常差';
              break;
            case 2:
              sText.innerHTML = '差';
              txt_AppraiseContent.value = '差';
              break;
            case 3:
              sText.innerHTML = '一般';
              txt_AppraiseContent.value = '一般';
              break;
            case 4:
              sText.innerHTML = '好';
              txt_AppraiseContent.value = '好';
              break;
            case 5:
              sText.innerHTML = '非常好';
              txt_AppraiseContent.value = '非常好';
              break;
            default:
              sText.innerHTML = '未评价';
              break;
          }
          oDiv.appendChild(sText);
        }
        if (inputname == undefined || inputname == '' || inputname == null) {
          tmp.innerHTML =
            '<input type="text" id="' +
            divname +
            '"name="' +
            divname +
            '" value="' +
            kaiguan +
            '" style="display :none" />';
          oDiv.appendChild(tmp);
          $('#' + divname).val(kaiguan);
        } else {
          tmp.innerHTML =
            '<input type="text" id="' +
            inputname +
            '"name="' +
            inputname +
            '" value="' +
            kaiguan +
            '" style="display :none" />';
          oDiv.appendChild(tmp);
          $('#' + inputname).val(kaiguan);
        }
      };
    }
  }
}
