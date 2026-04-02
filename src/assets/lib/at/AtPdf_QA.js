//全局定义一个变量为光标位置
var cursor;
var textapp = getById("txtQuestionsContent");

function getById(eleId) {
    return document.getElementById(eleId);
}
//文本框绑定keyup事件，检测输入
textapp.addEventListener('keyup', function (e) {


    //获取光标
    cursor = textapp.selectionStart;
    // 当前光标所在位置的前一位为@字符，出现@选框
    if (textapp.value.substring(0, cursor).charAt(cursor - 1) === '@') {
        //var varlength = textapp.length;
        textapp.value = textapp.value.substr(0, cursor - 1)
        // 判断最后一个字符是否为@
        //Alert1('进来了！');
        btnCancel1.value = 'block';
        InviteOthers_Click(1);
    } else {
        btnCancel1.style.value = 'none';
    }
})

textapp.addEventListener('keydown', function (e) {
    //建立在@选框出现的情况下
    if (btnCancel1.value == 'block') {
        var code = e.keyCode;
        //左右回车时阻止默认，防止光标移动
        if (code == 38 || code == 40 || code == 13) {
            e.preventDefault();
        }
    }
})