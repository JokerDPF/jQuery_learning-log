;(function(){


  function clear(){
    $('.dialog-wrap').fadeOut(function(){
      // 清除表单内容 即表单重置
      $('.form')[0].reset()
      // 清除错误提示
      $('.form span').text('')
    })
  }
  // 新建一个全局变量 用来判断 表单内执行新增还是编辑操作 点击编辑按钮则$editTr为编辑里面的内容 若没点击编辑按钮 则$editTr为undefined
  let $editTr = undefined


  
  // 1.点击新增按钮 弹出表单
  $('.add').click(function(){
    // 防止在点击完编辑按钮后$editTr的值没变成undefined ，那接下来就没办法执行新增操作 
    $editTr = undefined
    $('.title h3').text('新增')
    $('.dialog-wrap').fadeIn()
  })
  // 2.导入日期选择器插件  导入日期选择器的语言包  导入表单校验插件  都在html界面导入
  // 生日输入框
  $('.birthday').datepicker({
    // 语言中文
    language:'zh-CN',
    // 选择完日期后自动隐藏
    autoHide:true,
  })


  // 3.表单验证
  $('.form').validate({
    sendForm:false,
    description:{
      nickname:{
        required:'姓名不能为空！'
      },
      mobile:{
        required:'手机号不能为空！',
        pattern:'格式不正确！'
      },
      birthday:{
        required:'生日不能为空！'
      }
    },
    // 表单验证全部通过 回调函数
    valid(){
      if($editTr === undefined){
        let $tr = $('tbody tr').first().clone()
        // 获取表单内容
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        // 必须要从已经克隆进去的tr内添加信息 所以调用.find()方法 获取tr内的标签 使用.text()方法往内部添加表单读取的信息
        $tr.find('.td-name').text(nickname)
        $tr.find('.td-mobile').text(mobile)
        $tr.find('.td-birth').text(birthday)
        $('tbody').append($tr)
        $tr.show()
        // 调用清除函数
        clear()
      }else{
        // 获取表单内容
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        $editTr.find('.td-name').text(nickname)
        $editTr.find('.td-mobile').text(mobile)
        $editTr.find('.td-birth').text(birthday)
        clear()
      }
      
    },
  })

  // 4.点击取消
  $('.cancel').click(function(){
    clear()
  })
  // 5.点击x号
  $('.close').click(function(){
    clear()
  })

  // 6.删除按钮 事件委托
  $('tbody').on('click','.del',function(){
    // 通过.parent()方法 找到对应删除按钮的tr
    let $tr = $(this).parent().parent()
    // 调用淡出动画
    $tr.fadeOut(function(){
      // 通过.remove()方法删除对应tr
      $tr.remove()
    })
  })

  // 7.编辑 事件委托 但凡是动态添加的内容都用事件委托处理
  $('tbody').on('click','.edit',function(){
    let $tr = $(this).parent().parent()
    let name = $tr.find('.td-name').text()
    let mobile = $tr.find('.td-mobile').text()
    let birth = $tr.find('.td-birth').text()
    // 修改标题 为编辑
    $('.title h3').text('编辑')
    // 把获取对应tr的内容赋值给编辑窗口的表单
    $('.nickname').val(name)
    $('.mobile').val(mobile)
    $('.birthday').val(birth)
    // 淡出编辑窗口
    $('.dialog-wrap').fadeIn()

    // 把编辑逻辑内部的 $tr赋值给全局变量内的$editTr
    $editTr = $tr
  })
})()