!$(function () {
  // 5.自动轮播
  function autoMove () {
    let $last = $('.wblist').last()
    let $wbdesc = $('.wbdesc')
    // 最后一个子元素移到顶部
    $wbdesc.prepend($last)
    // 获取高度
    let height = $last.outerHeight(true)
    $wbdesc.css('top', -height)
    $wbdesc.delay(1000).animate({ top: 0 }, 2000, function () {
      autoMove()
    })
  }
  autoMove()

  // 初始状态
  $('.gotop').hide()
  // 显示、隐藏 返回顶部
  $(document).scroll(function () {
    if ($('html').scrollTop() > 200) {
      $('.tools .gotop')
        .stop()
        .fadeIn()
    } else {
      $('.tools .gotop')
        .stop()
        .fadeOut()
    }
  })

  // 返回顶部功能实现
  $('.gotop').click(function () {
    $('html, body').animate({ scrollTop: 0 })
  })

  // 显示、隐藏意见反馈表单
  $('.suggest').click(function () {
    $('.sugform').slideDown(500)
  })

  $('.close').click(function () {
    $('.sugform').slideUp(500)
  })
})
