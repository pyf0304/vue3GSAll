<template>
  <div id="divLayout" ref="refDivLayout" class="divComContainer">
    <h1>TestSession1</h1>

    <div> aaa </div>

    <script type="text/javascript">
      strIdCurrEduclsstrUrl_Session_SetString = '@Model.Url_Session_SetString';
      strIdCurrEduclsstrUrl_Session_GetString = '@Model.Url_Session_GetString';
      strIdCurrEduclsstrWebRoot = '@Model.WebRoot';
      //Js函数，用于界面的CRUD, 后备之用,可能后面派作用
      /// <summary>
      /// 存在关键字记录?
      /// </summary>
      function btnLogin_Click() {
        login.Login.btnLogin_Click();
      }

      function SetSession(Key, Value) {
        $.ajax({
          url: '/Session/SetString',
          cache: false,
          async: false,
          type: 'get',
          dataType: 'json',
          data: {
            Key: Key,
            Value: Value,
          },
          success: function (data) {
            //$('#myValue').val(text);
            strIdCurrEduclsstrKey = data.key;
            strIdCurrEduclsstrValue = data.value;

            $('#myKey').html(strKey);
            $('#myValue').html(strValue);
            console.log(strKey + strValue);
          },
        });
      }
    </script>
  </div></template
>
