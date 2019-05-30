$(function () {
    var index = 0;
    // 公用函数
    function show(){  
        // 控制bg的left值
        $('.bg').stop(true).animate({'left':-index*$('.bg li').width()},1000);
        $('i').eq(index).addClass('on').siblings().removeClass('on');
    }
    // 下一张
    function fun(){
        index++;
        if (index == $('.bg li').length) {
            index = 0;
        };
        show();	
    }
    var time = setInterval(fun,4000);
    $('i').mouseenter(function(){
        $index = $(this).index();//获取对应的索引值
        //设置导航按钮样式
        $(this).addClass('on').siblings().removeClass('on');
        //设置图片移动动画
        $('.bg').stop(true).animate({'left':-$index * $('.bg li').width()},1000);
    })
    // 划上清除定时器 划出启动
    $('.box').hover(
        function(){
            clearInterval(time);
        },
        function(){
            time = setInterval(fun,1500);
        }
    );
})

$(function(){
    $('.nav li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
    });
})

$(function(){
    $(".control img").click(function(){
        $(".nav ul li").slideToggle(100);
    })
})

$(function(){
    $('.paiit>a').click(function() {
        var index = $(this).index();
        $(this).addClass('select').siblings().removeClass('select');
        $('#con>ul').eq(index).addClass('on').siblings().removeClass('on');
    });
})