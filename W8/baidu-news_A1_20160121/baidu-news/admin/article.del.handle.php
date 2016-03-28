<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-15
 * Time: AM8:44
 */
//删除

require_once '../connect.php';

$id=@$_GET['id'];

$delsql="delete from news where id=$id";
$query=mysqli_query($conn,$delsql);
//echo $delsql;

if($query){
    echo "<script>alert('新闻删除成功！');window.location.href='article.manage.php';</script>";
}else{
    echo "<script>alert('新闻删除失败！');window.location.href='article.manage.php';</script>";
}