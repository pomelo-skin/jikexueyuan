<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-14
 * Time: PM5:56
 */

require_once '../connect.php';
//读取旧的信息
$id=@$_GET['id'];
$query=@mysqli_query($conn,"select * from recommend where id=$id");
$data=@mysqli_fetch_assoc($query);
//print_r($data);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>发布新闻</title>
    <link href="../css/reset.css" rel="stylesheet"/>
    <link href="../css/mycss.css" rel="stylesheet"/>
</head>
<body>
<div class="wrapper">
    <div class="header">
        <h1>新闻发布系统</h1>
    </div>
    <div class="content-wr">
        <div class="content-left fl">
            <ul>
                <li><a href="article.manage.php">新闻列表</a></li>
                <li><a href="article.add.php">发布新闻</a></li>
            </ul>
        </div>
        <div class="content-right fl">
            <h2>修改新闻</h2>
            <div class="article-detail">
                <form action="article.modify.handle.php" method="get">
                    <input type="hidden" name="id" value="<?php echo $data['id'];?>"/>
                    <table>
                        <tr>
                            <td>
                                <lable for="title">新闻标题:</lable>
                            </td>
                            <td>
                                <input type="text" name="title" id="title" value="<?php echo $data['title']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="author">新闻作者:</lable>
                            </td>
                            <td>
                                <input type="text" name="author" id="author" value="<?php echo $data['author']; ?>"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="description">简介:</lable>
                            </td>
                            <td>
                                <textarea name="description" id="description" cols="60" rows="5"><?php echo $data['description']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="content">内容:</lable>
                            </td>
                            <td>
                                <textarea name="content" id="content" cols="60" rows="15"><?php echo $data['content']; ?></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="img">图片:</lable>
                            </td>
                            <td>
                                <input type="file" name="img" id="img" >
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="reason">热点来源</lable>
                            </td>
                            <td>
                                <select id="reason" name="reason">
                                    <option value=""></option>
                                    <option value="新浪要闻">新浪要闻</option>
                                    <option value="网易头条">网易头条</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="text-align: center;height:60px;">
                                <input type="submit" value="提交" class="sub-btn"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    </div>
    <div class="footer"></div>
</div>
</body>
</html>
