/**
 * Created by JetBrains PhpStorm.
 * Author: Devin Chen
 * Date: 8/29/12
 * Time: 12:05 PM
 * To change this template use File | Settings | File Templates.
 */

(function(s){
    s.config({
        base : "./static/js/",
        preload : ["jquery/jquery-1.7.2.min"],
        charset: 'utf-8'
    });
    s.use("a",function(a){
        console.log(a)
    })
})(seajs);