/**
 * Created by H2603013 on 2015/12/12.
 */
//页面加载时执行
$(window).on("load", function () {
    waterfall();
    //模拟图片返回的json数据
    var dataInt={"data":[{"src":"35.jpg"},{"src":"36.jpg"},{"src":"37.jpg"},{"src":"38.jpg"},{"src":"39.jpg"},{"src":"40.jpg"},{"src":"41.jpg"}]};
    //图片加载功能
    $(window).on("scroll",function(){
        if(checkscrollslide()){
            //遍历数据
            $.each(dataInt.data,function(index){
                 //创建box元素
                var oBox=$("<div>").addClass("box").appendTo("#page");
                //创建pic包裹层
                var oPic=$("<div>").addClass("pic").appendTo(oBox);
                //创建img元素
                $("<img>").attr("src","images/"+dataInt.data[index].src).appendTo(oPic);
            });
            waterfall();
        }
    })
});
function waterfall() {
    //获取所有box
    var $boxs = $("#page>div");
    //获取其中一个box的宽度
    var $boxW = $boxs.eq(0).outerWidth();
    //获取荧幕宽度
    var screenW = $(window).width();
    //判断荧幕中可以放置几列图片
    var num = Math.floor(screenW / $boxW);
    //设置最外层包裹#page的宽度及样式居中
    $("#page").width(num*$boxW).css("margin","0 auto");

    //设置排列方式
    var arrH = [];
    $boxs.each(function (index, element) {
        //首先将第一行box高度存储在arrH数组中
        if (index < num) {
            arrH[index] = $boxs.eq(index).outerHeight();
        } else {
            //数组中最小值
            var minH = Math.min.apply(null, arrH);
            var minHIndex = $.inArray(minH, arrH);
            $(element).css({
                "position": "absolute",
                "top": minH,
                "left": minHIndex * $boxW
            });
            arrH[minHIndex] += $boxs.eq(index).outerHeight();
        }
    });
}
/*图片动态加载函数
 *判断最后一个元素中间距顶部距离是否小于滑块距离+页面高度
 */
function checkscrollslide(){
    var $boxs = $("#page>div");
    var lastbox=$boxs.last();
    //最后一个元素中间距顶部距离
    var lbdis=lastbox.offset().top+lastbox.outerWidth()/2;
    //滑块距页面顶部距离
    var scrollTop=$(window).scrollTop();
    //页面高度
    var windowH=$(window).height();
    return (lbdis<scrollTop+windowH) ? true:false;
}