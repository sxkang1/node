// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.为服务器实例绑定 request事件，监听客户端请求
server.on('request', function (req, res) { // req 请求对象  res 响应对象
    const url = req.url // 获取请求地址 是从‘/’开始
    const method = req.method // 获取请求类型 get or post

    const str = `请求地址是${url},请求方法${method}`
    console.log(str);

    res.setHeader('Content-Type', 'text/html;charset=utf8') // 解决响应给客户端的中文乱码的问题
    //调用res.end(),想客户端响应一些内容
    res.end(str)
})
// 4.启动服务器
server.listen('8080', function () {
    console.log('server running at http://127.0.0.1:8080');
})