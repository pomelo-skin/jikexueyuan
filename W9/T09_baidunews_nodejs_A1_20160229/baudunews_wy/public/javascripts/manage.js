$(document).ready(function() {

        //点击新闻列表按钮切换页面
        $("#news_list").click(function() {
            $('.cur').removeClass('cur');
            $('#news_list').addClass('cur');
             
            $('#show-wrap').show();
            $('#r_top').show();
            $('#addNew').hide();
            location.reload();
        });

        //点击发布新闻按钮切换页面
        
        $("#news_add").click(function() {
            $('.cur').removeClass('cur');
            $('#news_add').addClass('cur');

            $('#show-wrap').hide();
            $('#r_top').hide();
            $('#modify-wrap').hide();
            $('#addNew').show();
        });

    //点击修改新闻页面取消按钮
    $("#cancel").click(function(){
       window.location="http://127.0.0.1:3000/manage.html";
    });

    //点击修改新闻页面修改按钮
    $('#modify').click(function () {
        $.ajax({
            method:"post",
            url:"http://127.0.0.1:3000/server/modify",
            dataType:"json",
            data:{
                newsid:$('#newsid1').val(),
                newstitle:$("#newstitle1").val(),
                newsimg:$("#newsimg1").val(),
                newscontent:$("#newscontent1").val(),
                lanmu:$("#lanmu1").val()
            },
            success:function(){
                alert("新闻修改成功！");
            },
            error:function(err){
                alert(err);
            }
        })
    });
        //ajax

        //获取新闻列表
        $.get("http://127.0.0.1:3000/server/list", function(data) {

            for (var i = 0; i < data.length; i++) {
                var news="<tr><td>"+data[i].newsid+"</td><td>"
                +data[i].lanmu+"</td><td>"
                +data[i].newstitle+"</td><td>"
                +data[i].newsimg+"</td><td>"
                +data[i].newscontent+"</td><td>"
                +data[i].addtime+"</td>"
                +"<td class='del'><a id='haha' href='javascript:doDel("+data[i].newsid+");'>删除</a>"
                +"<a href='javascript:modify("+data[i].newsid+");'>修改</a></td></tr>";


                $("#show-wrap table").append(news);
            }
        });

// 添加新闻事件
$("#add").click(function(){

    $.ajax({
        method:"post",
        url:"http://127.0.0.1:3000/server/add",
        dataType:"json",
        data:{
            newstitle:$("#newstitle").val(),
            newsimg:$("#newsimg").val(),
            newscontent:$("#newscontent").val(),
            lanmu:$("#lanmu").val()
        },
        success:function(){
            alert("新闻发布成功！");
            },
        error:function(err){
            alert(err);
        }
    })
});

});


//删除事件
function doDel(id){
    $.ajax({
        method:"post",
        url:"http://127.0.0.1:3000/server/del",
        dataType:'json',
        data:{
            newsid:id
        },
        success:function(){
            alert('新闻删除成功！');
            location.reload();
        },
        error:function(err){
            alert(err);
        }

    })

}




//修改新闻
function modify(id){
   
    $.ajax({
        method:'post',
        url:'http://127.0.0.1:3000/server/modifylist',
        dataType:'json',
        data:{
            newsid:id
        },
        success:function(data){
            $('#show-wrap').hide();
            $('#r_top').hide();
            $('#modify-wrap').show();

            console.log(data[0]);
            $('#newsid1').val(data[0].newsid);
           $("#newstitle1").val(data[0].newstitle);
           $("#newsimg1").val(data[0].newsimg);
           $("#newscontent1").val(data[0].newscontent);
           $("#addtime1").val(data[0].addtime);
           $("#lanmu1").val(data[0].lanmu);
        },
        error:function(err){
            alert(err);
        }
    })
}
