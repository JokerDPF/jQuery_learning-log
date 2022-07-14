;(function(){
  // 1.默认让返回顶部按钮隐藏
  $('.gotop').hide()
  // 2.注册页面滚动事件
  $(window).scroll(function(){
    let top = $('html').scrollTop()
    if(top > 200){
      $('.gotop')
      .stop()
      .fadeIn()
    }else{
      $('.gotop')
      .stop()
      .fadeOut()
    }
  })
  // 3.点击返回顶部按钮 返回顶部
  // 给返回顶部按钮注册点击事件
  $('.gotop').click(function(){
    $('html').animate({
      scrollTop:0
    })
  })

  // 4.点击意见反馈按钮 展开反馈窗口 点击x号收起反馈窗口
  // 给意见反馈按钮注册点击事件
  // 展开反馈窗口
  $('.suggest').click(function(){
    $('.sugform').slideDown()
  })
  // 收起反馈窗口
  $('.close').click(function(){
    $('.sugform').slideUp()
  })

  // 5.自动轮播
  // 最后封装自动轮播函数
  function autoPlay(){
    // 获取最后一个新闻
  let $last = $('.wblist').last()
  // 把最后一条新闻加到父元素的最前面
  let $wbdesc = $('.wbdesc')
  $wbdesc.prepend($last)
  // 获取最后一个新闻的高度 通过.outHeight(true) 获取到盒子内容高度 内边距 外边距的总和
  let height = $last.outerHeight(true)
  // 然后把整个新闻向上定位最后一个新闻的高度 这样就可以第一次 显示第一个新闻
  $wbdesc.css('top',-height)
  // 设置自定义动画
  $wbdesc.delay(2000).animate({top:0},function(){
    // 在自定义动画内部使用回调函数 调用自动轮播函数 
    autoPlay()
  })
  }
  // 调用自动轮播函数
  autoPlay()
})()