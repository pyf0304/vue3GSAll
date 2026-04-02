function initPingFen(obj) {
    var aurl = "",
        divname = "",
        inputname = "",
        starnum = "",
        startnum = -1,
        sSta = true,
        textTure = false;
    if (obj.imgurl != undefined && obj.imgurl != "" && obj.imgurl != null) {
        aurl = obj.imgurl
    }
    if (obj.divname != undefined && obj.divname != "" && obj.divname != null) {
        divname = obj.divname
    }
    if (obj.inputname != undefined && obj.inputname != "" && obj.inputname != null) {
        inputname = obj.inputname
    }
    if (obj.startnum != undefined && obj.startnum != "" && obj.startnum != null) {
        startnum = obj.startnum
    }
    if (obj.starnum != undefined && obj.starnum != "" && obj.starnum != null) {
        starnum = obj.starnum,
            sSta = true;
    }
    if (obj.op != undefined && obj.op != "" && obj.op != null) {
        if (obj.op == true) { sSta = false }
    }
    if (obj.startnum == 0) {
        startnum = 0
    }
    if (obj.textTure == true) {
        textTure = true;
    }
    var oDiv = document.getElementById(divname);
    oDiv.classList.add("startnum-pingfendiv");
    var sTest = '';
    if (starnum != "" && starnum != null && starnum != undefined) {
        sTest += '<ul>';
        for (var i = 0; i < starnum; i++) { sTest += '<li></li>'; }
        sTest += '</ul>';
        textTure = false;
    } else {
        sTest = '<ul><li></li><li ></li ><li ></li><li></li><li ></li></ul>';
    }
    oDiv.innerHTML = sTest;
    var tmp = document.createElement("span");
    var sText = document.createElement("span");
    sText.classList.add("sText");
    var txt_AppraiseContent = document.getElementById("txtAppraiseContent");

    var aLi = oDiv.getElementsByTagName("li");
    var i = 0;
    var kaiguan = 0;
    var SbackGrounfurlD = "";
    var SbackGrounfurlS = "";
    if (aurl == undefined || aurl == "" || aurl == null) {
        SbackGrounfurD = "url(/GraduateStudyWebApp/lib/startnum-1.0/images/star.gif) no-repeat 0 -29px";
        SbackGrounfurlS = "url(/GraduateStudyWebApp/lib/startnum-1.0/images/star.gif) no-repeat 0   0px"
    } else {
        //SbackGrounfurD = "url(" + aurl + "/Scripts/startnum-1.0/images/star.gif) no-repeat 0 -29px";
        //SbackGrounfurlS = "url(" + aurl + "/Scripts/startnum-1.0/images/star.gif) no-repeat 0 0px"
        SbackGrounfurD = "url(/GraduateStudyWebApp/lib/startnum-1.0/images/star.gif) no-repeat 0 -29px";
        SbackGrounfurlS = "url(/GraduateStudyWebApp/lib/startnum-1.0/images/star.gif) no-repeat 0 0px"
    }
    for (i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        if (startnum != -1 && sSta) {
            $(function () {
                for (i = 0; i < startnum; i++) {
                    aLi[i].style.background = SbackGrounfurD;
                }
            })
        } else {

            if (!sSta) {
                $(function () {
                    kaiguan = startnum;
                    for (i = 0; i < startnum; i++) {
                        aLi[i].style.background = SbackGrounfurD;
                    }
                })
            }
            else {
                aLi[i].style.background = SbackGrounfurlS;
            }
            aLi[i].onmouseover = function () {
                for (i = 0; i < aLi.length; i++) {
                    if (i <= this.index) {
                        aLi[i].style.background = SbackGrounfurD
                    } else {
                        aLi[i].style.background = SbackGrounfurlS
                    }
                }
            };
            aLi[i].onmouseout = function () {
                if (kaiguan == 0) {
                    for (i = 0; i < aLi.length; i++) {
                        aLi[i].style.background = SbackGrounfurlS
                    }
                } else {
                    if (this.index >= kaiguan) {
                        for (i = aLi.length - 1; i >= kaiguan; i--) {
                            aLi[i].style.background = SbackGrounfurlS
                        }
                    } else {
                        for (i = 0; i < kaiguan; i++) {
                            aLi[i].style.background = SbackGrounfurD
                        }
                    }
                }
            };
            aLi[i].onclick = function () {
                kaiguan = this.index + 1;
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
                if (inputname == undefined || inputname == "" || inputname == null) {
                    tmp.innerHTML = '<input type="text" id="' + divname + '"name="' + divname + '" value="' + kaiguan + '" style="display :none" />';
                    oDiv.appendChild(tmp);
                    $("#" + divname).val(kaiguan)
                } else {
                    tmp.innerHTML = '<input type="text" id="' + inputname + '"name="' + inputname + '" value="' + kaiguan + '" style="display :none" />';
                    oDiv.appendChild(tmp);
                    $("#" + inputname).val(kaiguan)
                }
            }
        }

    }
};