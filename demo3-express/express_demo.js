var express= require('express');
var app= express();

//�൱��spring mvc��controller
app.get('/',function(req,resp){
	resp.send("Hello Express!");
})

//  POST ����
app.post('/', function (req, res) {
   console.log("��ҳ POST ����");
   res.send('Hello POST');
})


var server=app.listen(8081,function(){
	 var host = server.address().address
      var port = server.address().port
 
  console.log("Ӧ��ʵ�������ʵ�ַΪ http://%s:%s", host, port)
})

// �������� node express_demo.js �ɲ鿴���