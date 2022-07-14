; (function () {
    // 1.顶部高亮
    // 给页面绑定滚动事件
    $(window).scroll(function(){
        // 滚动页面 顶部高亮 即添加scrolled类
        // 获取滚动距离 
        let top = $('html').scrollTop()
        // console.log(top)
        if(top === 0){
            $('.header').removeClass('scrolled')
        }else(
            $('.header').addClass('scrolled')
        )
    })
    // 2.滚动200px 显示返回顶部按钮gotop 带动画
    $(window).scroll(function(){
        // 滚动页面 顶部高亮 即添加scrolled类
        // 获取滚动距离 
        let top = $('html').scrollTop()
        // console.log(top)
        if(top > 200){
            // $('.gotop').stop()
            $('.gotop')
            .stop()
            .fadeIn()
        }else(
            // $('.gotop').stop()
            $('.gotop')
            .stop()
            .fadeOut()
        )
    })
    // 3.点击返回顶部按钮 页面返回顶部 带动画
    $('.gotop').click(function(){
        // 给html添加自定义动画
        $('html').animate({
            scrollTop:0
        })
    })
})()