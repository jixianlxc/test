var http = require('http');
var server = http.createServer();
var fs = require('fs');
server.on('request',function(req,res){
    console.log('已收到客户端请求,路径为'+ req.url);
    switch(req.url){ 

    case '/index':    fs.readFile('./vue_lesson/index2.html',function(err,data){
        if(err){
            res.setHeader('Content-Type','text/plain;charset=utf-8');
            res.end('文件读取失败');
        }else{
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(data);
        }
    })
    break;


    case '/register':res.end('register')
    break;
    }

})

server.listen(3000,function(){
    console.log('服务器启动成功，通过localhost:5000访问')
})
