var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json({limit: '1mb'})); //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({ //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));


//链接数据库

var connection = mysql.createConnection({
    host: 'localhost',
    //host:'115.29.110.121',
    user: 'root',
    password: '',
    database: 'baidu'
});

connection.connect();

//获取新闻列表
app.get('/server/list', function (req, res) {
    connection.query('select * from news', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
        console.log('news:', rows);
    });
});
//推荐列表
app.get('/server/tuijian', function (req, res) {
    connection.query('select * from news where lanmu="tuijian"', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
        console.log('news:', rows);
    });
});

//百家列表
app.get('/server/baijia', function (req, res) {
    // res.send('Hello World!');
    connection.query('select * from news where lanmu = "baijia"', function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
        console.log('news:', rows);
    });
});

//新增新闻
app.post('/server/add', function (req, res) {
    //获取当前时间
    var nowTime = new Date();
    var month = parseInt(nowTime.getMonth()) + 1;
    var addtime = nowTime.getFullYear() + "-" + month + "-" + nowTime.getDate();

    //获取请求体中数据
    var data = req.body;
    var sql = "INSERT INTO news SET newstitle='" + data.newstitle + "', newsimg='" + data.newsimg + "',newscontent='" + data.newscontent + "',addtime='" + addtime + "',lanmu='" + data.lanmu + "'";
    connection.query(sql, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.send(rows);
        console.log("插入成功");
    });
});


//删除新闻
app.post('/server/del', function (req, res) {
    var id = req.body.newsid;
    var sql = "delete from news where newsid='" + id + "'";
    console.log(id);
    connection.query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        res.send(rows);
        console.log("删除成功！");

    })
});

//修改新闻
//1.获取需要修改新闻信息
app.post('/server/modifylist', function (req, res) {
    var id = req.body.newsid;
    var sql = "select * from news where newsid='" + id + "'";
    console.log(id);
    connection.query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        res.send(rows);
        console.log("抓取新闻成功！");

    })
});
//2.修改数据库中数据
app.post('/server/modify', function (req, res) {
    console.log('开始修改新闻！');
    //var id=req.body.newsid;
    var data = req.body;
    //获取当前时间
    var nowTime = new Date();
    var month = parseInt(nowTime.getMonth()) + 1;
    var modifytime = nowTime.getFullYear() + "-" + month + "-" + nowTime.getDate();

    var sql = "update news set newstitle='" + data.newstitle + "',newsimg='" + data.newsimg + "',newscontent='" + data.newscontent + "',addtime='" + modifytime + "',lanmu='" + data.lanmu + "' where newsid='" + data.newsid + "'";
    console.log(sql);
    connection.query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        res.send(rows);
        console.log("修改新闻成功！");

    })
});
// connection.end();


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});