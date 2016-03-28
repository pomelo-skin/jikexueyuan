/**
 * Created by gang on 2016/1/3.
 */
$(function () {
    bannerImgPlayer();
    imgSlider();
    img6Slider();
});

//banner图片轮播
function bannerImgPlayer(){
    //获取容器
    var $container = $(".banner-box");
    //图片
    var $imgs = $(".images-box");
    //获取左右箭头
    var $prev = $("#banner-left");
    var $next = $("#banner-right");
    //获取分页符
    var buttons = $(".pagination>span");
    //第一张索引
    var index = 1;
    //定义变量存储图片个数
    var len = 3;
    //自动播放时间间隔
    var interval=3000;
    var timer;

    //下一张
    $next.click(function () {
        //如果当前元素正在动画则返回？
        if ($imgs.is(":animated")) {
            return;
        }
        //当滑到最后一个元素时返回
        if (index == len) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-560);
        showBtn();
    });
//上一张
    $prev.click(function () {
        //如果当前元素正在动画则返回？
        if ($imgs.is(":animated")) {
            return;
        }
        //当滑到最后一个元素时返回
        if (index == len) {
            index = 1;
        } else {
            index += 1;
        }
        animate(560);
        showBtn();
    });
    //按钮显示
    function showBtn() {
        buttons.eq(index - 1).addClass("on").siblings().removeClass("on");
    }
    //自动播放
    function play(){
        timer=setInterval(function(){
            $next.trigger("click");
        },interval);
    }
    function stop(){
        clearInterval(timer);
    }


    function animate(offset) {
        var left = parseInt($imgs.css("left")) + offset;
        //$imgs.css("left", left);
        $imgs.animate({"left": left}, 300, function () {
            //滑到了最左边时，图片切换到最后一个,滑到最右边，切换至第一个
            if (left > -200) {
                $imgs.css("left", -560 * len);
            }
            if (left < (-560 * len)) {
                $imgs.css("left", -560);
            }
        });
    }

    //按钮切换
    buttons.each(function () {
        $(this).click(function () {
            if ($imgs.is(":animated") || $(this).attr("class") == "on") {
                return;
            }
            //取出目前button索引
            var myIndex = parseInt($(this).attr("index"));
            //偏移距离
            var offset = -560 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showBtn();
        });
    });

    play();
    $container.hover(stop,play);
}

//左右滑动播放函数
function imgSlider(){
    //获取滑动图片列表
    var lists=$(".lesson-list");
    //左箭头
    var prev=$("#work-left");
    //右箭头
    var next=$("#work-right");
    var index=1;
    var len=4;

    //下一张
    next.click(function () {
        ////如果当前元素正在动画则返回？
        //if (lists.is(":animated")) {
        //    return;
        //}
        ////当滑到最后一个元素时返回
        //if (index == 4) {
        //    index = 1;
        //} else {
        //    index += 1;
        //}
        animate(-186);
    });
//上一张
    prev.click(function () {
        ////如果当前元素正在动画则返回？
        //if (lists.is(":animated")) {
        //    return;
        //}
        ////当滑到最后一个元素时返回
        //if (index == 4) {
        //    index = 1;
        //} else {
        //    index += 1;
        //}
        animate(186);
    });
    function animate(offset) {
        var left = parseInt(lists.css("left")) + offset;
        lists.animate({"left": left}, 300, function () {
            //滑到了最左边时，图片切换到最后一个
            if (left > -20) {
                lists.css("left", -186 * len);
            }
            //滑到最右边，切换至第一个
            if (left < (-186 * len)+20) {
                lists.css("left", 0);
            }
        });
    }
}

//左右滑动播放函数--6张
function img6Slider(){
    //获取滑动图片列表
    var lists=$(".strategy .swiper-wrapper");
    //左箭头
    var prev=$("#work-left3");
    //右箭头
    var next=$("#work-right3");
    var len=21;

    //下一张
    next.click(function () {
        debugger;
        animate(-159);
    });
//上一张
    prev.click(function () {
        animate(159);
    });
    function animate(offset) {
        debugger;
        var left = parseInt(lists.css("left")) + offset;
        lists.animate({"left": left}, 300, function () {
            //滑到了最左边时，图片切换到最后一个
            if (left > -20) {
                lists.css("left", -159 * len);
            }
            //滑到最右边，切换至第一个
            if (left < (-159 * len)+20) {
                lists.css("left", 0);
            }
        });
    }
}