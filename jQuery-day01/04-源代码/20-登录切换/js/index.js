; (function () {
  // 1.账号\安全登录切换
  // 给账号&安全登录按钮绑定点击事件
  $('.label').on('click', function () {
    // 获取当前点击按钮 给其添加active类（使其高亮）
    $(this)
    .addClass('active')
    // 使其兄弟按钮变为不高亮 即移除active类
    $(this)
    .siblings()
    .removeClass('active')

    // 获取点击内容的自定义属性值 对应内容的id值  通过.attr()获取自定义属性值
    let id = 
    $(this)
    .attr('data-label')
    
    // 让对应id的内容diaplay block 兄弟内容none
    $(id)
    .css('display', 'block')
    $(id)
    .siblings()
    .css('display', 'none')
  })

  // 2.安全\手机切换
  // 给手机登录按钮绑定点击事件
  $('.icon').on('click', function () {
    // 首先获取手机登录按钮 是否拥有active类的布尔值
    let isActive = $(this).hasClass('active')
    // 判断手机登录按钮是否有active类 如果没有就给他添加这个类 逻辑同上
    if(isActive === false ) {
      $(this).addClass('active')
    $(this)
    .siblings()
    .removeClass('active')
    // 获取点击内容的自定义属性值 对应内容的id值
    let id = $(this).attr('data-label')
    // 让对应id的内容diaplay block 兄弟内容none
    $(id).css('display', 'block')
    $(id)
    .siblings()
    .css('display', 'none')
    } else{
      $('.label')
      .last()
      .trigger('click')
    }
  })
})()