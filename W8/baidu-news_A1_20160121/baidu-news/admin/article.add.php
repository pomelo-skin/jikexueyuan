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
                <li><a href="#">发布新闻</a></li>
            </ul>
        </div>
        <div class="content-right fl">
            <h2>发布新闻</h2>
            <div class="article-detail">
                <form action="article.add.handle.php" method="get">
                    <table>
                        <tr>
                            <td width="100px" height="auto">
                                <lable for="title">新闻标题:</lable>
                            </td>
                            <td>
                                <input type="text" name="title" id="title" required="required"/>
                                <span class="red-required">*</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="author">新闻作者:</lable>
                            </td>
                            <td>
                                <input type="text" name="author" id="author" required="required"/>
                                <span class="red-required">*</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="description">简介:</lable>
                            </td>
                            <td>
                                <textarea name="description" id="description" cols="60" rows="5" required="required"></textarea>
                                <span class="red-required">*</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <lable for="content">内容:</lable>
                            </td>
                            <td>
                                <textarea name="content" id="content" cols="60" rows="15" required="required"></textarea>
                                <span class="red-required">*</span>
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