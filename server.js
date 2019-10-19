var express = require('express')
var socket = require('socket.io')
var http = require('http')

var app = express()
//用http创建server
var server = http.createServer(app)
//创建服务端socket
var io = socket(server)
io.on('connect',function(socket){
    console.log('有客户端连接上来')
})
    


app.use(express.static('public'))

app.listen('8000',function(){
console.log("server is running on 8000");

})