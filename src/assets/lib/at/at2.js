
//全局定义一个变量为光标位置
var cursor;
var textapp = getById("app");

function getById(eleId) {
    return document.getElementById(eleId);
}
//文本框绑定keyup事件，检测输入
textapp.addEventListener('keyup', function (e) {

    // 当@选框存在时，判断键盘上移，下移，以及回车选中事件
    if (selectuser.style.display == 'block') {
        var code = e.keyCode;
        if (code == 38) {
            // 上移
            preCode();
            return;
        } else if (code == 40) {
            // 下移
            nextCode();
            return;
        } else if (code == 13) {
            //回车选中@人
            var textname = '';
            $('#selectlist').find('li').each(function () {
                if ($(this).hasClass('hover')) {
                    textname = $(this).html();
                }
            });
            //@完后文本框显示内容
            $('#app').val(getText($('#app').val(), cursor, textname));
            //添加后光标的位置
            var n = textname.length + 1 + cursor;
            //设置光标的位置
            textapp.setSelectionRange(n, n);
            //选中后隐藏@选框
            $('#selectuser').hide();
            return;
        }
    }

    //获取光标
    cursor = textapp.selectionStart;
    // 当前光标所在位置的前一位为@字符，出现@选框
    if (textapp.value.substring(0, cursor).charAt(cursor - 1) === '@') {
        // 判断最后一个字符是否为@
        pre_text.innerHTML = textapp.value.substring(0, cursor);
        pre_text.innerHTML += '<span id="proxy" style="display:inline-block; width: 100px;"></span>';
        var span = document.getElementById('proxy');
        var conX = textapp.offsetLeft;
        var conY = textapp.offsetTop;
        var spanX = span.offsetLeft + conX;
        var spanY = span.offsetTop + conY;
        selectuser.style.left = spanX + 'px';
        selectuser.style.top = spanY + 'px';
        selectuser.style.display = 'block';
        //设置@选框的默认样式
        listSet();
    } else {
        selectuser.style.display = 'none';
    }
})
// @框默认设置
function listSet() {
    var list = $('#selectlist');
    list.focus();
    $('#selectlist').find('li').eq(0).addClass('hover').siblings('li').removeClass('hover');
    $('#selectuser').scrollTop(0);
}




textapp.addEventListener('keydown', function (e) {
    //建立在@选框出现的情况下
    if (selectuser.style.display == 'block') {
        var code = e.keyCode;
        //左右回车时阻止默认，防止光标移动
        if (code == 38 || code == 40 || code == 13) {
            e.preventDefault();
        }
    }
})

















// 键盘上移
function preCode() {
    var index = $('#selectlist').find('.hover').index();
    if (index == 0) {
        return;
    } else {
        index--;
        $('#selectuser').scrollTop(index * 26);
        $('#selectlist').find('li').eq(index).addClass('hover').siblings('li').removeClass('hover');
    }
}
// 键盘下移
function nextCode() {
    var len = $('#selectlist').find('li').length;
    var index = $('#selectlist').find('.hover').index();
    if (index == len - 1) {
        return;
    } else {
        index++;
        $('#selectuser').scrollTop(index * 26);
        $('#selectlist').find('li').eq(index).addClass('hover').siblings('li').removeClass('hover');
    }
}
//@人的文本格式，为后面加一个空格，后面用到 
function getText(app, cursor, textname) {
    var text1 = app.substring(0, cursor);
    var text2 = app.substring(cursor);
    return text1 + textname + ' ' + text2;
}






// 提交
$('#submit').on('click', function () {
    var msg = $('#app').val();
    //检测输入框是否为空
    if (msg === '') {
        alert('内容不能为空！');
        return;
    }
    //返回有效@人列表
    var arr = handleMsg(msg);
});
//操作信息提取有效@人
function handleMsg(msg) {
    //存放有效@人id的数组
    var At = [];
    //正则验证吧以@开头空格结束的选出来已数组的形式
    var arrAt = msg.match(/@{1}([\u4e00-\u9fa5]|\w)+\s{1}/g);
    //说明没有@人，直接韩慧
    if (arrAt === null) {
        console.log('没有选中@的人！');
        return At;
    }
    // 对arrAt数组即当前信息@人的列表进行遍历
    for (var i = 0; i < arrAt.length; i++) {
        var username = arrAt[i].replace('@', '').trim();
        // 对比当前群组人选
        var grounpuser = $('#selectlist').find('li');
        for (var j = 0; j < grounpuser.length; j++) {
            //如果名字相同，则把id放进数组内容
            if (username == grounpuser.eq(j).html()) {
                var uid = grounpuser.eq(j).attr('uid');
                At.push(uid);
                break;
            }
        };
    };
    return At;
}