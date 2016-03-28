<?php
/**
 * Created by PhpStorm.
 * User: administrator
 * Date: 16-1-15
 * Time: AM9:40
 */

require_once '../connect.php';

$sql="select * from recommend order by dateline desc";
$query=mysqli_query($conn,$sql);

if($query&&mysqli_num_rows($query)){
    //循环输出所有数据
    while($row=mysqli_fetch_assoc($query)){
        $data[]=$row;
    }
//    print_r($data);
}else{
    $data=[];
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>发布新闻</title>
    <link href="../css/reset.css" rel="stylesheet"/>
    <link href="../css/mycss.css" rel="stylesheet"/>
    <style type="text/css">
        table{
            text-align: center;
        }
        table td{
            border: 1px solid #888;
            height:30px;
        }
        table a:hover{
            color: #f40;
            text-decoration: underline;
        }
        .content-wr .content-right h2{

        }
    </style>
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
            <div class="article-detail">
                <form action="article.add.handle.php" method="get">
                    <table style="white-space: nowrap;">
                        <tr>
                            <td colspan="3" style="text-align: center;font-size: 20px;font-weight: 700;border: none;">新闻列表</td>
                        </tr>
                        <tbody>
                        <tr>
                            <td width="60">编号</td>
                            <td width="500">标题</td>
                            <td width="80">操作</td>
                        </tr>
                        <?php if(!empty($data)){
                            foreach($data as $value){
                                ?>
                                <tr>
                                    <td>&nbsp;<?php echo $value['id'] ?></td>
                                    <td>&nbsp;<?php echo $value['title'] ?></td>
                                    <td>&nbsp;
                                        <a href="article.del.handle.php?id=<?php echo $value['id']; ?>">删除</a>
                                           <a href="article.modify.php?id=<?php echo $value['id']; ?>" >修改</a>
                                    </td>
                                </tr>
                        <?php
                        }
                        } ?>

                        <tr>
                            <td colspan="3" style="text-align: center;height:60px;">
                                <input type="submit" value="提交" class="sub-btn"/>
                            </td>
                        </tr>
                        </tbody>

                    </table>
                </form>
            </div>
        </div>
    </div>
    <div class="footer"></div>
</div>
</body>
</html>
