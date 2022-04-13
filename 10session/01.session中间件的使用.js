
/**
 * session 局限性：
 *      session 认证机制需要配合cookie才能实现。由于cookie默认不支持跨域访问，
 * 所以涉及到前端跨域请求后，需要做很多额外的配置，才能实现跨域session认证
 *  ----------- 以下 demo 也没实现  -------------
*/
const express = require('express')
const router = require('./route')
const app = express()

// 配置 session 中间件
const session = require('express-session')
app.use(
    session({
        secret: 'dsddsaf', // 随便写个字符串就行  加密用的
        resave: false, // 固定写法
        saveUninitialized: true // 固定写法
    })
)

// ***********标准格式  
app.use(express.json()) // 处理json格式数据
app.use(express.urlencoded({ extended: false })) // 处理 urlencoded数据

const cors = require('cors') // 安装中间件解决跨域问题 一定要在路由之前
app.use(cors())

app.use('/api', router)

// 启动服务
app.listen(8080, () => {
    console.log('web server http://127.0.0.1:8080');
})
