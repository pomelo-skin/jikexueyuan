//    构造一个函数，传入三个值，依据用户选择的操作符做相应计算，结果显示在最后一个输入框中
function getresult() {
//        获取输入框的值
    numa = document.getElementById("numa").value - 0;
    numb = document.getElementById("numb").value - 0;
    oper = document.getElementById("oper").value;
    var result = document.getElementById("result");
    //调用calculate函数，传入参数numa，numb，oper
    result.value=calculate(numa,numb,oper);
}
//构造一个函数，传入三个值，依据用户选择的操作符做相应计算
function calculate(a,b,oper){
    var sum;
    //        判断输入的值是否为数字
    if (!isNaN(a) && !isNaN(b)) {
        //        判断运算符
        switch (oper) {
            case "+":
                sum = a + b;
                break;
            case "-":
                sum = a - b;
                break;
            case "*":
                sum = a * b;
                break;
            case "/":
                if (b != 0) {
                    sum = a / b;
                } else {
                    sum=null;
                    alert("除数不允许为0！");
                }
                break;
        }
    } else {
        alert("请输入数字！")
    }
    return sum;
}