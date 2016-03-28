/**
 * Created by Administrator on 2015/11/23.
 */
function toGrade (){
    var strScore=document.getElementById("score");
    var answer=document.getElementById("answer");
    var intScore=strScore.value;
//            console.warn(intScore);
//            判断用户是否输入
    if(intScore){
//                判断输入是否为数字,并且是数值在0到100
        if(!isNaN(intScore)&&intScore>=0&&intScore<=100){
            var grade=parseInt(intScore/10);
            switch (grade){
                case 10:
                    answer.innerHTML="恭喜！您的成绩等级为优等生！再接再厉!";
                    break;
                case 9:
                    answer.innerHTML="恭喜！您的成绩等级为1等生！再接再厉！";
                    break;
                case 8:
                    answer.innerHTML="恭喜！您的成绩等级为2等生！再接再厉！";
                    break;
                case 7:
                    answer.innerHTML="恭喜！您的成绩等级为3等生！再接再厉！";
                    break;
                case 6:
                    answer.innerHTML="您的成绩等级为4等生，要好好加油啦！";
                    break;
                default :
                    answer.innerHTML="您的成绩等级为5等生，要加倍努力哦！";
                    break;
            }
        }else {
            answer.innerHTML="数字输入不合法！请重新输入！";
        }
    }else{
        answer.innerHTML="请输入内容！";
    }
}
