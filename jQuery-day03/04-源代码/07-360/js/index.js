; (function () {
  $('#fullpage').fullpage({
    // 加载完之后在执行 获取索引
    afterLoad(anchor, index) {
      // 先移除所有的 current类 即移除所有页面的动画
      $('.section').removeClass('current')
      // 然后延时设置动画界面
      setTimeout(function () {
        $('.section')
        .eq(index - 1)
        .addClass('current')
      }, 100)
    }
  })
})()
