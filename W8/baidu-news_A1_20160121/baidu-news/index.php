<?php

require_once 'connect.php';

$searchSql = "select * from recommend";
$query = mysqli_query($conn, $searchSql);

if ($query && mysqli_num_rows($query)) {
    //循环输出所有数据
    while ($row = mysqli_fetch_assoc($query)) {
        $data[] = $row;
    }
//    print_r($data);
} else {
    $data = [];
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="Viewport" content="width=320,minimum-scale=1.0,maximum-scale=1.0">
    <title>百度新闻</title>
    <link href="css/reset.css" rel="stylesheet"/>
    <link href="css/main.css" rel="stylesheet"/>
</head>
<body>
<div class="news" id="wrapper">
    <div id="index_view" style="display: block;">

        <div id="index_view_appdownload"></div>

        <header>
            <div class="ui-new-toolbar">
                <div class="ui-new-toolbar-l">
                    <div data-href="http://m.baidu.com/?from=1000376a" class="ui-new-toolbar-btn btn-baidu fl"></div>
                    <div class="ui-new-toolbar-btn btn-userhome fl"></div>
                </div>
                <div class="ui-new-toolbar-r">
                    <div class="ui-new-toolbar-btn btn-search fl"></div>
                    <div class="ui-new-toolbar-btn btn-subscribe fl"></div>
                </div>
            </div>
        </header>

        <div id="index_view_content">
            <div id="index_view_navigator">
                <div class="divider"></div>
                <div class="content">
                    <table>
                        <tbody>
                        <tr>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/chosen:%E6%8E%A8%E8%8D%90" class="cur">推荐</span>
                                </div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/news:478:%E7%99%BE%E5%AE%B6">百家</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/local:0:%E5%8C%97%E4%BA%AC">本地</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/image:%E5%9B%BE%E7%89%87">图片</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E5%A8%B1%E4%B9%90">娱乐</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E7%A4%BE%E4%BC%9A">社会</span></div>
                            </td>
                        </tr>
                        <tr class="last-shown-line">
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E5%86%9B%E4%BA%8B">军事</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E7%A7%91%E6%8A%80">科技</span></div>
                            </td>
                            <td colspan="2">
                                <div><b></b><span data-href="#index/info:%E4%BA%92%E8%81%94%E7%BD%91">互联网</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E5%A5%B3%E4%BA%BA">女人</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%90%9E%E7%AC%91">搞笑</span>
                                    <div class="more">更多
                                        <div class="down-triangle"></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr style="display: none;">
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E7%94%9F%E6%B4%BB">生活</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E5%9B%BD%E9%99%85">国际</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E5%9B%BD%E5%86%85">国内</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E4%BD%93%E8%82%B2">体育</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%B1%BD%E8%BD%A6">汽车</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E8%B4%A2%E7%BB%8F">财经</span></div>
                            </td>
                        </tr>
                        <tr style="display: none;">
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%88%BF%E4%BA%A7">房产</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%97%B6%E5%B0%9A">时尚</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%95%99%E8%82%B2">教育</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%B8%B8%E6%88%8F">游戏</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E6%97%85%E6%B8%B8">旅游</span></div>
                            </td>
                            <td colspan="1">
                                <div><b></b><span data-href="#index/info:%E4%BA%BA%E6%96%87">人文</span></div>
                            </td>
                        </tr>
                        <tr style="display: none;">
                            <td colspan="2">
                                <div><b></b><span data-href="#index/info:%E5%88%9B%E6%84%8F">创意</span></div>
                            </td>
                            <td colspan="2">
                                <div><b></b><span data-href="#index/tag:%E4%BA%92%E8%81%94%E7%BD%91%2B">互联网+</span>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="divider tail" style="display: none;"></div>
                <div class="footer" style="display: none;">
                    <div class="btn-group">
                        <div class="reporter-rank">记者榜</div>
                        <div class="media-rank"><b></b>媒体榜</div>
                        <!-- <div class="add-subscribe">添加订阅</div> -->
                        <div class="manage-subscribe"><b></b>删除及排序</div>
                    </div>
                    <div class="less">收起
                        <div class="up-triangle"></div>
                    </div>
                </div>
            </div>
            <div id="index_view_topad"></div>
            <div id="index_view_sections">
                <div class="index-view-subpage index-view-subpage-chosen" style="">

                    <div class="index-view-subpage-feed">
                        <div class="index-list">

                            <?php
                            if (!empty($data)) {
                                foreach ($data as $value) {
                                    ?>
                                    <div class="index-list-item">


                                        <div class="index-list-main   showleft   ">


                                            <div class="index-list-image">
                                                <i class="ivideoplay"></i>
                                                <img
                                                    src="img/db-img/<?php echo $value['img']; ?>">
                                            </div>


                                            <div class="index-list-main-text">
                                                <div class="index-list-main-title"><?php echo $value['title']; ?></div>

                                                <div
                                                    class="index-list-main-abs"><?php echo $value['description']; ?></div>

                                            </div>

                                            <div class="index-list-bottom">
                                                <div class="index-list-main-time">
                                                    <b class="index-list-main-site">搜狐娱乐</b>


                                                    <b class="tip-time">
                                                        1分钟前
                                                    </b>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <?php
                                }
                            }

                            ?>

                        </div>
                        <div class="index-list">
                            百家
                        </div>
                        <div class="ui-refresh-wrapper">
                            <div class="ui-refresh">点击加载更多</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="index_view_lottery"></div>

        <div id="index_view_footer">
            <div class="ui-footer">
                <div class="item-wrapper">
                    <div class="item feedback">意见反馈</div>
                </div>
                <div class="item-wrapper">
                    <div class="item app-recommend">应用推荐</div>
                </div>
                <div class="item-wrapper">
                    <div class="item app-download">客户端</div>
                </div>
            </div>
        </div>

        <div class="ui-gps" style="display: none;"></div>
        <div class="index-ad-hidden" style="display: none;"></div>
    </div>
</div>
</body>
</html>