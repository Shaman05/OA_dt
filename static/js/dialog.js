/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 8/29/12
 * Time: 12:05 PM
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    function Dialog(options){
        this.init(options);
    }

    Dialog.prototype.init = function(options){
        var _this = this;
        if($("#" + options.frameId).size() < 1){
            var pop = $("<div/>",{
                    "class" : "pop-window",
                    "id" : options.frameId,
                    "title" : options.title
                })
                .appendTo("body")
                .dialog({
                    autoOpen: true,
                    height: 500,
                    width:800,
                    show: "fade",
                    hide: "fade",
                    //modal: true,
                    position: "center"
                })
                .bind("dialogclose", function(event, ui) {
                    $(event.target).remove();
                    delete _this;
            });

            $('<iframe/>', {
                    "id" : "window_" + options.frameId,
                    "src" : options.url,
                    "marginheight" : 0,
                    "marginwidth" : 0,
                    "frameborder" : 0
                })
                .appendTo(pop)
                .load(function(){
                    $(this).css("background","none");
            });
        }
        //$(options.frameId).dialog( "open" );

    }

    module.exports = Dialog;
});