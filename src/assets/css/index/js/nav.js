// 浮动窗口：最新通知公告
//$(function () {
//    strIdCurrEduclsmenuYloc = $(".floatNews,.floatX").offset().top;
//    $(window).scroll(function () {
//        strIdCurrEduclsoffsetTop = menuYloc + $(window).scrollTop() + "px";
//        $(".floatNews,.floatX").animate({ top: offsetTop }, { duration: 600, queue: false });
//    });
//    $(".floatX h3").click(function () {
//        $(".floatNews").animate({ width: 0 });
//        $(".floatX").animate({ left: 0 });
//        $(".floatX h3").hide();
//        $(".floatX h4").show();
//    });
//    $(".floatX h4").click(function () {
//        $(".floatNews").animate({ width: "180px" });
//        $(".floatX").animate({ left: "175px" });
//        $(".floatX h4").hide();
//        $(".floatX h3").show();
//    });
//});

// nav下拉菜单
jQuery('#nav').slide({
  type: 'menu', // 效果类型，针对菜单/导航而引入的参数
  titCell: '.nLi', //鼠标触发对象
  targetCell: '.subnav', //titCell里面包含的要显示/消失的对象
  effect: 'slideDown', //targetCell下拉效果
  delayTime: 200, //效果时间
  triggerTime: 0, //鼠标延迟触发时间
  returnDefault: true, //鼠标移走后返回默认状态
});

// 图片新闻切换
jQuery('#photoBox').slide({ mainCell: '.bd ul', effect: 'fold', autoPlay: true });

function getNewFreeSell(aelm, type) {
  if ($(aelm).parent('li').hasClass('current') == false) {
    if (type == 1) {
      $(aelm).parent('li').addClass('current');
      //$(aelm).parent('li').next('li').removeClass('current');
      $('#XJyzCourse').removeClass('current');
      $('#NewCourses').removeClass('current');
      $('#RecommendCourses').removeClass('current');
      $('#newWelcomeSellWayListUlId').show();
      $('#newFreeSellWayListUlId').hide();
      $('#NewCourse').hide();
      $('#RecommendCourse').hide();

      $('#MoreZjyzCourse').show();
      $('#MoreXJyzCourse').hide();
      $('#MoreNewCourses').hide();
      $('#MoreRecommendCourses').hide();
    } else if (type == 2) {
      $(aelm).parent('li').addClass('current');
      //$(aelm).parent('li').prev('li').removeClass('current');
      $('#ZjyzCourse').removeClass('current');
      $('#NewCourses').removeClass('current');
      $('#RecommendCourses').removeClass('current');
      $('#newWelcomeSellWayListUlId').hide();
      $('#newFreeSellWayListUlId').show();
      $('#NewCourse').hide();
      $('#RecommendCourse').hide();

      $('#MoreZjyzCourse').hide();
      $('#MoreXJyzCourse').show();
      $('#MoreNewCourses').hide();
      $('#MoreRecommendCourses').hide();
    } else if (type == 3) {
      $(aelm).parent('li').addClass('current');
      //$(aelm).parent('li').next('li').removeClass('current');
      $('#ZjyzCourse').removeClass('current');
      $('#XJyzCourse').removeClass('current');
      $('#RecommendCourses').removeClass('current');
      $('#newWelcomeSellWayListUlId').hide();
      $('#newFreeSellWayListUlId').hide();
      $('#NewCourse').show();
      $('#RecommendCourse').hide();

      $('#MoreZjyzCourse').hide();
      $('#MoreXJyzCourse').hide();
      $('#MoreNewCourses').show();
      $('#MoreRecommendCourses').hide();
    } else if (type == 4) {
      $(aelm).parent('li').addClass('current');
      //$(aelm).parent('li').prev('li').removeClass('current');
      $('#ZjyzCourse').removeClass('current');
      $('#XJyzCourse').removeClass('current');
      $('#NewCourses').removeClass('current');
      $('#newWelcomeSellWayListUlId').hide();
      $('#newFreeSellWayListUlId').hide();
      $('#NewCourse').hide();
      $('#RecommendCourse').show();

      $('#MoreZjyzCourse').hide();
      $('#MoreXJyzCourse').hide();
      $('#MoreNewCourses').hide();
      $('#MoreRecommendCourses').show();
    }
  }
}

/**
 * 根据专业id获取课程 首页切换专业用
 * @param em
 * @param subjectId
 * @returns {Boolean}
 */
function querycourseBySubjectId(em, subjectId) {
  if ($(em).parent('li').hasClass('current')) {
    return false;
  }
  $.ajax({
    type: 'post',
    dataType: 'text',
    url: '/front/ajax/course',
    data: { subjectId: subjectId },
    async: false,
    success: function (result) {
      $('#s_c_list_ol_ID').html(result);
      //$(".s-c-list>li:nth-child(4n)").css({"margin-right" : "0px"});
      $(em).parent('li').parent('ol').find('li').removeClass('current');
      $(em).parent('li').addClass('current');
    },
  });
  scrollLoad();
}
