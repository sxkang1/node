const express = require('express')
const router = require('./route') // 引入写好的路由配置文件

const app = express()

app.use('/api', router) // 挂载到use，需要统一添加访问路径的话，前面可以拼接'/api'

app.listen(8080, () => {
    console.log('Express server running at http://127.0.0.1:8080');
})