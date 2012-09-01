/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 8/29/12
 * Time: 1:15 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var bgM1 = parseInt($("#bg").css("margin-left"));
    var Dialog = require("dialog");
    module.exports = {
        init : function(){
            this.resetScreenMenuLeft();
            this.resetSectionHeight();
            this.effectEvent();
            this.uiInit();
            this.loadPage(1);
        },
        loadPage : function(num){
            $("#page-" + num).css({"left":30,"display":"block"}).stop().animate({left:0,opacity:1},500).siblings().stop().animate({left:-30,opacity:0},500,function(){
                $(this).css("display","none");
            });
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
            $("#main-nav li,.nav-div,.desk-item li,.task-list li").hover(function(){
                $(this).addClass("li-hover");
            },function(){
                $(this).removeClass("li-hover");
            });

            $("#page-tab li span").hover(function(){
                $(this).addClass("span-hover");
            },function(){
                $(this).removeClass("span-hover");
            });

            $("#task-menu").hover(function(){
                $(".task-list").show();
            },function(){
                $(".task-list").hide();
            });

            $(".sub-menu").hover(function(){
                $(this).find("ul").show();
            },function(){
                $(this).find("ul").hide();
            })

            $("#screen-list li").click(function(){
                $(this).addClass("current").siblings().removeClass("current");
                _this.loadPage($(this).index() + 1);
            });

            $("#main-nav a,.task-list a,.desk-item li a").live("click", function(){
                var _this = $(this);
                var options = {
                    title : _this.text(),
                    url : _this.attr("rel"),
                    frameId : _this.attr("class").split(" ")[0]
                }
                new Dialog(options);
            });

            $(window).resize(function(){
                _this.resetSectionHeight();
            });
        },
        uiInit : function(){
            $(".desk-item").sortable();
        }
    }
})