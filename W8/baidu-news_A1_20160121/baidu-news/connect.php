<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-13
 * Time: AM9:02
 */
//header("Content-type:text/html,charset=utf-8");
//MYSQL连接初始化程序

require_once 'init.php';
//三步走
//1.连库
$conn=mysqli_connect(HOST,USERNAME,PASSWORD);
if(!$conn){
    echo '数据库连接失败'.mysqli_error($conn);
}else{
//    echo '数据库连接成功';
}
//2.择库
if(!mysqli_select_db($conn,'news')){
    echo 'error:'.mysqli_error($conn);
}
//3.设置字符集
if(!(mysqli_query($conn,'set names utf8'))){
    echo 'error:'.mysqli_error($conn);
}


?>

</body>
</html>
