; (function () {
    // 1.增加
    // 给文本框注册keyup事件 添加输入框内容到下方
    $('#addTodo').on('keyup', function (e) {
        // 判断是否为回车键 keyCode 13
        if (e.keyCode === 13) {
            // 判断用户输入内容是否为空 如果不为空执行下述操作  
            let value = $(this).val()
            if (value !== '') {
                // console.log(value)
                // 添加输入框内容到下方 
                $('#todoList').append(`
                <li style="display:none">
                <div class="view">
                <label>${value}</label>
                <button class="destroy"></button>
                </div>
                </li>
            `)
                // 添加内容的时候使用淡入淡出动画显示  所以先隐藏添加内容 然后使用淡入动画显示
                // 首先获取最后一个li 即刚刚添加的li
                $('#todoList li').last().slideDown(function () {
                    $('.todo-count strong').text($('#todoList li').length)
                })
                // 清除文本框的内容
                $(this).val('')
            } else {
                // 如果用户输入为空 弹出警示框
                alert('输入内容不能为空')
            }
        }
    })
    // 2.删除
    // 使用事件委托 给删除按钮绑定点击事件
    $('#todoList').on('click', '.destroy', function () {
        // 点击删除按钮删除 删除按钮父亲的父亲 删除使用淡出动画删除
        let $li = $(this).parent().parent()
        $li.slideUp(function () {
            $(this).remove()
            $('.todo-count strong').text($('#todoList li').length)
        })
    })
    // 3.计数
    // 使用.text()方法添加内容的条数 获取li的长度使用.length()方式
    $('.todo-count strong').text($('#todoList li').length)
})()