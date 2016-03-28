/**
 * 使用单例模式重构js
 **/
$(document).ready(function () {
    var top = {
        init: function () {
            this.render();
            this.bind();
        },
        render: function () {
            var me = this;
            //更多产品按钮
            me.more = $("#more");
            me.bdbri = $(".bdbri");
        },
        bind: function () {
            var me = this;
            //设置-更多产品下拉菜单-高度
            me.more.hover(function () {
                me.bdbri.height($(window).height());
            });
            //更多产品下拉菜单
            me.dropDown("#more", ".bdbri");
            //设置下拉菜单
            me.dropDown("#pf", ".set-menu");
            //天气下拉菜单
            me.dropDown("#show_weather", ".wea-widget");
            //用户下拉菜单
            me.dropDown("#user_name", ".user-menu");
        },
        /*公共函数，下拉菜单
         **参数，第一个为父类ID，第二个参数为下拉菜单类名
         */
        dropDown: function (parId, linkClassName) {
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
    };
    var content = {
        init: function () {
            this.render();
            this.bind();
        },
        render: function () {
            var me = this;
            //获取选项卡标签
            me.s_menu_item = $(".s-menu-item");
            //获取所有选项卡内容
            me.s_contens = $("#s_ctner_contents>div");
        },
        bind: function () {
            var me = this;
            //购物选项卡中已购票数动态展示
            me.itemShow(".shopping-card-item", ".mask");
            //导航选项卡返利动态展示
            me.itemShow(".nav-item", ".rebate", ".fanli-tag");

            //选项卡切换函数
            me.s_menu_item.click(function () {
                $(this).addClass("current").siblings().removeClass("current");
                //获取当前点击的menu元素在全部menu中的索引
                var index = me.s_menu_item.index(this);
                me.s_contens.eq(index).show().siblings(index).hide();
            })
        },
        /*公共函数,item中动态显示某些元素
         **参数，第一个为item的类名，后几个参数为要动态显示的元素类名
         */
        itemShow: function (className, itemClassName1, itemClassName2) {
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
    };
    top.init();
    content.init();
});
