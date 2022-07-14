; (function () {
    function clear() {
        // 窗口淡出
        $('.dialog-wrap').fadeOut(function () {
            // 获取dom 表单 调用dom内的重置函数 重置表单
            $('.form')[0].reset()
            // 清除错误提示
            $('.error').text('')
        })
    }

    let $editTr = undefined

    // 1.点击新增按钮 弹出新增窗口
    $('.add').click(function () {
        // 修改$editTr 防止在点击编辑按钮之后 $editTr的值改变 导致点击新增按钮之后没办法执行相应操作
        $editTr = undefined
        $('.dialog-wrap h3').text('新建')
        $('.dialog-wrap').fadeIn()
    })
    // 2.生日 日期插件
    $('.birthday').datepicker({
        // 修改语言
        language: 'zh-CN',
        // 点击自动隐藏
        autoHide: true,
    })
    // 3.表单验证
    $('.form').validate({
        // 阻止提交表单
        sendForm: false,
        // 验证表单信息 与html文件内配合使用 description
        description: ({
            nickname: {
                required: '输入内容不能为空！'
            },
            mobile: {
                required: '输入内容不能为空！',
                pattern: '格式不正确！'
            },
            birthday: {
                required: '输入内容不能为空！'
            }
        }),
        // 7.验证通过 提交 回调函数
        valid() {
            // 根据$editTr判断执行编辑或者新增逻辑
            if ($editTr === undefined) {
                // 获取表单输入内容
                let nickname = $('.nickname').val()
                let mobile = $('.mobile').val()
                let birthday = $('.birthday').val()
                // 使用克隆方法 克隆模板
                let $tr = $('tbody tr').first().clone()
                // 给克隆的模板添加表单获取的内容
                $tr.find('.td-name').text(nickname)
                $tr.find('.td-mobile').text(mobile)
                $tr.find('.td-birth').text(birthday)
                // 然后把克隆的内容追加到最后
                $('tbody').append($tr)
                $tr.show()
                clear()
            }else{
                // 获取表单输入内容
                let nickname = $('.nickname').val()
                let mobile = $('.mobile').val()
                let birthday = $('.birthday').val()
                // 把获取内容添加到该编辑的tr内
                $editTr.find('.td-name').text(nickname)
                $editTr.find('.td-mobile').text(mobile)
                $editTr.find('.td-birth').text(birthday)
                clear()
            }

        },

    })
    // 4.取消按钮
    $('.cancel').click(function () {
        clear()
    })

    // 5.关闭按钮
    $('.close').click(function () {
        clear()
    })

    // 6.删除按钮 事件委托
    $('tbody').on('click', '.del', function () {
        // 获取点击删除按钮对应的内容
        let $tr = $(this).parent().parent()
        // 使用淡出动画 并且删除对应内容
        $tr.fadeOut(function () {
            $tr.remove()
        })
    })

    // 8.编辑按钮 事件委托
    $('tbody').on('click', '.edit', function () {
        // 弹出编辑框
        $('.dialog-wrap').fadeIn()
        // 修改标题
        $('.dialog-wrap h3').text('编辑')
        // 获取点击编辑对应tr
        let $tr = $(this).parent().parent()
        // 获取tr内的元素
        let name = $tr.find('.td-name').text()
        let mobile = $tr.find('.td-mobile').text()
        let birth = $tr.find('.td-birth').text()
        // 把tr内的元素添加到编辑框内
        $('.nickname').val(name)
        $('.mobile').val(mobile)
        $('.birthday').val(birth)

        // 把内部的$tr赋值给全局变量内的$editTr
        $editTr = $tr
    })

})()