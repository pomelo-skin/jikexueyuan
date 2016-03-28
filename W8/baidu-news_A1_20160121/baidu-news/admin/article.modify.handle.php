<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-14
 * Time: PM6:13
 */
//文章修改处理程序
require_once '../connect.php';

$id=@$_GET['id'];
$title= @$_GET['title'];
$author=@$_GET['author'];
$description=@$_GET['description'];
$content=@$_GET['content'];
$img=@$_GET['img'];
$reason=@$_GET['reason'];
$dateline=time();

$updatesql="update recommend set id='$id',title='$title',author='$author',description='$description',content='$content',img='$img',reason='$reason',dateline='$dateline' where id=$id";
$query=mysqli_query($conn,$updatesql);
//echo $updatesql;
if($query){
    echo "<script>alert('文章修改成功！');window.location.href='article.manage.php';</script>";
}else{
    echo "<script>alert('文章修改失败！');window.location.href='article.manage.php';</script>";
}