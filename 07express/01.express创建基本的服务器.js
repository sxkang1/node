// 导入 express
const express = require('express')
// 创建 web 服务器
const app = express()

// 监听客户端 GET 或者 POST 请求，并向客户端响应具体内容
app.get('/user', (req, res) => {
    res.send({ name: 'zhangsan', age: 18, gender: '男' })
})
app.get('/', (req, res) => { // 通过req.query 获取url的参数
    res.send({ name: req.query.name, age: req.query.age, gender: '男' })
})
app.get('/user/:id/:username', (req, res) => { // 通过req.params.id 获取url动态的参数 默认是空对象
    res.send(req.params) // {"id":"123","username":"456"}
})
app.post('/user', (req, res) => {
    res.send({ name: 'lisi', age: 20, gender: '男' }) // 返回json对象
})

app.listen(8080, () => {
    console.log('web server. http://127.0.0.1:8080');
})