var express= require('express');
var app= express();

//相当于spring mvc的controller
app.get('/',function(req,resp){
	resp.send("Hello Express!");
})

//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})


var server=app.listen(8081,function(){
	 var host = server.address().address
      var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// 运行命令 node express_demo.js 可查看结果