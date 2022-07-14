;(function () {
  $(function () {
    // 延时执行焦点图动画
    // $('#alloyCarousel .item').addClass('done')

    // 设置头部交互动效
    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop()
      scrollTop > 0
        ? $('body > .header').addClass('scrolled')
        : $('body > .header').removeClass('scrolled')
    })

    $(window).scroll(function () {
      let scrollTop = $(this).scrollTop()
      if (scrollTop > 200) {
        // $('.gotop').fadeIn()
        $('.gotop')
          .stop()
          .show(1000)
      } else {
        $('.gotop')
          .stop()
          .hide(1000)
      }
    })
    $('.gotop').click(function () {
      $('html').animate({ scrollTop: 0 }, 800)
    })
  })
})()
