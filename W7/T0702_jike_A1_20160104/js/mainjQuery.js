/**
 * Created by yuan on 2016/1/2.
 */
$(document).ready(function(){
    searchText();
    navs();
    hotlessonShow();
    moreInfo();
    tabs();
});

//搜索框
function searchText(){
    var $searchText=$(".search-text");
    var $hotWords=$(".hot-words");
    var $searchBtn=$(".search-btn");
    $searchText.focus(function(){
        $searchText.css("border","1px solid #35b558");
        $hotWords.css("display","none");
        $searchBtn.addClass("search-btn2");
    });
}
/*公共函数，下拉菜单
 **参数，第一个为父类ID，第二个参数为下拉菜单类名
 */
function dropDown(parId, linkClassName) {
    var parBtn = $(parId);
    var link = $(linkClassName);
    parBtn.hover(function () {
        link.css("display", "block")
    }, function () {
        link.css("display", "none")
    });
    link.hover(function () {
        link.css("display", "block")
    }, function () {
        link.css("display", "none")
    });
}
/*导航菜单函数
有Bug,例如当划过nav index=1之后再滑到index=0上，index=1的样式不会消失
 */
function navs(){
    //获取导航条
    var $navs=$(".navs-left>a");
    //获取所有panel-item
    var $panerItems=$(".navpanel>li");
    $navs.hover(function(){
        var $this=$(this);
        var index=$this.index();
        if(index==0){
            return;
        }else{
            var index2=parseInt(index)-1;
            var curPanerItem=$panerItems.eq(index2);
            curPanerItem.addClass("active").siblings().removeClass("active");
            //三角显示
            curPanerItem.find(".angle").addClass("curangle");
            curPanerItem.siblings().find(".angle").removeClass("curangle");
        }
    });
}

//选项卡切换函数
function tabs() {
    //获取选项卡标签
    var $s_menu_item = $(".hot-lesson ul li");
    //获取所有选项卡内容
    var $s_contens = $("#hot_lesson_box>div");
    $s_menu_item.hover(function () {
        $(this).addClass("on").siblings().removeClass("on");
        //获取当前点击的menu元素在全部menu中的索引
        var index = $s_menu_item.index(this);
        $s_contens.eq(index).show().siblings(index).hide();
    });
}

//热门课程
function hotlessonShow(){
    //容器
    var $container=$(".lesson-list ul li");
    $container.hover(function(){
        var $this=$(this);
        //文本容器
        var $lessonInfo=$this.find(".lesson-info");
        //文本p标签
        var $pText=$this.find(".lesson-info>p");
        $pText.css("display","block");
        $lessonInfo.animate({"height":175+"px"},300);
    }, function (){
        var $this=$(this);
        //文本容器
        var $lessonInfo=$this.find(".lesson-info");
        //文本p标签
        var $pText=$this.find(".lesson-info>p");
        $pText.css("display","none");
        $lessonInfo.animate({"height":88+"px"},200);
    })
}

//更多信息
function moreInfo(){
    var $way=$(".way");
    var $wayInfo;
    $way.hover(function(){
        $wayInfo=$(this).parent().find(".way-infor");
        $wayInfo.animate({
            "opacity":"1",
            "margin-left":"0"
        },300);
    },function(){
        $wayInfo.animate({
            "opacity":"0",
            "margin-left":"-5px"
        },300);
    });
}












