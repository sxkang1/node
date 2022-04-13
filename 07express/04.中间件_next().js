/**
 * 1.定义全局中间件 
 *      app.use((req,res,next)=>{next()})
 * 2.局部中间件
 *      不使用app.use()定义的中间件，叫做局部生效的中间件
 * 3.中间件的作用：
 *  客户端请求时候，先触发中间件
 *  多个中间件共享一份req 和 res
 *  可以在上游中间件中，统一为req res对象添加自定义的属性和方法，供下游中间件或路由使用
 * 
 *  4.中间件注意事项：
 *      一定要在路由之前注册中间件
 *      一定要调用next()
 *      调用完next()之后 不可以再写任何代码
 *      客户端发送过来请求可以调用多个中间件
 *      连续调用多个中间件时，多个中间件共用一个 req res
 * 
 * 5.中间件分类：
 *  应用级别中间件 例如.app.sue() app.get  绑定在app
 *  路由级别中间件 绑定在router上
 *  错误级别中间件 定义全局错误级别中间件  捕获异常 返回给客户端
 * 
 * 6. 内置中间件 ：
 *  express.static()  快速托管静态资源
 *  express.json() 解析json格式的请求体数据 4.16.0+
 *  express.urlencoded 解析urlencoded 请求体数据 4.16.0+
 * 
 * 7. 第三方中间件
 *  4.16.0版本之前是使用第三方的 之后就有内置的了
 * 
 * 8. 自定义中间件 监听客户端发送过来的data data不是一次就能发送完成 比较大的数据 会多次发送data数据 需要拼接
 *  req.on('data',(chunk)=>{
 *       cosnt str = ''
 *       str += chunk
 *  })
 *  req.on('end',()=>{
 *      console.log(str)
 *  })
*/
const express = require('express')

const app = express()

app.use(express.json()) // 获取客户端json请求体 定义全局中间件
// 解析表单中的url-encoded 格式的数据 固定写法 带参数
app.use(express.urlencoded({ extended: false }))

// 定义全局中间件 所有中间件公用一个res req 可以为其添加属性 自定义方法
app.use((req, res, next) => {
    console.log('我是全局中间件 No1.');
    next() // 中间件必须调用 next 函数
})
// 定义局部中间件
function mw(req, res, next) {
    console.log('我是局部中间件，谁调用我，给谁用')
    next()
}


app.get('/user', (req, res) => {

    throw new Error('人为故意抛出异常，测试 --错误级别中间件')

    res.send({
        state: '200'
    })
})
// 测试内置中间件
app.post('/user', (req, res) => {
    // 接收客户端发送过来的数据
    console.log(req.body); // 需要配置 全局中间件JSON  // app.use(express.json())
    res.send({
        state: '200'
    })
})

app.use((err, req, res, next) => { // 错误级别的中间件有执行顺序的问题 必须放在客户端请求的后面
    res.send('ERROR:' + err.message)
    // next()
})

app.get('/login', mw, (req, res) => { //局部中间件
    res.send({
        state: '200'
    })
})

app.listen(8080, () => {
    console.log('http://127.0.0.1:8080');
})