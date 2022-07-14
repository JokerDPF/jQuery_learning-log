;(function(){
  // 轮播图
  $('.xtx_banner ul').slick({
    // 自动播放
    autoplay:true,
    // 自定义按钮位置
    prevArrow:'.prev',
    nextArrow:'.next',
    // 小圆点显示
    dots:true,
    // 自定义小圆点显示区域
    appendDots:'.indicator'
  })
  // 懒加载
  $('.lazyload').lazyload()
})()