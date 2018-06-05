var express= require('express');
var http = require('http');
var url = require('url');
var util = require('util');
//1 引入外部依赖
const superagent = require('superagent');
const cheerio = require('cheerio');

var request = require('request');
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

app.get('/spider', function (req, res) {
   console.log("/spider GET 请求");
   res.send('抓取腾讯新闻');
   //res.writeHead(200, {'Content-Type': 'text/plain'});
   //res.end(util.inspect(url.parse("https://news.qq.com/a/20180604/034399.htm", true)));

   const reptileUrl = "http://36kr.com/p/5137298.html";

    //发起请求
   superagent.get(reptileUrl)
   .set({"content-type":"text/html;charset=GB2312","accept-language": "zh-CN,zh;q=0.9,en;q=0.8","accept-encoding": "gzip, deflate, br","accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"})
   .end(function (err, res) {
       // 抛错拦截
        if(err){
            console.log(err);
        }
       /**
          * res.text 包含未解析前的响应内容
          * 我们通过cheerio的load方法解析整个文档，就是html页面所有内容，可以通过console.log($.html());在控制台查看
          */
          let $ = cheerio.load(res.text);
          console.log(unescape($.html().replace(/\\u/g, '%u')));
   });

})

app.get('/spider2', function (req, res) {
   console.log("/spider2 GET 请求");
   res.send('抓取腾讯新闻');
   //res.writeHead(200, {'Content-Type': 'text/plain'});
   //res.end(util.inspect(url.parse("https://news.qq.com/a/20180604/034399.htm", true)));

   const reptileUrl = "http://36kr.com/p/5137298.html";
   var options = {
     url: reptileUrl,
     headers: {
     "content-type":"text/html; charset=GB2312",
     "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
     "accept-encoding": "gzip, deflate, br",
     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
     //,"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36"
     }
   };

   function callback(error, response, body) {
     if (!error && response.statusCode == 200) {
              $ = cheerio.load(body);
               console.log($.html());
            }
   }

    //发起请求
    request(options, callback);



})


var server=app.listen(8081,function(){
	 var host = server.address().address
      var port = server.address().port
 
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// 运行命令 node express_demo.js 即可查看结果
