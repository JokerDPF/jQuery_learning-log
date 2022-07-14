;(function () {
  // 新增
  $('#addTodo').keyup(function (event) {
    if (event.keyCode !== 13) return
    let value = $(this).val()
    if (!$(this).val()) {
      alert('内容不能为空')
      return
    }
    $('#todoList').append(
      `<li style="display:none">
      <div class="view">
        <label>${value}</label>
        <button class="destroy"></button>
      </div>
    </li>`
    )
    $('#todoList li')
      .last()
      .slideDown(function () {
        // 计数
        count()
      })
    $(this).val('')
  })

  // 删除
  $('#todoList').on('click', '.destroy', function () {
    $(this)
      .parent()
      .parent()
      .fadeOut(function () {
        $(this).remove()
        count()
      })
  })

  function count () {
    // 计数
    $('.todo-count strong').text($('#todoList li').length)
  }
})()
