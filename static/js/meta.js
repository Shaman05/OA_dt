/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 8/29/12
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var bgM1 = parseInt($("#bg").css("margin-left"));
    return {
        init : function(){
            this.resetScreenMenuLeft();
            this.resetSectionHeight();
            this.effectEvent();
            this.loadPage(1);
        },
        loadPage : function(num){
            $("#page-" + num).css("left",30).animate({left:0,opacity:1},500).siblings().animate({left:-30,opacity:0},500);
            $("#bg").animate({marginLeft:bgM1 - 30*(num - 1)},500);
        },
        resetScreenMenuLeft : function(){
            var sw = $("#screen-menu");
            sw.css({"margin-left":-sw.outerWidth()/2});
        },
        resetSectionHeight : function(){
            var h = document.documentElement.clientHeight;
            $("#section").css({"height":h - 114});
        },
        effectEvent : function(){
            var _this = this;
            $("#nav-list li,.nav-div").hover(function(){
                $(this).addClass("li-hover");
            },function(){
                $(this).removeClass("li-hover");
            });

            $("#page-tab li span").hover(function(){
                $(this).addClass("span-hover");
            },function(){
                $(this).removeClass("span-hover");
            });

            $("#screen-list li").click(function(){
                $(this).addClass("current").siblings().removeClass("current");
                _this.loadPage($(this).index() + 1);
            });

            $(window).resize(function(){
                _this.resetSectionHeight();
            });
        }
    }
})