var express= require('express');
var app= express();

//相当于spring mvc的controller
app.get('/',function(req,resp){
    console.log("主页 GET 请求");
	resp.send("Hello Express!");
})

//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})


var server=app.listen(8081,function(){
	 var host = server.address().address
      var port = server.address().port
 
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// 运行命令 node express_demo.js 即可查看结果
