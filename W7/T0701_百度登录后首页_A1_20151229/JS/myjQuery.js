/**
 * Created by H2603013 on 2015/12/21.
 */
$(document).ready(function () {
    //更多产品下拉菜单
    moreShow();
    //设置下拉菜单
    dropDown("#pf", ".set-menu");
    //用户下拉菜单
    dropDown("#user_name", ".user-menu");
    //天气更多
    dropDown("#show_weather", ".wea-widget");
    //选项卡
    tabs();
    //购物选项卡中已购票数动态展示
    itemShow(".shopping-card-item", ".mask");
    //导航选项卡返利动态展示
    itemShow(".nav-item", ".rebate", ".fanli-tag");
});
/*公共函数,item中动态显示某些元素
 **参数，第一个为item的类名，后几个参数为要动态显示的元素类名
 */
function itemShow(className, itemClassName1, itemClassName2) {
    var item = $(className);
    item.each(function () {
        var $this = $(this);
        var maskItem1 = $this.find(itemClassName1);
        var maskItem2 = $this.find(itemClassName2);
        $this.mouseenter(function () {
            maskItem1.css("display", "block");
            maskItem2.css("display", "block");
        });
        $this.mouseleave(function () {
            maskItem1.css("display", "none");
            maskItem2.css("display", "none");
        })
    });
}

//更多产品下拉菜单函数
function moreShow() {
    var bdbri = $(".bdbri");
    //获取页面高度
    var H = $(window).height();
    bdbri.height(H);
    dropDown("#more", ".bdbri");
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
//选项卡切换函数
function tabs() {
    //获取选项卡标签
    var $s_menu_item = $(".s-menu-item");
    //获取所有选项卡内容
    var $s_contens = $("#s_ctner_contents>div");
    $s_menu_item.click(function () {
        $(this).addClass("current").siblings().removeClass("current");
        //获取当前点击的menu元素在全部menu中的索引
        var index = $s_menu_item.index(this);
        $s_contens.eq(index).show().siblings(index).hide();
    });
}