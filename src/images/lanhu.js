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

    // 注意：o_picture一定需要放在read里面
    // 响应式图片自己下载 start 头部下面第一个轮播第一张图片更换
    $(".o_picture").each(function() {
        $(this).oPicture({
            //自定义节点宽度
        }).init();
    });
    // 响应式图片自己下载 end


    //禁止滚动条滚动
    function unScroll() {
        var top = $(document).scrollTop();
        $(document).on('scroll.unable', function(e) {
            $(document).scrollTop(top);
        })
    }
    //移除禁止滚动条滚动
    function removeUnScroll() {
        $(document).unbind("scroll.unable");
    }


    // 评审团尺寸 start
    var jury_img_width = $('.jury .jury_img').width();
    $('.jury .intro').width(jury_img_width);
    $('.jury .name').width(jury_img_width);
    // 评审团尺寸 end

    // 赛事动态尺寸 start
    var dynamic_img_width = $('.dynamic .top img').width();
    $('.dynamic .left').width(dynamic_img_width);
    // 赛事动态尺寸 end

    // 评委团 查看详情 start
    // 划入划出
    $('.jury .list').on('mouseenter', '.jury_img', function() {
        var $this = $(this);
        $this.find('.js_img_zhezhao').removeClass('displaynone');
    });
    $('.jury .list').on('mouseleave', '.jury_img', function() {
        var $this = $(this);
        $this.find('.js_img_zhezhao').addClass('displaynone');
    });
    // 点击出现弹窗
    $('.jury .list').on('click', '.item', function() {
        var $this = $(this);
        unScroll();
        var $popup = $('.popup');
        $popup.removeClass('displaynone');
        $popup.siblings('.js_popup_all').removeClass('displaynone');
        // $('body').css({ overflow: 'hidden', height: "100%" });
    });
    // 点击关闭弹窗
    $('.popup').on('click', '.js_close_popup', function() {
        var $this = $(this);
        removeUnScroll();
        $this.parents('.popup').addClass('displaynone');
        $this.parents('.popup').siblings('.js_popup_all').addClass('displaynone');
        // $('body').css('overflow', 'auto');
    });
    // 评委团 查看详情 end


    // 判断屏幕尺寸
    var width = $(window).width();
    var height = $(window).height();
    console.log(width);
    if (width > 1200) {
        // 尾部二维码
        $('.js_weichat').on('mouseenter', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').removeClass('displaynone');
        });
        $('.js_weichat').on('mouseleave', function() {
            var $this = $(this);
            $this.parents('.js_wechat_box').siblings('.js_sweep_code_box').addClass('displaynone');
        });


    } else if (width < 1200 && width > 750) {
        // 点击打开pad菜单栏
        $('.header').on('click', '.menu', function() {
            var $this = $(this);
            var headwidth = $('.header').height();
            var $zhezhao = $('.js_menu_zhezhao');
            $zhezhao.css('top', headwidth);
            var flag = $zhezhao.hasClass('displaynone');
            if (flag) {
                $zhezhao.removeClass('displaynone');
                $this.siblings('.js_close_menu').removeClass('displaynone');
                $('body').css({ overflow: 'hidden', height: "100%" });
            }
        });
        //点击关闭pad菜单栏
        $('.header').on('click', '.js_close_menu', function() {
            var $this = $(this);
            $this.addClass('displaynone');
            $('.js_menu_zhezhao').addClass('displaynone');
            $('body').css('overflow', 'auto');
        });
    } else if (width <= 750) {
        var jury_item = $('.jury .jury_img').width();
        console.log(jury_item);
        $('.jury .intro').width(jury_item);
        $('.jury .name').width(jury_item);
        $('.jury .intro').css('padding', 0);
    }
});