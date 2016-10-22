/**
 * Created by mac on 16/10/22.
 */
'use strict';
//初始化状态
var STATE_INTIAL = 0;
//开始状态
var STATE_START =1;
//停止状态
var STATE_STOP =2;



/**
 * 自己写的一个帧动画控制库
 */


function Animation(){
    this.taskQueue= [];
    this.index = 0;
    this.state = STATE_INTIAL;
}
/**
 *
 * @param imgList 预加载图片列表
 */
Animation.prototype.loadImage = function (imgList) {

};

/**
 *
 * @param ele  动画对象
 * @param positions  背景位置数组
 * @param imgUrl   图片地址
 */
Animation.prototype.changePositions=function(ele,positions,imgUrl){

};

/**
 *
 * @param ele
 * @param imgList  添加一个异步定时任务 通过改变imagesrc 实现帧动画
 */
Animation.prototype.changeSrc = function (ele,imgList) {

};

/**
 *  自定义动画每帧执行
 * @param taskFn
 */
Animation.prototype.enterFrame = function (taskFn) {

};

/**
 *
 * @param callBack 灰调函数
 */

Animation.prototype.callBack = function (callBack) {

};
/**
 * 开始执行任务 异步定时任务执行的间隔
 * @param interval 就是执行任务的间隔
 */
Animation.prototype.start = function (interval) {

};
/**
 * 添加一个同步任务,该任务就是回退到上一个任务中,实现
 * 重复上一个任务的效果,可以用来定义重复的次数
 *
 * @param times
 */
Animation.prototype.repeat = function (times) {

};

/**
 * 添加一个同步任务,相当于repeat()更加友好化,无限循环上次任务
 */
Animation.prototype.repeatForever = function () {

};

/**
 * 设置当前任务之行结束后 到下一个任务开始前的等待时间
 * @param time  等待时长
 */
Animation.prototype.wait = function (time) {

};

/**
 * 暂停当前异步定时任务
 */
Animation.prototype.pause = function () {

};
/**
 * 重新执行上一次暂停的异步任务
 * @param taskFn
 */
Animation.prototype.restart = function (taskFn) {

};

/**
 * 释放资源
 * @param taskFn
 */
Animation.prototype.dispose = function (taskFn) {

};