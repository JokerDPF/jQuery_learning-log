; (function () {
  // 1.初识状态
  // $('.words span').text(0)
  // $('.publish_btn').addClass('disabled')
  // 2.高亮事件
  $('.input-box textarea').on('focus', function () {
    $(this)
    .parent()
    .addClass('actived')
  })
  .on('blur',function(){
    $(this)
    .parent()
    .removeClass('actived')
  })

  // 3.字数统计
  $('.input-box textarea').on('input', function () {
    let length = $(this).val().length
    $('.words span').text(length)
    if(length === 0) {
      $('.publish_btn').addClass('disabled')
    } else{
      $('.publish_btn').removeClass('disabled')
    }
  })

  // 4.input触发
  $('.input-box textarea').trigger('input')
})()