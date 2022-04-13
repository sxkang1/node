const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer() //创建web服务器实例
server.on('request', function (req, res) { // 为服务器实例绑定request事件，req监听客户端请求 res响应客户端
    let url = req.url // 返回的是url从'/'开始 例如http://127.0.0.1/inde.html  返回/index.html
    let fpath = ''
    if (url === '/') { // 优化url 根据请求url 重新定义访问路径
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, '/clock', url)
    }
    fs.readFile(fpath, 'utf8', function (err, dataStr) { // 读取本地文件
        res.hasHeader('Content-Type', 'text/html;charset:utf8')
        if (err) return res.end('404 not found .')
        res.end(dataStr) // 响应客户端请求
    })

})
server.listen('8080', function () {
    console.log('web server http://127.0.0.1:8080');
})