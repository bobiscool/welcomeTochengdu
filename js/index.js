/**
 * Created by mac on 16/10/22.
 */

var O_box =document.getElementById('box');
var O_p =document.getElementsByTagName('p')[0];
console.log($(O_box).width());
O_p.innerHTML = $(window).width();