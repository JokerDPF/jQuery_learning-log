; (function () {
    // 1.滚动页面200px 显示返回顶部按钮
    // 默认隐藏返回顶部按钮
    $('.gotop').hide()
    $(window).scroll(function () {
        let top = $('html').scrollTop()
        if (top > 300) {
            $('.gotop')
                .stop()
                .fadeIn()
        } else (
            $('.gotop')
                .stop()
                .fadeOut()
        )
    })
    // 2.点击返回顶部按钮 页面滚动会顶部
    $('.gotop').click(function () {
        $('html').animate({
            scrollTop: 0
        })
    })
    // 3.点击意见反馈弹出反馈窗口 sugform 
    $('.suggest').click(function () {
        $('.sugform').slideDown()
    })
    // 4.点击反馈窗口x按钮 收起反馈窗口
    $('.close').click(function () {
        $('.sugform').slideUp()
    })

    // 5.自动轮播

    // 封装自动轮播函数 \
    function autoPlay() {
        // 获取最后一个图片
        let $last = $('.wbdesc .wblist').last()
        let wbdesc = $('.wbdesc')
        // 把最后一张图片移动到父元素的最上面
        $(wbdesc).prepend($last)
        // 使用.outerHeight(true)获取最后一个盒子内容高度 内边距 外边距
        let height = $last.outerHeight(true)
        // 修改整体新闻的定位 使其显示第一个新闻
        $(wbdesc).css('top', -height)
        // 给新闻添加delay 延时2s 然后使用动画 然后重复操作
        $(wbdesc).delay(2000).animate({top: 0},function(){
            autoPlay()
        })
        // 在自动轮播函数内部重新调用autoPlay()
        
    }
    autoPlay()
})()