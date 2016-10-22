/**
 * Created by mac on 16/10/22.
 */
'use strict';
/**
 *这里是自己写的一个 图片预加载函数
 * @param Images  图片数组
 * @param callback  回调函数
 */
function loadImage(Images,callback,timeOut) {
     //加载完成图片的计数器
   var  count = 0;
    //全部图片成功的一个标志位
    var success = true;
    //是否加载超时的标志位
    var istimeOut =false;

    var  timeoutId = 0;

    // 对图片数组或对象进行遍历
    for(var key in Images){
        //过滤 prototype上面的属性
        if(!Images.hasOwnProperty(key)){
            continue;
        }

        //获取每隔图片元素
        //
        var item = Images[key];
        if((typeof item === "string")||item){

            count++;
            item.id = '__img__'+key+getId();
            item.img = window[item.id] = new Image();

            doLoad(item);
        }

    }


    if(!count){
        callback(success);
    }else if (timeOut) {
        timeoutId = setTimeout(onTimeOut,timeOut)
    }

    /**
     * 执行加载的函数
     * @param  item 图片元素对象
     */

    function doLoad(item) {
        item.status = 'loading';//状态
        var img = item.img;
        //定义图 加载成功之后的方法
        img.onload = function () {
            success = success & true;
            item.status = 'loaded';
            Done();
        };
        // 图片加载失败之后
        img.onerror = function () {
            success = false;
            item.status = 'error';

            Done();
        };


        /**
         * 每张图片加载完成 的回调函数 清理一些东西
         *
         */
        function Done() {
            img.onerror = img.onload = null;
            try {
                delete  window[item.id];
            } catch (e) {

            }


            if (!--count && !istimeOut) {
                clearTimeout(timeoutId);
                //q清除超时函数
                callback(success);
            }
        }
    }


        function onTimeOut() {
            istimeOut = true;
            callback(false)
        }

}

var __id =0;
function getId() {
    return ++__id;
}



module.exports = loadImage;//暴露模块