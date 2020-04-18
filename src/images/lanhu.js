$(document).ready(function() {
    // 注意： 轮播图不能判断， 要单独拿出来，因为这是通用的属性
    // 公共轮播图
    // 导航栏下面的轮播图
    var bannerSlider = $(".js_banner").oSlider({
        loop: true,
        pager: ".js_pager",
        pagerHover: false,
        speed: 3000,
        startFn: function() {
            // console.log("1");
        },
        playFn: function() {
            // console.log("1");
        }
    });
    bannerSlider.init();
    // 轮播图箭头
    $('.btn_prev').html('<i class="iconfont">&#xe6a5;</i>');
    $('.btn_next').html('<i class="iconfont">&#xe6a3;</i>');
    // 尾部二维码
    $('.js_weichat').on('mouseenter', function() {
        var $this = $(this);
        $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displaynone');
    });
    $('.js_weichat').on('mouseleave', function() {
        var $this = $(this);
        $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displaynone');
    });
});