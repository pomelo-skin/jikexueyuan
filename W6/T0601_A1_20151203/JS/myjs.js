/**
 * Created by H2603013 on 2015/11/25.
 */

//var keyboard = document.getElementById("keyboard");//获取键盘ul节点
var shownum = document.getElementById("showscreen");
shownum.value=0;
/*获取显示框*/
var page = document.getElementsByClassName("page");
/*定义结果*/
var result = 0;
//定义临时变量存储数值，及输入数字1、数字2、运算符
var temp = "";
var num1 = "";
var num2 = "";
var oper = "";
//定义变量C判断是不是连续运算
var c = 0;
//定义变量i，改变颜色参数
var i = 0;

//构造函数传值
function passValue(a) {
    temp += a;
    shownum.value = temp-0;
}
//运算符处理函数,将运算符取出，同时当用户按下运算符时清空输入框内容
function sign(ch) {
    if (c == 0) {
        oper = ch;
        num1 = temp - 0;
        //将输入框内容清空
        shownum.value = "";
        temp = "";
        c++;
    } else {   /*连续运算情况*/
        oper = ch;
        shownum.value = "";
        temp = "";
    }
}

//等号计算函数
function d() {
    num2 = temp - 0;
    //将temp清空，以免影响下次运算
    temp = "";
    result = calculate(num1, num2, oper);
    shownum.value = result;
    //释放num2的值
    num2 = "";
    //实现连续运算，如果result不为null，则将result付给num1
    if(result!=null){
        num1 = result - 0;
    }

}
//计算函数
function calculate(num1, num2, oper) {
    switch (oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
            } else {
                result = null;
                alert("被除数不能为0！")
            }
            break;
        case 'sin':
            result = Math.sin(num1);
            break;
        case 'cos':
            result = Math.cos(num1);
            break;
        default :
            result = 0;
            break;
    }
    return result;
}

//清除函数
function clearC() {
    shownum.value = 0;
    num1 = "";
    num2 = "";
    temp = "";
    oper = "";
    c = 0;
}

//改变颜色
function changecolor() {
    switch (i) {
        case 0:
            page[0].style.backgroundColor = "#208C20";
            i++;
            break;
        case 1:
            page[0].style.backgroundColor = "#f4c000";
            i++;
            break;
        case 2:
            page[0].style.backgroundColor = "pink";
            i++;
            break;
        default :
            page[0].style.backgroundColor = "#286090";
            i = 0;
            break;
    }


}