<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-13
 * Time: PM2:52
 */

require_once '../connect.php';
//数据入库
//对所有信息进行校验，判断数据是否存在并且不为空
//print_r($_GET);

$title= @$_GET['title'];
$author=@$_GET['author'];
$description=@$_GET['description'];
$content=@$_GET['content'];
$img=@$_GET['img'];
$reason=@$_GET['reason'];
$dateline=time();
echo $img;

if(!(isset($title))&&!(empty($title))){
    echo "<script>alert('标题不可为空！');window.location.href='article.add.php';</script>";
}
if(!(isset($author))&&!(empty($author))){
    echo "<script>alert('作者不可为空！');window.location.href='article.add.php';</script>";
}
if(!(isset($description))&&!(empty($description))){
    echo "<script>alert('简介不可为空！');window.location.href='article.add.php';</script>";
}
if(!(isset($content))&&!(empty($content))){
    echo "<script>alert('内容不可为空！');window.location.href='article.add.php';</script>";
}

//将数据插入到数据库中
$insertsql="insert into recommend(title,author,description,content,img,reason,dateline) values('$title','$author','$description','$content','$img','$reason','$dateline')";
//echo $insertsql;
$result=mysqli_query($conn,$insertsql);
if($result){
    echo "<script>alert('发布成功！');window.location.href='article.add.php';</script>";
}else{
    echo "<script>alert('发布失败！');window.location.href='article.add.php';</script>";
}