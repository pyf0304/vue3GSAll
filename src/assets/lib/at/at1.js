window.onload = function () {
    //at.js中定义了getById函数
    var textarea = getById("textarea");
    var hiddenObj = getById("div");
    var atList = getById("info");
    var rest = getById("rest");
    at(textarea, hiddenObj, atList, rest);

}

//获取以start作为开始 以end作为结尾的所有字符串
/* var a='start111111endstart222222endasdfasdfasdfakjsfhaksdf'+
       'start333333endstart444444end66666666666sdfghsdfgsdg';
  console.log(a.match(/start.*?end/img).join("=").replace(/start/g,"").replace(/end/g,"").split("="));  */

/*
  i （ignore case）执行对大小写不敏感的匹配。
  g （global search）执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
  m （multiline）执行多行匹配。
  a.*b，它将会匹配最长的以a开始，以b结束的字符串
  a.*?b 匹配最短的，以a开始，以b结束的字符串 ?涉及到贪婪模式
  获取source中以start作为开始 以end作为结尾的所有字符串
 */
function getSubStrArr(source, start, end) {
    var oReg = new RegExp(start + '.*?' + end, 'img');
    var oRegStart = new RegExp(start, 'g');
    var oRegEnd = new RegExp(end, 'g');

    return source.match(oReg)
        .join("=")
        .replace(oRegStart, "")
        .replace(oRegEnd, "")
        .split("=");
}


//20170302 add 获取@的对象
function onClickGetAtObject() {
    var inputValue = textarea.value;
    console.log("inputValue: " + inputValue);

    var atObjectArr = getSubStrArr(inputValue, "@", " ");
    console.log("atObjectArr:");
    console.log(atObjectArr);
}




/************************************************************************************************/
function getById(eleId) {
    return document.getElementById(eleId);
}

//获取光标当前位置
function posCursor(obj) {
    var isIE = !(!document.all);
    var end = 0;
    if (isIE) {
        //获取用户选择区域 sTextRange.text返回选择的文本
        var sTextRange = document.selection.createRange();
        if (sTextRange.parentElement() == obj) {//光标在此obj对象中
            var oTextRange = document.body.createTextRange();
            //moveToElementText 移动oTextRange到指定对象
            oTextRange.moveToElementText(obj);
            //compareEndPoints 比较两个textRange对象的开始点和结束点的位置 startToEnd：比较当前TextRange的开始点与rangeToCompare的结束点。
            for (end = 0; oTextRange.compareEndPoints('StartToEnd', sTextRange) < 0; end++) {
                //移动一个字符
                oTextRange.moveStart('character', 1);
            }
            for (var i = 0; i < end; i++) {
                if (obj.value.charAt(i) == "\n") {
                    end++;
                }
            }
        }
    } else {
        end = obj.selectionEnd;
    }

    return end;
}

//定位光标
function cursorHandle(obj, pos) {
    if (navigator.appName == "Microsoft Internet Explorer") {
        var range = obj.createTextRange();
        range.move('character', pos);
        range.select();
    } else {
        obj.setSelectionRange(pos, pos);
        obj.focus();
    }
}

function hasClass(ele, cls) {
    //\s 匹配任何空白字符，包括空格、制表符、换页符等等
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className += ' ' + cls;
    }
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//获取具有相应类的li的索引
function getLiIndex(arr, cls) {
    for (var i = 1; i < arr.length; i++) {
        if (hasClass(arr[i], cls)) {
            return i;
        }
    }

    return false;
}

//统计字符串总长度 中文字符为2 英文字符以及数字为1
function getLength(obj) {
    var realLength = 0;
    var len = obj.length;
    var charCode = -1;

    for (var i = 0; i < len; i++) {
        //charCodeAt方法返回一个整数，代表指定位置字符的Unicode编码。
        charCode = obj.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {//英文字符以及数字
            realLength += 1;
        } else {
            realLength += 2;
        }
    }

    return realLength;
}

//enter选择list中某一项时  更新textarea的value
function handleString(index, textarea, listClick, atList, objString, atLocation, cursorPosition) {
    //将textarea分成三块，@之前的area1、@+联系人+' '的area2、光标之后的area3
    var area1 = objString.substr(0, atLocation);
    //@内容后附加空格标识
    var area2 = '@' + listClick[index].innerHTML + ' ';
    var area3 = objString.substr(cursorPosition, getLength(objString) - cursorPosition);

    //更新textarea的value值
    textarea.value = area1 + area2 + area3;

    //不再显示at对话框
    atList.innerHTML = "";
    atList.style.display = "none";

    //定位光标
    var position = area1.length + area2.length;
    cursorHandle(textarea, position);
}

//20170302 返回obj位置
function getXY(obj) {
    //getBoundingClientRect()用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性
    var rect = obj.getBoundingClientRect();
    //获取滑动条位置
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
    var isIE = !(!document.all) ? 2 : 0;

    var position = {};
    position.left = rect.left - isIE + scrollLeft;
    position.top = rect.top - isIE + scrollTop;

    return position;
}

//根据at和光标间的字符串动态筛选at对象列表 只显示包含光标和@间字符串的那些对象
function dynamicDisplayAtList(indexString, atList, textarea, objString, atLocation, cursorPosition) {
    var list = ["选择昵称6666666", "某某2某某某某", "某某33某某", "某444某某某", "某某某55某某某", "某6某某", "某某某某7某某", "某某88某某某", "某某99某某999"];

    if (indexString != undefined && indexString != "" && indexString != "@") {
        //去掉第一个字符
        indexString = indexString.substring(1, indexString.length);

        for (var i = 0; i < list.length; i++) {
            var temp = list[i];
            if (temp.indexOf(indexString) == -1) {
                list.splice(i, 1);
                i--;
            }
        }
    }

    var dom = "";
    if (list != undefined && list.length > 0) {
        dom = indexString.length > 1 ? '<li class="list-title">选择最近@的人或直接输入</li>' : '<li class="list-title">选择昵称或轻敲空格完成输入</li>';
        for (var i = 0; i < list.length; i++) {
            dom += '<li class="list-content">' + list[i] + '</li>';
        }
    } else {
        dom = '<li class="list-title">无匹配的可选项</li>';
    }

    atList.innerHTML = dom;//设置@的对象列表

    var listClick = atList.getElementsByTagName('li');
    if (listClick != undefined && listClick.length > 1) {
        listClick[1].className = 'list-content list-active';
        for (var i = 1, len = listClick.length; i < len; i++) {
            //鼠标经过选项上方的事件 闭包 确保onmouseover函数被回调时，i还是对应鼠标经过的那个选项
            listClick[i].onmouseover = (function (i) {
                return function () {
                    for (var l = 1; l < len; l++) {
                        removeClass(listClick[l], 'list-active');
                    }
                    addClass(listClick[i], 'list-active');
                };
            })(i);

            //选项的鼠标点击事件
            listClick[i].onclick = (function (i) {
                return function () {
                    handleString(i, textarea, listClick, atList, objString, atLocation, cursorPosition);
                }
            })(i);
        }//for
    }
}

//实现textarea键盘按起事件以及鼠标按起事件
function objChange(textarea, hiddenObj, atList, rest, event) {
    //取值
    var objString = textarea.value;
    //记录光标当前位置
    var cursorPosition = posCursor(textarea);
    //光标之前的字符串
    var beforeCursorString = objString.substr(0, cursorPosition);
    //记录@在光标前出现的最近位置
    var atLocation = beforeCursorString.lastIndexOf("@");
    //记录光标和光标前最近的@之间的字符串，记为标识符，判断其是否含有空格
    var indexString = objString.substr(atLocation, cursorPosition - atLocation);
    //记录从开始到光标前最近的@之间的字符串，用来定位at对话框的位置
    var positionString = objString.substr(0, atLocation);


    if (atList.style.display == "block") {//at对话框是显示状态
        //根据输入 动态显示at对话框中的选项列表
        dynamicDisplayAtList(indexString, atList, textarea, objString, atLocation, cursorPosition);

        var key = event.keyCode;
        var listClick = atList.getElementsByTagName("li");
        var len = listClick.length;

        if (key == 40) {//向下箭头 更换@对象
            //将光标定位@对话框出现时的位置  否则在按下向下箭头时  光标会移动到textarea中文本的末尾处
            cursorHandle(textarea, getById("cursor").value);
            var next = getLiIndex(listClick, "list-active") == len - 1 ? 0 : getLiIndex(listClick, "list-active");
            for (var i = 1; i < len; i++) {
                removeClass(listClick[i], "list-active");
            }
            addClass(listClick[next + 1], "list-active");
            return false;
        } else if (key == 38) {//向上箭头
            cursorHandle(textarea, getById("cursor").value);
            var prev = getLiIndex(listClick, "list-active") == 1 ? len : getLiIndex(listClick, "list-active");
            for (var i = 1; i < len; i++) {
                removeClass(listClick[i], "list-active");
            }
            addClass(listClick[prev - 1], "list-active");
            return false;
        } else if (key == 13) {//enter
            handleString(getLiIndex(listClick, "list-active"), textarea, listClick, atList, objString, atLocation, cursorPosition);
            return false;
        }

    }

    //发现有@ 并且@和光标间没有空格和换行时 进行相应处理
    if (beforeCursorString.indexOf('@') != -1 && indexString.indexOf(' ') == -1
        && indexString.indexOf('\n') == -1) {
        //@开始
        getById("cursor").value = posCursor(textarea);

        //设置at对象对话框
        //根据输入 动态显示at对话框中的选项列表
        dynamicDisplayAtList(indexString, atList, textarea, objString, atLocation, cursorPosition);


        //显示at对象的对话框
        atList.style.display = 'block';
        hiddenObj.innerHTML = positionString.replace(/\n/g, "<br/>") + '<span id="at">@</span>';
        var at = getById("at");

        atList.style.left = getXY(at).left + 2 + 'px';
        atList.style.top = getXY(at).top - textarea.scrollTop + 18 + 'px';
    } else {
        atList.innerHTML = "";
        atList.style.display = 'none';
    }
}

//定义textarea 键盘按起事件以及鼠标按起事件
function at(textarea, hiddenObj, atList, rest) {
    //addEventListener属于W3C标准方法，但依然无法在IE下运行．IE不支持该方法
    if (textarea.addEventListener) {
        textarea.addEventListener("keyup", function (event) {
            objChange(textarea, hiddenObj, atList, rest, event);
        }, false);
        textarea.addEventListener("mouseup", function (event) {
            objChange(textarea, hiddenObj, atList, rest, event);
        }, false);
    } else if (textarea.attachEvent) {
        textarea.attachEvent('onkeyup', function (event) {
            objChange(textarea, hiddenObj, atList, rest, event);
        });
        textarea.attachEvent('onmouseup', function (event) {
            objChange(textarea, hiddenObj, atList, rest, event);
        });
    }
}