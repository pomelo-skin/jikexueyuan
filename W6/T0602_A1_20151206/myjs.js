/**
 * Created by gang on 2015/12/6.
 */
//点击hao123页面换肤按钮可以切换绿色导航栏背景颜色和“苏宁易购”一行绿色字体颜色，并在下次登入时记录上次保存颜色
//获取导航栏
var banner = document.getElementsByClassName("bannerColor");
var font=document.getElementsByClassName("color");
var i = 0;
window.onload=function(){
    switch (localStorage.theme) {
        case "0":
            one();
            break;
        case "1":
            two();
            break;
        case "2":
            three();
            break;
        default :
            normal();
            break;
    }
}
function changColor() {
    switch (i) {
        case 0:
           one();
            i++;
            localStorage.theme="0";
            break;
        case 1:
          two();
            i++;
            localStorage.theme="1";
            break;
        case 2:
           three();
            i++;
            localStorage.theme="2";
            break;
        default :
            normal();
            i = 0;
            localStorage.theme="normal";
            break;
    }
}
function one(){
    for (var j = 0; j < banner.length; j++) {
        banner[j].style.backgroundColor = "#208C20";
    }
    for(var k=0;k<font.length;k++){
        font[k].style.color="#208C20";
    }
}
function two(){
    for (var j = 0; j < banner.length; j++) {
        banner[j].style.backgroundColor = "#286090";
    }
    for(var k=0;k<font.length;k++){
        font[k].style.color="#286090";
    }
}
function three(){
    for (var j = 0; j < banner.length; j++) {
        banner[j].style.backgroundColor = "#BC3890";
    }
    for(var k=0;k<font.length;k++){
        font[k].style.color="#BC3890";
    }
}
function normal(){
    for (var j = 0; j < banner.length; j++) {
        banner[j].style.backgroundColor = "#0aa770";
    }
    for(var k=0;k<font.length;k++){
        font[k].style.color="#0aa770";
    }
}