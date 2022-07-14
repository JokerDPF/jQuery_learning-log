; (function () {
  // 1.新增
  // 给文本框注册键盘弹起事件
  $('#addTodo').keyup(function (e) {
    // 判断是否按下回车键 回车键值为 13
    if (e.keyCode === 13) {
      // 获取文本框内的值
      let value = $(this).val()
      // 判断是否输入
      // 如果输入 把内容添加到内容的最后面 并让添加的内容隐藏
      if (value !== '') {
        $('#todoList').append(`
       <li style="display:none">
            <div class="view">
              <label>${value}</label>
              <button class="destroy"></button>
            </div>
          </li>
      `)
        // 获取最后一个元素
        $('#todoList li')
        .last()
        .slideDown(function(){
          $('.todo-count strong').text($('#todoList li').length)
        })
        // 添加完成后 清除文本框内的内容
        $(this).val('')

      } else {
        alert('输入内容不允许为空')
      }

    }
  })

  // 2.删除
  // 使用事件委托 给他的父元素绑定点击事件
  $('#todoList').on('click', '.destroy', function () {
    let $li = $(this)
    .parent()
    .parent()
    $li.fadeOut(function () {
      $(this).remove()
      $('.todo-count strong').text($('#todoList li').length)
    })
  })
})()